import { TODO } from "../actionTypes";

const todoReducer = (state = {}, action) => {
  switch (action.type) {
    case TODO.REQUEST:
      return { ...state, result: action };
    case TODO.SUCCESS:
      return { ...state, result: action };
    case TODO.FAILED:
      return { ...state, result: action };
    default:
      return state;
  }
};

export default todoReducer;