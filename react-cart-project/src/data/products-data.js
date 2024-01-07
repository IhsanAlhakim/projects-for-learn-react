const getProductsData = async (dispatch) => {
  const response = await fetch(
    "https://course-api.com/react-useReducer-cart-project"
  );
  const data = await response.json();
  dispatch({ type: "GET_DATA", payload: data });
};

export default getProductsData;
