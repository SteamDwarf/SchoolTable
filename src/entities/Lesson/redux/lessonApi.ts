import { api } from "app/redux";
import { Lesson } from "../Lesson";
import { ApiResult } from "shared/interfaces/interfaces";

export const lessonApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getLessons: builder.query<ApiResult<Lesson>, void>({
            query: () => `/Column`
        })
    })
})

export const {useGetLessonsQuery} = lessonApi;
