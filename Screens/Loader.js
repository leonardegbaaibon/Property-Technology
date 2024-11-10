//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useFonts } from "expo-font";
import { useState,useEffect } from "react";

// create a component
const Loader = ({navigation}) => {
    const [displayer, setDisplayer] = useState(false)

    
    useEffect(() =>{
          setTimeout(() => {
              setDisplayer(true)
          }, 2000);
    }, [])

    useEffect(() => {
      setTimeout(() => {
        navigation.replace('BottomTab')
    }, 2100);
    },[])



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
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
      <View>
        <Text
          style={{
            color: "#1D4ED8",
            fontFamily: "ubuntu",
            textAlign: "center",
            fontSize:22,
            marginTop:10
          }}
        >
          Musha
        </Text>
        <Text style={{ color: "#4D5D6A", fontFamily: "poppins",marginVertical:30,fontSize:18, textAlign:'center'}}>
          Search Configuraton
        </Text>
      </View>
      <View style={{marginVertical:100,display: displayer === true ? 'none':'flex'}}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LottieView
            source={require("../assets/Loader2.json")}
            style={{ width: 60 }}
            autoPlay
            loop
          />
        </View>
        <Text
          style={{
            color: "#4D5D6A",
            fontFamily: "poppins",
            textAlign: "center",
          }}
        >
          Nearest To You
        </Text>
      </View>
      <View style={{marginVertical:100,display: displayer === true ? 'flex':'none'}}>
        <Icon
          name={"check"}
          style={{
            marginTop: 10,
            fontSize: 20,
            color: "white",
            padding: 17,
            backgroundColor: "#00C747",
            borderRadius: 100,
          }}
        />
        <Text
          style={{
            color: "#4D5D6A",
            fontFamily: "poppins",
            textAlign: "center",
          }}
        >
          Done
        </Text>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    margin: 15,
    flex: 1,
    alignItems: "center",
  },
});

//make this component available to the app
export default Loader;
