import {SWITCH_TO_DARK, SWITCH_TO_LIGHT, Theme} from './constants';
import {colorsTheme} from '../theme/globalStyle';
import {ColorsModeType} from '../theme/types';

export interface initialStateType {
  theme: ColorsModeType;
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
