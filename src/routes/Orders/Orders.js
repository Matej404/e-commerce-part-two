import React from "react";
import './Orders.css';
import ButtonComp from "../../components/Button/ButtonComp";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../store/auth/Auth.actions";

function Orders() {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logoutUser());
      };

    return(
        <div className="orders">
            <ButtonComp variant="contained" onClick={handleLogout} >
                Logout
            </ButtonComp>
        </div>
    )
};

export default Orders;