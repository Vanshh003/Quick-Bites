import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"

const appStore = configureStore({
    // this reducer is app's big reducer which consists of small reducers from different slices.. each slice will have its own reducer
    reducer: {
        cart: cartReducer,
    },

    // this is one reducer for the whole app.. which can contain multiple small reducers
});

export default appStore;