'use client'
import React from 'react'
import { RootState } from "@/redux/store";
import {  useSelector } from "react-redux";
import Link from 'next/link';

const Header = () => {
    const count = useSelector((state: RootState) => state.cart.totalQuantity);
    return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md sticky top-0 z-50">
        <h1 className="text-3xl font-bold text-gray-800">Trendify</h1>

      <div className="relative">
        <Link href='/Cart'
          className="relative py-2 px-6 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-200"
        >
          Cart
        </Link>

        {count > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-sm font-semibold w-6 h-6 flex items-center justify-center rounded-full shadow">
            {count}
          </span>
        )}
      </div>
    </div>
  )
}

export default Header