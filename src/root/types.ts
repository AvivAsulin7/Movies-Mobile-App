import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ActorType, MoviesType} from '../types/types';

export enum ScreensNames {
  HOME = 'Home',
  MOVIE = 'Movie',
  PERSON = 'Person',
  SEARCH = 'Search',
  SETTINGS = 'Settings',
}

export enum NavigationType {
  NAVIGATION = 'navigation',
  ROUTE = 'route',
}

export type RootStackNamesParams = {
  Home: undefined;
  Movie: undefined;
  Person: undefined;
  Search: undefined;
  Settings: undefined;
};

//

export type HomeNavigationProps = NativeStackScreenProps<
  RootStackNamesParams,
  ScreensNames.HOME
>;

export type MovieNavigationProps = NativeStackScreenProps<
  RootStackNamesParams,
  ScreensNames.MOVIE
>;

export type PersonNavigationProps = NativeStackScreenProps<
  RootStackNamesParams,
  ScreensNames.PERSON
>;

export type SearchNavigationProps = NativeStackScreenProps<
  RootStackNamesParams,
  ScreensNames.SEARCH
>;

/// useRoute types

export type PersonScreenRouteProp = Readonly<{
  key: string;
  name: ScreensNames.PERSON;
  path?: string | undefined;
}> &
  Readonly<{
    params: {person: any};
  }>;

export type MovieScreenRouteProp = Readonly<{
  key: string;
  name: ScreensNames.PERSON;
  path?: string | undefined;
}> &
  Readonly<{
    params: {item: MoviesType};
  }>;
