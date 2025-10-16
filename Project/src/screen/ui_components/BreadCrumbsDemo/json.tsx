import { colors } from '../../../../dff_library/ui_components/atoms';
import React, { FC ,useState} from 'react';
import { Text, View ,FlatList,TouchableOpacity} from 'react-native';


export const listData = [
   {
    id:0,
    text:"Bill payments",
    component:(
      <View>
        <Text style={{color:colors.NeutralGrey100}}>component 0</Text>
      </View>
    )

   },
   {
    id:1,
    text:"Home and Utilities",
    component:(
      <View>
        <Text style={{color:colors.NeutralGrey100}}>component 1</Text>
      </View>
    )

   },{
    id:0,
    text:"Electricity",
    component:(
      <View >
        <Text style={{color:colors.NeutralGrey100}}>component 2</Text>
      </View>
    )

   }
  ];