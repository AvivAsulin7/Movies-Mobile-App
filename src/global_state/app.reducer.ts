import {SWITCH_TO_DARK, SWITCH_TO_LIGHT} from './constants';
import {colorsTheme} from '../theme/globalStyle';

export enum Theme {
  LIGHT = 'LIGHT',
  DARK = 'DARK',
}

interface initialStateType {
  theme: Object;
}

interface actionType {
  type: String;
  payload: Object;
}

const initialState: initialStateType = {
  theme: colorsTheme[Theme.DARK],
};

export default (state = initialState, action: actionType) => {
  switch (action.type) {
    case SWITCH_TO_DARK:
      return {
        ...state,
        theme: action.payload,
      };
    case SWITCH_TO_LIGHT:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};
