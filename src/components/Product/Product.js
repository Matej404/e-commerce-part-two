import React from "react";
import "./Product.css";

const Product = (props) => {
    const { data } = props;
   
    return(
        <div className="product">
            <img src="https://www.macmillandictionary.com/external/slideshow/full/141151_full.jpg" alt="name" />
            <h3>{data.name}</h3>
            <p>{data.description}</p>
        </div>
    );
};

export default Product;