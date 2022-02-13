import Dropdown from "../Dropdown";
import "./style.css";

function Filters({ products, states, cities, ...props }) {
  const { selectedProduct, selectedState, selectedCity } = props;
  const { setSelectedProduct, setSelectedState, setSelectedCity } = props;

  return (
    <div className="filters-container">
      <div className="header">
        <span>Filters</span>
      </div>
      <div className="dropdowns">
        <Dropdown
          title={selectedProduct}
          list={products}
          setSelectedItem={setSelectedProduct}
        />
        <Dropdown
          title={selectedState}
          list={states}
          setSelectedItem={setSelectedState}
        />
        <Dropdown
          title={selectedCity}
          list={cities}
          setSelectedItem={setSelectedCity}
        />
      </div>
    </div>
  );
}

export default Filters;
