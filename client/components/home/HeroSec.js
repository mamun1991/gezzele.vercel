import Image from "next/image";
import rightArrow from "../../public/assets/right-arrow.svg";
import hero from "../../public/assets/hero.svg";
import salary from "../../public/assets/salary.svg";
import credit from "../../public/assets/credit-card.svg";
import bank from "../../public/assets/bank.svg";
import click from "../../public/assets/click.svg";

export default function HeroSec() {
    return (
        <section className="w-screen h-[80rem] lg:h-[43rem] flex justify-center bg-[#3166C9] bg-opacity-[7%] ">
            <div className="w-11/12 h-full flex flex-col lg:flex-row gap-y-4 lg:max-w-7xl ">
                <div className="h-1/3 lg:w-[40%] lg:h-full flex flex-col justify-center gap-y-8">
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-[#001948]">Your One-Stop Shop For Business Lending</h1>
                    <p className="text-lg font-medium text-[#2C3644]">
                        10+ types of funding options, 75+ Lenders and Countless opportunities all from one simple application
                    </p>
                    <div className="space-y-2">
                        <button className="text-white text-base flex items-center gap-x-2  py-4 px-16 rounded bg-[#3166C9] font-semibold ">
                            Join Now <Image src={rightArrow} alt="right-arrow" height={14} />
                        </button>
                        <p className="text-[#2C3644]">*won’t affect your credit score!</p>
                    </div>
                </div>
                <div className="h-2/3 lg:w-[60%] flex flex-col lg:flex-row justify-center items-center lg:items-start  lg:justify-end lg:h-full relative">
                    <div className=" lg:right-[-3rem] lg:absolute">
                        <Image src={hero} alt="hero" height={700} priority/>
                    </div>
                    <div className="relative lg:absolute lg:z-10 bg-[#2C3644] h-[21rem] w-[14.5rem] lg:top-36 lg:left-32 rounded-2xl">
                        <div className="h-full w-full bg-white absolute top-2 left-2 rounded-2xl p-4">
                            <form className="h-full flex flex-col justify-evenly">
                                <label htmlFor="" className="space-y-2 relative">
                                    <p className=" font-semibold text-sm">You&apos;re Looking For</p>
                                    <Image src={salary} alt="" className="absolute left-4 top-[45%]" />
                                    <input
                                        type="text"
                                        className="border border-[#010101] p-2 w-full rounded-md pl-12 placeholder:text-xs placeholder:text-black
                                                placeholder:font-semibold"
                                        placeholder="Over 200k"
                                    />
                                </label>
                                <label htmlFor="" className="space-y-2 relative">
                                    <p className=" font-semibold text-sm">Your Fico Score</p>
                                    <Image src={credit} alt="" className="absolute left-4 top-[45%]" />
                                    <input
                                        type="text"
                                        className="border border-[#010101] p-2 w-full rounded-md pl-12 placeholder:text-xs placeholder:text-black
                                                placeholder:font-semibold"
                                        placeholder="750+"
                                    />
                                </label>
                                <label htmlFor="" className="space-y-2 relative">
                                    <p className=" font-semibold text-sm">Choose Lender</p>
                                    <Image src={bank} alt="" className="absolute left-4 top-[45%]" />
                                    <input
                                        type="text"
                                        className="border border-[#010101] p-2 w-full rounded-md pl-12 placeholder:text-xs placeholder:text-black
                                                placeholder:font-semibold"
                                        placeholder="Select Your Lender"
                                    />
                                </label>
                                <div className="w-full flex justify-center">
                                    <button
                                        type="submit"
                                        className="text-white text-base flex items-center  py-2 px-4 rounded bg-[#2C3644] font-base mt-4 relative drop-shadow-2xl "
                                    >
                                        Apply Now{" "}
                                        <Image src={click} alt="right-arrow" height={34} className="absolute right-[-.8rem] bottom-[-.6rem]" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


