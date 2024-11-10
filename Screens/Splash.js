import React,{ useEffect }  from 'react';
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import { COLORS } from '../JsonData/Colors';
import { useFonts } from 'expo-font';


const Splash = ({navigation}) => {
//navigation
    // useEffect(() => {
    //   setTimeout(() => {
    //     navigation.replace('Onboarding')
    //   }, 4000)
    // })
    let [ fontsLoaded ] = useFonts({
        'ubuntu': require('../assets/fonts/Ubuntu-Regular.ttf'),
        'poppins': require('../assets/fonts/Poppins-Regular.ttf')
    })
    const { width } = useWindowDimensions()

    if(!fontsLoaded){
        return null
    }



  return (
    <View style={[styles.container, {width}]}>
      <Text style={styles.text1}>Musha</Text>
      <Text
        style={{
          position: 'absolute',
          bottom: 30,
          fontSize: 15,
          fontWeight: '400',
          color: COLORS.text,
          fontFamily: 'poppins',
          fontStyle: 'normal',
        }}>
        The Perfect Investment Choice for your Future
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
      },
      text1: {
        color: COLORS.title,
        fontSize: 40,
        fontFamily: 'ubuntu'
      }
});

export default Splash;

