import {combineReducers} from "@reduxjs/toolkit";
import navigationReducer from './features/navigationSlice';
import colorReducer from './features/colorSlice';
import goodsReducer from './features/goodsSlice.js';
import productReducer from './features/productSlice';
import favoriteReducer from './features/favoriteSlice';
import cartReducer from './features/cartSlice';
import searchReducer from './features/searchSlice';
import statusReducer from './features/statusServerSlice';


export const rootReducer = combineReducers({
   navigation: navigationReducer,
   color: colorReducer,
   goods: goodsReducer,
   product: productReducer,
   favorite: favoriteReducer,
   cart: cartReducer,
   search: searchReducer,
   statusServer: statusReducer,
});