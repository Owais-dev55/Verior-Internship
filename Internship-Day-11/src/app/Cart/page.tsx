"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Link from "next/link";
import { increment, decrement } from "@/redux/slices/CartSlice";
import Image from "next/image";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const total = useSelector((state: RootState) => state.cart.totalAmount);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-6 rounded-md shadow-md text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Your Cart is Empty
          </h2>
          <p className="text-gray-600 mb-6">
            Add some products to your cart to see them here.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            <Link href="/">Go to Products</Link>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="bg-white p-6 rounded-md shadow-md mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome to Trendify Cart Page
        </h1>
      </div>

      {/* Cart Items */}
      <div className="bg-white rounded-md shadow-md p-4 space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b pb-4"
          >
            {/* Product Info */}
            <div className="flex items-center gap-4">
              <Image
                src={item.image}
                alt="product"
                className="w-24 h-24 object-cover rounded-md"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center border rounded-md overflow-hidden">
                <button
                  onClick={() => dispatch(decrement(item.id))}
                  className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-lg"
                >
                  -
                </button>
                <span className="px-4">{item.quantity}</span>
                <button
                  onClick={() => dispatch(increment(item.id))}
                  className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-lg"
                >
                  +
                </button>
              </div>

              <p className="text-lg font-semibold text-gray-700">
                ${item.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="bg-white mt-6 p-6 rounded-md shadow-md flex flex-col sm:flex-row justify-between items-center">
        <p className="text-xl font-semibold text-gray-800">
          Total: ${total.toFixed(2)}
        </p>
        <button className="mt-4 sm:mt-0 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
