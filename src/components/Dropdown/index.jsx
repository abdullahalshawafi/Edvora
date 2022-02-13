import { useEffect, useState } from "react";
import downArrow from "../../assets/down-arrow.svg";
import "./style.css";

function Dropdown({ title, list, setSelectedItem }) {
  const [isOpen, toggle] = useState(false);

  useEffect(() => {
    const handleWindowClick = (event) => {
      if (event.target.id !== title && isOpen) {
        toggle(false);
      }
    };

    window.addEventListener("click", handleWindowClick);

    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  });

  return (
    <div
      className={`dropdown ${isOpen ? "dropdown-open" : ""}`}
      onClick={() => {
        toggle(!isOpen);
      }}
    >
      <div className="dropdown-header" id={title}>
        <span>{title}</span>
        <img src={downArrow} alt="down arrow" />
      </div>
      <div className="dropdown-menu">
        {list?.map((item, idx) => (
          <div
            key={idx}
            className="dropdown-item"
            onClick={() => {
              setSelectedItem(item);
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dropdown;
