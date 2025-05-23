import React, { useState, useRef, useEffect } from "react";
import { Helmet } from "react-helmet";
import NutritionHeader from "../../components/partials/Header/nutritionsheader";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../assets/css/animate.min.css";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/default.css";
import "../../assets/css/jquery-ui.css";
import "../../assets/css/magnific-popup.css";
import "../../assets/css/odometer.css";
import "../../assets/css/slick.css";
import "../../assets/css/style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import HomeNutritionFooter from "../../components/partials/Footer/footer";
import SelectableList from "../../components/SelectableList";
import ProductPhotoSection1 from "../../components/ProductPhotoSection1";
import { useLocation } from "react-router";
import CourseButtonsContainer from "../../components/CourseButtonsContainer";

function PureGoWheyProtein() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const ProductFlavor = searchParams.get("flavor");
  const ProductSize = searchParams.get("size");
  const canonicalUrl = window.location.href;
  const [currentProduct, setCurrentProduct] = useState("1kg-Mawa-Kulfi");
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeSize, setActiveSize] = useState("1kg");
  const [activeFlavor, setActiveFlavor] = useState("Mawa-Kulfi");
  const [opacity, setOpacity] = useState(1);
  const imageRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const productImages = {
    "1kg-Mawa-Kulfi": [
      "/assets/images/protein-mawa-kulfi-1kg/protein-mawa-kulfi-1kg-1.jpg",
      "/assets/images/protein-mawa-kulfi-1kg/protein-mawa-kulfi-1kg-2.jpg",
      "/assets/images/protein-mawa-kulfi-1kg/protein-mawa-kulfi-1kg-3.jpg",
      "/assets/images/protein-mawa-kulfi-1kg/protein-mawa-kulfi-1kg-4.jpg",
    ],
  };

  const products = [
    {
      key: "1kg-Mawa-Kulfi",
      data: {
        img: "/assets/images/protein-mawa-kulfi-1kg/protein-mawa-kulfi-1kg-1.jpg",
        name: "Whey Protein 1kg mawa-kulfi",
        price: "£40.00",
        old_price: "£60.00",
        size: "1 Kg",
        discount: "33.33%",
      },
    },
  ];

  const sizeOptions = [{ id: "1kg", label: "1kg" }];

  const flavorOptions = [{ id: "Mawa-Kulfi", label: "Mawa Kulfi" }];

  const handleSelectSize = (id) => {
    setOpacity(0.3);
    setTimeout(() => {
      setActiveSize(id);
      setCurrentProduct(`${id}-${activeFlavor}`);
      setActiveImageIndex(0);
      setOpacity(1);
    }, 500);
  };

  const handleSelectFlavor = (id) => {
    setOpacity(0.3);
    setTimeout(() => {
      setActiveFlavor(id);
      setCurrentProduct(`${activeSize}-${id}`);
      setActiveImageIndex(0);
      setOpacity(1);
    }, 500);
  };

  const currentProductData =
    products.find((product) => product.key === currentProduct)?.data || {};

  const addProductInCart = async (product_id) => {
    try {
      const isLogin = localStorage.getItem("fg_group_user_authorization");
      if (!isLogin) {
        return openModal();
      }
      let response;
      //  = await axiosInstance.post("/order-cart/add-item", {
      //   item_id: product_id,
      //   quantity: 1,
      //   item_type: "PURE_GO_MEAL_PRODUCT",
      // });
      if (response.data.response === "OK") {
        window.location.href = "/add-to-cart";
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (ProductFlavor && ProductSize) {
      setActiveFlavor(ProductFlavor);
      setActiveSize(ProductSize);
      setCurrentProduct(`${ProductSize}-${ProductFlavor}`);
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Top Whey Protein Powder for Muscle Growth & Recovery</title>
        <meta
          name="description"
          content="Find the best whey protein powder to support muscle growth, boost recovery, and enhance performance. Shop top picks now!"
        />
        <meta
          name="keyword"
          content="whey protein isolate, best protein powder for women, plant based protein powder, protein powder for weight loss, best protein powder for weight loss, isolate protein, whey isolate protein powder, best whey protein powder, best whey protein, mass gainer protein powder, best protein powder for muscle gain, protein, bcaa, eaa, isolate, concentrate, whey protein, protein powder, best protein powder, whey protein powder, whey isolate, plant based protein, bcaa powder"
        />
        <meta
          property="og:url"
          content="https://purego.gomzilifesciences.in/"
        />
        <meta
          property="og:image"
          content="https://www.purego.gomzilifesciences.in/assets/process.env.PUBLIC_URL + '/assets/images/nutrition-logo.png"
        />
        <link rel="canonical" href={{ canonicalUrl }} />
      </Helmet>
      {/* <LoaderComponent /> */}
      <NutritionHeader />
      <button className="scroll-top scroll-to-target" data-target="html">
        <i className="fas fa-angle-up"></i>
      </button>
      <main className="main-area fix">
        <section className="inner-shop-details-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div
                  className="product-image-container"
                  ref={imageRef}
                  style={{
                    opacity: opacity,
                    transition: "opacity 0.3s ease-in-out",
                  }}
                >
                  <ProductPhotoSection1
                    images={productImages[currentProduct]}
                    activeImageIndex={activeImageIndex}
                    setActiveImageIndex={setActiveImageIndex}
                  />
                </div>
              </div>
              <div className="col-lg-7 d-flex align-items-center">
                <div className="inner-shop-details-content">
                  <h4 className="title">{currentProductData.name}</h4>
                  <div className="inner-shop-details-meta">
                    <ul className="list-wrap">
                      <li>
                        Brands : <a href="shop.html">SZ Nutrition</a>
                      </li>
                      <li className="inner-shop-details-review">
                        <div className="rating">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <span>(4.5)</span>
                      </li>
                    </ul>
                  </div>
                  <div className="inner-shop-details-price">
                    <h2 className="price d-flex">
                      {currentProductData.price}/-
                      <span className="old-prices">
                        {currentProductData.old_price}/-
                      </span>
                    </h2>
                    <h5 className="stock-status">
                      {currentProductData.discount}
                    </h5>
                  </div>
                  <p>
                    SZ Nutrition Whey Protein mawa-kulfi 1kg delivers
                    high-quality protein to fuel muscle growth, enhance
                    recovery, and boost strength. With a rich mawa-kulfi flavor,
                    it's perfect for athletes and fitness enthusiasts looking to
                    optimize performance. Packed with essential amino acids, it
                    supports lean muscle development and faster post-workout
                    recovery. This protein blend helps you achieve your fitness
                    goals with great taste and superior nutrition.
                  </p>
                  <div>
                    <SelectableList
                      items={sizeOptions}
                      activeItem={activeSize}
                      onItemClick={handleSelectSize}
                      title="Size"
                    />
                  </div>
                  <div>
                    <SelectableList
                      items={flavorOptions}
                      activeItem={activeFlavor}
                      onItemClick={handleSelectFlavor}
                      title="Flavor"
                    />
                  </div>
                  <CourseButtonsContainer
                    currentProductData={currentProductData}
                    menuOpen={menuOpen}
                    setMenuOpen={setMenuOpen}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="product-desc-wrap">
                  <ul className="nav nav-tabs" id="myTabTwo" role="tablist">
                    <li className="nav-item">
                      <a
                        href="#"
                        className="nav-link active"
                        id="description-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#description"
                        role="tab"
                        aria-controls="description"
                        aria-selected="true"
                      >
                        Description
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContentTwo">
                    <div
                      className="tab-pane fade show active"
                      id="description"
                      role="tabpanel"
                      aria-labelledby="description-tab"
                    >
                      <div className="product-desc-content">
                        <h4 className="title">
                          The true strength of SZ Nutrition :
                        </h4>
                        <p>
                          SZ Nutrition Whey Protein is a Mixture of Whey
                          Isolate, Whey Concentrate, Skimmed Milk powder, Soy
                          protein isolate and plant protein. It is packed with
                          24g of 100% High Quality whey protein per serving (30g
                          scoop). The benchmark and premium source of protein
                          powders. Each serving delivers an excellent course of
                          naturally occurring essential amino acids and Branch
                          Chain Amino Acids (BCAA's). The protein found in
                          Performance Whey Blend help support the growth and
                          maintenance of lean muscle mass, ideal for everyone.
                        </p>
                        <h4 className="title">
                          BETTER INGREDIENTS = BETTER RESULTS
                        </h4>
                        <h4 className="title">SZ Nutrition the basics :</h4>
                        <ul>
                          <li>
                            NO COLORS: SZ Nutrition Whey Protein does not
                            contain any COLOR or PRESERVATIVES.
                          </li>
                          <li>
                            NO ADDED SUGAR: SZ Nutrition Whey Protein does not
                            Contain any Added SUGAR.
                          </li>
                          <li>
                            CONTAINS SUCRALOSE: It also contains SUCRALOSE as a
                            sweetening agent and may taste bitter due to its
                            natural properties.
                          </li>
                          <li>
                            TRUSTIFIED CERTIFIED: Blind Testing for Protein &
                            Macro Accuracy, Tested for Amino Spiking & Heavy
                            Metals.
                          </li>
                        </ul>
                        <h4 className="title">DIRECTIONS :</h4>
                        <p>
                          Add one rounded scoop (35 gm) of Whey Protein to 180 -
                          200 ml of your favorite liquid such as water, skim
                          milk or almond milk. Stir with a spoon or shake in a
                          shaker for 20-25 seconds until protein powder fully
                          dissolves.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="product-desc-wrap">
                  <ul className="nav nav-tabs" id="myTabTwo" role="tablist">
                    <li className="nav-item">
                      <a
                        href="#"
                        className="nav-link active"
                        id="description-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#description"
                        role="tab"
                        aria-controls="description"
                        aria-selected="true"
                      >
                        Additional information
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContentTwo">
                    <div
                      className="tab-pane fade show active"
                      id="information"
                      role="tabpanel"
                      aria-labelledby="information-tab"
                    >
                      <div className="product-desc-content">
                        <table className="table table-sm">
                          <tbody>
                            <tr>
                              <th scope="row">Energy (kcal)</th>
                              <td>113.47</td>
                            </tr>
                            <tr>
                              <th scope="row">Total Protein (g)</th>
                              <td>24.00</td>
                            </tr>
                            <tr>
                              <th scope="row">Carbohydrates (g)</th>
                              <td>4.02</td>
                            </tr>
                            <tr>
                              <th scope="row">Added Sugar (g)</th>
                              <td>0</td>
                            </tr>
                            <tr>
                              <th scope="row">Dietary Fibre (g)</th>
                              <td>1.78</td>
                            </tr>
                            <tr>
                              <th scope="row">Total Fat (g)</th>
                              <td>0.98</td>
                            </tr>
                            <tr>
                              <th scope="row">Cholesterol (g)</th>
                              <td>0.02</td>
                            </tr>
                            <tr>
                              <th scope="row">Potassium (mg)</th>
                              <td>158</td>
                            </tr>
                            <tr>
                              <th scope="row">Sodium (mg)</th>
                              <td>135.5</td>
                            </tr>
                            <tr>
                              <th scope="row">EAA</th>
                              <td>11.5</td>
                            </tr>
                            <tr>
                              <th scope="row">BCAA</th>
                              <td>5.87</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <HomeNutritionFooter />
    </>
  );
}

export default PureGoWheyProtein;
