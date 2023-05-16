import React from "react";
import { useField } from "formik";
import { TextField } from "@mui/material";

const TextFieldComp = (props) => {
    const { name, ...rest } = props;
    const [ field ] = useField({ name, type: name });

    return(
        <TextField
          {...field}
          {...rest}
          variant="outlined"
        />
    )
}

export default TextFieldComp;