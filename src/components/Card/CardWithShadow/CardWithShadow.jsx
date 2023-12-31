import "../CardWithBadges/CardWithBadges.css"
const CardWithShadow = ({
  title,
  imgSrc,
  name,
  originalPrice,
  salePrice,
  discount,
}) => {
  return (
    <div className="shadow-card-container">
      <div className="card-container">
        <img src={imgSrc} alt={name} />
        <h4>{title}</h4>
        <div className="price-container">
          <span className="original-price">{originalPrice}</span>
          <span className="sale-price">{salePrice}</span>
          <span className="discount">{discount}</span>
        </div>
        <div>
          <button className="cart-btn">
            <i className="fas fa-shopping-cart"></i> ADD TO CART
          </button>
          <button className="buy-btn"><i className="fas fa-bolt"></i>  BUY NOW</button>
        </div>
      </div>
    </div>
  );
};

export default CardWithShadow;
