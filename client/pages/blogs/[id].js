import React from "react";
import person from "../../public/assets/person.png";
import Image from "next/image";
import { useGetBlogQuery } from "../../src/features/blog/blogAPI";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";
import Sideform from "../../components/blog/sideCon/sideform";
import Search from "../../components/blog/sideCon/search";
import RecommendArticles from "../../components/blog/sideCon/recommendArticles";
import TableOfContents from "../../components/blog/sideCon/tableOfContents";
import parse from "html-react-parser";

export default function SingleBlog() {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useGetBlogQuery(id);
  return (
    <section className="w-screen min-h-[calc(100vh-22rem)]  flex justify-center py-16">
      <div className=" w-11/12 lg:max-w-7xl flex flex-col lg:flex-row gap-y-8">
        {/* blog content */}
        <div className=" w-full lg:w-2/3 flex flex-col gap-y-4">
          <div>
            <h1 className=" font-poppins font-semibold text-2xl text-[#001948]">
              {data?.blog.title}
            </h1>
            <p className="text-sm opacity-50">
              {moment(data?.blog.createAt).format("ll")} | by{" "}
              {data?.blog?.user.name} | {data?.blog.category}
            </p>
          </div>
          <div className="h-[30rem] w-full rounded-md overflow-hidden">
            <Image
              src={data?.blog.image}
              alt="blog"
              width={500}
              height={400}
              className="w-full h-full"
            />
          </div>
          <p className="text-base font-poppins whitespace-pre-wrap">
            {parse(data?.blog.description || "")}
          </p>
          {/* blog table content */}
          <div>
            {data?.blog.tableofContents?.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-y-4 mt-8"
                id={index}
              >
                <h1 className=" font-poppins font-semibold text-2xl text-[#001948]">
                  {item.title}
                </h1>

                <p className="text-base font-poppins whitespace-pre-wrap">
                  {parse(item.content)}
                </p>
              </div>
            ))}
          </div>

          {/* author info */}
          <div className="py-10 border-t border-b flex items-center">
            <div className="overflow-hidden w-48 rounded-full ring">
              <Image
                src={data?.blog?.user?.avatar}
                alt="author"
                width={300}
                height={300}
              />
            </div>

            <div className="ml-4">
              <h1 className=" font-poppins font-medium text-xl text-[#001948]">
                Anthony J Reyna
              </h1>
              <h1 className=" font-poppins font-medium text-[#001948]">
                {data?.blog?.user.name}
              </h1>
              <p className="font-poppins text-sm">{data?.blog?.user?.bio}</p>
            </div>
          </div>
          {/* share articles*/}
          <div>
            <h1></h1>
          </div>
        </div>

        {/* right sidebar */}
        <div className="w-full lg:w-1/3 p-2 pl-4">
          <div className="w-full h-[25rem] bg-[#3166C9] rounded bg-opacity-5">
            <Sideform />
          </div>
          <Search />
          <TableOfContents />
          <RecommendArticles />
        </div>
      </div>
    </section>
  );
}
