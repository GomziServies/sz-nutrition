import React from "react";
import { Route, Routes } from "react-router-dom";

//User Account
import Home from "./pages/home";
import PureGoWheyProtein from "./pages/products/whey-protein-powder";
import NotFoundPage from "./pages/404";
import ScrollRestoration from "./components/scroll-restoration";
import AboutUs from "./pages/nutrition/about-us";
import ContactUs from "./pages/nutrition/contact-us";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Products */}
        <Route path="/whey-protein-powder" element={<PureGoWheyProtein />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/404" element={<NotFoundPage />} />
      </Routes>
      <ScrollRestoration />
    </>
  );
}

export default App;
