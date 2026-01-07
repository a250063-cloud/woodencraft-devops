import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import OrderDetails from "./pages/OrderDetails";
import ProductDetails from "./pages/ProductDetails";

// Admin
import AdminRoute from "./components/AdminRoute";
import ProductList from "./pages/admin/ProductList";
import ProductEdit from "./pages/admin/ProductEdit";

// Extra pages (your code)
import About from "./pages/About";
import OurStory from "./pages/OurStory";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className="min-h-screen bg-primary-50 text-gray-800">
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/search/:keyword" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/order/:id" element={<OrderDetails />} />

        {/* Your pages */}
        <Route path="/about" element={<About />} />
        <Route path="/ourstory" element={<OurStory />} />
        <Route path="/contact" element={<Contact />} />
      <Route path="/admin" element={<AdminRoute />}>
        <Route path="productlist" element={<ProductList />} />
        <Route path="product/create" element={<ProductEdit />} />
        <Route path="product/:id/edit" element={<ProductEdit />} />
      </Route>
    </Routes>
 

        {/* Admin routes */}
        {/* <Route path="/admin" element={<AdminRoute />}>
          <Route path="productlist" element={<ProductList />} />
          <Route path="product/:id/edit" element={<ProductEdit />} />
        </Route>
      </Routes> */}
    </div>
  );
};

export default App;
