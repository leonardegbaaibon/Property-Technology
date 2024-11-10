//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useFonts } from "expo-font";

// create a component
const UploadSuccess = ({ navigation }) => {
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
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop:150
        }}
      >
        <View style={{padding:10}}>
          <Image
            source={require("../assets/Image/Charter.png")}
            style={{ width: 150, height: 150 }}
          />
          <View
            style={{
              backgroundColor: "#00C747",
              padding: 10,
              position: "absolute",
              right: 0,
              top: 20,
              borderRadius: 50,
              borderWidth: 5,
              borderColor: "white",
            }}
          >
            <Icon
              name={"check"}
              style={{
                // marginTop: 10,
                fontSize: 20,
                color: "white",
              }}
            />
          </View>
        </View>
        <View style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:'#4D5D6A',textAlign:'center',fontFamily:'mulish',width:170,fontSize:25,marginVertical:10}}>
                Assets Uploaded Successfully
            </Text>
            <Text style={{color:'#1D4ED8',fontFamily:'mulish',fontSize:18,marginVertical:10}}>
                Assets currently in review
            </Text>
        </View>
      </View>
      <View style={{marginVertical:150}}>
        <TouchableOpacity style={{ borderWidth: 1, borderColor: "#1D4ED8",borderRadius:5 }} onPress={() => navigation.navigate('DealsPage')}>
          <Text
            style={{
              color: "#1D4ED8",
              fontFamily: "poppins",
              textAlign: "center",
              fontSize:18,
              paddingVertical:10,
            }}
          >
            Explore Musha
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    margin: 15,
    // justifyContent:'center',
    // alignItems:'center'
  },
});

//make this component available to the app
export default UploadSuccess;
