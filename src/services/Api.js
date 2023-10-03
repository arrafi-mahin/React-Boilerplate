/**
 * This module defines a Redux Toolkit API for managing product data. It includes queries
 * for fetching product information and mutations for adding and deleting products.
 * The API uses a base URL of 'https://dummyjson.com/' for its requests.
 */

import  {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

// Create the product API using createApi
export const proudctApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({baseUrl:'https://dummyjson.com/'}),
    endpoints: (builder) => ({
         // Define a query to get all products
        getAllProducts: builder.query({
            query: ()=> 'products'
        }),
         // Define a query to search for products by name   
        getProduct:builder.query({
            query: (product) => `products/search?q=${product}`
        }),
        // Define a query to get a single product by ID
        getSingleProduct:builder.query({
            query: (product) => `products/${product}`
        }),
        // Define a mutation to add a new product
        addProduct:builder.mutation({
            query:({data})=>({
                url: ``,
                headers: '',
                method: 'POST',
                body: data,
            }),
        }),
        // Define a mutation to delete a product by ID
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
export const {useGetAllProductsQuery, useGetProductQuery, useGetSingleProductQuery, useAddProductMutation, useDeleteProductMutation} = proudctApi;