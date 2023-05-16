import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Badge } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import ButtonComp from "../Button/ButtonComp";
import { makeStyles, } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    header: {
      justifyContent: 'space-between'
    }
  }));

const Header = () => {
    
      const classes = useStyles();

    return(
        <AppBar position="static">
            <Toolbar className={classes.header}>
                <Typography variant="h6" className={classes.title}>
                    Codecademy Shop
                </Typography>
                <div>
                    <ButtonComp color="inherit">Register</ButtonComp>
                    <IconButton aria-label="access shopping cart" color="inherit" >
                        <Badge color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Header;