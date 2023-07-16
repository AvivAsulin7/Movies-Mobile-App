import {SWITCH_TO_DARK, SWITCH_TO_LIGHT} from './constants';

type theme = object;

export const switch_to_light = (value: theme) => ({
  // ({}) == return {}
  type: SWITCH_TO_LIGHT,
  payload: value,
});

export const switch_to_dark = (value: theme) => ({
  // ({}) == return {}
  type: SWITCH_TO_DARK,
  payload: value,
});
