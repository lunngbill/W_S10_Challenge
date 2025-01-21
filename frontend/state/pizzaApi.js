import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const pizzaApi = createApi({
    reducerPath: 'pizzaApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9009/api/'}),
    tagTypes: ['Orders'],
    endpoints: builder => ({
        getPizzaHistory: builder.query({
            query: () => '/pizza/history',
            providesTags: ['Orders'],
        }),
        createOrder: builder.mutation({
            query: body => ({
                url: "/pizza/order",
                method: "POST",
                body,
            }),
            invalidatesTags: ['Orders']
        })
    })
})

export const {
    useGetPizzaHistoryQuery,
    useCreateOrderMutation,
} = pizzaApi;