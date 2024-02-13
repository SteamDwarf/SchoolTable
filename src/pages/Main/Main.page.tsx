import { StudentsTable } from "components/StudentsTable/StudentsTable";
import { useGetLessonsQuery } from "entities/Lesson";
import { useGetStudentsQuery } from "entities/Student";
import styles from './Main.module.css';
import { Loader } from "components/Loader";
import { Error } from "components/Error";
import { toCustomError } from "shared/helpers";

export const MainPage = () => {
    const {data: students, isLoading: studentsIsLoading, error: studentsError} = useGetStudentsQuery();
    const {data: lessons, isLoading: lessonsIsLoading, error: lessonsError} = useGetLessonsQuery();

    console.log(studentsError)
    console.log(lessonsError)

    const renderPage = () => {
        const error = toCustomError(studentsError || lessonsError);

        if(error) {
            return <Error errorCode={error.status} errorMessage={error.message}/>
        }

        if(studentsIsLoading || lessonsIsLoading) {
            return <Loader size='big' text='Подождите, данные загружаются...'/>
        }

        if(students && lessons) {
            return <StudentsTable students={students.Items} lessons={lessons.Items}/>
        }
        
    }

    return (
        <div className={styles.main}>
            {renderPage()}
        </div>
    );
}