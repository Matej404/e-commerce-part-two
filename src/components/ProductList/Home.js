import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { loadProducts } from "../../store/products/products.actions";
import Product from "../Product/Product";
import "./Home.css";


const Home = () => {
    const dispatch = useDispatch();
    const { products } = useSelector(state => state.products);

    useEffect(() => {
        async function load() {
            await dispatch(loadProducts)
        }
        load()
    }, [dispatch]);

    return(
        <div className="home">
            {products.map((product) => (
                <Product
                  key={product.id}
                  name={product.name}
                  description={product.description}
                 />
            ))}
        </div>
    )
}

export default Home;