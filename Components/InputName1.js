import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import { useFonts } from 'expo-font';


const Input = ({label, ...props}) => {
  
  const [loaded] = useFonts({
    poppins: require('../assets/fonts/Poppins-Regular.ttf'),
  });
  if (!loaded) {
      return null;
    }

  return (
    <View>
      <Text style={styles.userNamee}>{label}</Text>
      <View style={styles.inputContainerr}>
        <TextInput
          style={styles.text2Input}
          {...props}
          placeholderTextColor={'gray'}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  userNamee: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'poppins',
    color: '#81909D'
  },
  inputContainerr: {
    height: 53,
    borderRadius: 4,
    paddingHorizontal: 20,
    backgroundColor: "#e6e6e6",
  },
  text2Input: {
    flex: 1,
    fontFamily: 'poppins',
    // paddingLeft: 20,
    // paddingHorizontal: 20,
    backgroundColor: "#e6e6e6",
    color:'#4D5D6A'
  }
});

export default Input;