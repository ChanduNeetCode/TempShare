# IMCards v1.0.0

## Installation

Using npm:
$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*

## JSX Implementation for Cards

# Regular Cards

```JSX

        <!--How to create RegularCards View in the Component-->
            <RegularCards regular={regularInfo.WhiteOutline} regularCardStyleProps>
            <Text>hii</Text>
            </RegularCards>
```

### Props in RegularCards Component

| **_attribute_**        | **_format_**            | **_description_**                            | **_isRequired_** |
| ---------------------- | ----------------------- | -------------------------------------------- | ---------------- |
| regular                | WhiteOutline/grey/white | types of Regular cards                       | Mandatory        |
| regularCardStyleProps  | ViewStyle               | regular card view style                      | Optional         |
| typeInfo               | number                  | type of the card                             | Optional         |
| cardBgColor            | string                  | to change background color of card           | Optional         |

# InfoCards

```JSX

        <!--How to create InfoCards View in the Component-->
            <InfoCards type={typeInfo.type2} typeClr={'green'} infoCardsStyleProp>
            <Text>hi</Text>
            </InfoCards>
```

### Props in InfoCards Component

| **_attribute_**        | **_format_**      | **_description_**        | **_isRequired_** |
| ---------------------- | ----------------- | ------------------------ | ---------------- |
| type                   | type1/type2/type3 | types of Info Cards      | Mandatory        |
| typeClr                | Color             | Border color with types  | Optional         |
| infoCardsStyleProp     | ViewStyle         | Outer view style         | Optional         |
| infoCardInnerStyleProp | ViewStyle         | Inner view style         | Optional         |
| LeftImage              | JSX.Element       | left image in Info card  | optional         |
| RightImage             | JSX.Element       | right image in Info card | optional         |
| LeftImageStyle         | ViewStyle         | LeftImage Style          | optional         |
| RightImageStyle        | ViewStyle         | Rightmage Style          | optional         |
| infoCardViewStyleProp  | viewstyle         |view style to apply shadow| optional         |

## Featured Description Cards

```JSX

        <!--How to create  Featured Description Cards View in the Component-->
            <IMFeaturedDescriptionCards type={featuredInfo.type1} typeClr={colors.PastelBlue100} linearGradientColor1={colors.GradientOrangeStart}
            linearGradientColor2={colors.GradientOrangeEnd}
            ImageBottomLeft={<ICLineHelp />}
            ImageRightTop={<ICLineBusBooking />}
            />

```

### Props in Featured Description Cards Component

| **_attribute_**              | **_format_**          | **_description_**                                                               | **_isRequired_** |
| ---------------------------- | --------------------- | ------------------------------------------------------------------------------- | ---------------- |
| type                         | type1/type2/type3     | type of Featured Cards                                                          | Mandatory        |
| typeClr                      | Color                 | Background color of the featured type view                                      | Optional         |
| linearGradientColor1         | Color                 | These gradient color will apply only for the feature type3 for background color | Optional         |
| linearGradientColor2         | Color                 | These gradient color will apply only for the feature type3 for background color | Optional         |
| ImageRightTop                | Image                 | The image prop which is placed on the right top                                 | Optional         |
| ImageBottomLeft              | Image                 | The image prop which is placed on the bottom left                               | Optional         |
| featuredCardStyleProp        | ViewStyle             | View style of the featured card                                                 | Optional         |
| linearGradientStartDimension | object{ x: 0, y: 1 }  | Dimension for the LinearGradient start                                          | Optional         |
| linearGradientEndDimension   | object { x: 1, y: 0 } | Dimension for the LinearGradient end                                            | Optional         |

# Navigation Card

```JSX

        <!--How to create  Navigation Card View in the Component-->
           <IMNavigationCard linearGradientColor1={colors.GradientOrangeStart}
            linearGradientColor2={colors.GradientOrangeEnd} navigationStyleProp={{ minHeight: 159 }}/>

```

### Props in Navigation Card Component

| **_attribute_**      | **_format_** | **_description_**                 | **_isRequired_** |
| -------------------- | ------------ | --------------------------------- | ---------------- |
| linearGradientColor1 | Color        | Background color of the view      | Optional         |
| linearGradientColor2 | Color        | Background color of the view      | Optional         |
| navigationStyleProp  | ViewStyle    | Style of the navigation card view | Optional         |

# Account and Credit Cards

```JSX

        <!--How to create  Account and Credit Cards View in the Component-->
          <IMAccountCreditCards
            acctType={accountInfo.Deposits}
            depositTitle='Fixed Deposit'
            savingTitle='Saving Account'
            balanceTitle='Show balance'
            currentTitle='Current balance'
            backgroundColor={colors.GradientOrangeStart}
            backgroundImg={<HorseBlkCurve3 width={180} height={120} />}
            numHideData={7}
            debitCardOnPress={() => {
            }}
            showBalanceOnPress={() => {
            setShowBalance(!showBalance)

            }}
            amountBalance={showBalance ? 1000 : 0} showBalance={showBalance} acctNum={'765765765675'}
            debit={<DebitCard />}
            statement={<ViewStatement />}
            settings={<Settings />}
            />

```

### Props in Account and Credit Cards Component

| **_attribute_**         | **_format_**                  | **_description_**                                               | **_isRequired_** |
| ----------------------- | ----------------------------- | --------------------------------------------------------------- | ---------------- |
| accountType             | SavingAc/Deposits/CreditCards | types of cards                                                  | Mandatory        |
| backgroundClr           | Color                         | Background color of the card                                    | Optional         |
| accountNumber           | number                        | Account number of the card                                      | Mandatory        |
| showTitle               | String                        | Title for the Balance                                           | Optional         |
| title                   | string                        | Title for saving account                                        | Optional         |
| currentTitle            | string                        | After the clicking the balance title the title prop has to sent | Optional         |
| showBalance             | boolean                       | Show balance appearance                                         | Optional         |
| amountBalance           | number                        | Balance amount in account card                                  | Optional         |
| iciciLogo               | Image                         | Icici logo in svg                                               | Optional         |
| ImageRightTop           | JSX.Element                   | image for right flowers                                               | Optional         |
| debit                   | Image                         | Debit logo in svg                                               | Optional         |
| statement               | Image                         | statement logo in svg                                           | Optional         |
| settings                | Image                         | settings logo in svg                                            | Optional         |
| backgroundImg           | Image                         | Background svg image for the cards                              | Optional         |
| partnerLogo             | Image                         | logo in svg                                                     | Optional         |
| partnerName             | Image                         | logo in svg                                                     | Optional         |
| numHideData             | number                        | how many numbers of hide circle has to display                  | Optional         |
| debitCardOnPress        | void                          | call back if click on debit logo                                | Optional         |
| statementOnPress        | void                          | call back if click on statement logo                            | Optional         |
| settingsOnPress         | void                          | call back if click on settings logo                             | Optional         |
| showBalanceOnPress      | void                          | call back if click on show Balance                              | Optional         |
| containerStyleProp      | ViewStyle                     | View Style for the card                                         | Optional         |
| currentBalanceViewStyle | ViewStyle                     | View Style for the Show balance                                 | Optional         |
| alignItems              | ViewStyle                     | View Style for the right flower image	                    | Optional         |
| balanceTxtStyle         | TextStyle                     | Style for the text inside the show balance view                 | Optional         |
| showBalanceViewStyle    | ViewStyle                     | Outer view style for the show balance                           | Optional         |
| savingAcViewStyle       | ViewStyle                     | Style for the Account Number view                               | Optional         |
| iciciLogoStyles         | ViewStyle                     | Style for the ICICI Logo view                                   | Optional         |
| leftTopImageStyle       | ViewStyle                     | Style for the Top Image view                                    | Optional         |
| acctNumStyle            | TextStyle                     | Text style for the account number                               | Optional         |
| savingAcTextStyle       | TextStyle                     | text style for the saving account text                          | Optional         |
| depositTextStyle        | textStyle                     | Text style for the deposit title                                | Optional         |
| showValueViewStyle      | ViewStyle                     | After clicking on the show balance of the view style            | Optional         |
| partnerLogoStyle        | ViewStyle                     | partner logo style                                              | Optional         |
| partnerNameStyle        | ViewStyle                     | partner logo style                                              | Optional         |

```

```

Props in IMMutualFundCard Component

| **_attribute_**        | **_format_**      | **_description_**        | **_isRequired_** |
| ---------------------- | ----------------- | ------------------------ | ---------------- |
| isleftIcon             | boolean           | to display left image    | Optional         |
| isRightIcon            | boolean           | to display right image   | Optional         |
| cardWidth              | number            | width of card(default312)| Optional         |
| noOfDigitsDisplay      | number            | numbers of digits to display in subtitle(default 0)|Optional|
| backgroundClr          | string            | background color         | Optional         |
| subTitle               | string            | subtitle                 | Optional         |
| title                  | string            | title                    | Optional         |
| leftIcon               | JSX.Element       | left image in card       | optional         |
| rightIcon              | JSX.Element       | right image in  card     | optional         |
| subTitleStyle          | TextStyle         | subtitle  Style          | optional         |
| titleStyle             | TextStyle         | title  Style             | optional         |
| cardContainerStyle     | ViewStyle         | card container style     | optional         |
| dotsStyle              | ViewStyle         | dotsStyle in subtitle    | optional         |
| leftIconStyle          | ViewStyle         | LeftImage Style (default bank logo)| optional|
| rightIconStyle         | ViewStyle         | Rightmage Style(default chevron right)| optional|
| textContainerStyle     | ViewStyle         | textContainerStyle       | optional         |

## IMMutualFundCard

```JSX

        <!--How to create  Mutual Funds Card  in the Component-->
            <IMMutualFundCard
            isleftIcon={true}
            isRightIcon={true}
          />

```