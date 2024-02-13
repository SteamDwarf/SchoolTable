import { TableCell } from "@mui/material";
import { Loader } from "components/Loader/Loader";
import { useSetAbsenceMutation, useUnSetAbsenceMutation } from "entities/LessonVisit";
import { FC, PropsWithChildren } from "react";

interface ILessonBtn extends PropsWithChildren {
    studentId: number,
    columnId: number,
    isLoading: boolean
}

export const LessonBtn:FC<ILessonBtn> = ({children, studentId, columnId, isLoading}) => {
    const [setAbsence, {isLoading: setIsLoading}] =  useSetAbsenceMutation();
    const [unsetAbsence, {isLoading: unsetIsLoading}] = useUnSetAbsenceMutation();

    const onClick = () => {
        if(children === 'Н') {
            unsetAbsence({SchoolboyId: studentId, ColumnId: columnId})
        } else {
            setAbsence({SchoolboyId: studentId, ColumnId: columnId});
        }
    }


    if(setIsLoading || unsetIsLoading || isLoading) {
        return <TableCell> <Loader /> </TableCell>
    }

    return(
        <TableCell onClick={onClick}>{children}</TableCell>
    );
}
    