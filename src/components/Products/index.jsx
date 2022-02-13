import Slider from "../Slider";
import "./style.css";

function Products({ products, productsNames }) {
  return (
    <div className="products-container">
      {productsNames.map((productName) => (
        <div className="product" key={productName}>
          <div className="product-name">
            <span>{productName}</span>
          </div>
          <Slider data={products[productName]} />
        </div>
      ))}
    </div>
  );
}

export default Products;
