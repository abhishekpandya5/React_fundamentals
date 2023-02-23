import { IMG_CDN_URL } from "../constant";

const CartItem = ({ name, price, cloudinaryImageId, description }) => {
	return (
		<div className="card w-64 mb-8 bg-gray-100 rounded-md p-2">
			<img className="mb-2" src={IMG_CDN_URL + cloudinaryImageId} />
			<h2 className="font-bold">{name}</h2>
			<div>{description}</div>
			<div className="text-sm">Rupees {price / 100}</div>
		</div>
	);
};

export default CartItem;
