"use client";

import { useSearchParams } from "next/navigation";
import React from "react";

export const ProductList = () => {
  const searchParams = useSearchParams();

  const pages = searchParams.getAll("category");

  return <div>{pages}</div>;
};
