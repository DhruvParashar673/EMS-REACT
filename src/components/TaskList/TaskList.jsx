import React from "react";

const TaskList = () => {
  return (
    <div id='tasklist' className="h-[55%] overflow-x-auto w-full  mt-10 rounded-xl py-5 flex items-center justify-start gap-5 flex-nowrap">
      <div className=" flex-shrink-0 h-full m-3 w-[300px] bg-red-400  rounded-xl p-5">
      <div className="flex justify-between">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded-between ">High</h3>
        <h4 className="text-sm">20 feb-2025</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold" >Make a youtube video</h2>
        <p className="text-sm mt-2">Create a video about the new features in React 18</p>
      </div>
      <div className=" flex-shrink-0 h-full m-3 w-[300px] bg-yellow-400  rounded-xl p-5">
        <div className="flex justify-between">
          <h3 className="bg-yellow-600 text-sm px-3 py-1 rounded-between ">Medium</h3>
          <h4 className="text-sm">22 feb-2025</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold" >Write a blog post</h2>
        <p className="text-sm mt-2">Write a blog post about the new features in React 18</p>
      </div>
      <div className=" flex-shrink-0 h-full m-3 w-[300px] bg-green-400  rounded-xl p-5">
        <div className="flex justify-between">
          <h3 className="bg-green-600 text-sm px-3 py-1 rounded-between ">Low</h3>
          <h4 className="text-sm">25 feb-2025</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold" >Create a presentation</h2>
        <p className="text-sm mt-2">Create a presentation about the new features in React 18</p>
      </div>
      <div className=" flex-shrink-0 h-full m-3 w-[300px] bg-pink-400  rounded-xl p-5">
        <div className="flex justify-between">
          <h3 className="bg-yellow-600 text-sm px-3 py-1 rounded-between ">Medium</h3>
          <h4 className="text-sm">22 feb-2025</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold" >Write a blog post</h2>
        <p className="text-sm mt-2">Write a blog post about the new features in React 18</p>
      </div>
    </div>
  );
};

export default TaskList;
