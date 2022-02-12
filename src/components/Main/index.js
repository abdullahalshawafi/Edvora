import Filters from "../Filters";
import Brands from "../Brands";
import "./style.css";

function Main() {
  return (
    <div className="main-container">
      <Filters />
      <div>
        <h1>Edvora</h1>
        <h2>Products</h2>
        <Brands />
      </div>
    </div>
  );
}

export default Main;
