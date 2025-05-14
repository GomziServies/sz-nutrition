import React from "react";
import { Link } from "react-router-dom";

const CourseButtonsContainer = () => {
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
