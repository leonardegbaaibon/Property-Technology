import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity, useWindowDimensions } from "react-native";
import OtpInputs from "react-native-otp-textinput";
import { useFonts } from "expo-font";
import axios from "axios";
import Loader2 from "../Components/Loader2";
import LottieView from "lottie-react-native";
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
  Toast,
} from "react-native-alert-notification";
import AsyncStorage from "@react-native-async-storage/async-storage";

const OtpScreen = (props) => {
  const [pin, setPin] = useState("");
  const [otpWarn, setOtpWarn] = useState("");
  const [otpCode, setOtpCode] = useState("");
  const [checker, setChecker] = useState(false);
  
  const { height, width } = useWindowDimensions();
  
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

  // useEffect(() => {
  //   handleToast2();
  // }, []);

  const handleToast2 = () => {
    Toast.show({
      type: ALERT_TYPE.SUCCESS,
      title: <Text style={{ fontFamily: "poppins", color: "gray" }}>Done</Text>,
      textBody: <Text style={{ fontFamily: "poppins", color: "gray" }}>OTP sent to your email</Text>,
    });
  };

  const [fontsLoaded] = useFonts({
    ubuntu: require("../assets/fonts/Ubuntu-Regular.ttf"),
    poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    mulish: require("../assets/fonts/Mulish-Regular.ttf"),
    rubik: require("../assets/fonts/Rubik-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  // const handleToast1 = () => {
  //   Toast.show({
  //     type: ALERT_TYPE.SUCCESS,
  //     title: <Text style={{ fontFamily: "poppins", color: "gray" }}>Done</Text>,
  //     textBody: <Text style={{ fontFamily: "poppins", color: "gray" }}>OTP sent to your email</Text>,
  //   });
  // };
  
  const handleToast = () => {
    Toast.show({
      type: ALERT_TYPE.WARNING,
      title: <Text style={{ fontFamily: "poppins", color: "gray" }}>Error</Text>,
      textBody: <Text style={{ fontFamily: "poppins", color: "gray" }}>Invalid OTP entered</Text>,
    });
  };

  const getData = async () => {
    props.navigation.navigate("UploadDocs");
  //   try {
  //     const value = await AsyncStorage.getItem("AccessToken");
  //     const email = await AsyncStorage.getItem("Email");

  //     if (!value || !email) {
  //       console.warn("AccessToken or Email is missing in AsyncStorage.");
  //       return;
  //     }

  //     setChecker(true);
  //     const authenticate = "Bearer " + value;
  //     const data = { email: email, otp: pin };

  //     const config = {
  //       method: "POST",
  //       url: "https://www.mushaapp.somee.com/api/v1/User/validate-account-confirmation",
  //       headers: {
  //         "accept": "text/plain",
  //         "Authorization": authenticate,
  //         "Content-Type": "application/json",
  //       },
  //       data: data,
  //     };

  //     axios(config)
  //       .then((response) => {
  //         setOtpWarn(response.data.responseMessage);
  //         setOtpCode(response.status);
  //         if (response.status === 200) {
  //         } else {
  //           setChecker(false);
  //         }
  //       })
  //       .catch((error) => {
  //         handleToast();
  //         setChecker(false);
  //         console.log(error);
  //       });
  //   } catch (e) {
  //     console.warn(e);
  //   }
  };

  const handleCode = () => {
    getData();
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          position: "absolute",
          height: height + 100,
          width: width + 100,
          backgroundColor: "#0000001e",
          zIndex: 99,
          display: checker ? "flex" : "none",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 250,
          }}
        >
          <LottieView
            source={require("../assets/Linear_loader2.json")}
            style={{ height: 200, width: 300 }}
            autoPlay
            loop
          />
        </View>
      </View>

      <AlertNotificationRoot colors={[IColors, IColors2]}></AlertNotificationRoot>
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
          fontSize: 16,
          marginBottom:40
        }}
      >
        Enter the OTP here
      </Text>
      <OtpInputs
        handleChange={(code) => setPin(code)} // Update pin state on code change
        numberOfInputs={4}
        style={{
          // width: 40,
          alignSelf: "center",
          marginBottom: 150,
          backgroundColor:'ash',
          width: 50,
          fontFamily: "poppins",
          fontSize: 16,
          height: 45,
          color: "#1D4ED8",
          borderWidth: 1.5,
          textAlign: "center",
          borderRadius:10,
          marginHorizontal:10
        }}
        inputStyles={styles.underlineStyleBase}
      />
      <TouchableOpacity
        style={{
          backgroundColor: "#1D4ED8",
          marginHorizontal: 15,
          marginBottom: 150,
          paddingVertical: 13,
          borderRadius: 5,
        }}
        onPress={() => handleCode()}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontFamily: "poppins",
            fontSize: 16,
          }}
        >
          Proceed
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop:50,
    backgroundColor: "#F5F5F5",
  },
});
