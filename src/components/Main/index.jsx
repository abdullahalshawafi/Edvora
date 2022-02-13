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
  const [allProducts, setAllProducts] = useState({});
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
        setAllProducts(products);
        setProducts(products);
        setProductsNames(productsNames);
        setProductsStates(productsStates);
        setProductsCities(productsCities);
      }
    );
  }, []);

  useEffect(() => {
    const [, states, cities, newProducts] = filterByProduct(
      allProducts,
      selectedProduct
    );

    setProducts(newProducts);
    setProductsStates(states);
    setProductsCities(cities);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedProduct]);

  useEffect(() => {
    const [, states, cities, newProducts] = filterByState(
      allProducts,
      selectedState
    );

    setProducts(newProducts);
    setProductsStates(states);
    setProductsCities(cities);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedState]);

  useEffect(() => {
    const [, states, cities, newProducts] = filterByCity(
      allProducts,
      selectedCity
    );

    setProducts(newProducts);
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
        <Products products={products} />
      </div>
    </div>
  );
}

export default Main;
