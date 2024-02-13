import { Student } from "../Student";
import { ApiResult } from "shared/interfaces/interfaces";
import { api } from "app/redux";

export const studentApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getStudents: builder.query<ApiResult<Student>, void>({
            query: () => `/Schoolboy`
        })
    })
});

export const {useGetStudentsQuery} = studentApi;