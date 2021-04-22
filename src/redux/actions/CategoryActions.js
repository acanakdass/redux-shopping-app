import * as actionTypes from './ActionTypes'




export function getCategoriesAction(categories) {
   return {
      type: actionTypes.GET_CATEGORIES,
      payload: categories
   }
}


export function getCategories() {
   return function (dispatch) {
      let url = 'https://fakestoreapi.com/products/categories';
      fetch(url)
         .then(res => res.json())
         .then(result => dispatch(getCategoriesAction(result)));
   }
}