import React, {
  Fragment,
  FunctionComponent,
  ReactElement,
  useState,
} from 'react';
import {
  FlatList,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient';

import { RootStackParamList } from '../../routes/RootStackParams';
import typography from '../../../dff_library/ui_components/atoms/typography';
import CustomStatusBar from '../../components/CustomStatusBar/customStatusBar';
import colors from '../../../dff_library/ui_components/atoms/colors';
import { Screens } from '../../utils/UIEnums';
import { IMSegmentControl } from '../../../dff_library/ui_components/components/SegmentControl';
import { actuatedNormalizeWidth } from '../../utils/utility';
import { ScreenNameTechnical } from '../../utils/TechConstants';
import { ScreenName } from '../../utils/UIConstants';
import {
  ICGeneralSearch,
  ICGeneralChevronRight,
  ICClose,
} from '../../../dff_library/ui_components/atoms/icons';
import { ScreensTechnical, TechnicalComponents } from '../../utils/TechEnums';
import { UIComponent } from '../../utils/UIEnums';

import styles from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;

const HomeScreen = ({ navigation }: Props) => {
  //#region
  //UI components
  const navigationToScreen = (screen: string) => {
    switch (screen) {
      case UIComponent.Accordions:
        navigation.navigate(Screens.AccordionsDemo);
        break;
      case UIComponent.AccountSelectDrawer:
        navigation.navigate(Screens.AccountSelectDrawerDemo);
        break;
      case UIComponent.Avatar:
        navigation.navigate(Screens.AvatarDemo);
        break;
      case UIComponent.Badges:
        navigation.navigate(Screens.BadgesDemo);
        break;
      case UIComponent.Banners:
        navigation.navigate(Screens.BannersDemo);
        break;
      case UIComponent.BasicMicroInteractions:
        navigation.navigate(Screens.BasicMicroInteractionsDemo);
        break;
      case UIComponent.BreadCrumbs:
        navigation.navigate(Screens.BreadCrumbsDemo);
        break;
      case UIComponent.Buttons:
        navigation.navigate(Screens.ButtonsDemo);
        break;
      case UIComponent.Cards:
        navigation.navigate(Screens.CardsDemo);
        break;
      case UIComponent.Carousel:
        navigation.navigate(Screens.CarouselDemo);
        break;
      case UIComponent.Checkbox:
        navigation.navigate(Screens.CheckboxDemo);
        break;
      case UIComponent.Chips:
        navigation.navigate(Screens.ChipsDemo);
        break;
      case UIComponent.ChoiceSelectors:
        navigation.navigate(Screens.ChoiceSelectorsDemo);
        break;
      case UIComponent.Clipboard:
        navigation.navigate(Screens.ClipboardDemo);
        break;
      case UIComponent.Coachmarks:
        navigation.navigate(Screens.CoachmarksDemo);
        break;
      case UIComponent.DataTables:
        navigation.navigate(Screens.DataTablesDemo);
        break;
      case UIComponent.DatePicker:
        navigation.navigate(Screens.DatePickerRNDemo);
        break;
      case UIComponent.DisclaimerAndInformation:
        navigation.navigate(Screens.DisclaimerInformationDemo);
        break;
      case UIComponent.Drawers:
        navigation.navigate(Screens.DrawersDemo);
        break;
      case UIComponent.Dropdown:
        navigation.navigate(Screens.DropdownDemo);
        break;
      case UIComponent.EmptyState:
        navigation.navigate(Screens.EmptyStateDemo);
        break;

      case UIComponent.GCA:
        navigation.navigate(Screens.GCADemo);
        break;
      case UIComponent.Graphs:
        navigation.navigate(Screens.GraphsDemo);
        break;

      case UIComponent.InAppNotifications:
        navigation.navigate(Screens.InAppNotificationDemo);
        break;
      case UIComponent.List:
        navigation.navigate(Screens.ListDemo);
        break;

      case UIComponent.MiniSuccessPage:
        navigation.navigate(Screens.MiniSuccessPageDemo);
        break;
      case UIComponent.OneTimePassWord:
        navigation.navigate(Screens.OneTimePasswordDemo);
        break;
      case UIComponent.OverflowMenu:
        navigation.navigate(Screens.OverflowMenuDemo);
        break;
      case UIComponent.Pagination:
        navigation.navigate(Screens.PaginationDemo);
        break;
      case UIComponent.PreConformation:
        navigation.navigate(Screens.PreConformationDrawerDemo);
        break;
      case UIComponent.PrimaryNavigation:
        navigation.navigate(Screens.NavigationbarDemo);
        break;

      case UIComponent.ProgressLoader:
        navigation.navigate(Screens.ProgressLoaderDemo);
        break;
      case UIComponent.ProgressTracker:
        navigation.navigate(Screens.ProgressTrackerDemo);
        break;
      case UIComponent.RadioButton:
        navigation.navigate(Screens.RadioButtonDemo);
        break;

      case UIComponent.ScrollBarScrollList:
        navigation.navigate(Screens.ScrollBarScrollListDemo);
        break;
      case UIComponent.SegmentControl:
        navigation.navigate(Screens.SegmentControlDemo);
        break;

      case UIComponent.Slider:
        navigation.navigate(Screens.SlidersDemo);
        break;
      case UIComponent.SupportDrawer:
        navigation.navigate(Screens.SupportDrawerDemo);
        break;
      case UIComponent.Tabs:
        navigation.navigate(Screens.TabDemo);
        break;
      case UIComponent.TextField:
        navigation.navigate(Screens.TextFieldDemo);
        break;
      case UIComponent.ThankYouAndErrorPage:
        navigation.navigate(Screens.ThankYouErrorPageDemo);
        break;

      case UIComponent.Tiles:
        navigation.navigate(Screens.TilesDemo);
        break;
      case UIComponent.TimeLine:
        navigation.navigate(Screens.TimeLineDemo);
        break;
      case UIComponent.TimePicker:
        navigation.navigate(Screens.TimePickerDemo);
        break;
      case UIComponent.Toasts:
        navigation.navigate(Screens.ToastsDemo);
        break;
      case UIComponent.Tooltip:
        navigation.navigate(Screens.ToolTipsDemo);
        break;
      //Todo: Useful for module side this components
      case UIComponent.ErrorAlertDrawer:
        navigation.navigate(Screens.ErrorAlertDrawerDemo);
        break;
      case UIComponent.HorizontalStackedView:
        navigation.navigate(Screens.HorizontalStackedViewDemo);
        break;
      case UIComponent.Loader:
        navigation.navigate(Screens.LoaderDemo);
        break;
      case UIComponent.ProcessLoader:
        navigation.navigate(Screens.ProcessLoaderDemo);
        break;
      case UIComponent.ReadMore:
        navigation.navigate(Screens.ReadMoreDemo);
        break;
      case UIComponent.Shimmer:
        navigation.navigate(Screens.ShimmerDemo);
        break;
      case UIComponent.TicketView:
        navigation.navigate(Screens.TicketViewDemo);
        break;
      case UIComponent.Tooltip:
        navigation.navigate(Screens.ToolTipsDemo);
        break;
      // case UIComponent.BlurEffect:
      //   navigation.navigate(Screens.BlurEffectDemo);
      //   break;
    }
  };
  //#endRegion

  //#region
  //Technical components
  const navigationToScreenTechnical = (screen: string) => {
    switch (screen) {
      case TechnicalComponents.ApiManager:
        navigation.navigate(ScreensTechnical.ApiManagerDemo);
        break;
      case TechnicalComponents.AdobeOD:
        navigation.navigate(ScreensTechnical.AdobeODDemo);
        break;
      case TechnicalComponents.AdobeTarget:
        navigation.navigate(ScreensTechnical.AdobeTargetDemo);
        break;
      case TechnicalComponents.AdobeTargetAndroid:
        navigation.navigate(ScreensTechnical.AdobeTargetDemoAndroid);
        break;
      case TechnicalComponents.AnalyticalInvoker:
        navigation.navigate(ScreensTechnical.AnalyticalInvokerDemo);
        break;
      case TechnicalComponents.AnalyticalInvokerIOS:
        navigation.navigate(ScreensTechnical.AnalyticalInvokerIOSDemo);
        break;
      case TechnicalComponents.AndroidEncryptionDecryption:
        navigation.navigate(ScreensTechnical.AndroidEncryptionDecryptionDemo);
        break;
      case TechnicalComponents.BaseService:
        navigation.navigate(ScreensTechnical.BaseServiceDemo);
        break;
      case TechnicalComponents.CDNInvocation:
        navigation.navigate(ScreensTechnical.CDNInvocationDemo);
        break;
      case TechnicalComponents.CacheManager:
        navigation.navigate(ScreensTechnical.CacheManageDemo);
        break;
      case TechnicalComponents.DeviceBinding:
        navigation.navigate(ScreensTechnical.DeviceBindingDemo);
        break;
      case TechnicalComponents.Dialer:
        navigation.navigate(ScreensTechnical.DialerDemo);
        break;
      case TechnicalComponents.DisableScreenshot:
        navigation.navigate(ScreensTechnical.DisableScreenshotDemo);
        break;
      case TechnicalComponents.Dynatrace:
        navigation.navigate(ScreensTechnical.DynatraceDemo);
        break;
      case TechnicalComponents.EncryptionDecryption:
        navigation.navigate(ScreensTechnical.EncryptionDecryptionDemo);
        break;
      case TechnicalComponents.ExceptionErrorHandling:
        navigation.navigate(ScreensTechnical.ExceptionErrorHandlingDemo);
        break;
      case TechnicalComponents.ErrorMessagesNative:
        navigation.navigate(ScreensTechnical.ErrorMessagesNativeDemo);
        break;
      case TechnicalComponents.FileManager:
        navigation.navigate(ScreensTechnical.FileManagerDemo);
        break;
      case TechnicalComponents.GlobalHeaders:
        navigation.navigate(ScreensTechnical.GlobalHeaderDemo);
        break;
      case TechnicalComponents.HtmlParse:
        navigation.navigate(ScreensTechnical.HtmlParseDemo);
        break;
      case TechnicalComponents.NetworkManager:
        navigation.navigate(ScreensTechnical.NetworkManagerDemo);
        break;
      case TechnicalComponents.PersistentStorage:
        navigation.navigate(ScreensTechnical.PersistentStorageDemo);
        break;
      case TechnicalComponents.ShareTray:
        navigation.navigate(ScreensTechnical.ShareTrayDemo);
        break;
      case TechnicalComponents.TimeOutManagement:
        navigation.navigate(ScreensTechnical.TimeOutManagementDemo);
        break;
      case TechnicalComponents.UCJUrl:
        navigation.navigate(ScreensTechnical.UCJUrlDemo);
        break;
      case TechnicalComponents.UCJRelationManager:
        navigation.navigate(ScreensTechnical.UCJRelationManagerDemo);
        break;
      case TechnicalComponents.Validation:
        navigation.navigate(ScreensTechnical.ValidationDemo);
        break;
      default:
        navigation.navigate(ScreensTechnical.WebViewDemo);
    }
  };
  //#endRegion

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [searchText, setSearchText] = useState('');

  const UIComponentName: Array<string> = [];
  const TechnicalComponentName: Array<string> = [];
  let count = -1;
  let countTechnical = -1;

  for (const sn of ScreenName) {
    count++;
    if (sn.componentName.toLowerCase().includes(searchText.toLowerCase())) {
      UIComponentName.push(sn.componentName);
    }
  }

  for (const sn of ScreenNameTechnical) {
    countTechnical++;
    if (sn.componentName.toLowerCase().includes(searchText.toLowerCase())) {
      TechnicalComponentName.push(sn.componentName);
    }
  }

  const UIComp: FunctionComponent = (): ReactElement => {
    return (
      <FlatList
        style={styles.flatlistStyle}
        data={UIComponentName}
        keyExtractor={index => index.toString()}
        renderItem={({ index }) => {
          return (
            <TouchableOpacity
              style={[styles.textForLastComp]}
              onPress={() => navigationToScreen(UIComponentName[index])}>
              <View style={[styles.parent]}>
                <View style={[styles.changes]}>
                  <Text style={{ color: colors.NeutralGrey140 }}>
                    {index + 1}
                  </Text>
                </View>
                <View style={[styles.textView]}>
                  <Text
                    style={[
                      typography.BodySemiBold1,
                      { color: colors.NeutralGrey140 },
                    ]}>
                    {UIComponentName[index]}
                  </Text>
                </View>
              </View>
              <View>
                <ICGeneralChevronRight />
              </View>
            </TouchableOpacity>
          );
        }}
        showsVerticalScrollIndicator={false}
      />
    );
  };

  const TechnicalComp: FunctionComponent = (): ReactElement => {
    return (
      <FlatList
        style={styles.flatlistStyle}
        data={TechnicalComponentName}
        keyExtractor={index => index.toString()}
        renderItem={({ index }) => {
          return (
            <TouchableOpacity
              style={[styles.textForLastComp]}
              onPress={() =>
                navigationToScreenTechnical(TechnicalComponentName[index])
              }>
              <View style={[styles.parent]}>
                <View style={[styles.changes]}>
                  <Text style={{ color: colors.NeutralGrey140 }}>
                    {index + 1}
                  </Text>
                </View>
                <View style={[styles.textView]}>
                  <Text
                    style={[
                      typography.BodySemiBold1,
                      { color: colors.NeutralGrey140 },
                    ]}>
                    {TechnicalComponentName[index]}
                  </Text>
                </View>
              </View>
              <View>
                <ICGeneralChevronRight />
              </View>
            </TouchableOpacity>
          );
        }}
        showsVerticalScrollIndicator={false}
      />
    );
  };

  const comp = [<UIComp key="0" />, <TechnicalComp key="1" />];

  return (
    <>
      <Fragment>
        <CustomStatusBar
          gradientColorsArray={[
            colors.GradientOrangeStart,
            colors.GradientOrangeEnd,
          ]}
        />
        <View style={[styles.container]}>
          <LinearGradient
            useAngle={true}
            angle={89.96}
            colors={[colors.GradientOrangeStart, colors.GradientOrangeEnd]}
            style={styles.linearGradientStyle}>
            {/* Use the SearchBar component */}

            <View style={styles.afterClick}>
              <ICGeneralSearch />

              <TextInput
                style={styles.input}
                placeholder="Search"
                placeholderTextColor={colors.White}
                value={searchText}
                onChangeText={setSearchText}

              />
              <TouchableOpacity onPress={() => {
                setSearchText('');
                Keyboard.dismiss();

              }} style={{ right: actuatedNormalizeWidth(10) }}>
                <ICClose />
              </TouchableOpacity>
            </View>

            {/* </View> */}
          </LinearGradient>
        </View>

        <IMSegmentControl
          tabTitles={[{ title: 'UI' }, { title: 'Technical' }]}
          onSelect={index => {
            setSelectedIndex(index);
          }}
          selectedIndex={selectedIndex}
          components={comp}
          selectedTitleBgClr={colors.GradientOrangeStart}
          tabViewStyle={{ width: actuatedNormalizeWidth(178) }}
        />
      </Fragment>
    </>
  );
};

export default HomeScreen;