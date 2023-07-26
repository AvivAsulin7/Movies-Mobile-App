import {ColorsModeType} from '../theme/types';

export interface AppReducerType {
  AppReducer: initialStateType;
}

export interface initialStateType {
  theme: ColorsModeType;
}

export interface actionType {
  type: string;
  payload: string;
}
