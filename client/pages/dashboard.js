import React from "react";
import { useSelector } from "react-redux";
import AllBlogs from "../components/dashboard/blog/AllBlogs";
import CreateBlog from "../components/dashboard/blog/CreateBlog";
import { useRouter } from "next/router";
import Eligible from "../components/eligible/eligible";
import Profile from "../components/dashboard/profile/profile";

export default function Dashboard() {
  const { user } = useSelector((state) => state.user);
  const router = useRouter();

  React.useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user]);
  const [activeBtn, setActiveBtn] = React.useState("Create Blog");
  const sideButtons = ["Create Blog", "All Blogs", "Eligible", "Profile"];
  return (
    <section className="w-screen flex h-[calc(100vh-4rem)] bg-slate-100">
      <div className="w-56 min-h-[calc(100vh-4rem)] bg-[#2C3644] py-2">
        {sideButtons.map((button, index) => (
          <button
            key={index}
            className={`w-full h-12  text-white text-sm font-poppins ${
              activeBtn === button ? "bg-[#3166C9]" : ""
            } `}
            onClick={() => setActiveBtn(button)}
          >
            {button}
          </button>
        ))}
      </div>
      <div className="p-2 w-full">
        {activeBtn === "Create Blog" ? (
          <CreateBlog />
        ) : activeBtn === "All Blogs" ? (
          <AllBlogs />
        ) : activeBtn === "Eligible" ? (
          <Eligible />
        ) : activeBtn === "Profile" ? (
          <Profile />
        ) : null}
      </div>
    </section>
  );
}
