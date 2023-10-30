import React from "react";
import mask from "../../public/assets/mask.svg";
import Image from "next/image";
import Link from "next/link";
import happyperson from "../../public/assets/happyperson.svg";
import rightArrow from "../../public/assets/right-arrow.svg";

export default function BlueSec() {
    return (
        <section className="w-screen flex justify-center py-16">
            <div className=" w-11/12 lg:max-w-7xl flex flex-col items-center bg-[#3166C9] rounded-3xl relative overflow-hidden">
                <Image src={mask} alt="mask" className="w-full h-full absolute lg:left-12 top-[4rem] lg:top-0 left-[-3rem]" />

                <div className=" lg:max-w-6xl lg:h-[26rem] flex flex-col lg:flex-row items-center justify-center relative ">
                    <div className="h-1/2 lg:w-1/2 lg:h-full flex flex-col justify-center gap-y-6 p-4 lg:p-0">
                        <h1 className="text-3xl font-bold text-white font-poppins  ">The smarter source for small business loans</h1>
                        <p className="text-white text-base">Fast and flexible financing options for entrepreneurs with things to do</p>
                        <div className="h-16 flex items-center">
                            <button className="flex items-center text-white font-medium gap-x-2 bg-[#001948] px-7 py-3 rounded-sm hover:py-2">
                                Apply Now
                                <Image src={rightArrow} alt="rightArrow" height={12} />
                            </button>
                        </div>
                    </div>
                    <div className=" h-1/2 w-full lg:w-1/2 lg:h-full relative">
                        <Image src={happyperson} alt="happy person" className="w-full h-full" />
                    </div>
                </div>
            </div>
        </section>
    );
}
