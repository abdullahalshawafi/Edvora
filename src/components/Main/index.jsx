import { useEffect, useState } from "react";
import Filters from "../Filters";
import Products from "../Products";
import { getProducts } from "./services/products";
import "./style.css";

function Main() {
  const [products, setProducts] = useState({});
  const [productsNames, setProductsNames] = useState([]);

  useEffect(() => {
    getProducts().then(([productsNames, products]) => {
      setProducts(products);
      setProductsNames(productsNames);
    });
  }, []);

  return (
    <div className="main-container">
      <Filters />
      <div>
        <h1>Edvora</h1>
        <h2>Products</h2>
        <Products products={products} productsNames={productsNames} />
      </div>
    </div>
  );
}

export default Main;
