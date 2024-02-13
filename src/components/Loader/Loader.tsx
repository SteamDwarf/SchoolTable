import LoaderSVG from 'assets/tube-spinner.svg?react';
import styles from './Loader.module.css';
import { FC } from 'react';

interface ILoader {
    size?: 'small' | 'medium' | 'big'
    text?: string
}

export const Loader:FC<ILoader> = ({size='small', text}) => {
    return (
        <div className={`${styles.loader} ${styles[size]}`}>
            <LoaderSVG />
            {text && <p className={styles.text}>{text}</p>}
        </div>
    )
}