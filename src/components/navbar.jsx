import React from "react";
import '../index.css';
import Search from "./search.jsx";
import Gallery from "./gallery.jsx";
const Navbar = () => {
  return (
    <nav className="bg-white-500 p-4">
      <div className="container mx-auto flex justify-start items-center gap-8 text-white">
        <a href="/" className="text-black text-lg font-semibold hover:underline hover:text-black">Home</a>
        <a href="/products" className="text-black text-lg font-semibold hover:underline hover:text-black">Products</a>
        <a href="/cart" className="text-black text-lg font-semibold hover:underline hover:text-black">Categories</a>
        <h2 className="text-lime-500 text-sm font-semibold uppercase pl-40 text-center">HerBeauty Store</h2>
        <Search />
       
      </div>
    </nav>
  );
};

export default Navbar;