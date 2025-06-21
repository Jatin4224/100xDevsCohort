import React from "react";

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

  return <div>Category: {category}</div>;
};

export default Products;
