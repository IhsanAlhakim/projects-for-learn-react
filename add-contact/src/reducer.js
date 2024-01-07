const reducer = (state, action) => {
  if (action.type === "ADD_PERSON") {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      isError: false,
    };
  }
  if (action.type === "NO_INPUT") {
    return {
      ...state,
      isError: true,
    };
  }
  if (action.type === "REMOVE_CONTACT") {
    console.log(action.payload);
    const newPeople = state.people.filter((person) => {
      return person.id !== action.payload;
    });
    console.log(newPeople);
    return {
      ...state,
      people: newPeople,
    };
  }
  throw new Error("No Matching Action Type");
};

export default reducer;
