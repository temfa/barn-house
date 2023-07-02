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
          </Routes>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default App;
