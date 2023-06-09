import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { loadProducts } from "../../store/products/products.actions";
import Product from "../Product/Product";
import "./Home.css";

const Home = () => {

    const dispatch = useDispatch();
    const products = useSelector(state => state.products);


    useEffect(() => {
        const load = async() => {
            await dispatch(loadProducts())
        }
        load();
    }, [dispatch])

    return(
        <div className="home">
          { products && Object.keys(products).length > 0 &&
            Object.keys(products).map((product) => (
                <Product
                key={products[product].id}
                name={products[product].name}
                description={products[product].description}
                productId={products[product].id}
              />
            ))
         }
        </div>
    )
}

export default Home;