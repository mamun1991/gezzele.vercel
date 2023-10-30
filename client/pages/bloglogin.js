import logo from "../public/assets/logo.svg";
import Image from "next/image";
import { useLoginMutation } from "../src/features/user/userAPI";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading }] = useLoginMutation();

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password });
      if (res.data) {
        router.push("/dashboard");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="min-h-[calc(100vh-22.5rem)] w-screen flex justify-center items-center">
      <div className="w-11/12 lg:w-[56rem] h-[28rem] bg-slate-100 my-16 flex rounded drop-shadow-lg overflow-hidden">
        <div className="hidden w-1/2 h-full bg-[#2C3644] lg:flex justify-center items-center">
          <Image src={logo} alt="login" className="" />
        </div>
        <div className="w-full lg:w-1/2 h-full flex justify-center items-center">
          <form
            className="flex flex-col gap-y-4 w-full items-center"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              className="p-2 w-[90%]  focus:outline-blue-300"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="p-2 w-[90%] focus:outline-blue-300"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="submit"
              className="p-2 w-[90%] bg-[#3166C9] text-white rounded cursor-pointer"
              value="Login"
            />
          </form>
        </div>
      </div>
    </section>
  );
}
