import { Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import { StudentLessons } from "components/StudentLessons";
import { Lesson } from "entities/Lesson";
import { Student } from "entities/Student/Student";
import { FC, useEffect, useState } from "react";
import styles from './StudentsTable.module.css';

interface IStudentTable {
    students: Student[],
    lessons: Lesson[]
}

export const StudentsTable:FC<IStudentTable> = ({students, lessons}) => {
    const [rowsPerPage, setRowsPerPage] = useState(25);
    const [page, setPage] = useState(0);
    const [visibleStudents, setVisibleStudents] = useState<Student[]>([])

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    }

    const updateVisibleStudents = () => {
        const splitedStudents = [];

        for(let i = 0; i < students.length; i += rowsPerPage) {
            splitedStudents.push(students.slice(i, i + rowsPerPage))
        }

        setVisibleStudents(splitedStudents[page]);
    }

    useEffect(updateVisibleStudents, [students, rowsPerPage, page])

    console.log(visibleStudents);

    return (
        <TableContainer className={styles.tableContainer}>
            <Table  className={styles.studentsTable} size="small">
                <TableHead className={styles.header}>
                    <TableRow>
                        <TableCell key="id">№</TableCell>
                        <TableCell key="student">Ученик</TableCell>
                        {lessons.map(lesson => <TableCell key={lesson.Id}>{lesson.Title}</TableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {visibleStudents.map(student => (
                        <TableRow className={styles.row} key={student.Id}>
                            <TableCell>{student.Id}</TableCell>
                            <TableCell>{student.FirstName} {student.SecondName} {student.LastName}</TableCell>
                            <StudentLessons lessons={lessons} studentId={student.Id}/>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <TablePagination 
                component='div'
                rowsPerPageOptions={[3, 5, 10, 25]}
                count={students.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onRowsPerPageChange={handleChangeRowsPerPage}
                onPageChange={handleChangePage}

            />
        </TableContainer>
    );
}