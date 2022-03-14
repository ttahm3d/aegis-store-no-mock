import { Routes, Route } from "react-router-dom";
import Cart from "../pages/cart/Cart";
import Homepage from "../pages/homepage/Homepage";
import Products from "../pages/products/listing/Listing";
import Wishlist from "../pages/wishlist/Wishlist";
import NotFound from "../components/NotFound/NotFound";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/products" element={<Products />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
