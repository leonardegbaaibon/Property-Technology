//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import { useFonts } from "expo-font";

// create a component
const ChooseAction = ({navigation}) => {
  const { width } = useWindowDimensions();

  const [fontsLoaded] = useFonts({
    ubuntu: require("../assets/fonts/Ubuntu-Regular.ttf"),
    poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    mulish: require("../assets/fonts/Mulish-Regular.ttf"),
    rubik: require("../assets/fonts/Rubik-Regular.ttf"),
  });

  if (!fontsLoaded) {
    ``;
    return null;
  }

  return (
    <SafeAreaView style={[styles.container]}>
      <View style={{}}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <Text style={{ color: "blue", fontFamily: "ubuntu", fontSize: 30 }}>
            Musha
          </Text>
          <TouchableOpacity onPress={() => navigation.replace('DealsPage')}>
            <Text style={{ fontFamily: "poppins", color: "#81909D",fontSize:18}}>
              Skip
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={[styles.welcome, { width: width - 200 }]}>
            Thank you for being part of us...
          </Text>
          <Text
            style={{
              textAlign: "center",
              color: "#4D5D6A",
              fontFamily: "rubik",
              marginVertical: 50,
            }}
          >
            Select what you want
          </Text>
        </View>
      </View>
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: "#F7F9FB",
            padding: 10,
            borderRadius: 10,
            marginVertical: 10,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          onPress={() => navigation.navigate('AddProperty')}
        >
          <View style={{ width: 60, padding: 5 }}>
            <View
              style={{
                borderWidth: 1.5,
                borderRadius: 5,
                width: 50,
                borderColor: "#F9D0C7",
                padding: 5,
              }}
            >
              <Image
                source={require("../assets/Image/clarity_building-line.png")}
                style={{ width: 35, height: 35 }}
              />
            </View>
            <Image
              source={require("../assets/Image/dollar.png")}
              style={{
                width: 20,
                height: 20,
                position: "absolute",
                top: 0,
                right: 0,
              }}
            />
            {/* <Text>Mainly</Text> */}
          </View>
          <View>
            <Text
              style={{
                textAlign: "center",
                fontFamily: "rubik",
                position: "relative",
                right: 80,
                color:'#4D5D6A'
              }}
            >
              I want to sell assets
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#F7F9FB",
            padding: 10,
            borderRadius: 10,
            marginVertical: 10,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          onPress={() => navigation.navigate('MoreSteps')}
        >
          <View style={{ width: 60, padding: 5 }}>
            <View
              style={{
                borderWidth: 1.5,
                borderRadius: 5,
                width: 50,
                borderColor: "#F2C94C",
                padding: 5,
              }}
            >
              <Image
                source={require("../assets/Image/Group.png")}
                style={{ width: 35, height: 35 }}
              />
            </View>
            <Image
              source={require("../assets/Image/setting.png")}
              style={{
                width: 20,
                height: 20,
                position: "absolute",
                top: 0,
                right: 0,
              }}
            />
            {/* <Text>Mainly</Text> */}
          </View>
          <View>
            <Text
              style={{
                textAlign: "center",
                fontFamily: "rubik",
                position: "relative",
                right: 100,
                color:'#4D5D6A'
              }}
            >
              I want to buy
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    margin: 25,
  },
  welcome: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: "mulish",
    marginVertical: 20,
    //  backgroundColor:'red'
  },
});

//make this component available to the app
export default ChooseAction;
