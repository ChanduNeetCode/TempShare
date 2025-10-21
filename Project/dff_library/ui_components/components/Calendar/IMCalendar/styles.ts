import colors from '../../../atoms/colors';
import { StyleSheet } from 'react-native';

const styles = () =>
  StyleSheet.create({
    calendar: {
      alignSelf: 'center',
      margin: 30,
      marginTop: 0,
      width: 320,
    },
    dayContainer: {
      alignSelf: 'center',
      height: 80,
      paddingTop: 8,
      width: 40,
    },
    dayText: {
      fontSize: 16,
      textAlign: 'center',
    },
    doneButton: {
      fontSize: 14,
      paddingTop: 5,
    },
    header: {
      alignItems: 'flex-start',
      alignSelf: 'center',
      backgroundColor: colors.White,
      borderRadius: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 30,
      padding: 10,
      width: 320,
    },
    headerContent: {
      alignItems: 'center',
      flexDirection: 'row',
    },
    headerText: {
      color: '#333',
      fontSize: 18,
    },
    iconContainer: {
      alignSelf: 'center',
      bottom: 0,
      paddingTop: 20,
      right: 0,
    },
    picker: {
      height: 40,
      left: 0,
      width: '100%',
    },
    pickerColumn: {
      alignItems: 'center',
      flex: 1,
    },
    pickerContainer: {
      backgroundColor: '#f4f4f4',
      flexDirection: 'row',
      paddingTop: 10,
    },
    pickerLabel: {
      fontSize: 16,
      marginBottom: 5,
    },
  });

export default styles;
