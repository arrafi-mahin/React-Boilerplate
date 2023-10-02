import  {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const proudctApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({baseUrl:'https://dummyjson.com/'}),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: ()=> 'products'
        }),
        getProduct:builder.query({
            query: (product) => `products/search?q=${product}`
        }),
        deleteProduct:builder.mutation({
            query:({id, ...patch})=>({
                url: `${id}`,
                headers: '',
                method: 'DELETE',
                body: patch,
            }),
        }),
    }),
});
export const {useGetAllProductsQuery, useGetProductQuery} = proudctApi;