import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export const toCustomError = (reduxError: FetchBaseQueryError | SerializedError | undefined) => {
    if(!reduxError) return;

    if('data' in reduxError) {
        const error = reduxError as FetchBaseQueryError;

        return {status: error.status.toString(), message: error.data as string}
    }

    const error = reduxError as SerializedError;

    return {status: error.code || '500', message: error.message || ''}
}