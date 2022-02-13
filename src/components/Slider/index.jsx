import Card from "../Card";
import rightArrow from "../../assets/right-arrow.svg";
import "./style.css";
import { useRef } from "react";

function Slider({ data }) {
  const sliderRef = useRef();
  const scroll = (scrollOffset) => {
    sliderRef.current.scrollLeft += scrollOffset;
  };

  return (
    <div className="slider-container ">
      <div className="slider" ref={sliderRef}>
        {data?.map((item, idx) => (
          <Card key={idx} data={item} />
        ))}
      </div>
      <div className="arrow-wrapper" onClick={() => scroll(500)}>
        <img src={rightArrow} alt="right-arrow" />
      </div>
    </div>
  );
}

export default Slider;
