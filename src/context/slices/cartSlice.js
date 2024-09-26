import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: JSON.parse(localStorage.getItem("cart")) || [],
};
export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            let index = state.value.findIndex(
                (i) => i._id == action.payload.id
            );

            if (index < 0) {
                state.value = [
                    ...state.value,
                    { ...action.payload, quantity: 1 },
                ];
            } else {
                state.value = state.value.map((item, inx) =>
                    inx === index
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            localStorage.setItem("cart", JSON.stringify(state.value));
        },
        removeFromCart: (state, action) => {
            state.value = state.value.filter(
                (item) => item.id !== action.payload.id
            );
            localStorage.setItem("cart", JSON.stringify(state.value));
        },
        decrementCart: (state, action) => {
            let index = state.value.findIndex(
                (i) => i._id === action.payload._id
            );
            state.value = state.value.map((item, inx) =>
                inx === index ? { ...item, quantity: item.quantity - 1 } : item
            );
            localStorage.setItem("cart", JSON.stringify(state.value));
        },
        deleteAllCart: (state) => {
            state.value = [];
            localStorage.removeItem("cart");
        },
    },
});

export const { addToCart, removeFromCart, decrementCart, deleteAllCart } =
    cartSlice.actions;
export default cartSlice.reducer;
