import React from "react";
import {
  useDeleteBlogMutation,
  useGetBlogsQuery,
} from "../../../src/features/blog/blogAPI";
import Image from "next/image";
import moment from "moment";
import { MdDelete } from "react-icons/md";
import { BsPencilSquare } from "react-icons/bs";
import Link from "next/link";
import dynamic from "next/dynamic";
import toast from "react-hot-toast";

const ReactPaginate = dynamic(() => import("react-paginate"), {
  ssr: false,
});

export default function AllBlogs() {
  const [page, setPage] = React.useState(0);

  const { data } = useGetBlogsQuery(page);
  const [deleteBlog] = useDeleteBlogMutation();

  const handlePageClick = (e) => {
    setPage(e.selected);
  };

  const handleDeleteBlog = async (e, id) => {
    e.stopPropagation();
    try {
      const res = await deleteBlog(id);
      if (res.data.success) {
        toast.success("Blog deleted successfully");
      }
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  return (
    <section className="w-full h-full flex flex-col">
      <div className="w-full h-full overflow-y-scroll flex flex-wrap justify-center gap-4">
        {data?.blogs?.map((blog, index) => (
          <div key={index} className="w-96 h-[25rem] flex flex-col p-2">
            <div className="w-full h-2/3 overflow-hidden rounded relative">
              <Image
                src={blog.image}
                width={300}
                height={200}
                alt={blog.title}
                className="w-full h-full hover:scale-110 transition-all delay-75 duration ease-linear overflow-hidden"
              />
              <div>
                <button
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 active:bg-slate-50 absolute top-2 right-2 text-2xl cursor-pointer flex justify-center items-center hover:text-red-500"
                  onClick={(e) => handleDeleteBlog(e, blog._id)}
                >
                  <MdDelete />
                </button>
                <Link
                  href={`editblog/${blog._id}`}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 active:bg-slate-50 absolute top-2 right-14 text-2xl cursor-pointer flex justify-center items-center hover:text-blue-500"
                >
                  <BsPencilSquare />
                </Link>
              </div>
            </div>
            <div className="w-full h-1/3 mt-6">
              <h1 className="font-poppins font-semibold text-2xl text-[#001948] ">
                {blog.title}
              </h1>
              <p>
                {moment(blog.createAt).format("ll")} • {blog.readtime} min read
              </p>
            </div>
          </div>
        ))}
      </div>
      <div>
        {data?.pageCount > 0 && (
          <ReactPaginate
            breakLabel="..."
            nextLabel="next"
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            pageCount={data?.pageCount + 1}
            previousLabel="previous"
            renderOnZeroPageCount={null}
            className="flex justify-center items-center gap-x-2"
            pageLinkClassName="text-sm   bg-white  border border-slate-300 dark:border-slate-800 rounded w-8 h-8 flex justify-center items-center hover:bg-blue-600 hover:text-white"
            previousLinkClassName="text-sm text-gray-700 bg-white hover:bg-slate-200 border border-slate-300  rounded w-24 h-8 flex justify-center items-center hover:bg-blue-600 hover:text-white"
            nextLinkClassName="text-sm text-gray-700  bg-white hover:bg-slate-200  border border-slate-300 rounded w-24 h-8 flex justify-center items-center hover:bg-blue-600 hover:text-white"
            breakLinkClassName="text-sm text-gray-700  bg-white dark:bg-slate-900 hover:bg-slate-200  border border-slate-300  rounded w-8 h-8 flex justify-center items-center"
            activeLinkClassName={
              "text-sm text-light font-semibold  rounded w-8 h-8 flex justify-center items-center bg-blue-600 text-white"
            }
          />
        )}
      </div>
    </section>
  );
}
