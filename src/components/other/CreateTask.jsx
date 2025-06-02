import React from "react";

const CreateTask = () => {
  return (
    <div className=" mt-10 bg-[#121212] text-white p-6">
      {/* Form */}
      <form className="bg-[#1e1e1e] p-6 rounded-xl my-auto mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-sm mb-1">Task Title</label>
              <input
                type="text"
                placeholder="Make a UI design"
                className="w-full bg-[#121212] text-white border border-gray-500 px-3 py-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Date</label>
              <input
                type="date"
                className="w-full bg-[#121212] text-white border border-gray-500 px-3 py-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Assign to</label>
              <input
                type="text"
                placeholder="employee name"
                className="w-full bg-[#121212] text-white border border-gray-500 px-3 py-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Category</label>
              <input
                type="text"
                placeholder="design, dev, etc"
                className="w-full bg-[#121212] text-white border border-gray-500 px-3 py-2 rounded"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-between">
            <div>
              <label className="block text-sm mb-1">Description</label>
              <textarea
                rows="8"
                className="w-full bg-[#121212] text-white border border-gray-500 px-3 py-2 rounded resize-none"
              />
            </div>
            <button
              type="submit"
              className="mt-4 bg-green-500 hover:bg-green-600 text-white py-2 rounded"
            >
              Create Task
            </button>
          </div>
        </div>
      </form>

      
    </div>
  );
};

export default CreateTask;
