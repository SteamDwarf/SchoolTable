import { api } from "app/redux";
import { ApiResult } from "shared/interfaces/interfaces";
import { LessonVisit } from "..";


interface ILessonVisitData {
    SchoolboyId: number,
    ColumnId: number,
}

export const lessonVisitApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getLessonsVisits: builder.query<ApiResult<LessonVisit>, number>({
            query: (studentId) => `/Rate?SchoolboyId=${studentId}`,
            providesTags: (result, error, args) => [
                {type: 'LessonVisit', id: args}
            ]
        }),
        setAbsence: builder.mutation<void, ILessonVisitData>({
            query: (data) => ({
                url: `/Rate`,
                method: 'POST',
                body: {
                    SchoolboyId: data.SchoolboyId,
                    ColumnId: data.ColumnId,
                    Title: 'Н'
                }
            }),
            invalidatesTags: (result, error, args) => [
                {type: 'LessonVisit', id: args.SchoolboyId}
            ]
        }),
        unSetAbsence: builder.mutation<void, ILessonVisitData>({
            query: (data) => ({
                url: `/UnRate`,
                method: 'POST',
                body: {
                    SchoolboyId: data.SchoolboyId,
                    ColumnId: data.ColumnId,
                }
            }),
            invalidatesTags: (result, error, args) => [
                {type: 'LessonVisit', id: args.SchoolboyId}
            ]
        })
    }),
})

export const {
    useGetLessonsVisitsQuery, 
    useLazyGetLessonsVisitsQuery, 
    useSetAbsenceMutation,
    useUnSetAbsenceMutation
} = lessonVisitApi;