import "../styles/menu-item.css";

const MenuItem = (props) => {
  return (
    <div className="item-container">
      <img className="food-icon" src={props.imgSrc} alt="food-icon" />
      <div className="text-wrapper">
        <p className="food-title">{props.title}</p>
        <div className="food-price-availability-wrapper">
          <p className="food-price">$ {props.price}</p>
          <p className="food-availability">{props.availability}</p>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
