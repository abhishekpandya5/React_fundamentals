import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		items: []
	},
	reducers: {
		addItem: (state, action) => {
			state.items.push(action.payload);
		},
		removeItem: (state, action) => {
			state.items.pop();
			// const index = state.items.pop();
		},
		clearCart: (state) => {
			state.items = [];
		}
	}
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

// reducers contains a mapping of action and reducer funtion
// reducer function will modify the state
// action argument: the action which we will pass
// combine and export a single reducer

// cartSlice = {
//   actions: {
//     addItems,
//     removeItem,
//     clearCart
//   },
//   reducer: reducers
// }
