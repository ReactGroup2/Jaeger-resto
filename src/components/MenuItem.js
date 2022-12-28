const MenuItem = (props) => {
	return (
		<div>
			<img src={props.imgSrc} />
			<h3>{props.title}</h3>
			<p>{props.description}</p>
			<p>{props.price}€</p>
		</div>
	);
};

export default MenuItem;
