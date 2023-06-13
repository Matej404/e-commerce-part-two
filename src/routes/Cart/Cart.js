import React from "react";
import "./Cart.css";
import CartItemCard from "../../components/CartItemCard/CartItemCard";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";


const Cart = () => {
    const { items } = useSelector(state => state.cart);
    console.log("Cart items:", items); // Add this line for debugging


    return(
        <section className="cart-details-container">
          <div className="cart-info-container">
            <p style={{fontSize: 40, color: 'black'}}>Cart</p>
            <div className="cart-info-header">
                <div className="details">
                  <Typography variant="h6">
                    Product Details
                  </Typography>
                </div>
                <div className="qty">
                  <Typography variant="h6">
                    Qty
                  </Typography>
                </div>
                <div className="price">
                  <Typography variant="h6">
                    Total
                  </Typography>
                </div>
            </div>
            
            {
              items.map(item => (  
                <CartItemCard {...item} />
              ))
        }
            
          </div>
        </section>
    )
}

export default Cart;