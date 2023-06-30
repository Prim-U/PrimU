import React, { useState } from "react";

// Functions/methods
import { Link, useNavigate } from "react-router-dom";
import Spinner from "../../common/Spinner";
import FileService from "../../services/file-service";
import UserService from "../../services/user-service";
import { Product } from "../../models/Product";
import Navbar from "../../common/Navbar";
import { auth } from "../../firebase/firebase";

export default function PostProduct() {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [productLabel, setProductLabel] = useState(null);
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const navigate = useNavigate();

  async function onFormSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setButtonDisabled(true);
    try {
      const productImageUrl = await FileService.uploadProduct(
        productImage,
        (progress) => {
          console.log("Upload progress: ", progress);
        }
      );

      const productLabelUrl = await FileService.uploadProduct(
        productLabel,
        (progress) => {
          console.log("Upload progress: ", progress);
        }
      );
      const uid = auth.currentUser.uid;
      const product = new Product(
        productName,
        price,
        category,
        status,
        description,
        productImageUrl,
        productLabelUrl,
        uid,
        null
      );
      await UserService.addProduct(product);
      await UserService.addProductsPublic(product);
      navigate("/account/seller");
      alert("Product Added to Market. Returning to Previous Page . . .");
    } catch (error) {
      alert(error.message);
    }
    setLoading(false);
    setButtonDisabled(false);
  }

  function onProductImageSelected(e) {
    if (e.target.files.length) {
      setProductImage(e.target.files[0]);
    } else {
      setProductImage(null);
    }
  }

  function onProductLabelSelected(e) {
    if (e.target.files.length) {
      setProductLabel(e.target.files[0]);
    } else {
      setProductLabel(null);
    }
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className="p-5">
        <h1 className="mb-4 text-start" id="account-management">
          Post Products
        </h1>
        <form onSubmit={onFormSubmit}>
          <div className="mb-3">
            <label className="form-label">Product Name</label>

            <input
              type="text"
              className="form-control"
              placeholder="Enter name of product"
              required
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Product Price</label>

            <input
              type="number"
              min="1"
              step="any"
              className="form-control"
              placeholder="Enter price of product"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Category</label>

            <select
              className="form-select"
              required
              name="category"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option selected disabled>
                --Select category that applies to your product--
              </option>
              <option value="Essential Oils">Essential Oils</option>
              <option value="Carrier Oils">Carrier Oils</option>
              <option value="Hydrosols">Hydrosols</option>
              <option value="Butter">Butter</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Organic or Non-Organic</label>

            <select
              className="form-select"
              required
              name="status"
              onChange={(e) => setStatus(e.target.value)}
            >
              <option selected disabled>
                --Select organic or non-organic--
              </option>
              <option value="Organic">Organic</option>
              <option value="Non-Organic">Non-Organic</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Product Description</label>

            <textarea
              type="text"
              className="form-control mb-1"
              placeholder="Enter product description"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label">Upload Product Image</label>

            <input
              onChange={onProductImageSelected}
              type="file"
              className="form-control"
              multiple
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Upload Product Label</label>

            <input
              onChange={onProductLabelSelected}
              type="file"
              className="form-control"
              multiple
            />
          </div>

          <div className="d-grid gap-2">
            <button
              type="submit"
              className="btn btn-dark mt-3"
              id="updateButton"
              disabled={buttonDisabled}
            >
              {loading ? <Spinner extraClass="change-size" /> : "Post Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
