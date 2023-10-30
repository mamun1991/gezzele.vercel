import React from "react";
import Image from "next/image";
import Link from "next/link";
import arrownav from "../../public/assets/arrownav.svg";
import work1 from "../../public/assets/work1.svg";
import work2 from "../../public/assets/work2.svg";
import work3 from "../../public/assets/work3.svg";
import path1 from "../../public/assets/path1.svg";
import path2 from "../../public/assets/path2.svg";
import n1 from "../../public/assets/1.svg";
import n2 from "../../public/assets/2.svg";
import n3 from "../../public/assets/3.svg";

export default function GazelleWorks() {
    return (
        <section className="w-screen flex justify-center" id="worksflow">
            <div className=" w-11/12 lg:max-w-6xl flex flex-col items-center">
                <h1 className="text-4xl font-bold text-[#001948] font-poppins py-20">How Gazelle Works</h1>
                {/* workflow1 */}
                <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center relative">
                    <div className="h-1/2 w-full lg:w-1/2 lg:h-full flex flex-col justify-center gap-y-6">
                        <Image src={n1} alt="1" className="absolute top-0 lg:top-[8rem]" />
                        <h1 className="text-3xl font-bold text-[#001948] font-poppins  ">Create A Free Account</h1>
                        <p className="text-[#2C3644] text-lg">
                            We simplified the process to make it as easy as possible. An all-digital common application used across our lender
                            network.
                        </p>
                        <Link href="/" className="flex items-center text-[#3166C9] font-medium gap-x-2">
                            Create Account Now
                            <Image src={arrownav} alt="arrownav" height={12} className="mt-[2px]" />
                        </Link>
                    </div>
                    <div className=" h-1/2 w-full lg:w-1/2 lg:h-full">
                        <Image src={work1} alt="work1" className="w-full h-full" />
                    </div>
                </div>
                {/* path 1 updated */}
                <div className="w-full flex justify-center">
                    <Image src={path1} alt="path1" className="w-[55%] h-full" />
                </div>
                {/* workflow 2 */}
                <div className="w-full h-full flex flex-col lg:flex-row-reverse items-center justify-center">
                    <div className="h-1/2 w-full lg:w-1/2 lg:h-full flex flex-col justify-center gap-y-6 relative">
                        <Image src={n2} alt="2" className="absolute top-0 lg:top-[6rem]" />
                        <h1 className="text-3xl font-bold text-[#001948] font-poppins ">Lenders Compete For Your Business</h1>
                        <p className="text-[#2C3644] text-lg">
                            For the first time, Lenders pitch you. Receive competing offers directly, allowing you to pick the best option for your
                            business.
                        </p>
                        <Link href="/" className="flex items-center text-[#3166C9] font-medium gap-x-2">
                            Compare Offer Now
                            <Image src={arrownav} alt="arrownav" height={12} className="mt-[2px]" />
                        </Link>
                    </div>
                    <div className=" h-1/2 w-full lg:w-1/2 lg:h-full">
                        <Image src={work2} alt="work2" className="w-full h-full" />
                    </div>
                </div>
                {/* path 2 */}
                <div className="w-full flex justify-center">
                    <Image src={path2} alt="path2" className="w-[55%] h-full" />
                </div>
                {/* workflow 3 */}
                <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center relative">
                    <Image src={n3} alt="3" className="absolute left-0 top-0 lg:top-[4rem]" />
                    <div className="h-1/2 w-full lg:w-1/2 lg:h-full flex flex-col justify-center gap-y-6">
                        <h1 className="text-3xl font-bold text-[#001948] font-poppins ">Finalize Paperwork Right From Your Computer</h1>
                        <p className="text-[#2C3644] text-lg">
                            We simplified the process to make it as easy as possible. An all-digital common application used across our lender
                            network.
                        </p>
                        <Link href="/" className="flex items-center text-[#3166C9] font-medium gap-x-2">
                            Apply Now
                            <Image src={arrownav} alt="arrownav" height={12} className="mt-[2px]" />
                        </Link>
                    </div>
                    <div className=" h-1/2 w-full lg:w-1/2 lg:h-full">
                        <Image src={work3} alt="work3" className="w-full h-full" />
                    </div>
                </div>
            </div>
        </section>
    );
}
