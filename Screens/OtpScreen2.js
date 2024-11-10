import React, { Component, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { useFonts } from "expo-font";
import axios from "axios";
import Loader2 from "../Components/Loader2";
import { useEffect } from "react";
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
  Toast,
  IConfigDialog,
} from "react-native-alert-notification";
import AsyncStorage from "@react-native-async-storage/async-storage";


const OtpScreen2 = (props) => {
  const [pin, setPin] = useState("");
  const [otpWarn, setOtpWarn] = useState("");
  const [otpCode, setOtpCode] = useState("");
  const [fontsLoaded] = useFonts({
    ubuntu: require("../assets/fonts/Ubuntu-Regular.ttf"),
    poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    mulish: require("../assets/fonts/Mulish-Regular.ttf"),
    rubik: require("../assets/fonts/Rubik-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
    const IColors2 = {
      success: "#1D4ED8",
      label: "white",
      card: "white",
      overlay: "white",
    };
    const IColors = {
      success: "#1D4ED8",
      label: "white",
      card: "white",
      overlay: "white",
    };
  // const [boolValue, setboolValue] = useState(true);
  const handleToast1 = () => {
    Toast.show({
      type: ALERT_TYPE.SUCCESS,
      title: <Text style={{ fontFamily: "poppins", color: "gray" }}>Done</Text>,
      textBody: (
        <Text style={{ fontFamily: "poppins", color: "gray" }}>
          OTP sent to your email
        </Text>
      )
    });
  };


    // handleToast1();

  const handleToast = () => {
    Toast.show({
      type: ALERT_TYPE.WARNING,
      title: <Text style={{ fontFamily: "poppins", color: "gray" }}>Error</Text>,
      textBody: (
        <Text style={{ fontFamily: "poppins", color: "gray" }}>
            Invalid otp sent
        </Text>
      ),
    });
  };
  const handleToast2 = () => {
    Toast.show({
      type: ALERT_TYPE.SUCCESS,
      title: <Text style={{ fontFamily: "poppins", color: "gray" }}>Done</Text>,
    });
  };


  
  
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("AccessToken");
      const email = await AsyncStorage.getItem("Email");
      if (value !== null || email !== null) {
        var authenticate = "Bearer " + value;
        var data = ({
          email: email,
          otp: pin,
        });

        var config = {
          method: "POST",
          url: "https://www.mushaapp.somee.com/api/v1/User/validate-account-confirmation",
          headers: {
            "accept": "text/plain",
            "Authorization": authenticate,
            "Content-Type": "application/json",
          },
          data: data,
        };

        axios(config)
          .then(function (response) {
            setOtpWarn(response.responseMessage);
            setOtpCode(response.status);
            if(response.status !== 200){
              handleToast()
            }else{
              handleToast2()
              props.navigation.navigate("ContactPerson")
            }
            
          })
          .catch(function (error) {
            handleToast()
          });
        // console.log(config);
      }
    } catch (e) {
      console.warn(e);
    }
  };



  


  const handleCode = () => {
    getData();
  }

  return (
    <View style={styles.container}>
      {/* <Loader2 boolValue={boolValue} /> */}
      <AlertNotificationRoot
          colors={[IColors, IColors2]}
        ></AlertNotificationRoot>
      <Text
        style={{
          textAlign: "center",
          color: "#1D4ED8",
          fontFamily: "ubuntu",
          fontSize: 30,
          marginVertical: 30,
        }}
      >
        Musha
      </Text>
      <Text
        style={{
          textAlign: "center",
          color: "gray",
          fontFamily: "poppins",
          fontSize: 20,
        }}
      >
        Enter the OTP here
      </Text>
      <OTPInputView
        style={{
          width: "80%",
          height: 200,
          alignSelf: "center",
          marginBottom: 150,
        }}
        pinCount={6}
        autoFocusOnLoad = {true}
        keyboardAppearance="light"
        // secureTextEntry={true}
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled={(code) => setPin(code)}
      />
      <TouchableOpacity
        style={{
          backgroundColor: "#1D4ED8",
          marginHorizontal: 18,
          marginBottom:150,
          paddingVertical: 15,
          borderRadius: 10,
        }}
        onPress={() => handleCode()}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontFamily: "poppins",
            fontSize: 20,
          }}
        >
          Proceed
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default OtpScreen2;

const styles = StyleSheet.create({
  borderStyleBase: {
    width: 50,
    height: 55,
    // backgroundColor: "red",
  },
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    // marginHorizontal: 18,
  },

  borderStyleHighLighted: {
    borderColor: "#03DAC6",
  },

  underlineStyleBase: {
    width: 40,
    fontFamily: "poppins",
    // backgroundColor:'red',
    fontFamily: "poppins",
    height: 45,
    borderWidth: 0,
    borderWidth: 3,
    fontSize: 20,
    color: "#1D4ED8",
    borderRadius: 10,
  },

  underlineStyleHighLighted: {
    borderColor: "#1D4ED8",
    // borderBottomWidth: 1,
  },
});