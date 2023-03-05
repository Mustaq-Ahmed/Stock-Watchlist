import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    stockDataList: []
}

const stockDataSlice = createSlice({
    name: 'stockData',
    initialState,
    reducers: {
        addToWatchlist(state, action) {
            state.stockDataList.push({ ...action.payload, id: Math.random().toString() });
        },
        removeFromWatchlist(state, action) {
            const newData = state.stockDataList.filter((stockData) => stockData.id !== action.payload.id);
            state.stockDataList = newData;
        }
    }
})

export const stockDataActions = stockDataSlice.actions;

export default stockDataSlice;