import React from "react";
import { IconButton } from "@mui/material";
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import RemoveCircleTwoToneIcon from '@mui/icons-material/RemoveCircleTwoTone';
import { TextField } from "@mui/material";
import { styled } from "@mui/system";


const Incrementer = ({ onIncrement, onDecrement, value }) => {
    const TextField = styled('input')({
        width: '2em',
        textAlign: 'center'
    });

    return(
        <div>
            <IconButton onClick={onDecrement}>
                <RemoveCircleTwoToneIcon />
            </IconButton>
            <TextField variant="outlined" defaultValue={value} />
            <IconButton onClick={onIncrement}>
                <AddCircleTwoToneIcon />
            </IconButton>
        </div>
    )
}

export default Incrementer;