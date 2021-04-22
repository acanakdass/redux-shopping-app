import * as actionTypes from './ActionTypes'




export function getProductsAction(products) {
   return {
      type: actionTypes.GET_PRODUCTS_LIST,
      payload: products
   }
}


export function getProducts() {
   return function (dispatch) {
      let url = 'https://fakestoreapi.com/products';
      fetch(url)
         .then(res => res.json())
         .then(result => dispatch(getProductsAction(result)));
   }
}