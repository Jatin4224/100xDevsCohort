import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncgetproducts } from "../store/actions/ProductAction";
import { FaTrash } from "react-icons/fa"; // ✅ add this import

const Products = () => {
  const { products } = useSelector((state) => state.ProductReducer.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncgetproducts());
  }, [dispatch]);

  return (
    <>
      <ul className="space-y-6 gap-2 px-4 py-6 ">
        {products.map((product) => (
          <li
            key={product.id}
            className="bg-gray-700 rounded-lg p-4 flex justify-between items-center hover:bg-gray-600 transition-all duration-200 border-b-2 border-pink-600"
          >
            <div>
              <h2 className="text-xl font-semibold text-white">
                {product.title}
              </h2>
              <p className="text-gray-400 text-sm">{product.category}</p>
            </div>

            <button
              className="text-red-400 hover:text-red-700 transition-all duration-150"
              title="Delete Product"
            >
              <FaTrash size={18} />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Products;
