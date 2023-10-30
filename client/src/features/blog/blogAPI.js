import { apiSlice } from "../api/apiSlice";

export const blogAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createBlog: builder.mutation({
      query: (data) => ({
        url: "/api/v1/blog",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Blog", "SingleBlog"],
    }),
    updateBlog: builder.mutation({
      query: ({ data, id }) => ({
        url: `/api/v1/blog/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Blog", "SingleBlog"],
    }),
    getBlogs: builder.query({
      query: (page) => `/api/v1/blog?page=${page || 0}`,
      providesTags: ["Blog"],
    }),
    getBlog: builder.query({
      query: (id) => `/api/v1/blog/${id}`,
      providesTags: ["SingleBlog"],
    }),
    getRecommendBlogs: builder.query({
      query: (title) => `/api/v1/blog/recommend/${title}`,
    }),
    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `/api/v1/blog/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Blog"],
    }),
    getSearchBlogs: builder.query({
      query: ({page, title}) =>
        `/api/v1/blog/search?title=${title}&page=${page || 0}`,
    }),
  }),
});

export const {
  useCreateBlogMutation,
  useGetBlogsQuery,
  useGetBlogQuery,
  useGetRecommendBlogsQuery,
  useDeleteBlogMutation,
  useUpdateBlogMutation,
  useGetSearchBlogsQuery,
} = blogAPI;
