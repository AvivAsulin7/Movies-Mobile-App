import {DO_SOMETHING} from './constants';

type do_something = object;

export const do_something = (value: do_something) => ({
  // ({}) == return {}
  type: DO_SOMETHING,
  payload: value,
});
