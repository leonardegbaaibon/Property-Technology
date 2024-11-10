import React from 'react';
import {View, Text, StyleSheet, TextInput, useWindowDimensions} from 'react-native';
// import { COLORS } from '../JsonData/Colors';
import { useFonts } from 'expo-font';



const Input2 = ({label, color, ...props}) => {
  
  const [loaded] = useFonts({
    poppins: require('../assets/fonts/Poppins-Regular.ttf'),
  });
  const width = useWindowDimensions().width
  if (!loaded) {
      return null;
    }

  return (
    <View>
      <Text style={styles.userName}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          {...props}
          placeholderTextColor= 'gray'
          onChangeText={() => set}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  userName: {
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 7,
    fontFamily: 'poppins',
    color: '#81909D'
  },
  inputContainer: {
    height: 53,
    borderRadius: 10,
    // paddingHorizontal: 20,
    // backgroundColor:'green',
  },
  textInput:{
    flex: 1,
    fontFamily: 'poppins',
    paddingHorizontal: 20,
    backgroundColor: "#e6e6e6",
    color:'#4D5D6A'
  }
});

export default Input2;