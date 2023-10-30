import blog1 from "../../public/assets/blog1.jpg";
import blog2 from "../../public/assets/blog2.jpg";
import blog3 from "../../public/assets/blog3.jpg";
import Image from "next/image";
import Link from "next/link";
import { useGetBlogsQuery } from "../../src/features/blog/blogAPI";

export default function Blogs() {
  const { data } = useGetBlogsQuery();
  console.log(data);
  return (
    <section className="w-screen flex justify-center py-16">
      <div className=" w-11/12 lg:max-w-7xl flex flex-col items-center  gap-y-8">
        <h1 className=" font-poppins text-3xl font-bold text-[#001948]">
          Latest Blogs
        </h1>
        <div className="flex flex-col lg:flex-row flex-wrap justify-center lg:justify-between items-center gap-y-8">
          {data?.blogs?.slice(0, 3).map((blog, index) => (
            <div
              className="w-[90%] h-96 lg:w-[32%] flex flex-col justify-center items-center gap-y-4"
              key={index}
            >
              <div className="w-full rounded-t-xl overflow-hidden">
                <Image
                  src={blog.image}
                  alt="blog"
                  className="w-full h-full"
                  width={300}
                  height={200}
                />
              </div>
              <div className="w-full space-y-4">
                <Link
                  href={`blogs/${encodeURIComponent(blog._id)}`}
                  className="font-poppins font-bold text-[#001948]"
                >
                  {blog.title}
                </Link>
                <div className="w-full flex justify-between items-center">
                  <p className="font-medium text-[#001948] text-sm">
                    By {blog.user.name}
                  </p>
                  <p className="text-[#001948] text-sm bg-[#9FA8B9] rounded-full px-5 py-1 bg-opacity-[18%]">
                    {blog.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
