import { Route, Routes } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Landing from "./pages/landing/landing";
import Products from "./pages/products/products";
import ProductsDetails from "./pages/products-details/productsDetails";
import ShoppingCart from "./pages/shopping-cart/shoppingCart";
import Checkout from "./pages/checkout/checkout";
import OrderCompleted from "./pages/order-completed/orderCompleted";
import Contact from "./pages/contact/contact";
import About from "./pages/about/about";
import Faq from "./pages/faq/faq";
import AdminLogin from "./pages/admin/admin-login/admin-login";
import Dashboard from "./pages/admin/dashboard/dashboard";
import ProductList from "./pages/admin/product-list/productList";
import AddProducts from "./pages/admin/add-products/addProducts";
import Orders from "./pages/admin/orders/orders";
import SingleOrder from "./pages/admin/single-order/singleOrder";
import EditProduct from "./pages/admin/edit-products/editProducts";

const App = () => {
  const variants = {
    hidden: { opacity: 0, x: 200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -200 },
  };
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={Route}
        variants={variants} // Pass the variant object into Framer Motion
        initial="hidden" // Set the initial state to variants.hidden
        animate="enter" // Animated state to variants.enter
        exit="exit" // Exit state (used later) to variants.exit
        transition={{ type: "linear" }} // Set the transition to linear
        className="">
        <div className="App">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products-details" element={<ProductsDetails />} />
            <Route path="/shopping-cart" element={<ShoppingCart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-completed" element={<OrderCompleted />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/edit-product" element={<EditProduct />} />
            <Route path="/admin/orders" element={<Orders />} />
            <Route path="/admin/single-order" element={<SingleOrder />} />
            <Route path="/admin/product-list" element={<ProductList />} />
            <Route path="/admin/product-list/add-products" element={<AddProducts />} />
          </Routes>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default App;
