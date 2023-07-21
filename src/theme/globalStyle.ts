import {StyleSheet, Dimensions, PixelRatio, Platform} from 'react-native';

// Get the screen dimensions
const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

// Calculate the base screen dimensions
const baseScreenWidth = 414; // iPhone 11 - 414x896
const baseScreenHeight = 896;

// Calculate the scaling factors
const widthScaleFactor =
  screenWidth / baseScreenWidth < 1 ? 1 : screenWidth / baseScreenWidth;
const heightScaleFactor =
  screenHeight / baseScreenHeight < 1 ? 1 : screenHeight / baseScreenHeight;

export const maxScale = Math.max(widthScaleFactor, heightScaleFactor);
export const minScale = Math.min(widthScaleFactor, heightScaleFactor);

// Convert width percentage to responsive pixel value
const convertWidthToPixel = (widthPercent: string | number): number => {
  const elemWidth =
    typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

// Convert height percentage to responsive pixel value
const convertHeightToPixel = (heightPercent: string | number): number => {
  const elemHeight =
    typeof heightPercent === 'number'
      ? heightPercent
      : parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

// Calculate a responsive font size based on the device size
const calculateResponsiveFontSize = (baseFontSize: number): number => {
  const deviceFactor =
    Math.sqrt(screenWidth * screenWidth + screenHeight * screenHeight) / 1000;
  return PixelRatio.roundToNearestPixel(baseFontSize * deviceFactor);
};

// Calculate a responsive spacing value based on the device size
const calculateResponsiveSpacing = (baseSpacing: number): number => {
  const deviceFactor =
    Math.sqrt(screenWidth * screenWidth + screenHeight * screenHeight) / 1000;
  return PixelRatio.roundToNearestPixel(baseSpacing * deviceFactor);
};

// Define the global styles
export const GS = StyleSheet.create({
  fullWidth: {
    width: '100%',
  },
  fullHeight: {
    height: '100%',
  },
  screenWidth: {
    width: screenWidth,
  },
  screenHeight: {
    height: screenHeight,
  },
  noBorder: {
    borderWidth: 0,
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  rowReverse: {
    flexDirection: 'row-reverse',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  displayNone: {
    display: 'none',
  },
  displayFlex: {
    display: 'flex',
  },
  overFlowHide: {
    overflow: 'hidden',
  },
  flexZero: {
    flex: 0,
  },
  flexOne: {
    flex: 1,
  },
  flexTwo: {
    flex: 2,
  },
  flexThree: {
    flex: 3,
  },
  flexGrow: {
    flexGrow: 1,
  },
  flexWrap: {
    flexWrap: 'wrap',
  },
  flexShrink: {
    flexShrink: 1,
  },
  noWrap: {
    flexWrap: 'nowrap',
  },
  absolute: {
    position: 'absolute',
  },
  width32: {
    width: convertWidthToPixel(32),
  },
  right8: {
    right: convertWidthToPixel(8),
  },
  left8: {
    left: convertWidthToPixel(8),
  },
  right16: {
    right: convertWidthToPixel(16),
  },
  left16: {
    left: convertWidthToPixel(16),
  },
  leftZero: {
    left: 0,
  },
  rightZero: {
    right: 0,
  },
  opacityZero: {
    opacity: 0,
  },
  opacity05: {
    opacity: 0.5,
  },
  sheetOpacity: {
    opacity: 1,
  },
  // borders
  borderRadius12: {
    borderRadius: 12,
  },
  borderRadius16: {
    borderRadius: 16,
  },
  borderRadius32: {
    borderRadius: 32,
  },
  borderRadiusMax: {
    borderRadius: 999,
  },
  border1: {
    borderWidth: 1,
  },
  // justify/align
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  justifyStart: {
    justifyContent: 'flex-start',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifySpaceBetween: {
    justifyContent: 'space-between',
  },
  justifySpaceAround: {
    justifyContent: 'space-around',
  },
  justifySpaceEvenly: {
    justifyContent: 'space-evenly',
  },
  alignSelfStart: {
    alignSelf: 'flex-start',
  },
  alignSelfEnd: {
    alignSelf: 'flex-end',
  },
  alignSelfCenter: {
    alignSelf: 'center',
  },
  alignCenter: {
    alignItems: 'center',
  },
  alignStart: {
    alignItems: 'flex-start',
  },
  alignEnd: {
    alignItems: 'flex-end',
  },
  // paddings
  padding2: {padding: convertWidthToPixel(2)},
  padding4: {padding: convertWidthToPixel(4)},
  padding8: {padding: convertWidthToPixel(8)},
  padding12: {padding: convertWidthToPixel(12)},
  padding16: {padding: convertWidthToPixel(16)},
  paddingHorizontalZero: {paddingHorizontal: 0},
  paddingHorizontal20: {paddingHorizontal: convertWidthToPixel(20)},
  paddingHorizontal24: {paddingHorizontal: convertWidthToPixel(24)},
  paddingHorizontal32: {paddingHorizontal: convertWidthToPixel(32)},
  paddingVerticalZero: {paddingVertical: 0},
  paddingVertical8: {paddingVertical: convertHeightToPixel(8)},
  paddingVertical12: {paddingVertical: convertHeightToPixel(12)},
  paddingVertical16: {paddingVertical: convertHeightToPixel(16)},
  paddingHorizontal64: {paddingHorizontal: convertWidthToPixel(64)},
  paddingLeft4: {
    paddingLeft: convertWidthToPixel(4),
  },
  paddingLeft8: {
    paddingLeft: convertWidthToPixel(8),
  },
  paddingLeft2: {
    paddingLeft: convertWidthToPixel(2),
  },
  paddingLeft1: {
    paddingLeft: convertWidthToPixel(1),
  },
  paddingLeft24: {
    paddingLeft: convertWidthToPixel(24),
  },
  paddingRight8: {
    paddingRight: convertWidthToPixel(8),
  },
  paddingRight12: {
    paddingRight: convertWidthToPixel(12),
  },
  paddingRight16: {
    paddingRight: convertWidthToPixel(16),
  },
  paddingRight24: {
    paddingRight: convertWidthToPixel(24),
  },
  paddingTop2: {paddingTop: convertHeightToPixel(2)},
  paddingTop4: {paddingTop: convertHeightToPixel(4)},
  paddingTop8: {paddingTop: convertHeightToPixel(8)},
  paddingTop16: {paddingTop: convertHeightToPixel(16)},
  paddingTop24: {paddingTop: convertHeightToPixel(24)},
  paddingBottom8: {paddingBottom: convertHeightToPixel(8)},
  paddingBottom4: {paddingBottom: convertHeightToPixel(4)},
  paddingBottom16: {paddingBottom: convertHeightToPixel(16)},
  paddingBottom1: {paddingBottom: convertHeightToPixel(1)},
  paddingBottom2: {paddingBottom: convertHeightToPixel(2)},
  paddingHorizontal8: {
    paddingHorizontal: convertWidthToPixel(8),
  },
  paddingHorizontal12: {
    paddingHorizontal: convertWidthToPixel(12),
  },
  paddingHorizontal16: {
    paddingHorizontal: convertWidthToPixel(16),
  },
  paddingHorizontal4: {
    paddingHorizontal: convertWidthToPixel(4),
  },
  paddingHorizontal6: {
    paddingHorizontal: convertWidthToPixel(6),
  },
  // Margin
  marginVertical1: {marginVertical: convertHeightToPixel(1)},
  marginVertical5: {marginVertical: convertHeightToPixel(5)},
  marginVertical4: {marginVertical: convertHeightToPixel(4)},
  marginVertical8: {marginVertical: convertHeightToPixel(8)},
  marginVertical16: {marginVertical: convertHeightToPixel(16)},
  marginTopAuto: {
    marginTop: 'auto',
  },
  marginLeftAuto: {
    marginLeft: 'auto',
  },
  marginSide8: {
    marginHorizontal: convertWidthToPixel(8),
  },
  marginLeft4: {
    marginLeft: convertWidthToPixel(4),
  },
  marginLeft8: {
    marginLeft: convertWidthToPixel(8),
  },
  marginLeft12: {
    marginLeft: convertWidthToPixel(12),
  },
  marginLeft16: {
    marginLeft: convertWidthToPixel(16),
  },
  marginLeft32: {
    marginLeft: convertWidthToPixel(32),
  },
  marginRight8: {
    marginRight: convertWidthToPixel(8),
  },
  marginRight16: {
    marginRight: convertHeightToPixel(16),
  },
  marginRight32: {
    marginRight: convertHeightToPixel(32),
  },
  marginHorizontal0: {
    marginHorizontal: convertWidthToPixel(2),
  },
  marginHorizontal4: {
    marginHorizontal: convertWidthToPixel(4),
  },
  marginHorizontal8: {
    marginHorizontal: convertWidthToPixel(8),
  },
  marginHorizontal6: {
    marginHorizontal: convertWidthToPixel(6),
  },
  marginHorizontal2: {
    marginHorizontal: convertWidthToPixel(2),
  },
  marginHorizontal16: {
    marginHorizontal: convertWidthToPixel(16),
  },
  marginHorizontal24: {
    marginHorizontal: convertWidthToPixel(24),
  },
  marginBottom2: {
    marginBottom: convertHeightToPixel(2),
  },
  marginBottom4: {
    marginBottom: convertHeightToPixel(4),
  },
  marginBottom6: {
    marginBottom: convertHeightToPixel(6),
  },
  marginBottom8: {
    marginBottom: convertHeightToPixel(8),
  },
  marginBottom12: {
    marginBottom: convertHeightToPixel(12),
  },
  marginBottom16: {
    marginBottom: convertHeightToPixel(16),
  },
  marginBottom24: {
    marginBottom: convertHeightToPixel(24),
  },
  marginBottom32: {
    marginBottom: convertHeightToPixel(32),
  },
  marginBottom40: {
    marginBottom: convertHeightToPixel(40),
  },
  marginTop2: {
    marginTop: convertHeightToPixel(2),
  },
  marginTop4: {
    marginTop: convertHeightToPixel(4),
  },
  marginTop8: {
    marginTop: convertHeightToPixel(8),
  },
  marginTop16: {
    marginTop: convertHeightToPixel(16),
  },
  marginTop24: {
    marginTop: convertHeightToPixel(24),
  },
  marginTop32: {
    marginTop: convertHeightToPixel(32),
  },
  marginTop64: {
    marginTop: convertHeightToPixel(64),
  },
  margin1: {
    margin: convertWidthToPixel(1),
  },
  // texts
  removeFontPadding: {
    includeFontPadding: false,
    padding: 0,
    paddingHorizontal: 0,
  },
  underline: {textDecorationLine: 'underline'},
  textAlignVerticalCenter: {
    textAlignVertical: 'center',
  },
  textAlignRight: {
    textAlign: 'right',
  },
  textAlignLeft: {
    textAlign: 'left',
  },
  textAlignCenter: {
    textAlign: 'center',
  },
  text14: {
    fontSize: calculateResponsiveFontSize(14),
  },
  text16: {
    fontSize: calculateResponsiveFontSize(16),
  },
  text18: {
    fontSize: calculateResponsiveFontSize(18),
  },
  text19: {
    fontSize: calculateResponsiveFontSize(19),
  },
  text20: {
    fontSize: calculateResponsiveFontSize(20),
  },
  text21: {
    fontSize: calculateResponsiveFontSize(21),
  },
  text22: {
    fontSize: calculateResponsiveFontSize(22),
  },
  text24: {
    fontSize: calculateResponsiveFontSize(24),
  },
  text28: {
    fontSize: calculateResponsiveFontSize(28),
  },
  text32: {
    fontSize: calculateResponsiveFontSize(32),
  },
  fontSemiBold: {
    fontFamily: 'Urbanist-SemiBold',
  },
  fontBold: {
    fontFamily: 'Urbanist-Bold',
  },
  fontMedium: {
    fontFamily: 'Urbanist-Medium',
  },
  fontRegular: {
    fontFamily: 'Urbanist-Regular',
  },
  title48: {
    fontFamily: 'Urbanist-Bold',
    fontSize: calculateResponsiveFontSize(48),
  },
  title40: {
    fontFamily: 'Urbanist-Bold',
    fontSize: calculateResponsiveFontSize(40),
  },
  title32: {
    fontFamily: 'Urbanist-Bold',
    fontSize: calculateResponsiveFontSize(32),
  },
  title24: {
    fontFamily: 'Urbanist-Bold',
    fontSize: calculateResponsiveFontSize(24),
  },
  title20: {
    fontFamily: 'Urbanist-Bold',
    fontSize: calculateResponsiveFontSize(20),
  },
  title18: {
    fontFamily: 'Urbanist-Bold',
    fontSize: calculateResponsiveFontSize(18),
  },
  bodyRegular18: {
    fontFamily: 'Urbanist-Regular',
    fontSize: calculateResponsiveFontSize(18),
  },
  bodyRegular16: {
    fontFamily: 'Urbanist-Regular',
    fontSize: calculateResponsiveFontSize(16),
  },
  bodyRegular14: {
    fontFamily: 'Urbanist-Regular',
    fontSize: calculateResponsiveFontSize(14),
  },
  bodyRegular12: {
    fontFamily: 'Urbanist-Regular',
    fontSize: calculateResponsiveFontSize(12),
  },
  bodyRegular10: {
    fontFamily: 'Urbanist-Regular',
    fontSize: calculateResponsiveFontSize(10),
  },
  bodyMedium18: {
    fontFamily: 'Urbanist-Medium',
    fontSize: calculateResponsiveFontSize(18),
  },
  bodyMedium16: {
    fontFamily: 'Urbanist-Medium',
    fontSize: calculateResponsiveFontSize(16),
  },
  bodyMedium14: {
    fontFamily: 'Urbanist-Medium',
    fontSize: calculateResponsiveFontSize(14),
  },
  bodyMedium12: {
    fontFamily: 'Urbanist-Medium',
    fontSize: calculateResponsiveFontSize(12),
  },
  bodyMedium10: {
    fontFamily: 'Urbanist-Medium',
    fontSize: calculateResponsiveFontSize(10),
  },
  bodySemibold18: {
    fontFamily: 'Urbanist-SemiBold',
    fontSize: calculateResponsiveFontSize(18),
  },
  bodySemibold16: {
    fontFamily: 'Urbanist-SemiBold',
    fontSize: calculateResponsiveFontSize(16),
  },
  bodySemibold14: {
    fontFamily: 'Urbanist-SemiBold',
    fontSize: calculateResponsiveFontSize(14),
  },
  bodySemibold12: {
    fontFamily: 'Urbanist-SemiBold',
    fontSize: calculateResponsiveFontSize(12),
  },
  bodySemibold10: {
    fontFamily: 'Urbanist-SemiBold',
    fontSize: calculateResponsiveFontSize(10),
  },
  bodyBold26: {
    fontFamily: 'Urbanist-Bold',
    fontSize: calculateResponsiveFontSize(26),
  },
  bodyBold18: {
    fontFamily: 'Urbanist-Bold',
    fontSize: calculateResponsiveFontSize(18),
  },
  bodyBold16: {
    fontFamily: 'Urbanist-Bold',
    fontSize: calculateResponsiveFontSize(16),
  },
  bodyBold14: {
    fontFamily: 'Urbanist-Bold',
    fontSize: calculateResponsiveFontSize(14),
  },
  bodyBold12: {
    fontFamily: 'Urbanist-Bold',
    fontSize: calculateResponsiveFontSize(12),
  },
  bodyBold10: {
    fontFamily: 'Urbanist-Bold',
    fontSize: calculateResponsiveFontSize(10),
  },
  bold: {
    fontWeight: 'bold',
  },
  weight500: {
    fontWeight: '500',
  },
  weight400: {
    fontWeight: '400',
  },
  baseShadow: {
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 40,
  },
  baseShadow2: {
    borderRadius: 400,
    height: 300,
    width: 320,
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 40,
    shadowOpacity: 1,
    elevation: 12,
  },
  // colors
  bgBlack: {
    backgroundColor: 'rgb(38 38 38)',
  },
  bgRed: {
    backgroundColor: 'red',
  },
  bgTrans: {
    backgroundColor: 'transparent',
  },
  grey: {
    color: 'color: rgb(163 163 163)',
  },
  white: {
    color: '#fff',
  },
  // components
  dividerStyle: {
    height: 1,
    width: '100%',
    backgroundColor: '#3b3b3b',
  },
  modalContentContainer: {
    flex: 1,
    width: screenWidth,
    borderTopEndRadius: 36,
    borderTopStartRadius: 36,
    bottom: 0,
    backgroundColor: 'white',
  },
  modalSlide: {
    marginTop: calculateResponsiveSpacing(12),
    alignSelf: 'center',
    height: calculateResponsiveSpacing(3),
    borderRadius: 2,
    width: convertWidthToPixel(44),
  },
  editComponent: {
    borderWidth: calculateResponsiveSpacing(3),
    borderColor: 'red',
    borderStyle: 'dashed',
  },
  width100: {width: 100},
  removeInputBorderAndPadding: {
    paddingBottom: Platform.select({
      ios: convertHeightToPixel(4),
      android: 0,
    }),
    borderWidth: 0,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  sheetHandle: {
    height: convertHeightToPixel(4),
    borderRadius: 2,
    width: convertWidthToPixel(36),
  },
  borderRight: {
    borderRightWidth: 2,
    borderRightColor: 'rgb(163 163 163)',
  },
  baseBorder: {
    borderWidth: 1,
    borderColor: 'rgb(163 163 163)',
  },
});

export const Colors = {
  White: '#FFF',
  Black: '#000',
  Error: '#dc2626',
  Green: '#00FF00',
};

export const colorsTheme = {
  DARK: {
    PrimaryColor: 'rgb(163 163 163)', // Vivid green
    ThirdColor: '#D50000',
    PrimaryBG: 'rgb(38 38 38)', // Dark blue
    SecondaryBG: 'rgb(64 64 64)', // Tea
    MainText: '#fff', // Vivid yellow
    SecondaryText: '#fff', // Mint green
  },
  LIGHT: {
    PrimaryColor: '#4b5563', // Lime green
    PrimaryBG: '#C5DFF8', // Off-white
    SecondaryBG: '#7895CB', // Light gray
    ThirdColor: '#001C30',
    MainText: '#111827', // Black
    SecondaryText: '#526D82', // Medium gray
  },
};
