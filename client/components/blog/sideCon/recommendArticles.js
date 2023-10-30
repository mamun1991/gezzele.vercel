import React from "react";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import { useGetRecommendBlogsQuery } from "../../../src/features/blog/blogAPI";

export default function RecommendArticles() {
  const { data } = useGetRecommendBlogsQuery();
  return (
    <div className="flex flex-col w-full">
      <h1 className="font-poppins font-semibold text-xl">
        Recommended Articles
      </h1>
      <div className="flex flex-col gap-y-4">
        {data?.blogs?.map((blog, index) => (
          <div className="flex w-full h-[9rem] mt-4 space-x-2" key={index}>
            <div className="w-[40%] h-full overflow-hidden rounded">
              <Image
                src={blog.image}
                layout="cover"
                alt="blog"
                className="w-full h-full hover:scale-110 transition-all delay-75 duration ease-linear overflow-hidden"
                width={300}
                height={200}
              />
            </div>
            <div className="w-[60%] h-full flex flex-col justify-center">
              <Link
                href={`/blogs/${encodeURIComponent(blog._id)}`}
                className="font-poppins  text-lg hover:text-[#001948]"
              >
                {blog.title}
              </Link>
              <p>{moment(blog.createAt).format("ll")} • {blog.readtime} min read</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
