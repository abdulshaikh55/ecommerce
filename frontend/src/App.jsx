import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Shop } from "./pages/Shop";
import { ShopCategory } from "./pages/ShopCategory";
import { Products } from "./pages/Products";
import { Cart } from "./pages/Cart";
import { LoginSignup } from "./pages/LoginSignup";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="men" element={<ShopCategory category="men" />} />
          <Route path="women" element={<ShopCategory category="women" />} />
          <Route path="kids" element={<ShopCategory category="kids" />} />
          <Route path="product" element={<Products />}>
            <Route path=":productId" element={<Products />} />
          </Route>

          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
