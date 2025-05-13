import React from "react";
import AddtoCartOffCourseCanvas from "./addtocartcoursecanvas.jsx";
import { Link } from "react-router-dom";

const CourseButtonsContainer = ({
  currentProductData,
  menuOpen,
  setMenuOpen,
}) => {
  const toggleMenu = async (currentProductData, e) => {
    try {
      const existingData = JSON.parse(
        localStorage.getItem("addItemInCart")
      ) || { products: [] };

      const isProductExists = existingData.products.some(
        (item) => item.name === currentProductData.name
      );

      if (!isProductExists) {
        existingData.products.push(currentProductData);
        localStorage.setItem("addItemInCart", JSON.stringify(existingData));
      }
      setMenuOpen(!menuOpen);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  return (
    <div className="col-12 p-0">
      <div className="m-0 w-100 py-2 pt-3 px-0">
        <div className="common-button">
          <div className="inner-shop-perched-info">
            <Link
              to="https://wa.me/+447801562772?text=I want to know more about the mawa kulfi whey protein product."
              className="cart-btn"
            >
              Inquiry Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseButtonsContainer;
