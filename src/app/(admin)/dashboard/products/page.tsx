"use client";

import { useEffect, useState } from "react";

import { ProductForm } from "./_components/productForm";
import { ProductTable } from "./_components/table";

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  gvw: string;
  engine: string;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await fetch("/api/products");
    const data = await response.json();
    setProducts(data);
  };

  const createProduct = async (productData: Omit<Product, "id">) => {
    const response = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productData),
    });
    if (response.ok) {
      fetchProducts();
    }
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="mb-4 text-2xl font-bold">Products</h1>
      <div className="mb-4">
        <ProductForm onSubmit={createProduct} />
      </div>
      <ProductTable data={products} />
    </div>
  );
}
