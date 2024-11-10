import React from "react";
import { useState, useRef } from "react";
import PhoneInput from "react-native-phone-number-input";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import LottieView from "lottie-react-native";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Button,
} from "react-native";
import { useFonts } from "expo-font";

import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/Ionicons";
import { corporate_personal } from "../Components/api/corporate_personal";
// import {
//   ALERT_TYPE,
//   Dialog,
//   AlertNotificationRoot,
//   Toast,
//   IConfigDialog,
// } from "react-native-alert-notification";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";


// create a component
const ContactPerson = (props) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [length, setLength] = useState(0);
  const [success, setSuccess] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const [checkValidPass, setCheckValidPass] = useState(false);
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  const [checker, setChecker] = useState(false);
  const [input, setInput] = useState("");
  const [emailWarning, setEmailWarning] = useState("");
  const [handleLoader, setHandleLoader] = useState(false);
  const [formattedValue, setFormattedValue] = useState("");

  const height = useWindowDimensions().height;
  const width = useWindowDimensions().width;
  const [fontsLoaded] = useFonts({
    ubuntu: require("../assets/fonts/Ubuntu-Regular.ttf"),
    poppins: require("../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }


  const handleCheckEmail = (text) => {
    let re = /\S+@\S+\.\S+/;
    let regex =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    setEmail(text);
    setLength(text.length);
    if (text.length != 0) {
      if (regex.test(text)) {
        setCheckValidEmail(false);
      } else {
        setCheckValidEmail(true);
      }
    }
  };

  const handleMoreSteps = () => {
    // props.handleMoreStep(false);
    setChecker(true);
      user_register({
        firstname: firstname,
        lastname: lastname,
        contactPersonEmail: email,
        phone: phoneNumber
      }).then((res) => {
        // console.warn(res);
        if (res.status == 200) {
            props.navigation.navigate("Company")
        }else{
            setChecker(false);
        }

        if (res.data == null) {
            setChecker(true);
            setEmailWarning(res.responseMessage);
        } else {
          setSuccess("Done");
          setChecker(true);
          props.navigation.replace("Company");
        }
      });
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}overScrollMode="never">
              <View
        style={{
          position: "absolute",
          height: height + 100,
          width: width + 100,
          backgroundColor: "#0000001e",
          zIndex: 99,
          display:checker === false ? 'none':'false'
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
      <View style={styles.details}>
      <View style={styles.headContainer}>
            <Text style={styles.title}>Musha</Text>
            <Text style={styles.title2}>Details of Company Account manager</Text>
          </View>
        <View style={styles.container2}>
        </View>
        <View style={styles.name}>
          <View style={styles.name1}>
            <View>
              <Text style={styles.userName}>Firstname</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.textInput}
                  placeholderTextColor="gray"
                  onChangeText={(newText) => setFirstname(newText)}
                  value={firstname}
                  placeholder={"John"}
                />
              </View>
            </View>
          </View>
          <View style={styles.name2}>
            <View>
              <Text style={styles.userName}>Lastname</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.textInput}
                  placeholderTextColor="gray"
                  onChangeText={(newText) => setLastname(newText)}
                  value={lastname}
                  placeholder={"Doe"}
                />
                {/* <Text>{lastname}</Text> */}
              </View>
            </View>
          </View>
        </View>
        <View>
          <View style={{ marginVertical: 10, marginTop: 15 }}>
            <Text style={styles.userName}>Email</Text>
            <View style={styles.inputContainer1}>
              <Icon
                style={{
                  fontSize: 22,
                  color: "#4D5D6A",
                  marginVertical: 15,
                  marginHorizontal: 13,
                }}
                name={"email-outline"}
              />
              <TextInput
                style={{
                  color: "#4D5D6A",
                  flex: 1,
                  fontFamily: "poppins",
                  paddingHorizontal: 10,
                  fontSize: 15,
                }}
                value={email}
                onChangeText={(text) => handleCheckEmail(text)}
                placeholderTextColor="gray"
                placeholder={"johndoe@gmail.com"}
              />
            </View>
            {checkValidEmail && length > 0 ? (
              <Text
                style={{
                  color: "red",
                  textAlign: "right",
                  fontFamily: "poppins",
                }}
              >
                Invalid Email
              </Text>
            ) : (
              <Text
                style={{
                  color: "red",
                  //   display: 'none',
                  textAlign: "right",
                  fontFamily: "poppins",
                }}
              ></Text>
            )}
          </View>
          <View style={{ marginHorizontal: 2, marginVertical: 1 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "500",
                color: "#4D5D6A",
                marginVertical: 5,
                fontFamily: "poppins",
              }}
            >
              Phone
            </Text>
            <View
              style={{
                backgroundColor: "#e6e6e6",
                borderRadius: 5,
              }}
            >
              <PhoneInput
                defaultValue={phoneNumber}
                defaultCode="NG"
                containerStyle={{ backgroundColor: "#81909D", borderRadius: 5 }}
                textContainerStyle={{
                  backgroundColor: "#e6e6e6",
                  borderTopRightRadius: 5,
                  borderBottomRightRadius: 5,
                }}
                codeTextStyle={{ color: "#4D5D6A" }}
                textInputStyle={{ color: "#4D5D6A" }}
                placeholder="0000000000"
                textInputProps={{ placeholderTextColor: "gray" }}
                onChangeText={(newText) => setFormattedValue(newText)}
                onChangeFormattedText={(text) => {
                  setPhoneNumber(text);
                }}
                value={phoneNumber}
              />
            </View>
          </View>
          <View>
            <View style={{ marginTop: 15 }}>
              {email == "" ||
              checkValidEmail == true ||
              formattedValue.length < 10 ? (
                <View>
                  <TouchableOpacity disabled style={[styles.button3]}>
                    <Text style={styles.disablebtn}>Proceed</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <View>
                  <TouchableOpacity
                    style={[styles.button1]}
                    onPress={handleMoreSteps}
                  >
                    <Text style={styles.buttonText}>Proceed</Text>
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontFamily: "poppins",
                      color: "red",
                      display: checker === true ? "none" : "flex",
                    }}
                  >
                    {checkValidPass}
                  </Text>
                  <Text
                    style={{
                      fontFamily: "poppins",
                      color: "red",
                      display: "flex",
                    }}
                  >
                    {emailWarning}
                  </Text>
                </View>
              )}
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
  title: {
    fontFamily: "ubuntu",
    color: "#1D4ED8",
    fontSize: 32,
  },
  title2: {
    fontFamily: "poppins",
    color: "#0B2253",
    fontSize: 24,
    marginTop: 10,
  },
  title3: {
    fontFamily: "poppins",
    color: "#81909D",
    fontSize: 14,
  },
  name: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name1: {
    // width: 50,
    flex: 0.45,
  },
  name2: {
    flex: 0.45,
  },
  userName: {
    color: "#4D5D6A",
    fontSize: 16,
    fontWeight: "500",
    marginVertical: 5,
    fontFamily: "poppins",
  },
  inputContainer: {
    flexDirection: "row",
    height: 57,
    borderRadius: 5,
    backgroundColor: "#e6e6e6",
  },
  userName1: {
    color: "#4D5D6A",
    fontSize: 16,
    fontWeight: "500",
    marginVertical: 5,
    fontFamily: "poppins",
  },
  inputContainer1: {
    flexDirection: "row",
    height: 57,
    borderRadius: 5,
    backgroundColor: "#e6e6e6",
  },
  button3: {
    backgroundColor: "rgb(201, 201, 250)",
    // marginTop: 10,
    paddingVertical: 13,
    borderRadius: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: "500",
    marginVertical: 7,
    fontFamily: "poppins",
    color: "#81909D",
  },
  inputContainer: {
    height: 53,
    borderRadius: 10,
    // paddingHorizontal: 20,
    // backgroundColor:'green',
  },
  textInput: {
    flex: 1,
    fontFamily: "poppins",
    paddingHorizontal: 20,
    backgroundColor: "#e6e6e6",
    color: "#4D5D6A",
    borderRadius:5
  },
  disablebtn: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontFamily: "poppins",
    fontWeight: "600",
    // backgroundColor:'red'
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontFamily: "poppins",
    fontWeight: "600",
  },
  container2: {
    backgroundColor: "#e6e6e6",
    borderRadius: 8,
    // padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: "#e6e6e6",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    color: "#1D4ED8",
    fontFamily: "poppins",
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
    fontFamily: "poppins",
    color: "#1D4ED8",
  },
  placeholderStyle: {
    fontSize: 14,
    fontFamily: "poppins",
    color: "gray",
  },
  selectedTextStyle: {
    fontSize: 16,
    fontFamily: "poppins",
    color: "#1D4ED8",
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    fontFamily: "poppins",
    backgroundColor: "#F5F5F5",
  },
  button1: {
    backgroundColor: "#1D4ED8",
    marginTop: 10,
    paddingVertical: 13,
    borderRadius: 10,
  },
  loginContainer: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 15,
  },
  buttonText2: {
    color: "#4D5D6A",
    fontSize: 18,
    fontFamily: "poppins",
  },
  details:{
    marginTop:45,
    justifyContent:'center',
    marginHorizontal: 15
  }
});

//make this component available to the app
export default ContactPerson;
