/* eslint-disable @typescript-eslint/no-unused-vars */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: "http://94.131.246.109:5555/v1/2"}),
    endpoints: (builder) => ({}),
    tagTypes: ["LessonVisit"]
})
