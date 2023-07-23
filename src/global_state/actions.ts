import {colorsTheme} from '../theme/globalStyle';
import {SWITCH_TO_DARK, SWITCH_TO_LIGHT} from './constants';

export const switch_to_light = (value: string) => ({
  // ({}) == return {}
  type: SWITCH_TO_LIGHT,
  payload: value,
});

export const switch_to_dark = (value: string) => ({
  // ({}) == return {}
  type: SWITCH_TO_DARK,
  payload: value,
});
