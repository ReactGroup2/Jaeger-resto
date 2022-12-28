import "../styles/menu-item.css";

const MenuItem = (props) => {
  return (
    <div className="item-container">
      <img className="food-icon" src={props.imgSrc} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <p>{props.price}€</p>
    </div>
  );
};

export default MenuItem;
