import React from "react";
import { BsSearch } from "react-icons/bs";
import { useRouter } from "next/router";

export default function Search() {
  const [search, setSearch] = React.useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.length > 0) {
      router.push(`/search?title=${search}`);
    } else {
      router.push(`/blogs`);
    }
  };

  return (
    <div className="w-full h-24 flex items-center">
      <form onSubmit={handleSearch} className="w-full">
        <label
          htmlFor="search"
          className="w-full h-full flex items-center justify-end relative"
        >
          <input
            type="search"
            placeholder="Search articles"
            className="w-full h-10 px-10 rounded-lg border border-slate-300 font-poppins p-2 focus:outline-none focus:ring-2 focus:ring-[#3166C9] focus:border-transparent"
            id="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <BsSearch className="absolute left-4" />
        </label>
      </form>
    </div>
  );
}
