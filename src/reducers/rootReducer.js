const initialState = {
  cardStep: 1,
};

export const rootReducer = function (state = initialState, action) {
  switch (action.type) {
    case 'NEXT_STEP':
      return {
        ...state,
        cardStep: action.payload,
      };
    default:
      return {
        state,
      };
  }
};
