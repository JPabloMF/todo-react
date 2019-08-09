import { TODO } from "../actionTypes";

const todoReducer = (state = {}, action) => {
  switch (action.type) {
    case TODO.REQUEST:
      return { ...state, action };
    case TODO.SUCCESS:
      return { ...state, action };
    case TODO.FAILED:
      return { ...state, action };
    default:
      return state;
  }
};

export default todoReducer;