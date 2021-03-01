import React, { useState, useEffect } from "react";
import { apiRoot } from "../constants";
import http from "../form/httpService";
import { Link, NavLink } from "react-router-dom";
import { calculateTotal, calculateDiscount } from "./helperOfNavbar";
function CartMenu() {
	const [categories, setCategories] = useState([]);
	const [carts, setCarts] = useState([]);
	const [tax, setTax] = useState(0);
	useEffect(() => {
		const getUrl = async () => {
			let res = await http.get(apiRoot + "/purchase/cart_list/");
			setCarts(res.data);
		};
		getUrl();
	}, [carts]);

	useEffect(() => {
		const getUrl = async () => {
			let res = await http.get(apiRoot + "/site-data/tax_rate/");
			setTax(res.data.data);
			res = await http.get(apiRoot + "/category/");
			setCategories(res.data);
		};
		getUrl();
	}, []);
	return (
		<div className="dropdown shopping-cart">
			<div
				className="dropdown-toggle"
				id="dropdownMenuButton"
				data-toggle="dropdown"
				aria-haspopup="true"
				aria-expanded="false"
			>
				<div className="cart-icon d-inline-block">
					<span className="icon-cart color-1" />
				</div>
				<div className="cart-info d-inline-block">
					<p>
						Shopping Cart
						<span>
							{carts.length} items - ${calculateTotal(carts)}
						</span>
					</p>
				</div>
			</div>
			<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
				<div className="cart-floating-box style-1" id="cart-floating-box">
					<div className="cart-items ">
						{carts.map((cart) => (
							<div key={cart.id} className="cart-float-single-item d-flex">
								<div className="cart-float-single-item-image">
									<img
										src={cart.product.images[0]}
										alt=""
										style={{ height: "50px", width: "50px" }}
									/>
								</div>
								<div className="cart-float-single-item-desc ">
									<p className="product-title line-1"> {cart.product.name}</p>
									<p className="price">
										{" "}
										<span className="count">{cart.quantity}</span> x $
										{cart.product.price}
									</p>
								</div>
								<span className="remove-item ">
									<i className="fa fa-check color-3" />
								</span>
							</div>
						))}
					</div>
					<div className="cart-calculation">
						<div className="calculation-details">
							<p className="total">
								Subtotal{" "}
								<span>
									$
									{(
										calculateTotal(carts) -
										calculateDiscount(carts) +
										(calculateTotal(carts) * tax) / 100
									).toFixed(2)}
								</span>
							</p>
						</div>
						<div className="floating-cart-btn text-center">
							<Link to="/checkout">Checkout</Link>
							<Link to="/cart">View Cart</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default CartMenu;
