// Import libraries
import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
  TextInput,
} from "react-native";
import PhoneInput from "react-native-phone-number-input";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Dropdown } from "react-native-element-dropdown";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import { useFonts } from "expo-font";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Import custom APIs
import { user_register } from "./api/user_api";
import { user_timezone } from "./api/user_timezone";
import { user_currency } from "./api/user_currency";

// Component
const CompanyAccount = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [companyname, setCompanyName] = useState("");
  const [lastname, setLastname] = useState("");
  const [currencyId, setCurrencyId] = useState(null);
  const [hidePassword, setHidePassword] = useState(true);
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  const [value, setValue] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const [timezone, setTimezone] = useState([]);
  const [expoPushToken, setExpoPushToken] = useState("");
  const [formattedValue, setFormattedValue] = useState("");

  const height = useWindowDimensions().height;
  const [fontsLoaded] = useFonts({
    ubuntu: require("../assets/fonts/Ubuntu-Regular.ttf"),
    poppins: require("../assets/fonts/Poppins-Regular.ttf"),
  });

  // Email validation handler
  const handleCheckEmail = (text) => {
    setEmail(text);
    setCheckValidEmail(
      !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(text) && text.length > 0
    );
  };

  // Ensure fonts are loaded before rendering
  if (!fontsLoaded) return null;

  return (
    <View style={[styles.details, { height: height + 200 }]}>
      <View style={styles.container2}>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={timezone}
          containerStyle={{ color: "red" }}
          itemContainerStyle={{ backgroundColor: "#F5F5F5" }}
          itemTextStyle={{ color: "black", fontFamily: "poppins" }}
          search
          maxHeight={300}
          labelField="id"
          valueField="id"
          placeholder={!isFocus ? "Select timezone" : "..."}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setValue(item.id);
            setIsFocus(false);
          }}
        />
      </View>

      {/* Firstname and Lastname fields */}
      <View style={styles.name}>
        <View style={styles.name1}>
          <Text style={styles.userName}>Firstname</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholderTextColor="gray"
              onChangeText={setFirstname}
              value={firstname}
              placeholder={"John"}
            />
          </View>
        </View>
        <View style={styles.name2}>
          <Text style={styles.userName}>Lastname</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholderTextColor="gray"
              onChangeText={setLastname}
              value={lastname}
              placeholder={"Doe"}
            />
          </View>
        </View>
      </View>

      {/* Company Name Field */}
      <View style={{ marginVertical: 10, marginTop: 15 }}>
        <Text style={styles.userName}>Company name</Text>
        <View style={styles.inputContainer1}>
          <Icon
            style={styles.icon}
            name={"home-city-outline"}
          />
          <TextInput
            style={styles.input}
            value={companyname}
            onChangeText={setCompanyName}
            placeholderTextColor="gray"
            placeholder={"Musha company"}
          />
        </View>
      </View>

      {/* Email Field */}
      <View style={{ marginVertical: 10, marginTop: 15 }}>
        <Text style={styles.userName}>Email</Text>
        <View style={styles.inputContainer1}>
          <Icon style={styles.icon} name={"email-outline"} />
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={handleCheckEmail}
            placeholderTextColor="gray"
            placeholder={"johndoe@gmail.com"}
          />
        </View>
        {checkValidEmail && email.length > 0 && (
          <Text style={styles.errorText}>Invalid Email</Text>
        )}
      </View>

      {/* Phone Field */}
      <View style={{ marginHorizontal: 2, marginVertical: 1 }}>
        <Text style={styles.userName}>Phone</Text>
        <PhoneInput
          defaultValue={phoneNumber}
          defaultCode="NG"
          containerStyle={styles.phoneInputContainer}
          textContainerStyle={styles.phoneTextContainer}
          codeTextStyle={{ color: "#4D5D6A" }}
          textInputStyle={{ color: "#4D5D6A" }}
          placeholder="0000000000"
          textInputProps={{ placeholderTextColor: "gray" }}
          onChangeFormattedText={setPhoneNumber}
          value={phoneNumber}
        />
      </View>

      {/* Password Field */}
      <View style={{ marginVertical: 10, marginTop: 15 }}>
        <Text style={styles.userName}>Password</Text>
        <View style={styles.inputContainer1}>
          <Icon style={styles.icon} name={"lock"} />
          <TextInput
            secureTextEntry={hidePassword}
            autoCorrect={false}
            style={styles.input}
            value={myPassword}
            placeholderTextColor="#4D5D6A"
            placeholder={"************"}
            onChangeText={setMyPassword}
          />
          <Icon
            onPress={() => setHidePassword(!hidePassword)}
            style={styles.icon}
            name={hidePassword ? "eye-outline" : "eye-off-outline"}
          />
        </View>
      </View>

      {/* Create Account Button */}
      <View>
        <TouchableOpacity
          style={[
            email === "" ||
            myPassword === "" ||
            checkValidEmail ||
            phoneNumber.length < 10
              ? styles.button3
              : styles.button1,
          ]}
          onPress={() => {
            if (
              email &&
              myPassword &&
              !checkValidEmail &&
              phoneNumber.length >= 10
            ) {
              handleMoreSteps();
            }
          }}
          disabled={
            email === "" ||
            myPassword === "" ||
            checkValidEmail ||
            phoneNumber.length < 10
          }
        >
          <Text
            style={
              email === "" ||
              myPassword === "" ||
              checkValidEmail ||
              phoneNumber.length < 10
                ? styles.disablebtn
                : styles.buttonText
            }
          >
            Create Account
          </Text>
        </TouchableOpacity>
      </View>

      {/* Login Link */}
      <View style={styles.loginContainer}>
        <Text style={styles.buttonText2}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
          <Text style={styles.loginLink}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  name: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  name1: { flex: 0.45 },
  name2: { flex: 0.45 },
  userName: {
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
  icon: {
    fontSize: 22,
    color: "#4D5D6A",
    marginVertical: 15,
    marginHorizontal: 13,
  },
  input: {
    color: "#4D5D6A",
    flex: 1,
    fontFamily: "poppins",
    paddingHorizontal: 10,
    fontSize: 15,
  },
  errorText: {
    color: "red",
    textAlign: "right",
    fontFamily: "poppins",
  },
  button3: {
    backgroundColor: "rgb(201, 201, 201)",
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 15,
    paddingVertical: 15,
  },
  button1: {
    backgroundColor: "#4D5D6A",
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 15,
    paddingVertical: 15,
  },
  buttonText: {
    fontSize: 16,
    color: "#FFF",
    fontFamily: "poppins",
  },
  disablebtn: {
    fontSize: 16,
    color: "#BBB",
    fontFamily: "poppins",
  },
  loginContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText2: {
    color: "#4D5D6A",
    fontSize: 14,
    fontFamily: "poppins",
  },
  loginLink: {
    color: "#4D5D6A",
    fontWeight: "bold",
    marginLeft: 3,
    fontSize: 14,
    fontFamily: "poppins",
  },
});

export default CompanyAccount;
