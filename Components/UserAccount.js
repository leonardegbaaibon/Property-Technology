import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  useWindowDimensions,
} from "react-native";
import PhoneInput from "react-native-phone-number-input";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Dropdown } from "react-native-element-dropdown";
import { useFonts } from "expo-font";

const UserAccount = (props) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const [currencyId, setCurrencyId] = useState(null);
  const [hidePassword, setHidePassword] = useState(true);
  const [emailWarning, setEmailWarning] = useState("");
  const [success, setSuccess] = useState("");
  const [timezone, setTimezone] = useState([]); // Initialized as an empty array

  const [fontsLoaded] = useFonts({
    ubuntu: require("../assets/fonts/Ubuntu-Regular.ttf"),
    poppins: require("../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!fontsLoaded) return null;

  const width= useWindowDimensions().width

  const handleEmailChange = (text) => {
    setEmail(text);
    const isValid = text.match(/^\S+@\S+\.\S+$/);
    setEmailWarning(isValid ? "" : "Invalid Email");
  };

  const handlePasswordVisibility = () => {
    setHidePassword(!hidePassword);
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.formContainer}>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          data={timezone}
          maxHeight={300}
          placeholder="Select timezone"
          searchPlaceholder="Search..."
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setCurrencyId(item.id);
            setIsFocus(false);
          }}
        />
        
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Firstname</Text>
          <TextInput
            style={styles.textInput}
            placeholder="John"
            placeholderTextColor="gray"
            value={firstname}
            onChangeText={setFirstname}
          />
        </View>
        
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Lastname</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Doe"
            placeholderTextColor="gray"
            value={lastname}
            onChangeText={setLastname}
          />
        </View>
        
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email</Text>
          <View style={styles.iconInputContainer}>
            <Icon name="email-outline" style={styles.icon} />
            <TextInput
              style={styles.textInput}
              placeholder="johndoe@gmail.com"
              placeholderTextColor="gray"
              value={email}
              onChangeText={handleEmailChange}
            />
          </View>
          {emailWarning ? <Text style={styles.warningText}>{emailWarning}</Text> : null}
        </View>
        
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Phone</Text>
          <PhoneInput
            defaultCode="NG"
            containerStyle={styles.phoneInputContainer}
            textContainerStyle={styles.phoneTextContainer}
            textInputStyle={styles.textInputNumber}
            placeholder="0000000000"
            onChangeFormattedText={(text) => setPhoneNumber(text)}
            value={phoneNumber}
          />
        </View>

        <View style={[styles.inputGroup]}>
          <Text style={styles.label}>Password</Text>
          <View style={[styles.iconInputContainer, {width:width - 90}]}>
            <Icon name="lock" style={styles.icon} />
            <TextInput
              style={styles.textInput}
              placeholder="************"
              placeholderTextColor="#4D5D6A"
              secureTextEntry={hidePassword}
              value={myPassword}
              onChangeText={setMyPassword}
            />
            <Icon
              name={hidePassword ? "eye-outline" : "eye-off-outline"}
              style={{width:'100',color:'#4D5D6A',fontSize: 18,}}
              onPress={handlePasswordVisibility}
            />
          </View>
        </View>

        <TouchableOpacity
          style={email && phoneNumber && myPassword ? styles.buttonActive : styles.buttonDisabled}
          onPress={() => props.navigation.navigate("OtpScreen")}
          disabled={!email || !phoneNumber || !myPassword}
        >
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text>Already have an account?</Text>
          <TouchableOpacity onPress={() => props.navigation.navigate("LoginScreen")}>
            <Text style={styles.loginLink}>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
  },
  formContainer: {
    flex: 1,
    justifyContent: "center",
  },
  inputGroup: {
    marginBottom: 15,
    display:'flex',
    // flexDirection:'',
    justifyContent: 'space-between',
    // alignItems: 'center'

  },
  label: {
    fontFamily: "poppins",
    color: "#4D5D6A",
    marginBottom: 5,
  },
  textInput: {
    backgroundColor: "#e6e6e6",
    color: "#4D5D6A",
    padding: 10,
    borderRadius: 5,
    fontFamily: "poppins",
    width:'100%'
  },
  textInputNumber: {
    backgroundColor: "#e6e6e6",
    color: "#4D5D6A",
    // padding: 10,
    height:50,
    borderRadius: 5,
    fontFamily: "poppins",
    width:'100%'
  },
  iconInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e6e6e6",
    borderRadius: 5,
    justifyContent:'space-between',
    // width:'100%'
  },
  phoneInputContainer: {
    width:'100%',
    padding: 0,
    borderRadius: 5,
    height:50,
    display:'flex',
    justifyContent:'center',
    alignItems:'center' 
  },
  phoneTextContainer: {
    backgroundColor: "#e6e6e6",
    borderRadius: 5,
    height:50
 },
  icon: {
    fontSize: 22,
    color: "#4D5D6A",
    marginHorizontal: 10,
  },
  warningText: {
    color: "red",
    fontFamily: "poppins",
    fontSize: 12,
    marginTop: 5,
  },
  buttonActive: {
    backgroundColor: "#1D4ED8",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 20,
  },
  buttonDisabled: {
    backgroundColor: "#a0a0a0",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 20,
  },
  buttonText: {
    color: "#fff",
    fontFamily: "poppins",
    fontSize: 16,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  loginLink: {
    color: "#1D4ED8",
    textDecorationLine: "underline",
    fontFamily: "poppins",
  },
});

export default UserAccount;
