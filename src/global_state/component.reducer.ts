import {DO_SOMETHING} from './constants';

interface initialStateType {
  something: object;
}

const initialState: initialStateType = {
  something: [],
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case DO_SOMETHING:
      return {
        ...state,
        something: action.payload,
      };

    default:
      return state;
  }
};
