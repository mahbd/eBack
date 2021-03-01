export function calculateDiscount(carts) {
	let temPrice = 0;
	for (let i = 0; i < carts.length; i++) {
		temPrice +=
			(carts[i].product.price * carts[i].quantity * carts[i].product.offer) /
			100;
	}
	return temPrice.toFixed(2);
}
export function calculateTotal(carts) {
	let temPrice = 0;
	for (let i = 0; i < carts.length; i++) {
		temPrice += carts[i].product.price * carts[i].quantity;
	}
	return temPrice;
}
