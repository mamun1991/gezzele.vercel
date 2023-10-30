import React, { useEffect } from "react";
import Spinner from "../../components/loader/Spinner";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  useGetBlogQuery,
  useUpdateBlogMutation,
} from "../../src/features/blog/blogAPI";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <Spinner />,
});

export default function EditBlog() {
  const router = useRouter();
  const { user } = useSelector((state) => state.user);
  React.useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user]);
  const { id } = router.query;
  const { data } = useGetBlogQuery(id);

  const [tableofContent, setTableofContent] = React.useState([]);
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [image, setImage] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [readtime, setReadtime] = React.useState("");

  const [updateBlog, { isLoading }] = useUpdateBlogMutation();

  const handleAddTableofContent = () => {
    setTableofContent([...tableofContent, { title: "", content: "" }]);
  };

  const handleRemoveTableofContent = (index) => {
    const newTableofContent = [...tableofContent];
    newTableofContent.splice(index, 1);
    setTableofContent(newTableofContent);
  };

  const handleTableofContentChange = (e, index) => {
    e.preventDefault();
    const newTableofContent = [...tableofContent];
    newTableofContent.splice(index, 1, {
      ...newTableofContent[index],
      [e.target.name]: e.target.value,
    });
    setTableofContent(newTableofContent);
  };
  const handleTableofContentsChange = (e, index) => {
    const newTableofContent = [...tableofContent];
    newTableofContent.splice(index, 1, {
      ...newTableofContent[index],
      content: e,
    });
    setTableofContent(newTableofContent);
  };

  const handleUpdateBlog = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("tableofContents", JSON.stringify(tableofContent));
    formData.append("category", category);
    formData.append("readtime", readtime);


    try {
      const res = await updateBlog({
        id,
        data: formData,
      });
      console.log(res);
      if (res.data.success) {
        resetForm();
        toast.success("Blog updated successfully");
      }
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  const resetForm = () => {
    setImage("");
    setTitle("");
    setDescription("");
    setTableofContent([]);
    setPreview("");
    setCategory("");
    setReadtime("");
  };

  const [preview, setPreview] = React.useState("");

  useEffect(() => {
    setTitle(data?.blog?.title);
    setDescription(data?.blog?.description);
    setTableofContent(data?.blog?.tableofContents);
    setPreview(data?.blog?.image);
    setCategory(data?.blog?.category);
    setReadtime(data?.blog?.readtime);
  }, [data]);

  useEffect(() => {
    // create the preview
    if (image) {
      const objectUrl = URL.createObjectURL(image);
      setPreview(objectUrl);
    }

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(image);
  }, [image]);
  return (
    <section className="w-full h-full flex justify-center my-6">
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="border h-full w-[80%] bg-white rounded-lg p-6 flex flex-col gap-y-2">
          <form
            className="w-full flex flex-col gap-y-4"
            onSubmit={(e) => handleUpdateBlog(e)}
          >
            {preview && (
              <div className="w-full">
                <Image
                  src={preview}
                  width={200}
                  height={200}
                  className="w-full h-[26rem]"
                  alt="preview"
                />
              </div>
            )}
            <input
              type="file"
              className="p-2 w-full"
              name="image"
              onChange={(e) => setImage(e.target.files[0])}
            />
            <input
              type="text"
              placeholder="blog title"
              value={title}
              className="p-2 w-full font-poppins font-semibold text-2xl text-[#001948]"
              onChange={(e) => setTitle(e.target.value)}
            />
            <div>
              <QuillNoSSRWrapper
                theme="snow"
                rows={6}
                placeholder="blog description"
                value={description}
                className="p-2 w-full font-poppins"
                name="description"
                onChange={(e) => setDescription(e)}
              />
            </div>
            {tableofContent?.map((item, index) => (
              <div key={index} className="w-full flex gap-x-2">
                <div className="flex flex-col w-full gap-y-2">
                  <input
                    type="text"
                    placeholder="heading..."
                    className="p-2 w-full font-poppins font-medium text-xl text-[#001948]"
                    name="title"
                    onChange={(e) => handleTableofContentChange(e, index)}
                    required
                    value={item.title}
                    readOnly={false}
                  />
                  <div className="w-full">
                    <QuillNoSSRWrapper
                      theme="snow"
                      onChange={(e) => handleTableofContentsChange(e, index)}
                      required
                      placeholder="content"
                      value={item.content}
                    />
                  </div>

                  {/* <textarea
                    rows={6}
                    type="text"
                    placeholder="Content"
                    className="p-2 w-full font-poppins"
                    name="content"
                    onChange={(e) => handleTableofContentChange(e, index)}
                    // value={item.content}
                  /> */}
                </div>
                <button
                  className="mt-2 p-2 w-6 h-6 rounded-full flex justify-center items-center bg-red-200 hover:bg-red-500  text-white font-poppins font-semibold text-lg text-center"
                  onClick={() => handleRemoveTableofContent(index)}
                >
                  X
                </button>
              </div>
            ))}
            {
              <div>
                <button
                  type="button"
                  className=" p-2 bg-slate-600 hover:bg-slate-800 text-white font-poppins text-sm font-medium"
                  onClick={(e) => handleAddTableofContent(e)}
                >
                  Add More Content
                </button>
              </div>
            }
            <div className="w-full flex gap-x-2">
              <select
                className="p-2 w-full"
                onChange={(e) => setCategory(e.target.value)}
                required
                value={category}
              >
                <option value="" disabled={category}>
                  Pleae select a option
                </option>
                <option value="INDUSTRY TRENDS">INDUSTRY TRENDS</option>
                <option value="RUNNING A BUSINESS">RUNNING A BUSINESS</option>
                <option value="BUSINESS LOANS">BUSINESS LOANS</option>
                <option value="BUSINESS INSURANCE">BUSINESS INSURANCE</option>
                <option value="BUSINESS GROWTH">BUSINESS GROWTH</option>
                <option value="BUSINESS MANAGEMENT">BUSINESS MANAGEMENT</option>
                <option value="BUSINESS STRATEGY">BUSINESS STRATEGY</option>
                <option value="BUSINESS FINANCE">BUSINESS FINANCE</option>
                <option value="BUSINESS MARKETING">BUSINESS MARKETING</option>
                <option value="BUSINESS SALES">BUSINESS SALES</option>
                <option value="BUSINESS TECHNOLOGY">BUSINESS TECHNOLOGY</option>
                <option value="BUSINESS LEADERSHIP">BUSINESS LEADERSHIP</option>
                <option value="FORECASTING">FORECASTING</option>
                <option value="BUSINESS PLANNING">BUSINESS PLANNING</option>
                <option value="BUSINESS FUNDING">BUSINESS FUNDING</option>
                <option value="BUSINESS INSURANCE">BUSINESS INSURANCE</option>
                <option value="BUSINESS CREDIT">BUSINESS CREDIT</option>
                <option value="BUSINESS TAXES">BUSINESS TAXES</option>
                <option value="BUSINESS LAW">BUSINESS LAW</option>
                <option value="BUSINESS ACCOUNTING">BUSINESS ACCOUNTING</option>
              </select>
              <input
                className="p-2 w-full"
                type="number"
                value={readtime}
                onChange={(e) => setReadtime(e.target.value)}
                min={1}
                max={30}
                placeholder="read time"
                required
              />
            </div>

            <input
              type="submit"
              value={"Publish"}
              readOnly
              className=" p-2 bg-blue-600 text-white font-poppins font-medium"
            />
          </form>
        </div>
      )}
    </section>
  );
}
