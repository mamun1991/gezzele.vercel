import { useRouter } from "next/router";
import { useGetBlogQuery } from "../../../src/features/blog/blogAPI";
import Link from "next/link";

export default function TableOfContents() {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useGetBlogQuery(id);
  return (
    <section className="w-full space-y-4">
      <h1 className="text-[#001948] text-xl font-semibold font-poppins ">
        Table of Contents
      </h1>
      <div className="bg-[#F8F8F8] p-4">
        {data?.blog.tableofContents?.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col gap-y-4 py-4 ${
              index === data?.blog?.tableofContents.length - 1
                ? " "
                : "border-b"
            } border-[#E7E7E7]`}
          >
            <a
              href={`#${index}`}
              className=" font-poppins  text-[#9E9E9E] hover:text-[#001948] "
            >
              {index + 1}. {item.title}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
