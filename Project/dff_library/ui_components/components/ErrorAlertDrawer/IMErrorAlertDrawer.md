# MiniSuccessPage

## Installation

$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*

<!--Other dependencies using npm -->

## JSX Implementation for Error And Alert Drawer

```JSX

        <!--How to create Error And Alert Drawer in the Component-->

            import { IMErrorAndAlertDrawer } from '@icicibank/tsg1_2259_rn_dff_library'

          <IMErrorAlertDrawer
          isVisible={modalVisible}
          closeModal={(value: boolean) => {
            setModalVisible(false);
           setBlurEnabled(false);
          }}
          errorIcon={<ICGeneralNotify style={{ width: 32, height: 32 }} />}
          closeIcon={<>
            <Pressable onPress={closeModal}>
              <View style={styles.closeIconStyle}>
                <ICGeneralClose />
              </View>
            </Pressable>
          </>}

          buttonProps={<>
            <View style={styles.buttonViewStyle}>
              <View style={styles.buttonStyle}>
                <TouchableOpacity onPress={() =>
                  handleChipPress('Cancel')
                }>
                  <Text style={styles.cancelTextStyle}>
                    {STRINGS.str_cancel}
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={() =>
                handleChipPress('Accept')
              }>
                <View style={styles.activeButtonView}>
                  <Text style={styles.activeButtonText}>
                    {STRINGS.tr_accept}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </>}
          childProps={<>
            <View
              style={styles.childMainViewStyle}>
              <View
                style={styles.childViewStyle}>
                <View style={styles.iconViewStyle}>
                  <ICGeneralRecurringMandate height={20} width={20} />
                </View>
                <View style={{ left: actuatedNormalizeWidth(10) }}>
                  <Text style={styles.leftTextStyle}>Netflix India Ltd</Text>
                  <Text style={styles.leftDescriptionstyle}>netflixindia@icici
                  </Text>
                </View>
                <View style={{ left: actuatedNormalizeWidth(90) }}>
                  <Text style={styles.rightTextStyle}>₹ 200/mo</Text>
                  <Text style={styles.rightDescriptionstyle}>
                    12 Jun, ‘22
                  </Text>
                </View>
              </View>
              <View style={styles.secondMainViewStyle}>
                <View
                  style={styles.secondViewStyle}>
                  <View style={styles.secondIconStyle}>
                    <ICGeneralAlertOrange />
                  </View>
                  <Text style={styles.balanceStyle}>Insufficient balance</Text>
                  <View style={{ left: actuatedNormalizeWidth(90) }}>
                    <Text style={styles.showBalanceStyle}>Show balance</Text>
                    <View style={styles.underLineStyle}></View>
                  </View>
                </View>
              </View>
            </View>
          </>}

          title={STRINGS.str_title}
          description={STRINGS.str_description} />
```

<br/>

### Props in Continuous Slider Component

| **_attribute_** | **_format_** | **_description_**                    | **_isRequired_** |
| --------------- | ------------ | ------------------------------------ | ---------------- |
| isVisible       | boolean      | true , its modal is visible          | Mandatory        |
| closeModal      | ()=>void     | if set value false, close modal      | Mandatory        |
| blurContainer   | View Style   | blur view for modal                  | Optional         |
| errorIcon       | Svg Image    | To display center of the Top icon    | Mandatory        |
| closeIcon       | SVG Image    | To display Close the Icon Right side | Optional         |
| buttonProps     | ViwStyle     | Button component of View style       | optional         |
| childProps      | View Style   | Child component of View style        | Optional         |
| title           | String       | Header of the title                  | Mandatory        |
| description     | String       | Body of the title                    | Optional         |

<br/>
<br/>
