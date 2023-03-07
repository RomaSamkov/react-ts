import React, { useContext } from "react";
import CreateProduct from "../components/CreateProduct";
import ErrorMessage from "../components/ErrorMessage";
import Loader from "../components/Loader";
import Modal from "../components/Modal";
import { Product } from "../components/Product";
import { ModalContext } from "../context/ModalContext";
import { useProducts } from "../hooks/products";
import { IProduct } from "../models";

export default function ProductsPage() {
  const { products, loading, error, addProduct } = useProducts();
  const { modal, open, close } = useContext(ModalContext);

  const createHandler = (product: IProduct) => {
    close();
    addProduct(product);
  };

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
      {modal && (
        <Modal title="Create New Product" onClose={close}>
          <CreateProduct onCreate={createHandler} />
        </Modal>
      )}
      <button
        onClick={open}
        className="fixed bottom-8 right-5 rounded-full bg-yellow-600
         text-white text-2xl px-4 py-2 hover:bg-yellow-400 flex justify-center align-middle"
      >
        Add Product
      </button>
    </div>
  );
}
