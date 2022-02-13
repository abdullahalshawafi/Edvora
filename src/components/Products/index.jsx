import Slider from "../Slider";
import "./style.css";

function Products({ products }) {
  return (
    <div className="products-container">
      {Object.keys(products)?.map((productName) => (
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
