import "./style.css";

function Card({ data }) {
  return (
    <div className="card-container">
      <div className="col-1 img-wrapper">
        <img src={data.image} alt="product" />
      </div>
      <p className="col-2 product-name">{data.product_name}</p>
      <p className="col-2 brand-name">{data.brand_name}</p>
      <p className="col-2 price">
        <span>$</span>
        {data.price}
      </p>
      <p className="col-1 location">
        {data.address.state} - {data.address.city}
      </p>
      <p className="col-2 date">
        <span>Date:</span> {data.date}
      </p>
      <p className="col-full">{data.discription}</p>
    </div>
  );
}

export default Card;
