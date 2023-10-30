import React from "react";
import cash from "../../public/assets/cash.png";
import credit from "../../public/assets/credit.png";
import smallloan from "../../public/assets/smallloan.png";
import businessloan from "../../public/assets/businessloan.png";
import finance from "../../public/assets/finance.png";
import sbaloan from "../../public/assets/sbaloan.png";
import Image from "next/image";

export default function FeaturesSec() {
    return (
            <section className="w-screen flex justify-center py-16">
                <div className=" w-11/12 lg:max-w-7xl flex flex-col items-center  gap-y-8">
                    <h1 className=" font-poppins text-4xl font-bold text-slate-600 w-[26rem] text-center">When You’re Ready to Grow</h1>
                    <p className=" font-medium text-xl text-slate-400 w-[30rem] text-center">Choose the right financing product for your business.</p>
                    <div className="flex flex-col lg:flex-row justify-between flex-wrap gap-y-4">
                        <div className="flex flex-col justify-center items-center gap-4 lg:w-[33.3%]">
                            <Image src={cash} alt="cash" height={100} />
                            <h1 className="font-poppins text-xl text-slate-600 mt-4">Merchant Cash Advance</h1>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-4 lg:w-[33.3%]">
                            <Image src={credit} alt="cash" height={100} />
                            <h1 className="font-poppins text-xl text-slate-600 mt-4">Business Lines of Credit</h1>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-4 lg:w-[33.3%]">
                            <Image src={smallloan} alt="cash" height={100} />
                            <h1 className="font-poppins text-xl text-slate-600 mt-4">Small Business Loans</h1>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-4 lg:w-[33.3%]">
                            <Image src={sbaloan} alt="cash" height={100} />
                            <h1 className="font-poppins text-xl text-slate-600 mt-4 ">SBA Loans</h1>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-4 lg:w-[33.3%]">
                            <Image src={businessloan} alt="cash" height={100} />
                            <h1 className="font-poppins text-xl text-slate-600 mt-4">Collateralized Business Loans</h1>
                        </div>
                        <div className="flex flex-col justify-center items-center lg:w-[33.3%]">
                            <Image src={finance} alt="cash" height={100} />
                            <h1 className="font-poppins text-xl text-slate-600 mt-4">Equipment Financing</h1>
                        </div>
                    </div>
                </div>
            </section>
    );
}
