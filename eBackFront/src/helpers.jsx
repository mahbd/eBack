import {apiRoot} from "./constants";
import http from "./form/httpService";

export const getDataSUrl = async (suffix_url, attr = []) => {
  let res = await getAPI(apiRoot + '/site-data/sliders/', attr);
  return res;
}

const getAPI = async (url, attr) => {
  let res = await http.get(url);
  if (res.status === 200) {
    res = res.data;
    for (let i = 0; i < attr.length; i++) {
      res = res[attr[i]];
    }
    return [true, res]
  } else {
    return [false, res]
  }
}

export const addCart = async (product_id) => {
  await http.get(`${apiRoot}/purchase/cart_add/?product_id=${product_id}`);
}

export const removeCart = async (product_id) => {
  await http.get(`${apiRoot}/purchase/cart_remove/?product_id=${product_id}`);
}

export const sendOrder = async (product_id) => {
  await http.get(`${apiRoot}/purchase/order/?product_id=${product_id}`);
}

export const removeCartAll = async (product_id) => {
  await http.get(`${apiRoot}/purchase/cart_remove/?product_id=${product_id}&all=True`);
}

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
  return temPrice.toFixed(2);
}

export const calculateTax = async (carts) => {
  let res = await http.get(apiRoot + "/site-data/tax_rate/");
  return ((calculateTotal(carts) * res.data.data) / 100).toFixed(2)
}
