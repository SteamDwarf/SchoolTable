import { FC } from "react"
import styles from './Error.module.css';

interface IError {
    errorCode?: string
    errorMessage?: string
}

export const Error:FC<IError> = ({errorCode='500', errorMessage='Ошибка'}) => {
    return(
        <h1 className={styles.error}>{errorCode}:{errorMessage}</h1>
    )
}