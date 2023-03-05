import { configureStore } from "@reduxjs/toolkit";
import stockDataSlice from "./stockData";



const store = configureStore({
    reducer: {
        stockData: stockDataSlice.reducer
    }
})


export default store;