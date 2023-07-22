import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import UserService from "../../services/user-service";
import "./ProductsPage.css";

export default function ProductsPage({ setDisplayProduct, sendOrder }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  });

  async function fetchProducts() {
    try {
      const product = await UserService.fetchProducts();
      setProducts(product);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div>
      <></>
      <h1 className="text-center mt-5 fw-bolder">Shop</h1>
      <div className="container">
        <div className="text-start">
          <Link to="/" className="account-path">
            Home
          </Link>{" "}
          / Shop
        </div>
        <hr className="mx-2 mt-3"></hr>
        <div>Filler Space</div>
        <div className="d-flex flex-wrap">
          {products.map((product) => {
            return (
              <div
                className="card p-3 me-2 mb-2 product-holder"
                key={product.id}
              >
                <Link
                  to="/products/display-product"
                  onClick={() => {
                    setDisplayProduct(product);
                  }}
                >
                  <button className="btn btn-primary add-cart-btn">
                    <i className="bi bi-bag-plus-fill"></i>
                  </button>
                </Link>

                <Link
                  to="/products/display-product"
                  onClick={() => {
                    setDisplayProduct(product);
                  }}
                >
                  <img
                    src={product.productImageUrl}
                    alt={product.productName}
                    width="174"
                    height="174"
                  ></img>
                </Link>

                <Link to="/products/display-product">
                  <button
                    className="fw-medium product-name text-start me-2"
                    onClick={() => {
                      setDisplayProduct(product);
                    }}
                  >
                    {product.productName}
                  </button>
                </Link>

                <div className="text-black-50">{product.category}</div>
                <div className="product-price fw-bold">
                  Price: R{product.price}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
