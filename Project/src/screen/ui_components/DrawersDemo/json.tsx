import React from "react";
import { ICComponentDrawerSuccess, ICComponentDrawerType, ICComponentDrawerWarning, ICLineBankAccount, Refresh, Star } from "../../../../dff_library/ui_components/atoms/icons";
import { Text } from "react-native";

export const data = [
  {
    id: '54rfd',
    name: 'NEFT',
    amt: <Text >₹ 27,637</Text>,
    actNumber: '"Movie Tickets"',
    date: "17 Mar '22"
  },
  {
    id: '54rfd',
    name: 'IMPS',
    amt: <Text style={{ color: 'green' }}>+ ₹ 3,470</Text>,
    actNumber: '"Bill split for pizza"',
    date: "17 Mar '22"
  },
  {
    id: '54rfd',
    name: 'IMPS',
    amt: <Text style={{ color: 'green' }}>+ ₹ 1,637</Text>,
    actNumber: '"Cab Fare"',
    date: "17 Mar '22"
  },
];
