// import { api } from "./index";

// export const productApi = api.injectEndpoints({
//     endpoints: (build) => ({
//         getProducts: build.query({
//             query: (params) => ({
//                 url: "/products",
//                 params,
//             }),
//             providesTags: ["Product"],
//         }),
//         getProductById: build.query({
//             query: (id) => ({
//                 url: `/products/${id}`,
//             }),
//             providesTags: ["Product"],
//         }),
//         createProduct: build.mutation({
//             query: (body) => ({
//                 url: "/products",
//                 method: "POST",
//                 body,
//             }),
//             invalidatesTags: ["Product"],
//         }),
//         deleteProduct: build.mutation({
//             query: (id) => ({
//                 url: `/products/${id}`,
//                 method: "DELETE",
//             }),
//             invalidatesTags: ["Product"],
//         }),
//         updateProduct: build.mutation({
//             query: ({ id, body }) => ({
//                 url: `/products/${id}`,
//                 method: "PUT", // or "PATCH"
//                 body,
//             }),
//             invalidatesTags: ["Product"],
//         }),
//     }),
// });

// export const {
//     useGetProductsQuery,
//     useCreateProductMutation,
//     useDeleteProductMutation,
//     useUpdateProductMutation,
//     useGetProductByIdQuery,
// } = productApi;

import { api } from "./index";

export const productsApi = api.injectEndpoints({
    endpoints: (build) => ({
        getProducts: build.query({
            query: ({
                page = 1,
                limit = 9,
                brand = "all",
                color = "all",
                price = "all",
            }) => ({
                url: `/products?_page=${page}&_limit=${limit}${brand}${color}${price}`,
            }),
            providesTags: ["Products"],
        }),
        getProductById: build.query({
            query: (id) => ({
                url: `/products/${id}`,
            }),
            providesTags: ["Product"],
        }),
        getBrands: build.query({
            query: (params) => ({
                url: "/brands",
                params,
            }),
        }),
        getColors: build.query({
            query: (params) => ({
                url: "/colors",
                params,
            }),
        }),
        createProduct: build.mutation({
            query: (body) => ({
                url: "/products",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Product"],
        }),
        deleteProduct: build.mutation({
            query: (id) => ({
                url: `/products/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Product"],
        }),
        updateProduct: build.mutation({
            query: ({ id, body }) => ({
                url: `/products/${id}`,
                method: "PUT",
                body,
            }),
            invalidatesTags: ["Product"],
        }),
    }),
});

export const {
    useGetProductsQuery,
    useGetBrandsQuery,
    useGetColorsQuery,
    useGetProductByIdQuery,
} = productsApi;
