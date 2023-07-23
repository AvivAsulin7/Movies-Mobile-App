import {SWITCH_TO_DARK, SWITCH_TO_LIGHT, Theme} from './constants';
import {colorsTheme} from '../theme/globalStyle';

interface ColorsTheme {
  [key: string]: {
    PrimaryColor: string;
    ThirdColor: string;
    PrimaryBG: string;
    SecondaryBG: string;
    MainText: string;
    SecondaryText: string;
  };
}

export interface initialStateType {
  theme: object;
}

interface actionType {
  type: string;
  payload: string;
}

const initialState: initialStateType = {
  theme: colorsTheme[Theme.DARK],
};

export default (state = initialState, action: actionType) => {
  switch (action.type) {
    case SWITCH_TO_DARK:
      return {
        ...state,
        theme: colorsTheme[action.payload],
      };
    case SWITCH_TO_LIGHT:
      return {
        ...state,
        theme: colorsTheme[action.payload],
      };
    default:
      return state;
  }
};
