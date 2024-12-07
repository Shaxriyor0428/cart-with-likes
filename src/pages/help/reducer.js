export const intitalState = {
  count: 0,
  str: "Hello",
  wishList: [],
  cart: [],
  auth: null,
};

export const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "INC":
      return { ...state, count: state.count + 1 };
    case "DEC":
      return { ...state, count: state.count - 1 };
  }
};
