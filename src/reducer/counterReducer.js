const initialState = {
  counter: 0
};

export default (counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE_COUNTER_ASYNC":
      return { counter: state.counter + 1 };
    case "DECREASE_COUNTER_ASYNC":
      return { counter: state.counter - 1 };
    default:
      return state;
  }
});
