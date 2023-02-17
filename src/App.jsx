import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CategoryScreen from "./screens/CategoryScreen";
import CheckoutScreen from "./screens/CheckoutScreen";
import CartScreen from "./screens/CartScreen";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path={"/"} element={<HomeScreen />} />
        <Route path={"/category"} element={<CategoryScreen />} />
        <Route path={"/product"} element={<ProductScreen />} />
        <Route path={"/cart"} element={<CartScreen />} />
        <Route path={"/checkout"} element={<CheckoutScreen />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
