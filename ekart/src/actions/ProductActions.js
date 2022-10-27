import Constants from '../utilities/ActionConstants';
import ajaxHelper from '../utilities/ajaxHelper';

export function loadProducts(data) {
  return {
    type: Constants.LOAD_PRODUCTS,
    data
  }
}
/*
exports.SearchProductNames = function (data) {
  let nameRes = ajaxHelper.getProductNames('/api/getProductByNames?searchText='+data)
  return {
    type: Constants.SEARCH_PRODUCT_NAMES,
    data: nameRes
  }
};
*/
export function submitfeedback(data) {
  ajaxHelper.submitfeed('http://10.82.181.77:8097/addRating', {
    "comment": data.comment,
    "rating": data.rating,
    "userId": data.id,
    "prodId": data.product
  });
  return {
    type: "SUBMIT_FEEDBACK",
    data
  }
}

export function addtocart(data) {
  ajaxHelper.addcart('http://10.82.181.77:8097/addToCart', { "userId": data.id, "prodObj": data.product });
  return {
    type: "ADD_TO_CART",
    data: data.product
  }
}

export function mergetocart(data) {
  ajaxHelper.mergecart('http://10.82.181.77:8097/mergeToCart', { "userId": data.id, "prodObj": data.product });
  return {
    type: "MERGE_TO_CART",
    data: data.product
  }
}