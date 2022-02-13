import { useEffect, useState } from "react";
import Filters from "../Filters";
import Products from "../Products";
import {
  filterByCity,
  filterByProduct,
  filterByState,
  getProducts,
} from "./services/products";
import "./style.css";

function Main() {
  const [products, setProducts] = useState({});

  const [productsNames, setProductsNames] = useState([]);
  const [productsStates, setProductsStates] = useState([]);
  const [productsCities, setProductsCities] = useState([]);

  const [selectedProduct, setSelectedProduct] = useState("Products");
  const [selectedState, setSelectedState] = useState("State");
  const [selectedCity, setSelectedCity] = useState("City");

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

  useEffect(() => {
    const [names, states, cities, newProducts] = filterByProduct(
      products,
      selectedProduct
    );
    setProducts(newProducts);
    setProductsNames(names);
    setProductsStates(states);
    setProductsCities(cities);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedProduct]);

  useEffect(() => {
    const [names, states, cities, newProducts] = filterByState(
      products,
      selectedState
    );
    setProducts(newProducts);
    setProductsNames(names);
    setProductsStates(states);
    setProductsCities(cities);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedState]);

  useEffect(() => {
    const [names, states, cities, newProducts] = filterByCity(
      products,
      selectedCity
    );
    setProducts(newProducts);
    setProductsNames(names);
    setProductsStates(states);
    setProductsCities(cities);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCity]);

  return (
    <div className="main-container">
      <Filters
        products={productsNames}
        states={productsStates}
        cities={productsCities}
        selectedProduct={selectedProduct}
        selectedState={selectedState}
        selectedCity={selectedCity}
        setSelectedProduct={setSelectedProduct}
        setSelectedState={setSelectedState}
        setSelectedCity={setSelectedCity}
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
