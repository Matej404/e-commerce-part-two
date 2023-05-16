import React from "react";
import { Button } from "@mui/material";

const ButtonComp = (props) => {

    const { children, isLoading, ...rest } = props;

    return (
        <Button {...rest}>
            {children}
        </Button>
    )
}

export default ButtonComp;