import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ActorType, MoviesType} from '../types/types';

export enum ScreensNames {
  SPLASHSCREEN = 'SplashScreen',
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
  SplashScreen: undefined;
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

export type SplashScreenNavigationProps = NativeStackScreenProps<
  RootStackNamesParams,
  ScreensNames.SPLASHSCREEN
>;

/// useRoute types

export type PersonScreenRouteProp = Readonly<{
  key: string;
  name: ScreensNames.PERSON;
  path?: string | undefined;
}> &
  Readonly<{
    params: ActorType;
  }>;

export type MovieScreenRouteProp = Readonly<{
  key: string;
  name: ScreensNames.PERSON;
  path?: string | undefined;
}> &
  Readonly<{
    params: MoviesType;
  }>;
