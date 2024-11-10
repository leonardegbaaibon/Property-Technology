import React, { useState } from "react";
import RangeSlider from "react-native-range-slider-expo";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  View,
  Text,
  useWindowDimensions,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { useFonts } from "expo-font";
import { color } from "react-native-reanimated";



// create a component
const Gateway = ({navigation}) => {
    const [fontsLoaded] = useFonts({
        ubuntu: require("../assets/fonts/Ubuntu-Regular.ttf"),
        poppins: require("../assets/fonts/Poppins-Regular.ttf"),
        mulish: require("../assets/fonts/Mulish-Regular.ttf"),
        rubik: require("../assets/fonts/Rubik-Regular.ttf"),
      });
    
      if (!fontsLoaded) {
        return null;
      }

    return (
        <ScrollView style={styles.container}  >
            <Text style={{textAlign:'center',color:'#1D4ED8',fontFamily:'ubuntu',fontSize:20,marginVertical:30}}>Musha</Text>
            <View style={{backgroundColor:'#FFFFFF',padding:50,paddingVertical:70,borderRadius:10,marginHorizontal: 40,marginTop:40}}>
                <Text style={{color:'#4D5D6A',fontFamily:'poppins',textAlign:'center'}}>
                    Payment Gateway
                </Text>
            </View>
            <TouchableOpacity style={{backgroundColor:'#1D4ED8',marginTop:200,padding:15,borderRadius:8,display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}} onPress={() => navigation.navigate('Profile')}>
                <Text style={{color:'white',fontFamily:'poppins',textAlign:'center',fontSize:17}}>
                    Go to My Assets
                </Text>
                <Icon
            name={"arrow-right"}
            style={{fontSize: 20, color: "white" }}
          />
            </TouchableOpacity>
        </ScrollView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#F5F5F5',
        // alignItems: 'center',
        marginTop: 90,
        marginHorizontal: 18,
    },
});

//make this component available to the app
export default Gateway;
