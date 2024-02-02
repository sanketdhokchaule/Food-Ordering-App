import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        items : []
    },
    reducers : {
        addItem : (state, action) => {
            // mutatin the state over here
            state.items.push(action.payload);
        },
        deleteItem : (state, action) => {
            state.items.splice(action.payload,1);
        },
        clearCart : (state) => {
            state.items.length = 0;
        }
    }
});

export const {addItem, deleteItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;