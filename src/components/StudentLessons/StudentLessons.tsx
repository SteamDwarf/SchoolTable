import { LessonBtn } from "components/LessonBtn";
import { Lesson } from "entities/Lesson";
import { useGetLessonsVisitsQuery } from "entities/LessonVisit";
import { FC } from "react";
import styles from './StudentLessons.module.css';
import { toCustomError } from "shared/helpers";

interface IStudentLessons {
    studentId: number,
    lessons: Lesson[]
}

export const StudentLessons:FC<IStudentLessons> = ({studentId, lessons}) => {
    const {data: lessonsVisit, isLoading, isError, error} = useGetLessonsVisitsQuery(studentId);

    if(isError) {
        const err = toCustomError(error);

        return (
            <>
                {lessons.map((lesson) => {
                    return (
                        <td key={`${lesson.Id}:${studentId}`} className={styles.td}>
                            <span className={styles.error}>Error</span>
                            <span className={styles.tooltip}>{err?.message}</span>
                        </td>
                    )
                })}
            </>
        )
    }

    return(
        <>
            {lessons.map(lesson => {
                const lessonVisit = lessonsVisit?.Items.find(lv => lv.ColumnId === lesson.Id)
                return <LessonBtn 
                    isLoading={isLoading}
                    key={`${lesson.Id}:${studentId}`} 
                    studentId={studentId} 
                    columnId={lesson.Id}
                >
                    {lessonVisit?.Title || ""}
                </LessonBtn>
            })}
        </>
    );
}