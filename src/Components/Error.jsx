import React from "react";

const Error = () => {
  return (
    <>
      <div className="flex flex-col gap-8 justify-center items-center">
        <h1 className="text-[55px] font-bold text-center">
          Something Went Wrong !!!
        </h1>
        <img className="w-[800px] mb-20" src="notfound.png" alt="" />
      </div>
    </>
  );
};

export default Error;
