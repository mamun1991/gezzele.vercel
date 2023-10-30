import React from "react";
import RecommendArticles from "../components/blog/sideCon/recommendArticles";
import Sideform from "../components/blog/sideCon/sideform";
import SearchInput from "../components/blog/sideCon/search";
import Image from "next/image";
import moment from "moment";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useGetSearchBlogsQuery } from "../src/features/blog/blogAPI";
import { useRouter } from "next/router";

const ReactPaginate = dynamic(() => import("react-paginate"), {
  ssr: false,
});

export default function Search() {
  const [page, setPage] = React.useState(0);

  const router = useRouter();

  const { title } = router.query;

  const { data } = useGetSearchBlogsQuery({ page, title });


  const handlePageClick = (e) => {
    setPage(e.selected);
  };
  return (
    <section className="w-screen min-h-[calc(100vh-22rem)]  flex justify-center py-16">
      <div className=" w-11/12 lg:max-w-7xl flex flex-col  lg:flex-row  gap-y-8">
        {/* blog content */}
        <div className=" w-full  lg:w-2/3  flex flex-col h-auto ">
          <div className="w-full border-b border-slate-200 p-2">
            <h1 className=" font-poppins  font-semibold text-2xl hover:text-[#001948] ">
              Search results for : "{title}"
            </h1>
          </div>
          <div className=" w-full flex flex-wrap h-auto gap-x-2">
            {data?.blogs?.map((blog, index) => (
              <div
                key={index}
                className="w-full lg:w-[49%] h-[26rem] flex flex-col p-2"
              >
                <div className="w-full h-2/3 overflow-hidden rounded">
                  <Image
                    src={blog.image}
                    width={300}
                    height={200}
                    alt={blog.title}
                    className="w-full h-full hover:scale-110 transition-all delay-75 duration ease-linear overflow-hidden"
                  />
                </div>
                <div className="w-full h-1/3 mt-6">
                  <Link
                    href={`blogs/${encodeURIComponent(blog._id)}`}
                    className="font-poppins font-semibold text-2xl hover:text-[#001948]"
                  >
                    {blog.title}
                  </Link>
                  <p>
                    {moment(blog.createAt).format("ll")} • {blog.readtime} min
                    read
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
        </div>
        {/* right sidebar */}
        <div className="w-full lg:w-1/3 p-2">
          <div className="w-full h-[25rem] bg-[#3166C9] rounded bg-opacity-5">
            <Sideform />
          </div>
          <SearchInput />
          <RecommendArticles />
        </div>
      </div>
    </section>
  );
}
