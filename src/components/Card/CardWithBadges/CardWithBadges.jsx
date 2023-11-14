import "./CardWithBadges.css";

const CardWithBadges = ({
  title,
  imgSrc,
  name,
  badge,
  originalPrice,
  salePrice,
  discount,
}) => {
  return (
    <div className="card-container">
      <span className="card-badge">{badge}</span>
      <img src={imgSrc} alt={name} />
      <h4>{title}</h4>
      <div className="price-container">
        <span className="original-price">{originalPrice}</span>
        <span className="sale-price">{salePrice}</span>
        <span className="discount">{discount}</span>
      </div>
      <div>
        <button className="cart-btn"><i className="fas fa-shopping-cart"></i> ADD TO CART</button>
        <button className="buy-btn">🗲 BUY NOW</button>
      </div>
    </div>
  );
};

export default CardWithBadges;
