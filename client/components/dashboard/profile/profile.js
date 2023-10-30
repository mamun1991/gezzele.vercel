import Image from "next/image";
import { useSelector } from "react-redux";
import React from "react";
import { useUpdateUserMutation } from "../../../src/features/user/userAPI";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

export default function Profile() {
  const { user } = useSelector((state) => state.user);

  const router = useRouter();

  const [preview, setPreview] = React.useState("");
  const [image, setImage] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [bio, setBio] = React.useState("");
  const [password, setPassword] = React.useState("");

  React.useEffect(() => {
    // create the preview
    if (image) {
      const objectUrl = URL.createObjectURL(image);
      setPreview(objectUrl);
    }

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(image);
  }, [image]);

  React.useEffect(() => {
    setName(user?.name);
    setEmail(user?.email);
    setBio(user?.bio);
    setPreview(user?.avatar);
  }, [user]);

  const [updateUser] = useUpdateUserMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("bio", bio);
    if (password) {
      formData.append("password", password);
    }
    if (image) {
      formData.append("image", image);
    }
    try {
      const res = await updateUser(formData);
      setPreview(res.data.user.avatar);
      toast.success(res.data.message);
      router.push("/login");
    } catch (err) {
      toast.error(err);
    }
  };
  return (
    <section className="w-full flex justify-center p-4">
      <div className="w-[35rem] flex justify-center bg-white rounded-md drop-shadow-lg py-6">
        <form
          className="w-[90%]  flex flex-col items-center gap-y-4"
          onSubmit={handleSubmit}
        >
          <div className="w-32 h-32 rounded-full overflow-hidden ring">
            <Image
              src={preview ? preview : user?.avatar}
              alt="avatar"
              width={200}
              height={200}
              className="w-full h-full"
            />
          </div>
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 bg-slate-100"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 bg-slate-100"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="New password"
            className="w-full p-2 bg-slate-100"
            onChange={(e) => setPassword(e.target.value)}
          />
          <textarea
            placeholder="Bio"
            rows={4}
            type="text"
            className="w-full p-2 bg-slate-100"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
          <input
            type="submit"
            value={"Update"}
            className="bg-blue-600 p-2 w-24 text-white font-poppins hover:bg-blue-400"
          />
        </form>
      </div>
    </section>
  );
}
