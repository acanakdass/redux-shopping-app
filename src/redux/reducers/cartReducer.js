import * as actionTypes from '../actions/ActionTypes'
import initialState from './initialState'
import alertify from "alertifyjs"

export default function addToCart(state = initialState.cart, action) {
   switch (action.type) {
      case actionTypes.ADD_TO_CART:
         var addedItem = state.find(item => item.id == action.payload.id);
         var newState = [];
         if (addedItem) {
            newState = state.map(item => {
               if (item.id === action.payload.id) {
                  return Object.assign({}, addedItem, { quantity: addedItem.quantity + 1 })
               }
               return item;
            })
            return newState;
         } else {
            newState = [...state, { ...action.payload }];
            return newState;
         }

      default:
         return state;
   }
}