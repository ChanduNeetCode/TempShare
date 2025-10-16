import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ChoiceSelectorsDemo } from '../screen/ui_components/ChoiceSelectorsDemo';
import { AccordionsDemo } from '../screen/ui_components/AccordionsDemo';
import { AccountSelectDrawerDemo } from '../screen/ui_components/AccountSelectDrawerDemo';
import { ApiManagerDemo } from '../screen/tech_components/APIManagerDemo';
import { AvatarDemo } from '../screen/ui_components/AvatarDemo';
import { BadgesDemo } from '../screen/ui_components/BadgesDemo';
import { BaseServiceDemo } from '../screen/tech_components/BaseServiceDemo';
import { BasicMicroInteractionsDemo } from '../../src/screen/ui_components/BasicMicroInteractionsDemo';
import { BlurEffectDemo } from '../screen/ui_components/BlurEffectDemo';
import { BreadCrumbsDemo } from '../screen/ui_components/BreadCrumbsDemo';
import { ButtonsDemo } from '../screen/ui_components/ButtonsDemo';
import { CacheManageDemo } from '../screen/tech_components/CacheManagerDemo';
import { CalendarDemo } from '../screen/ui_components/CalendarDemo';
import { CalenderDemoAndroid } from '../screen/ui_components/CalenderDemonativeAndroid';
import { CardsDemo } from '../screen/ui_components/CardsDemo';
import { CDNInvocationDemo } from '../screen/tech_components/CDNInvocationDemo';
import { CheckboxDemo } from '../screen/ui_components/CheckboxDemo';
import { ChipsDemo } from '../screen/ui_components/ChipsDemo';
import { CoachmarksDemo } from '../screen/ui_components/CoachmarksDemo';
import { CustomStatusBarDemo } from '../screen/ui_components/CustomStatusBarDemo';
import { DisclaimerInformationDemo } from '../screen/ui_components/DisclaimerInformation';
import { DrawersDemo } from '../screen/ui_components/DrawersDemo';
import { DropdownDemo } from '../screen/ui_components/DropdownDemo';
import { ErrorAlertDrawerDemo } from '../screen/ui_components/ErrorAlertDrawerDemo';
import { ExceptionErrorHandlingDemo } from '../screen/tech_components/ExceptionErrorHandling';
import { FileManagerDemo } from '../screen/tech_components/FileManagerDemo';
import { GCADemo } from '../screen/ui_components/GCADemo';
import { GraphsDemo } from '../screen/ui_components/GraphsDemo';
import { HorizontalStackedViewDemo } from '../screen/ui_components/HorizontalStackedViewDemo';
import { InAppNotificationDemo } from '../screen/ui_components/InAppNotificationDemo';
import { ListDemo } from '../screen/ui_components/ListDemo';
import { LoaderDemo } from '../screen/ui_components/Loader';
import { MiniSuccessPageDemo } from '../screen/ui_components/MiniSuccessPageDemo';
import { NavigationbarDemo } from '../screen/ui_components/PrimaryNavigationbarDemo';
import { NetworkManagerDemo } from '../screen/tech_components/NetworkManagerDemo';
import { OneTimePasswordDemo } from '../screen/ui_components/OneTimePasswordDemo';
import { PreConformationDrawerDemo } from '../screen/ui_components/PreConformationDrawerDemo';
import { ProcessLoaderDemo } from '../screen/ui_components/ProcessLoaderDemo';
import { ProgressLoaderDemo } from '../screen/ui_components/ProgressLoaderDemo';
import { RadioButtonDemo } from '../screen/ui_components/RadioButtonDemo';
import { ReadMoreDemo } from '../screen/ui_components/ReadMoreDemo';
import { RootStackParamList } from './RootStackParams';
import { Screens } from '../utils/UIEnums';
import { ScreensTechnical } from '../utils/TechEnums';
import { ScrollBarScrollListDemo } from '../screen/ui_components/ScrollBarScrollListDemo';
import { SegmentControlDemo } from '../screen/ui_components/SegmentControlDemo';
import { ShimmerDemo } from '../screen/ui_components/ShimmerDemo';
import { SlidersDemo } from '../screen/ui_components/SlidersDemo';
import { SupportDrawerDemo } from '../screen/ui_components/SupportDrawerDemo';
import { TextFieldDemo } from '../screen/ui_components/TextFieldDemo';
import { ThankYouErrorPageDemo } from '../screen/ui_components/ThankYouErrorPageDemo';
import { TicketViewDemo } from '../screen/ui_components/TicketViewDemo';
import { TilesDemo } from '../screen/ui_components/TilesDemo';
import { ToastsDemo } from '../screen/ui_components/ToastsDemo';
import { UCJRelationManagerDemo } from '../screen/tech_components/UCJRedirectionManagerDemo';

import { TechnicalComponents } from '../utils/TechEnums';
import { UIComponent } from '../utils/UIEnums';

import AdobeTargetDemo from '../screen/tech_components/AdobeTargetDemo/AdobeTargetDemo';
import AdobeTargetDemoAndroid from '../screen/tech_components/AdobeTargetAndroidDemo/AdobeTargetAndroidDemo';
import AnalyticalInvokerDemo from '../screen/tech_components/AnalyticalInvokerAndroidDemo/AnalyticalInvokerAndroidDemo';
import AnalyticalInvokerIOSDemo from '../screen/tech_components/AnalyticalmanagerIOSDemo/AnalyticalManagerDemoIOS';
import AndroidEncryptionDecryptionDemo from '../screen/tech_components/EncryptionDecryptionAndroidDemo/AndroidEncryptionDecryptionDemo';
import BannersDemo from '../screen/ui_components/BannersDemo/BannersDemo';
import ClipboardDemo from '../screen/ui_components/ClipboardDemo/ClipboardDemo';
import DataTablesDemo from '../screen/ui_components/DataTablesDemo/DataTablesDemo';
import DatePickerRNDemo from '../screen/ui_components/DatePickerRNDemo/DatePickerRNDemo';
import DeviceBindingDemo from '../screen/tech_components/DeviceBindingDemo/DeviceBindingDemo';
import DialerDemo from '../screen/tech_components/DialerDemo/DialerDemo';
import DisableScreenshotDemo from '../screen/tech_components/DisableScreenshotDemo/DisableScreenshotDemo';
import EmptyStateDemo from '../screen/ui_components/EmptyStateDemo/EmptyStateDemo';
import EncryptionDecryptionDemo from '../screen/tech_components/EncryptionDecryptionDemo/EncryptionDecryptionDemo';
import GlobalHeaderDemo from '../screen/tech_components/GlobalHeaderDemo/GlobalHeaderDemo';
import HomeScreen from '../screen/HomeScreen';
import OverflowMenuDemo from '../screen/ui_components/OverflowMenuDemo/OverflowMenuDemo';
import PaginationDemo from '../screen/ui_components/PaginationDemo/PaginationDemo';
import PersistentStorageDemo from '../screen/tech_components/PersistentStorage/PersistentStorageDemo';
import ProgressTrackerDemo from '../screen/ui_components/ProgressTrackerDemo/ProgressTrackerDemo';
import ShareTrayDemo from '../screen/tech_components/ShareTrayDemo/ShareTrayDemo';
import TabDemo from '../screen/ui_components/TabDemo/TabDemo';
import TimeLineDemo from '../screen/ui_components/TimeLineDemo/TimeLineDemo';
import TimePickerDemo from '../screen/ui_components/TimePickerDemo/TimePickerDemo';
import ToolTipsDemo from '../screen/ui_components/ToolTipsDemo/ToolTipsDemo';
import ValidationDemo from '../screen/tech_components/ValidationDemo/ValidationDemo';
import WebViewDemo from '../screen/tech_components/WebViewDemo/WebViewDemo';
import UCJUrlDemo from '../screen/tech_components/UCJUrlDemo/UCJUrlDemo';
import EventRegisterDemo from '../screen/tech_components/EventRegisterDemo/EventRegisterDemo';
import HtmlParseDemo from '../screen/tech_components/HtmlParseDemo/HtmlParseDemo';
import { CarouselDemo } from '../screen/ui_components/CarouselDemo';
import AdobeODDemo from '../screen/tech_components/AdobeOD/AdobeODDemo';
import DynatraceDemo from '../screen/tech_components/DynatraceDemo/DynatraceDemo';
import TimeOutManagementDemo  from '../screen/tech_components/TimeOutManagementDemo/TimeOutManagementDemo';
import ErrorMessagesNativeDemo from '../screen/tech_components/ErrorMesaagesNativeDemo/ErrorMessagesNativeDemo'
const HomeStack = createNativeStackNavigator<RootStackParamList>();

export const HomeStackNavigator = () => {
  return (
    <>
      <HomeStack.Navigator
        initialRouteName={'HomeScreen'}
        screenOptions={{ headerShown: false }}>
        <HomeStack.Screen
          name={'HomeScreen'}
          component={HomeScreen}
          options={{
            title: 'iMobile RN DFF Sample',
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={Screens.AccordionsDemo}
          component={AccordionsDemo}
          options={{
            title: UIComponent.Accordions,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={Screens.AccountSelectDrawerDemo}
          component={AccountSelectDrawerDemo}
          options={{
            title: UIComponent.AccountSelectDrawer,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={Screens.AvatarDemo}
          component={AvatarDemo}
          options={{
            title: UIComponent.Avatar,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={Screens.BadgesDemo}
          component={BadgesDemo}
          options={{
            title: UIComponent.Badges,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={Screens.BannersDemo}
          component={BannersDemo}
          options={{
            title: UIComponent.Banners,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={Screens.BasicMicroInteractionsDemo}
          component={BasicMicroInteractionsDemo}
          options={{
            title: UIComponent.BasicMicroInteractions,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />

        <HomeStack.Screen
          name={Screens.BlurEffectDemo}
          component={BlurEffectDemo}
          options={{
            title: UIComponent.BlurEffect,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={Screens.BreadCrumbsDemo}
          component={BreadCrumbsDemo}
          options={{
            title: UIComponent.BreadCrumbs,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={Screens.ButtonsDemo}
          component={ButtonsDemo}
          options={{
            title: UIComponent.Buttons,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={Screens.CalendarDemo}
          component={CalendarDemo}
          options={{
            title: UIComponent.Calendar,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={Screens.CalenderDemoAndroid}
          component={CalenderDemoAndroid}
          options={{
            title: UIComponent.CalendarAndroidNative,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={Screens.CardsDemo}
          component={CardsDemo}
          options={{
            title: UIComponent.Cards,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={Screens.CarouselDemo}
          component={CarouselDemo}
          options={{
            title: UIComponent.Carousel,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={Screens.CheckboxDemo}
          component={CheckboxDemo}
          options={{
            title: UIComponent.Checkbox,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={Screens.ChipsDemo}
          component={ChipsDemo}
          options={{
            title: UIComponent.Chips,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={Screens.ChoiceSelectorsDemo}
          component={ChoiceSelectorsDemo}
          options={{
            title: UIComponent.ChoiceSelectors,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={Screens.ClipboardDemo}
          component={ClipboardDemo}
          options={{
            title: UIComponent.Clipboard,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={Screens.CoachmarksDemo}
          component={CoachmarksDemo}
          options={{
            title: UIComponent.Coachmarks,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={Screens.CustomStatusBarDemo}
          component={CustomStatusBarDemo}
          options={{
            title: UIComponent.CustomStatusBar,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={Screens.DataTablesDemo}
          component={DataTablesDemo}
          options={{
            title: UIComponent.DataTables,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={Screens.DatePickerRNDemo}
          component={DatePickerRNDemo}
          options={{
            title: UIComponent.DatePicker,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={Screens.DisclaimerInformationDemo}
          component={DisclaimerInformationDemo}
          options={{
            title: UIComponent.DisclaimerAndInformation,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={Screens.DrawersDemo}
          component={DrawersDemo}
          options={{
            title: UIComponent.Drawers,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={Screens.DropdownDemo}
          component={DropdownDemo}
          options={{
            title: UIComponent.Dropdown,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={Screens.EmptyStateDemo}
          component={EmptyStateDemo}
          options={{
            title: UIComponent.EmptyState,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={Screens.ErrorAlertDrawerDemo}
          component={ErrorAlertDrawerDemo}
          options={{
            title: UIComponent.ErrorAlertDrawer,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />

        <HomeStack.Screen
          name={Screens.GCADemo}
          component={GCADemo}
          options={{
            title: UIComponent.GCA,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={Screens.GraphsDemo}
          component={GraphsDemo}
          options={{
            title: UIComponent.Graphs,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={Screens.HorizontalStackedViewDemo}
          component={HorizontalStackedViewDemo}
          options={{
            title: UIComponent.HorizontalStackedView,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={Screens.InAppNotificationDemo}
          component={InAppNotificationDemo}
          options={{
            title: UIComponent.InAppNotifications,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={Screens.ListDemo}
          component={ListDemo}
          options={{
            title: UIComponent.List,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={Screens.LoaderDemo}
          component={LoaderDemo}
          options={{
            title: UIComponent.Loader,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={Screens.MiniSuccessPageDemo}
          component={MiniSuccessPageDemo}
          options={{
            title: UIComponent.MiniSuccessPage,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={Screens.OneTimePasswordDemo}
          component={OneTimePasswordDemo}
          options={{
            title: UIComponent.OneTimePassWord,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={Screens.OverflowMenuDemo}
          component={OverflowMenuDemo}
          options={{
            title: UIComponent.OverflowMenu,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={Screens.PaginationDemo}
          component={PaginationDemo}
          options={{
            title: UIComponent.Pagination,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={Screens.PreConformationDrawerDemo}
          component={PreConformationDrawerDemo}
          options={{
            title: UIComponent.PreConformation,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={Screens.NavigationbarDemo}
          component={NavigationbarDemo}
          options={{
            title: UIComponent.PrimaryNavigation,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />

        <HomeStack.Screen
          name={Screens.ProcessLoaderDemo}
          component={ProcessLoaderDemo}
          options={{
            title: UIComponent.ProcessLoader,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={Screens.ProgressLoaderDemo}
          component={ProgressLoaderDemo}
          options={{
            title: UIComponent.ProgressLoader,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={Screens.ProgressTrackerDemo}
          component={ProgressTrackerDemo}
          options={{
            title: UIComponent.ProgressTracker,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        {/* <HomeStack.Screen
          name={Screens.RadialSliderDemo}
          component={RadialSliderDemo}
          options={{
            title: ScreenName[39],
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        /> */}
        <HomeStack.Screen
          name={Screens.RadioButtonDemo}
          component={RadioButtonDemo}
          options={{
            title: UIComponent.RadioButton,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={Screens.ReadMoreDemo}
          component={ReadMoreDemo}
          options={{
            title: UIComponent.ReadMore,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={Screens.SegmentControlDemo}
          component={SegmentControlDemo}
          options={{
            title: UIComponent.SegmentControl,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={Screens.ScrollBarScrollListDemo}
          component={ScrollBarScrollListDemo}
          options={{
            title: UIComponent.ScrollBarScrollList,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={Screens.ShimmerDemo}
          component={ShimmerDemo}
          options={{
            title: UIComponent.Shimmer,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />

        <HomeStack.Screen
          name={Screens.SlidersDemo}
          component={SlidersDemo}
          options={{
            title: UIComponent.Slider,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={Screens.SupportDrawerDemo}
          component={SupportDrawerDemo}
          options={{
            title: UIComponent.SupportDrawer,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />

        <HomeStack.Screen
          name={Screens.TabDemo}
          component={TabDemo}
          options={{
            title: UIComponent.Tabs,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={Screens.TextFieldDemo}
          component={TextFieldDemo}
          options={{
            title: UIComponent.TextField,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={Screens.ThankYouErrorPageDemo}
          component={ThankYouErrorPageDemo}
          options={{
            title: UIComponent.ThankYouAndErrorPage,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={Screens.TicketViewDemo}
          component={TicketViewDemo}
          options={{
            title: UIComponent.TicketView,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={Screens.TilesDemo}
          component={TilesDemo}
          options={{
            title: UIComponent.Tiles,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={Screens.TimeLineDemo}
          component={TimeLineDemo}
          options={{
            title: UIComponent.TimeLine,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={Screens.TimePickerDemo}
          component={TimePickerDemo}
          options={{
            title: UIComponent.TimePicker,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={Screens.ToastsDemo}
          component={ToastsDemo}
          options={{
            title: UIComponent.Toasts,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={Screens.ToolTipsDemo}
          component={ToolTipsDemo}
          options={{
            title: UIComponent.Tooltip,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />

        {/* Technical Screens Start */}
        <HomeStack.Screen
          name={ScreensTechnical.ApiManagerDemo}
          component={ApiManagerDemo}
          options={{
            title: TechnicalComponents.ApiManager,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={ScreensTechnical.AdobeODDemo}
          component={AdobeODDemo}
          options={{
            title: TechnicalComponents.AdobeOD,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={ScreensTechnical.AdobeTargetDemo}
          component={AdobeTargetDemo}
          options={{
            title: TechnicalComponents.AdobeTarget,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={ScreensTechnical.AdobeTargetDemoAndroid}
          component={AdobeTargetDemoAndroid}
          options={{
            title: TechnicalComponents.AdobeTargetAndroid,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={ScreensTechnical.AnalyticalInvokerDemo}
          component={AnalyticalInvokerDemo}
          options={{
            title: TechnicalComponents.AnalyticalInvoker,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={ScreensTechnical.AnalyticalInvokerIOSDemo}
          component={AnalyticalInvokerIOSDemo}
          options={{
            title: TechnicalComponents.AnalyticalInvokerIOS,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={ScreensTechnical.AndroidEncryptionDecryptionDemo}
          component={AndroidEncryptionDecryptionDemo}
          options={{
            title: TechnicalComponents.AndroidEncryptionDecryption,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={ScreensTechnical.BaseServiceDemo}
          component={BaseServiceDemo}
          options={{
            title: TechnicalComponents.BaseService,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={ScreensTechnical.CacheManageDemo}
          component={CacheManageDemo}
          options={{
            title: TechnicalComponents.CacheManager,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={ScreensTechnical.CDNInvocationDemo}
          component={CDNInvocationDemo}
          options={{
            title: TechnicalComponents.CDNInvocation,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={ScreensTechnical.DeviceBindingDemo}
          component={DeviceBindingDemo}
          options={{
            title: TechnicalComponents.DeviceBinding,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />

        <HomeStack.Screen
          name={ScreensTechnical.DialerDemo}
          component={DialerDemo}
          options={{
            title: TechnicalComponents.Dialer,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />

        <HomeStack.Screen
          name={ScreensTechnical.DisableScreenshotDemo}
          component={DisableScreenshotDemo}
          options={{
            title: TechnicalComponents.DisableScreenshot,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />

        <HomeStack.Screen
          name={ScreensTechnical.DynatraceDemo}
          component={DynatraceDemo}
          options={{
            title: TechnicalComponents.Dynatrace,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={ScreensTechnical.EncryptionDecryptionDemo}
          component={EncryptionDecryptionDemo}
          options={{
            title: TechnicalComponents.EncryptionDecryption,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={ScreensTechnical.ErrorMessagesNativeDemo}
          component={ErrorMessagesNativeDemo}
          options={{
            title: TechnicalComponents.ErrorMessagesNative,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
         <HomeStack.Screen
          name={ScreensTechnical.EventRegisterDemo}
          component={EventRegisterDemo}
          options={{
            title: TechnicalComponents.EventRegister,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={ScreensTechnical.ExceptionErrorHandlingDemo}
          component={ExceptionErrorHandlingDemo}
          options={{
            title: TechnicalComponents.ExceptionErrorHandling,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={ScreensTechnical.FileManagerDemo}
          component={FileManagerDemo}
          options={{
            title: TechnicalComponents.FileManager,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={ScreensTechnical.GlobalHeaderDemo}
          component={GlobalHeaderDemo}
          options={{
            title: TechnicalComponents.GlobalHeaders,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={ScreensTechnical.HtmlParseDemo}
          component={HtmlParseDemo}
          options={{
            title: TechnicalComponents.GlobalHeaders,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />

        <HomeStack.Screen
          name={ScreensTechnical.NetworkManagerDemo}
          component={NetworkManagerDemo}
          options={{
            title: TechnicalComponents.NetworkManager,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={ScreensTechnical.PersistentStorageDemo}
          component={PersistentStorageDemo}
          options={{
            title: TechnicalComponents.PersistentStorage,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={ScreensTechnical.ShareTrayDemo}
          component={ShareTrayDemo}
          options={{
            title: TechnicalComponents.ShareTray,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
         <HomeStack.Screen
          name={ScreensTechnical.TimeOutManagementDemo}
          component={TimeOutManagementDemo}
          options={{
            title: TechnicalComponents.TimeOutManagement,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={ScreensTechnical.UCJUrlDemo}
          component={UCJUrlDemo}
          options={{
            title: TechnicalComponents.UCJUrl,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={ScreensTechnical.UCJRelationManagerDemo}
          component={UCJRelationManagerDemo}
          options={{
            title: TechnicalComponents.UCJRelationManager,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={ScreensTechnical.ValidationDemo}
          component={ValidationDemo}
          options={{
            title: TechnicalComponents.Validation,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <HomeStack.Screen
          name={ScreensTechnical.WebViewDemo}
          component={WebViewDemo}
          options={{
            title: TechnicalComponents.WebView,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
      </HomeStack.Navigator>
    </>
  );
};

export default HomeStackNavigator;
