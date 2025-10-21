# CDN Invocation v1.0.0

## Installation

Using npm -
$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*

How to use CDN Invocation function -
import { IMCDNInvocation } from '@icicibank/tsg1_2259_rn_dff_library'

## IMCDNInvocationProps

| Props             | Params             | isRequire | Description                                             |
| ----------------- | -------------------| --------- | ------------------------------------------------------- |
| invocationType    | 'Image' or 'Data'  | yes       | whether Data Content is needed or Image Content is needed|
| dataRequestType   | string             | yes       | choose types of Data from 'DataType' and type of Image from 'ImageType' according to invocationType |
| assetName         | string             | No        | neede for Image content                                 |
| module            | string             | No        | neeeded for Data Content                                |
| env               | environment|string | No        | environment variable (dev/uat/prod/test/string )        |
| isImageRequired   | boolean            | No        | for getImage if we want to get Image                    |
| imageStyle        | object             | No        | styles for Image                                        |
| defaultImage      | JSX.Element        | No        | default image when assetname is null(default ICICI logo)|
| headers           | object             | No        | headers to pass for getting image apicall               |

### IMCDNInvocation example (Data Delivery)

```JS
IMCDNInvocation({ invocationType: 'Data', dataRequestType: DataType.Message })
    .then(res => {
        setData(res.message) 
    })
```
### IMCDNInvocation example (Image Delivery)

```JS
IMCDNInvocation({ isImageRequired:true,invocationType: 'Image', dataRequestType: ImageType.CreditCard, assetName: 'Master-Rubyx.jpg' })
    .then(res => {  
            setImage(res.response) 
    })
```

### Image Enums List

    Bank,
    CardsCCExpression,
    CardsDCExpression,
    CardsCCDashboard,
    CardsDCDashboard,
    CardsCCBG,
    CardsDCBG,
    FastTagHomeIcons,
    FastTagHomeThemes,
    FastTagRechargeSuccessICICI,
    FastTagRechargeSuccessNonICICI,
    BillersIcon,
    Upiproviders,
    Gemstone,
    Expressions,
    CommonDC,
    CardForex,
    CardCompanion;

// Added to meet O&R module Requirement
    CreditCard;
    DebitCard;

### Data Enums List

    FAQs,
    Videos,
    ContactUs,
    Message,
    LearnMore,
    Branches,
    FastTagHome,
    FastTagRechargeSuccess,
    FastTagPinCodeStateCity,
    CardsCCExpressionOptions,
    CardsDCExpressionOptions,
    CardsCCExpressionConfigurations,
    CardsDCExpressionConfigurations,
    FACILITIES,
    BLOGS,
    Banner,
    EmptyDepositsCards,
    MakeNewDeposits,
    Opportunities,
    Suggestions,
    UpgradeDebitCard,
    UpgradedIssueCard,
    BenefitsSocialInfo,
    SunDirectplans,
    CategoryInfo,
    BillersInfo,
    Bank,
    BankBranch,
    ConfigFile,
    RdInterestRange,
    FdInterestRange,
    FdAmountRange,
    UnlocKnowCC,
    UpgradeCC,
    FdClosureAlternatives,
    PPfBenefits,
    Rupaycc,
    PPFFeatures,
    IwishPopularTenures,
    Offer,
    CCUPI,
    Card,
    Ccfd,
    Gemstone,
    Expressions,
    CustomImageConfigurations,
    CommonConfigurations,
    CardOptions,
    CardLimits,
    UpiLiteLimit,
    CCFDMaster;
    
// Added to meet services module Requirement
    CardLessCashWithdrawl,
    FindNearMe,

// Added to meet Offers & Rewards module Requirement
    PreApprovedLoanOrder,
    PreApprovedLoans,
    IndexOffers,
    PaymentModeOffers,
    Top5OffersOrder,
    NearByOffersAndCashback,
    UserData,
    Banners,
    Support,