// Global State
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {colorsTheme} from './globalStyle';

export type AppColorType = keyof typeof colorsTheme.DARK;

// Apps State
export type Platform = 'ios' | 'android';

const iconTypes = {
  Ant: 'Ant',
  Feather: 'Feather',
  FontAwesome: 'FontAwesome',
  Foundation: 'Foundation',
  Fontisto: 'Fontisto',
  Ionicons: 'Ionicons',
  MaterialCommunityIcons: 'MaterialCommunityIcons',
  MaterialIcons: 'MaterialIcons',
};

export type TextVariant =
  | 'title18'
  | 'title20'
  | 'title24'
  | 'title32'
  | 'title40'
  | 'title48'
  | 'bodyRegular10'
  | 'bodyRegular12'
  | 'bodyRegular14'
  | 'bodyRegular16'
  | 'bodyRegular18'
  | 'bodyMedium10'
  | 'bodyMedium12'
  | 'bodyMedium14'
  | 'bodyMedium16'
  | 'bodyMedium18'
  | 'bodySemibold10'
  | 'bodySemibold12'
  | 'bodySemibold14'
  | 'bodySemibold16'
  | 'bodySemibold18'
  | 'bodyBold10'
  | 'bodyBold12'
  | 'bodyBold14'
  | 'bodyBold16'
  | 'bodyBold18';

export type ICON_TYPES = keyof typeof iconTypes;
// Navigation ################################################################################################################

export type RootNavigationProps = NavigationProp<RootStackParamList>;

type TransparentModals = 'ImagePicker' | 'UserProfile';

export type RootStackParamList = {
  ['HomeChat']?: ChatRouteProps;
  ['HomeGoal']?: GoalRouteProps;
  ['HomeExplore']: undefined;
  ['Goal']?: GoalRouteProps;
  ['Chat']?: ChatRouteProps;
  ['BackDoor']: undefined;
  ['SetApiKey']: undefined;
  ['Feedback']: undefined;
  ['Settings']: undefined;
  ['AppTransparentModal']: {
    type: TransparentModals;
    withDelete?: boolean;
    photoNumber?: number;
  };
};

export type GoalRouteProp = RouteProp<RootStackParamList, 'Goal'>;
export type ChatRouteProp = RouteProp<RootStackParamList, 'Chat'>;

export type ModalRouteProp = RouteProp<
  RootStackParamList,
  'AppTransparentModal'
>;

type GoalRouteProps = {
  goalId?: string;
  title?: string;
};

type ChatRouteProps = {
  chatId?: string;
  prompt?: string;
};

export type PreviewNavigationProps = {
  screen?: string;
  params: PreviewScreenParams;
};

type PreviewScreenParams = {
  screenIndex: number;
};

export interface ColorsModeType {
  PrimaryColor: string;
  ThirdColor: string;
  PrimaryBG: string;
  SecondaryBG: string;
  MainText: string;
  SecondaryText: string;
}

export interface ColorsThemeType {
  [x: string]: any;
  DARK: ColorsModeType;
  LIGHT: ColorsModeType;
}
