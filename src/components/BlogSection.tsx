import React from "react";
import Author from "./Author";
import Blog from "./Blog";

const BlogSection = () => {
  return (
    <div className="w-[90%] m-auto">
      <div>
        <h1 className=" font-bold text-[30px] mb-10 border-b-2 border-gray-400 py-4">
          <span className="border-l-4 border-green-400 p-4"> Blogs</span>
        </h1>
      </div>
      <div className=" flex">
        <div className="w-[70%]">
          <Blog />
        </div>
        <div className="w-[30%]">
          <Author />
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
