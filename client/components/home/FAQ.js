import rightArrowBlue from "../../public/assets/right-arrow-blue.svg";
import chevron from "../../public/assets/chevron.svg";
import Image from "next/image";
import { useState } from "react";

export default function FAQ() {
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    return (
        <section className="w-screen flex justify-center py-16">
            <div className=" w-11/12 lg:max-w-7xl flex flex-col-reverse lg:flex-row items-center  gap-y-8">
                <div className=" lg:w-1/2 flex flex-col items-center lg:items-start gap-y-4">
                    {/* faq1 */}
                    <div className="w-[90%] p-4 drop-shadow-xl  rounded-md bg-white">
                        <div className={`flex justify-between items-center ${show ? "border-b border-b-[#3166C9] border-opacity-20" : ""}`}>
                            <p className="text-[#001948] font-poppins font-semibold p-4">Can I get a business loan after bankruptcy?</p>
                            <button onClick={() => setShow((prev) => !prev)}>
                                <Image src={chevron} alt="chevron" className={`${show ? "" : "rotate-180"}`} />
                            </button>
                        </div>
                        <div className={`${show ? "block" : "hidden"}`}>
                            <p className="text-[#001948] font-poppins font-medium mt-4">
                                Yes, you can get a business loan after bankruptcy. However, you will need to wait for a few years after the bankruptcy
                                is discharged. You will also need to have a good credit score and a good business plan.
                            </p>
                        </div>
                    </div>
                    {/* faq1 */}
                    <div className="w-[90%] p-4 drop-shadow-xl  rounded-md bg-white">
                        <div className={`flex justify-between items-center ${show1 ? "border-b border-b-[#3166C9] border-opacity-20" : ""}`}>
                            <p className="text-[#001948] font-poppins font-semibold p-4">Can I get a business loan after bankruptcy?</p>
                            <button onClick={() => setShow1((prev) => !prev)}>
                                <Image src={chevron} alt="chevron" className={`${show1 ? "" : "rotate-180"}`} />
                            </button>
                        </div>
                        <div className={`${show1 ? "block" : "hidden"}`}>
                            <p className="text-[#001948] font-poppins font-medium mt-4 ">
                                Yes, you can get a business loan after bankruptcy. However, you will need to wait for a few years after the bankruptcy
                                is discharged. You will also need to have a good credit score and a good business plan.
                            </p>
                        </div>
                    </div>
                    {/* faq1 */}
                    <div className="w-[90%] p-4 drop-shadow-xl rounded-md bg-white">
                        <div className={`flex justify-between items-center ${show2 ? "border-b border-b-[#3166C9] border-opacity-20" : ""}`}>
                            <p className="text-[#001948] font-poppins font-semibold p-4">Can I get a business loan after bankruptcy?</p>
                            <button onClick={() => setShow2((prev) => !prev)}>
                                <Image src={chevron} alt="chevron" className={`${show2 ? "" : "rotate-180"}`} />
                            </button>
                        </div>
                        <div className={`${show2 ? "block" : "hidden"}`}>
                            <p className="text-[#001948] font-poppins font-medium mt-4">
                                Yes, you can get a business loan after bankruptcy. However, you will need to wait for a few years after the bankruptcy
                                is discharged. You will also need to have a good credit score and a good business plan.
                            </p>
                        </div>
                    </div>
                    {/* faq1 */}
                    <div className="w-[90%] p-4 drop-shadow-xl rounded-md bg-white">
                        <div className={`flex justify-between items-center ${show3 ? "border-b border-b-[#3166C9] border-opacity-20" : ""}`}>
                            <p className="text-[#001948] font-poppins font-semibold p-4">Can I get a business loan after bankruptcy?</p>
                            <button onClick={() => setShow3((prev) => !prev)}>
                                <Image src={chevron} alt="chevron" className={`${show3 ? "" : "rotate-180"}`} />
                            </button>
                        </div>
                        <div className={`${show3 ? "block" : "hidden"}`}>
                            <p className="text-[#001948] font-poppins font-medium mt-4">
                                Yes, you can get a business loan after bankruptcy. However, you will need to wait for a few years after the bankruptcy
                                is discharged. You will also need to have a good credit score and a good business plan.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-y-8 lg:w-1/2 p-4">
                    <div>
                        <h1 className=" font-poppins font-bold text-4xl text-[#001948]">Frequently</h1>
                        <h1 className=" font-poppins font-bold text-4xl text-[#001948]">Asked Questions</h1>
                    </div>
                    <p className=" font-medium  text-[#2C3644] w-full lg:w-[28rem]">
                        Here is the Set of Questionaries May be comes up on your mind.If You do have have more question, You Can Contact Us.
                    </p>
                    <div>
                        <button className="flex items-center text-[#3166C9] border border-[#3166C9] px-8 py-3 gap-x-2 font-poppins text-sm font-semibold rounded">
                            Contact Us
                            <Image src={rightArrowBlue} alt="rightArrow" height={14} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
