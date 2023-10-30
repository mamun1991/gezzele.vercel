import logo from "../../public/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import twitter from "../../public/assets/twitter.svg";
import facebook from "../../public/assets/facebook.svg";
import instagram from "../../public/assets/instagram.svg";

export default function Footer() {
    return (
        <footer className="w-screen flex justify-center bg-[#2c3744]">
            <div className="w-11/12 lg:max-w-7xl flex flex-col justify-center items-center text-white">
                {/* footer content */}
                <div className="py-12 w-full flex flex-col lg:flex-row lg:justify-between gap-y-4">
                    <div className="lg:w-[35%] lg:p-4">
                        <Image src={logo} alt="logo" width={100} height={100} />
                        <p className="">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.
                        </p>
                    </div>
                    <div className="space-y-4 lg:w-[25%] g:p-4">
                        <h1 className="font-semibold">Company</h1>
                        <ul className="flex flex-col gap-y-1 font-thin">
                            <li>
                                <Link href={"/"}>About</Link>
                            </li>
                            <li>
                                <Link href={"/"}>Contact Us</Link>
                            </li>
                            <li>
                                <Link href={"/"}>Products</Link>Products
                            </li>
                            <li>
                                <Link href={"/"}>Industries</Link>
                            </li>
                            <li>
                                <Link href={"/"}>Blog</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-4 lg:w-[25%] g:p-4">
                        <h1 className="font-semibold">Quick link</h1>
                        <ul className="flex flex-col gap-y-1 font-thin">
                            <li>
                                <Link href={"/"}>Terms of Service</Link>
                            </li>
                            <li>
                                <Link href={"/"}>Privacy Policy</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-4 lg:w-[25%] g:p-4">
                        <h1 className="font-semibold">Follow Gazellelending</h1>
                        <div className="flex gap-x-2">
                            <div className="flex justify-center items-center h-12 w-12 bg-[#3166C9] rounded-md">
                                <Image src={twitter} alt="twitter" width={30} height={30} />
                            </div>
                            <div className="flex justify-center items-center h-12 w-12 bg-[#3166C9] rounded-md">
                                <Image src={facebook} alt="twitter" width={15} height={15} />
                            </div>
                            <div className="flex justify-center items-center h-12 w-12 bg-[#3166C9] rounded-md">
                                <Image src={instagram} alt="twitter" width={30} height={30} />
                            </div>
                        </div>
                        <p className="">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                {/* copy right */}
                <div>
                    <p>©gazellelending, {new Date().getFullYear()}</p>
                </div>
            </div>
        </footer>
    );
}
