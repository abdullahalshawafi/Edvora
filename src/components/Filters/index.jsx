import Dropdown from "../Dropdown";
import "./style.css";

function Filters({ products, states, cities }) {
  return (
    <div className="filters-container">
      <div className="header">
        <span>Filters</span>
      </div>
      <div className="dropdowns">
        <Dropdown title="Products" list={products} />
        <Dropdown title="State" list={states} />
        <Dropdown title="City" list={cities} />
      </div>
    </div>
  );
}

export default Filters;
