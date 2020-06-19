import { cardCopy } from '../copy/cardCopy.js';

const initialState = {
  cardStep: 1,
  copy: cardCopy[0],
};

export const rootReducer = function (state = initialState, action) {
  switch (action.type) {
    case 'NEXT_STEP':
      return {
        ...state,
        cardStep: action.payload,
      };
    case 'SET_COPY':
      return {
        ...state,
        copy: action.payload,
      };
    default:
      return state;
  }
};
