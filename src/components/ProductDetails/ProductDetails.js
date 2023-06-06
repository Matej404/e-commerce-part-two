import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadProduct } from "../../store/products/products.actions";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  const product = products[productId];
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (!products[productId]) {
      (async function load() {
        await dispatch(loadProduct(productId))
      })();
    }
  }, [dispatch, products, productId]);

  /*
  useEffect(() => {
    dispatch(loadProduct(productId));
  }, [dispatch, productId]);
/*
  const handleAddToCart = () => {
    dispatch(addToCart(productId, quantity));
  };
  */

  if (!product) {
    return <div>Loading...</div>;
  }
 

  return (
    <div className="product-details">
      <img src="https://www.macmillandictionary.com/external/slideshow/full/141151_full.jpg" alt="name" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <label htmlFor="quantity">Quantity:</label>
      <input
        type="number"
        id="quantity"
        min="1"
        value={quantity}
        onChange={(e) => setQuantity(parseInt(e.target.value))}
      />
    </div>
  );
};

export default ProductDetails;
