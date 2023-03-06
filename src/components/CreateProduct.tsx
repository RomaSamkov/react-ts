import axios from "axios";
import React, { useState } from "react";
import { productsData } from "../data/ProductsData";
import { IProduct } from "../models";
import ErrorMessage from "./ErrorMessage";

interface CreateProductProps {
  onCreate: (product: IProduct) => void;
}

export default function CreateProduct({ onCreate }: CreateProductProps) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");

    if (value.trim().length === 0) {
      setError("Please enter valid title");
      return;
    }

    productsData.title = value;

    const response = await axios.post<IProduct>(
      "https://fakestoreapi.com/products",
      productsData
    );

    onCreate(response.data);
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        className="border py-2 px-4 mb-2 w-full outline-none"
        placeholder="Enter product title"
        value={value}
        onChange={changeHandler}
      />
      {error && <ErrorMessage error={error} />}
      <button type="submit" className="py-2 px-4 border bg-yellow-400">
        Create
      </button>
    </form>
  );
}
