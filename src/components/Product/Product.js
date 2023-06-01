import React from "react";
import "./Product.css";

const Product = ({ name, description }) => {
   
    return(
        <div className="product">
            <img src="https://www.macmillandictionary.com/external/slideshow/full/141151_full.jpg" alt="name" />
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    );
};

export default Product;