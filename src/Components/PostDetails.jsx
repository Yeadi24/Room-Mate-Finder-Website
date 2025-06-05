import React from "react";
import { useLoaderData } from "react-router";

const CoffeDetails = () => {
  const single = useLoaderData();
  const { coffe, price, category, quantity, details, url } = single;

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={url} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{coffe}</h1>
            <p className="py-6">{details}</p>
            <p className="py-4">Quantity: x{quantity}</p>
            <p className="py-4">${price}</p>
            <button className="btn btn-primary">Purchase</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeDetails;
