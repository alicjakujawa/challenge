import { COUNTER } from '../constants/ActionTypes';

const initialState = {
  counterValue: 0,
};

export default function counter(state = initialState, action) {
  switch (action.type) {
    case COUNTER.INCREMENT:
      return {
        ...state,
        counterValue: state.counterValue + 1,
      };
    default:
      return state;
  }
}
