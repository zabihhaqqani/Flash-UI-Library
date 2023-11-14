import "./Image.css"
const Image = ({ imgSrc, name }) => {
  return <img className="responsive-image" src={imgSrc} alt={name} />;
};

export default Image;
