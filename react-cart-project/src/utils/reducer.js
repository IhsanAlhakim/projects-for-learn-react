const reducer = (state, action) => {
  if (action.type === "GET_DATA") {
    const { payload } = action;
    return {
      ...state,
      products: payload,
      total: 0,
    };
  }

  if (action.type === "ORDER_PRODUCT") {
    const { id, amount, price } = action.payload;
    if (amount > 0) {
      const index = state.products.findIndex((product) => product.id === id);
      const newAmount = amount - 1;
      const newProductData = {
        ...state.products[index],
        amount: newAmount,
      };
      state.products[index] = newProductData;
      const newTotal = state.total + parseInt(price);
      return {
        ...state,
        products: state.products,
        total: newTotal,
      };
    } else {
      return {
        ...state,
      };
    }
  }
};

export default reducer;
