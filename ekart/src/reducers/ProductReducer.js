import Constants from '../utilities/ActionConstants';

export default function ProductReducer(state={}, action){
  switch (action.type) {
    case Constants.LOAD_PRODUCTS:
      return Object.assign({},state,{Products:action.data});
      break;
    case Constants.SEARCH_PRODUCT_NAMES:
      return Object.assign({},state,{productNames:action.data})
    case "SUBMIT_FEEDBACK":
          var cp = Object.assign({},state)
          cp.Products.forEach((item) => {
              if(item._id == action.data.product){
                  item.feedback.push({
  			"comment": action.data.comment,
  			"rating": action.data.rating,
  			"user_name": action.data.id})
              }
          });
          return cp
    default:
      return state;
  }
}
