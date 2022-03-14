import { Routes, Route } from "react-router-dom";
import Cart from "../pages/cart/Cart";
import Homepage from "../pages/homepage/Homepage";
import Products from "../pages/products/listing/Listing";
import Wishlist from "../pages/wishlist/Wishlist";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
};

export default Router;
