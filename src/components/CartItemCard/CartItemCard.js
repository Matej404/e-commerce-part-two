import React, { useState } from "react";
import Incrementer from "../Incrementer/Incrementer";
import { Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { removeItem } from "../../store/cart/Cart.action";

const CartItemCard = (props) => {
    const { cartItemId ,name, price, qty} = props;
    const [quantity, setQuantity] = useState(qty);

    const dispatch = useDispatch();

    const handleIncrement = () => {
        setQuantity(quantity +1);
    }

    const handleDecrement = () => {
        if(quantity === 1) {
            return;
        }

        setQuantity(quantity - 1)
    }


    const remove = async() => {
        await dispatch(removeItem(cartItemId));
      }

    return(
        <div className="cart-item-container">
            <div className="cart-item-details">
              <img src="https://www.macmillandictionary.com/external/slideshow/full/141151_full.jpg" alt=""style={{height: '100%', paddingRight: '10px'}} />
              <p>{name}</p>
              <p>{price / 100}</p>
              <div className="cart-item-interact">
                <Incrementer
                  onDecrement={handleDecrement}
                  onIncrement={handleIncrement}
                  value={quantity}
                 />  
                 <Typography onClick={remove}>Remove Item</Typography>
              </div>
              <div className="cart-item-price">
                <p>Price Together</p>
              </div>
            </div>
        </div>
    )
}

export default CartItemCard;