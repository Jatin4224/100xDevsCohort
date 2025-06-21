import React from "react";
import { ProductList } from "./ProductList";

// ✅ Define props structure correctly
interface Props {
  searchParams: {
    category?: string;
  };
}

// ✅ Mark component as async only if needed
const Products = async ({ searchParams }: Props) => {
  const searchParam = await searchParams;
  const category = searchParam?.category || "default";

  return (
    <div>
      <ProductList />
      Category: {category}
    </div>
  );
};

export default Products;
