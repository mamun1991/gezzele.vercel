import React from "react";
import Link from "next/link";
import logo from "../../public/assets/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { userLoggedOut } from "../../src/features/user/userSlice";
import { useEffect } from "react";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(userLoggedOut());
  };

  return (
    <div>
      <nav className="bg-[#2C3644] h-16 flex justify-center">
        <div className="w-11/12 lg:max-w-7xl h-full flex justify-between items-center">
          <Link href={"/"}>
            <Image src={logo} alt="logo" height={44} />
          </Link>

          <div className="hidden lg:flex items-center gap-x-4">
            <ul className="hidden lg:flex items-center gap-x-8  text-white ml-24">
              <li>
                <a href="#worksflow">How it works</a>
              </li>
              <li>
                <Link href="/">About us</Link>
              </li>
              <li>
                <Link href="/blogs">Blog</Link>
              </li>
              <li>
                <Link href="/">Partner with us</Link>
              </li>
            </ul>
            {!user ? (
              <>
                <button className="text-white text-sm flex items-center gap-x-2  py-2 px-5 rounded bg-[#3166C9]">
                  Sign in
                </button>
              </>
            ) : (
              <>
                <Link
                  href={"/dashboard"}
                  className="text-white text-sm flex items-center gap-x-2  py-2 px-5 rounded bg-[#3166C9]"
                >
                  Dashboard
                </Link>
                <Image
                  src={user?.avatar}
                  alt="logo"
                  height={44}
                  width={100}
                  className="rounded-full ring w-10 h-10"
                />
                <button
                  className="text-white font-poppins"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            )}
          </div>
          {/* mobile menu */}
          <button
            className="lg:hidden transition-transform duration-200 ease-in-out transform hover:scale-110"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            {!navOpen ? (
              <GiHamburgerMenu size={25} color={"white"} />
            ) : (
              <AiOutlineClose size={25} color={"white"} />
            )}
          </button>
        </div>
      </nav>
      {navOpen && (
        <div
          className={`lg:hidden bg-[#2C3644] h-screen w-full  transition-[height] duration-500 ease-in-out ${
            !navOpen ? "h-0" : "h-96"
          }`}
        >
          {navOpen && (
            <div className="w-11/12 lg:max-w-7xl h-full flex flex-col justify-start items-center">
              <ul className="flex flex-col gap-y-8 text-white">
                <li>
                  <Link href="#worksflow">How it works</Link>
                </li>
                <li>
                  <Link href="/">About us</Link>
                </li>
                <li>
                  <Link href="/blogs">Blog</Link>
                </li>
                <li>
                  <Link href="/">Partner with us</Link>
                </li>
              </ul>
              <div className="flex flex-col gap-y-4 mt-4">
                {/* <button className="text-white text-sm flex items-center gap-x-2 border border-white py-3 px-5 rounded">
                                    <Image src={call} alt="call" height={16} /> 415-300-2500
                                </button> */}
                {!user ? (
                  <button className="text-white text-sm flex items-center justify-center gap-x-2 py-3 px-5 rounded bg-[#3166C9]">
                    Sign in
                  </button>
                ) : (
                  <Link
                    href={"/dashboard"}
                    className="text-white text-sm flex items-center gap-x-2  py-2 px-5 rounded bg-[#3166C9]"
                  >
                    Dashboard
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
