// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   useWindowDimensions,
//   Image,
//   SafeAreaView,
//   TextStyle,
//   ImageStyle,
//   PixelRatio,
//   ViewStyle, FlatList
// } from 'react-native';
// import { NativeStackScreenProps } from '@react-navigation/native-stack';
// //import { DrawerActions } from "@rea";
// import { RootStackParamList } from '@routes/RootStackParams';
// import {
//   TabView,
//   SceneMap,
//   TabBar,
//   TabBarIndicator,
//   SceneRendererProps,
// } from 'react-native-tab-view';
// //import { IMNavigationBar } from '@dassubhra2/github-package-navigationbar'

// //mport IMNavigationBar from '../../dff_library/ui_components/components/NavigationBar/IMNavigationBar';

// import ProfileScreen from './ProfileScreen';
// import DashboardScreen from './DashboardScreen';
// //import { Images } from "../themes/Images";
// import SampleScreenOne from './SampleScreenOne';
// import SampleScreenTwo from './SampleScreenTwo';
// import SampleScreenThree from './SampleScreenThree';
// import SampleScreenFour from './SampleScreenFour';
// //import IMTabBar from "../Views/IMTabBar";
// import typography from '@atoms/typography';
// import TopNav from '../assets/TopNav.svg';
// import TopNav1 from '../assets/TopNav1.svg';
// import TopNav2 from '../assets/TopNav2.svg';
// import TabEnabled from '../assets/TabEnabled.svg';
// import BankIcon from '../assets/BankIcon.svg';
// import BankIcon01 from '../assets/BankIcon01.svg';
// import Done from '../assets/Done.svg'
// import Error from '../assets/Error.svg'
// import {
//   actuatedNormalizeHeight,
//   actuatedNormalizeWidth,
// } from '../../../../src/utils/utility';
// //import IMIndicativeDrawers from "../Views/IMDrawers/IMIndicativeDrawers";
// import { IMIndicativeDrawers, IMDefaultDrawers } from '../../dff_library/ui_components/components/Drawers/IMDrawers';

// //import { IMIm, IMultiSelectionCheckbox } from '@dffComponents/Drawers';

// import DrawerSuccess from '../assets/Drawer_Success.svg';
// import Warning from '../assets/Notify_alt.svg';
// import IMTabBar from '@dffComponents/TabBar/IMTabBar';
// type HomeScreenNavigationProps = NativeStackScreenProps<
//   RootStackParamList,
//   'Home'
// >;
// const TAB_MARGIN = 32;

// const HomeScreen = (props: HomeScreenNavigationProps) => {
//   const { navigation } = props;
//   const imageSourceAction = require('../assets/close.png');
//   const imageSourceMenu = require('../assets/menu.png');
//   const imageSourceTab = require('../assets/pay.png');
//   const fontScale = PixelRatio.getFontScale();
//   const baseFontSize = 16;
//   const fontSize = baseFontSize * fontScale;
//   const imageSource = require('../assets/back.png');
//   const [modalVisible, setModalVisible] = useState(false);
//   const [errModalVisible, setErrModalVisible] = useState(false);
//   const [successModalVisible, setSuccessModalVisible] = useState(false);
//   const [defaultModalVisible, setDefaultModalVisible] = useState(false);
//   const handleOpenErrModal = () => {
//     setErrModalVisible(true);
//   };
//   const handleCloseErrModal = () => {
//     setErrModalVisible(false);
//   };
//   const handleOpenSuccessModal = () => {
//     setSuccessModalVisible(true);
//   };
//   const handleCloseSuccessModal = () => {
//     setSuccessModalVisible(false);
//   };
//   const handleOpenModal = () => {
//     setModalVisible(true);
//   };
//   const handleCloseModal = () => {
//     setModalVisible(false);
//   };
//   const handleDefaultOpenModal = () => {
//     setDefaultModalVisible(true);
//   };
//   const handleDefaultCloseModal = () => {
//     setDefaultModalVisible(false);
//   };
//   const handleBackButton = () => {
//     navigation.goBack();
//   };
//   const handlePressButton = () => {
//     navigation.navigate('Profile');
//   };
//   const handlePressActionButton = () => {
//   };
//   const handlePressMenuButton = () => {
//   };
//   const gradientColor = ['#EF8C24', '#F06837'];
//   const textStyle: TextStyle = {
//     color: 'white',
//     // fontSize: 20,
//     flexWrap: 'wrap',
//     paddingLeft: 10,
//     minHeight: 40,
//     //fontWeight: '700',
//   };
//   const headerLeftBtnStyle: ViewStyle = {
//     width: 32,
//     height: 32,
//     alignSelf: 'center',
//   };

//   const headerActionBtnStyle: ViewStyle = {
//     width: 32,
//     height: 32,
//     alignSelf: 'center',
//   };
//   const headerMenuBtnStyle: ViewStyle = {
//     width: 32,
//     height: 32,
//     alignSelf: 'center',
//   };
//   const headerLeftProps = {
//     onPress: handleBackButton,
//     imageSource: <TopNav2 />,
//     //  style: headerLeftBtnStyle
//   };

//   const headerActionProps = {
//     onPress: handlePressActionButton,
//     imageSource: <TopNav />,
//     //  style: headerActionBtnStyle
//   };
//   const headerMenuProps = {
//     onPress: handlePressMenuButton,
//     imageSource: <TopNav1 />,
//     //  style: headerMenuBtnStyle
//   };
//   const tabImageStyle: ViewStyle = {
//     height: 24,
//     width: 24,
//     marginTop: 3,
//     marginLeft: 9,
//     // flex:1,
//     alignSelf: 'center',
//   };

//   const labelStyle: TextStyle = {
//     color: '#7D8287',
//     fontSize: 16,
//     lineHeight: 20,
//     letterSpacing: 0.15,
//     fontWeight: '600',
//   };
//   const activeLableStyle: TextStyle = {
//     color: '#333638',
//     fontSize: 16,
//     lineHeight: 20,
//     letterSpacing: 0.15,
//     fontWeight: '600',
//   };
//   const disableLableStyle: TextStyle = {
//     color: '#CDCFD0',
//     fontSize: 16,
//     lineHeight: 20,
//     letterSpacing: 0.15,
//     fontWeight: '400',
//   };
//   const renderScene = SceneMap({
//     first: SampleScreenOne,
//     second: DashboardScreen,
//     third: ProfileScreen,
//     fourth: DashboardScreen,
//     fifth: ProfileScreen,
//     //  sixth:SampleScreenFour
//   });
//   // const layout = useWindowDimensions();
//   // const [index, setIndex] = useState(0);
//   const [routes] = useState([
//     {
//       key: 'first',
//       title: 'Profile',
//       enabled: true,
//       tabImage: <TabEnabled height={24} width={24} />,
//       tabDisabledImage: <TopNav1 height={24} width={24} />,
//     },
//     {
//       key: 'second',
//       title: 'Dashboard',
//       enabled: true,
//       tabImage: <TabEnabled height={24} width={24} />,
//       tabDisabledImage: <TopNav1 height={24} width={24} />,
//     },
//     {
//       key: 'third',
//       title: 'Sample1',
//       enabled: true,
//       tabImage: <TabEnabled height={24} width={24} />,
//       tabDisabledImage: <TopNav1 height={24} width={24} />,
//     },
//     // { key: 'fourth', title: 'Dashboard', enabled: true, tabImage: imageSourceTab, tabDisabledImage: imageSourceAction },
//     // { key: 'fifth', title: 'Sample1', enabled: true, tabImage: imageSourceTab, tabDisabledImage: imageSourceAction },
//   ]);
//   // const handleTabChange = (tabIndex: number) => {
//   //     setIndex(tabIndex)
//   // }

//   return (
//     <SafeAreaView
//       style={{
//         flexDirection: 'column',
//         height: '100%',
//         width: '100%',
//         // backgroundColor: '#dfd4cd',
//       }}>
//       {/* <IMNavigationBar
//         title="Title really very long title tile very long here"
//         // titleStyle={textStyle}
//         linearGradientColors={gradientColor}
//         headerLeftProps={headerLeftProps}
//         headerActionProps={headerActionProps}
//         headerMenuProps={headerMenuProps}
//       // cardView={true}
//       // children={<View style={{backgroundColor:'cyan'}}><Text>Hello</Text></View>}
//       // children={<View style={{backgroundColor:'cyan', height:100}} />}
//       //
//       /> */}

//       {/* <IMNavigationBar
//                 title="Title really long title goes here"
//                 titleStyle={textStyle}

//                 HeaderActionProps={headerActionProps}
//                 //HeaderMenuProps={headerMenuProps}

//             /> */}
//       <IMTabBar
//         routes={routes}
//         renderScene={renderScene}
//         tabImageStyle={tabImageStyle}
//       />
//       <IMDefaultDrawers
//         visible={defaultModalVisible}
//         onClose={handleDefaultCloseModal}
//         expandable={false}
//         // type="Indicative"
//         title="Modal"
//         childProps={<View>
//           <View style={{ flexDirection: 'row', backgroundColor: '#F8F9FB', padding: 10, borderRadius: 10 }}>
//             <View style={{ flex: 0.2 }}>
//               <BankIcon01 />
//             </View>
//             <View style={{ flex: 0.8, flexDirection: 'column' }}>
//               <Text style={typography.BodySemiBold2}>Abhishek Nair</Text>
//               <Text style={typography.BodyRegular3}>Axis Bank •••• 3523</Text>
//             </View>
//           </View>
//           <TouchableOpacity onPress={handleDefaultCloseModal}>
//           <View style={{ flexDirection: 'row', backgroundColor: '#F0792E', padding: 10, borderRadius: 16, height: 48, justifyContent: 'center', margin: 20 }}>
//             <Text style={{ textAlign: 'center', alignSelf: 'center', color: 'white' }}>Done</Text>
//           </View>
//           </TouchableOpacity>
//         </View>}
//       />
//       <IMDefaultDrawers
//         visible={modalVisible}
//         onClose={handleCloseModal}
//         expandable={true}
//         // type="Indicative"
//         title="Modal"
//         childProps={<View>
//           <View style={{ flexDirection: 'row', backgroundColor: '#F8F9FB', padding: 10, borderRadius: 10, height: 64 }}>
//             <View style={{ flex: 0.2 }}>
//               <BankIcon01 />
//             </View>
//             <View style={{ flex: 0.8, flexDirection: 'column' }}>
//               <Text style={typography.BodySemiBold2}>Abhishek Nair</Text>
//               <Text style={typography.BodyRegular3}>Axis Bank •••• 3523</Text>
//             </View>
//           </View>
//         </View>}
//       />
//       <IMIndicativeDrawers
//         visible={successModalVisible}
//         onClose={handleCloseSuccessModal}
//         subTitle="Sublime"
//         title="Modal"
//         indicativeIcon={<Done />}
//         indicativeColor="#008F52"
//         childProps={
//           <View >
//             <View style={{ flexDirection: 'row', backgroundColor: '#F8F9FB', padding: 10, borderRadius: 10, height: 64 }}>
//               <View style={{ flex: 0.2 }}>
//                 <BankIcon />
//               </View>
//               <View style={{ flex: 0.8, flexDirection: 'column' }}>
//                 <Text style={typography.BodySemiBold2}>Naina Gaikwad</Text>
//                 <Text style={typography.BodyRegular3}>Bank of Baroda •••• 6171
//                 </Text>
//               </View>
//             </View>
//             <View style={{ flexDirection: 'row', backgroundColor: '#F0792E', padding: 10, borderRadius: 16, height: 48, justifyContent: 'center', margin: 20 }}>
//               <Text style={{ textAlign: 'center', alignSelf: 'center', color: 'white' }}>Ok</Text>
//             </View>

//           </View>
//         }
//       />
//       <IMIndicativeDrawers
//         visible={errModalVisible}
//         // onClose={handleCloseModal}
//         // subTitle="Sublime"
//         title="Error Title"
//         indicativeIcon={< Error />}
//         indicativeColor="#D8272D"
//         childProps={
//           <View >
//             <View style={{ flexDirection: 'row', backgroundColor: '#FDF4F4', padding: 10, borderRadius: 10, margin: 10 }}>
//               <Text style={[typography.BodyRegular2]}>You cannot do a transaction from your UPI ID due to security reasons. Please retry after sometime</Text>
//             </View>
//             <TouchableOpacity onPress={handleCloseErrModal}>
//               <View style={{ flexDirection: 'row', backgroundColor: '#F0792E', padding: 10, borderRadius: 16, height: 48, justifyContent: 'center', margin: 20 }}>
//                 <Text style={{ textAlign: 'center', alignSelf: 'center', color: 'white' }}>Ok</Text>
//               </View>
//             </TouchableOpacity>
//           </View>
//         }
//       />
//       <TouchableOpacity onPress={handleDefaultOpenModal}>
//         <View style={styles.button}>
//           <Text style={styles.text}> Open Default Fixed Drawers </Text>
//         </View>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={handleOpenModal}>
//         <View style={styles.button}>
//           <Text style={styles.text}> Open Default Scrollable Drawers </Text>
//         </View>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={handleOpenSuccessModal}>
//         <View style={styles.button}>
//           <Text style={styles.text}> Open Success Drawers </Text>
//         </View>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={handleOpenErrModal}>
//         <View style={styles.button}>
//           <Text style={styles.text}> Open Error Drawers </Text>
//         </View>
//       </TouchableOpacity>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     justifyContent: 'center',
//   },
//   button: {
//     borderWidth: 1,
//     borderColor: 'orange',
//     borderRadius: 5,
//     margin: 20,
//   },
//   text: {
//     alignSelf: 'center',
//     fontWeight: 'bold',
//     fontSize: 22,
//     marginTop: 20,
//     marginBottom: 20,
//   },
//   tabBar: {
//     flexDirection: 'row',
//     borderBottomLeftRadius: 16,
//     borderBottomRightRadius: 16,
//     shadowColor: '#171717',
//     shadowOffset: { width: 0, height: 7 },
//     shadowOpacity: 0.7,
//     shadowRadius: 2,
//     //overflow:'hidden'
//   },
//   tabStyle: {
//     flexDirection: 'row',
//     height: 52,
//   },
//   scrollableTabStyle: {
//     flexDirection: 'row',
//     height: 52,
//     width: 'auto',
//   },
//   tabView: {
//     backgroundColor: 'white',
//     shadowColor: '#838383',
//     shadowOpacity: 0.7,
//     borderBottomLeftRadius: 10,
//     borderBottomRightRadius: 10,
//     shadowOffset: { width: 0, height: 10 },
//     shadowRadius: 2,
//     elevation: 5,
//   },
//   indicatorStyle: {
//     backgroundColor: '#F0792E',
//     height: 2,
//     borderRadius: 4,
//     left: TAB_MARGIN / 2,
//   },
//   lableStyle: {
//     color: '#7D8287',
//     fontSize: 16,
//     lineHeight: 20,
//     letterSpacing: 0.15,
//     fontWeight: '600',
//   },
//   activeLableStyle: {
//     color: '#333638',
//     fontSize: 16,
//     lineHeight: 20,
//     letterSpacing: 0.15,
//     fontWeight: '600',
//   },

//   label: {
//     color: '#7D8287',
//     fontSize: 16,
//     lineHeight: 20,
//     letterSpacing: 0.15,
//     fontWeight: '600',
//   },
//   activeLabel: {
//     color: '#333638',
//     fontSize: 16,
//     lineHeight: 20,
//     letterSpacing: 0.15,
//     fontWeight: '600',
//   },
// });

// export default HomeScreen;
import React, { useState } from 'react';

const HomeScreen = () => {};
export default HomeScreen;
