import React from "react";

const Extra = () => {
  return (
    <div>
      <div className="hero bg-base-100 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse bg-base-300 rounded-3xl p-10">
          <img
            src="https://i.ibb.co/DD0SSTYf/photo3.jpg"
            className="max-w-sm rounded-lg shadow-2xl h-[300px] ml-14"
          />
          <div>
            <h1 className="text-5xl font-bold">New User Offers</h1>
            <p className="py-6 text-[22px]">
              Get 15% off your first use in our website for a limited time —
              upgrade your productivity, creativity, and fun while saving big
              today!
            </p>
            <button className="btn btn-primary">See Offer</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Extra;
