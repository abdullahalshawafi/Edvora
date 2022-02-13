import "./style.css";

function Filters() {
  return (
    <div className="filters-container">
      <div className="header">
        <span>Filters</span>
      </div>
      <div className="dropdowns">
        <div>Products</div>
        <div>State</div>
        <div>City</div>
      </div>
    </div>
  );
}

export default Filters;
