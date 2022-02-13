import { useEffect, useState } from "react";
import Filters from "../Filters";
import Products from "../Products";
import { getProducts } from "./services/products";
import "./style.css";

function Main() {
  const [products, setProducts] = useState({});
  const [productsNames, setProductsNames] = useState([]);
  const [productsStates, setProductsStates] = useState([]);
  const [productsCities, setProductsCities] = useState([]);

  useEffect(() => {
    getProducts().then(
      ([productsNames, productsStates, productsCities, products]) => {
        setProducts(products);
        setProductsNames(productsNames);
        setProductsStates(productsStates);
        setProductsCities(productsCities);
      }
    );
  }, []);

  return (
    <div className="main-container">
      <Filters
        products={productsNames}
        states={productsStates}
        cities={productsCities}
      />
      <div>
        <h1>Edvora</h1>
        <h2>Products</h2>
        <Products products={products} productsNames={productsNames} />
      </div>
    </div>
  );
}

export default Main;
