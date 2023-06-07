import { apiSlice } from "../../app/api/apiSlice"

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUsers: builder.query({
            query: () => '/employees',
            keepUnusedDataFor: 5,
        })
    })
})

export const {
    useGetUsersQuery
} = usersApiSlice 