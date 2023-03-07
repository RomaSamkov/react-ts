import React, { useState } from "react";
import { IProduct } from "../models";

interface ProductsProps {
  product: IProduct;
}

export function Product({ product }: ProductsProps) {
  const [details, setDetails] = useState(false);

  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2 mt-2 cursor-pointer">
      <img
        src={product.image}
        alt={product.title}
        className="w-1/6 rounded-lg"
      />
      <p>{product.title}</p>
      <p>{product.price}</p>
      <button
        onClick={() => setDetails((prev) => !prev)}
        className="py-2 px-4 border bg-yellow-400 rounded-xl hover:bg-yellow-600 hover:text-white"
      >
        {details ? "Hide details" : "Show details"}
      </button>
      {details && (
        <div>
          <p>{product.description}</p>
          <p className="font-bold">
            Rate: <span className="text-red-400">{product.rating.rate}</span>
          </p>
        </div>
      )}
    </div>
  );
}
