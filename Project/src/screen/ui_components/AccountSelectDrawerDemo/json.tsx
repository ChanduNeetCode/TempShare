import IMNormalList from '../../../../dff_library/ui_components/components/List/IMNormalList';
import { Text, View , TouchableOpacity } from 'react-native';
import typography from '../../../../dff_library/ui_components/atoms/typography';
//import { data } from "../ListDemo/json";
import React from 'react';
import {
  ICComponentDrawerType,
  ICComponentDrawerSuccess,
  ICGeneralChevronDown,
  ICCreditCard,
  IC_CreditCardOffer,
  IC_GCreditCard
} from '../../../../dff_library/ui_components/atoms/icons';
import { actuatedNormalizeHeight, actuatedNormalizeWidth } from '../../../utils/utility';

export const data = [
  {
    id: 'a0s0a8ssbsd',
    name: '6527 9992 1212',
    amt: 'Amt',
    actNumber: <View style={{ flexDirection: 'row' }}>
      <View style={{ width: actuatedNormalizeWidth(51), height: actuatedNormalizeHeight(16) }}>
        <Text style={[typography.LinkSemiBold, { color: '#7D8287' }]}>Balance:</Text>
      </View>
      <View style={{ width: actuatedNormalizeWidth(62), height: actuatedNormalizeHeight(16), marginLeft: actuatedNormalizeWidth(4) }}>
        <Text style={[typography.LinkSemiBold, { color: '#202428' }]}>{`₹2,95,000`}</Text>
      </View>
    </View>,
    date: 'Date',
    logo: (
      <ICComponentDrawerSuccess
        height={30}
        width={30}
      />
    ),
    isStar: true,
    rightDownArrow: (<ICGeneralChevronDown />),
    starLogo: (<Text style={[typography.LabelSmallMedium, { backgroundColor: '#F7F7F7',top:-3, padding: 5, borderRadius: 2}]}>Saving a/c</Text>),
    isoptionalText: true,
  },
  {
    id: 'a0s0a8ssbsd',
    name: 'ICICI Rubyx Credit Card',
    amt: 'Amt',
    actNumber: <Text style={[typography.LabelSmallMedium, { padding: 0, color: '#333638' }]}>1244 0883 8890 5117</Text>,
    date: 'Date',
    logo: (
      <ICComponentDrawerSuccess
        height={30}
        width={30}
      />
    ),
    isStar: true,
    rightDownArrow: (<ICGeneralChevronDown />),
    starLogo: (<Text style={[typography.LabelSmallMedium, { backgroundColor: '#F7F7F7',top:-3, padding: 5, borderRadius: 2 }]}>Pay Later</Text>),
    isoptionalText: true,
  },
  {
    id: 'a0s0a8ssbsd',
    name: '6527 9992 1212',
    amt: 'Amt',
    actNumber: <View style={{ flexDirection: 'row' }}>
      <View style={{ width: actuatedNormalizeWidth(51), height: actuatedNormalizeHeight(16) }}>
        <Text style={[typography.LinkSemiBold, { color: '#7D8287' }]}>Balance:</Text>
      </View>
      <View style={{ width: actuatedNormalizeWidth(62), height: actuatedNormalizeHeight(16), marginLeft: actuatedNormalizeWidth(4) }}>
        <Text style={[typography.LinkSemiBold, { color: '#202428' }]}>{`₹2,95,000`}</Text>
      </View>
    </View>,
    date: 'Date',
    logo: (
      <ICComponentDrawerSuccess
        height={30}
        width={30}
      />
    ),
    isStar: true,
    rightDownArrow: (<ICGeneralChevronDown />),
    starLogo: (<Text style={[typography.LabelSmallMedium, { backgroundColor: '#F7F7F7',top:-3,padding:5,  borderRadius: 2 }]}>Saving a/c</Text>),
    isoptionalText: true,
  }
];


export const dataa = [
  {
    id: 'a0s0a8',
    name: 'ICICI Rubyx Credit Card',
    amt: 'Amt',
    actNumber: <Text style={[typography.LabelSmallMedium, { padding: 0, color: '#333638' }]}>1244 0883 8890 5117</Text>,
    date: 'Date',
    logo: (
      <ICComponentDrawerSuccess
        height={30}
        width={30}
      />
    ),
    isStar: true,
    rightDownArrow: (<ICGeneralChevronDown />),
    // starLogo: (<Text style={[typography.LabelSmallMedium,{ backgroundColor:'#F7F7F7', padding:5, borderRadius:10}]}>Pay Later</Text>),
    isoptionalText: true,
  },
  {
    id: 'a0s0a8',
    name: 'ICICI Rubyx Credit Card',
    amt: 'Amt',
    actNumber: <Text style={[typography.LabelSmallMedium, { padding: 0, color: '#333638' }]}>1244 0883 8890 5117</Text>,
    date: 'Date',
    logo: (
      <ICComponentDrawerSuccess
        height={30}
        width={30}
      />
    ),
    isStar: true,
    rightDownArrow: (<ICGeneralChevronDown />),
    // starLogo: (<Text style={[typography.LabelSmallMedium,{ backgroundColor:'#F7F7F7', padding:5, borderRadius:10}]}>Pay Later</Text>),
    isoptionalText: true,
  },
];



export const dataaa = [
  {
    id: 'a0s0',
    name: 'State Bank of India - 2012',
    amt: 'Amt',
    actNumber: <TouchableOpacity onPress={() => { }}><Text style={[typography.LinkSemiBold, { padding: 0, color: '#F0792E', textDecorationLine: 'underline' }]}>Show balance</Text></TouchableOpacity>,
    date: 'Date',
    logo: (
      <ICComponentDrawerSuccess
        height={30}
        width={30}
      />
    ),
    isStar: true,
    rightDownArrow: (<ICGeneralChevronDown />),
    // starLogo: (<Text style={[typography.LabelSmallMedium,{ backgroundColor:'#F7F7F7', padding:5, borderRadius:10}]}>Pay Later</Text>),
    isoptionalText: true,
  },
  {
    id: 'a0s0',
    name: 'State Bank of India - 2696',
    amt: 'Amt',
    actNumber: <TouchableOpacity onPress={() => { }}><Text style={[typography.LinkSemiBold, { padding: 0, color: '#F0792E', textDecorationLine: 'underline' }]}>Show balance</Text></TouchableOpacity>,
    date: 'Date',
    logo: (
      <ICComponentDrawerSuccess
        height={30}
        width={30}
      />
    ),
    isStar: true,
    rightDownArrow: (<ICGeneralChevronDown />),
    // starLogo: (<Text style={[typography.LabelSmallMedium,{ backgroundColor:'#F7F7F7', padding:5, borderRadius:10}]}>Pay Later</Text>),
    isoptionalText: true,
  },
  {
    id: 'a0s0',
    name: 'State Bank of India - 2012',
    amt: 'Amt',
    actNumber: <TouchableOpacity onPress={() => { }}><Text style={[typography.LinkSemiBold, { padding: 0, color: '#F0792E', textDecorationLine: 'underline' }]}>Show balance</Text></TouchableOpacity>,
    date: 'Date',
    logo: (
      <ICComponentDrawerSuccess
        height={30}
        width={30}
      />
    ),
    isStar: true,
    rightDownArrow: (<ICGeneralChevronDown />),
    // starLogo: (<Text style={[typography.LabelSmallMedium,{ backgroundColor:'#F7F7F7', padding:5, borderRadius:10}]}>Pay Later</Text>),
    isoptionalText: true,
  }
];


export const sampleData = [
  {
    id: 1,
    isOpen: true,
    title: <Text style={{ padding: 13 }}>Preffered</Text>,
    isContentJSX: true,
    content: (
      <IMNormalList
        //rightIcon={<Refresh />}

        leftIcon="logo"
        isListHeader={false}
        subLineKey={'actNumber'}
        starIconKey='starLogo'
        // ListHeadingTitle={'All payees'}
        // ListEndHeadingTitle={'Last paid'}
        headingKey="name"
        //date={'date'}
        amt={'amt'}
        list={data}
        isSeparator={false}
        isOnPressHighlight={true}
        disableIcon={
          <View
            style={{
              borderWidth: 2,
              borderColor: '#000',
              width: 20,
              height: 20,
              borderRadius: 10,
            }}></View>
        }
        highlightIcon={
          <View
            style={{
              borderWidth: 4,
              borderColor: '#f0792e',
              width: 20,
              height: 20,
              borderRadius: 10,
            }}></View>
        }
        highlightWidth={2}
        highlightColor="#f0792E"
        //itemSeparateLineStyle={{borderWidth:0}
        itemViewStyle={{
          borderWidth: 1,
          borderRadius: 15,
          marginVertical: 10,
          borderColor: '#ff0f0f',
          width: 340,
        }}
      //mainContainerStyle={{borderColor:'#ff0f0f',borderWidth:3,borderRadius:30}}
      />
    ),
  },
  {
    id: 2,
    isOpen: false,
    title: <Text style={{ padding: 13 }}>Credit Cards</Text>,
    isContentJSX: true,
    content: (
      <IMNormalList
        //rightIcon={<Refresh />}

        leftIcon="logo"
        isListHeader={false}
        subLineKey={'actNumber'}
        starIconKey='starLogo'
        // ListHeadingTitle={'All payees'}
        // ListEndHeadingTitle={'Last paid'}
        headingKey="name"
        //date={'date'}
        //amt={'amt'}
        list={data}
        isSeparator={false}
        isOnPressHighlight={true}
        disableIcon={
          <View
            style={{
              borderWidth: 2,
              borderColor: '#000',
              width: 20,
              height: 20,
              borderRadius: 10,
            }}></View>
        }
        highlightIcon={
          <View
            style={{
              borderWidth: 4,
              borderColor: '#f0792e',
              width: 20,
              height: 20,
              borderRadius: 10,
            }}></View>
        }
        highlightWidth={2}
        highlightColor="#f0792E"
        //itemSeparateLineStyle={{borderWidth:0}
        itemViewStyle={{
          borderWidth: 1,
          borderRadius: 15,
          marginVertical: 10,
          borderColor: '#ff0f0f',
          width: 340,
        }}
      //mainContainerStyle={{borderColor:'#ff0f0f',borderWidth:3,borderRadius:30}}
      />
    ),
  },
];
