import React from "react";
import "./Product.css";
import ButtonComp from "../Button/ButtonComp";
import { Link } from "react-router-dom";

const Product = ({ name, description, productId }) => {
   
    return(
        <div className="product">
            <img src="https://www.macmillandictionary.com/external/slideshow/full/141151_full.jpg" alt="name" />
            <h3>{name}</h3>
            <p>{description}</p>
            <ButtonComp
              component={Link}
              to={`/products/${productId}`}
              variant="outlined"
              color="primary"
            >View</ButtonComp>
        </div>
    );
};

export default Product;