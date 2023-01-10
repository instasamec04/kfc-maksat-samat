import React from "react";
import Navbar from "./components/Navbar/Navbar";
import AuthContextProvider from "./contexts/authContext";
import CartContextProvider from "./contexts/cartContext";
import ProductsContextProvider from "./contexts/productsContext";
import MainRoutes from "./routes/MainRoutes";
import Footer from "./components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <AuthContextProvider>
      <ProductsContextProvider>
        <CartContextProvider>
          <Navbar />
          <MainRoutes />
          <Footer />
        </CartContextProvider>
      </ProductsContextProvider>
    </AuthContextProvider>
  );
};

export default App;
