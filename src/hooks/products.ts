import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

import { IProduct } from "../models";

export function useProducts() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fethProducts() {
    try {
      setError("");
      setLoading(true);
      const { data } = await axios.get<IProduct[]>(
        "https://fakestoreapi.com/products?limit=5"
      );
      setProducts(data);
      setLoading(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setLoading(false);
      setError(error.message);
    }
  }

  useEffect(() => {
    fethProducts();
  }, []);

  return { products, loading, error };
}
