import Card from "../Card";
import "./style.css";

function Slider({ data }) {
  return (
    <div className="slider">
      {data.map((item, idx) => (
        <Card key={idx} data={item} />
      ))}
    </div>
  );
}

export default Slider;
