import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { useFonts } from "expo-font";
import { user_login } from "../Components/api/user_login";
import LottieView from "lottie-react-native";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [seePassword, setSeePassword] = useState(true);
  const [passCheck, setPassCheck] = useState("");
  const [passlength, setPassLength] = useState("");
  const [passChecker, setPassChecker] = useState(false);
  const [emailWarning, setEmailWarning] = useState();
  const [checker, setChecker] = useState(false);
  const [checkValidEmail, setCheckValidEmail] = useState(false);

  const height = useWindowDimensions().height;
  const width = useWindowDimensions().width;


  const [fontsLoaded] = useFonts({
    ubuntu: require("../assets/fonts/Ubuntu-Regular.ttf"),
    poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    mulish: require("../assets/fonts/Mulish-Regular.ttf"),
    rubik: require("../assets/fonts/Rubik-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const handleCheckEmail = (text) => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    setEmail(text);
    if (re.test(text) || regex.test(text)) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
  };

  const checkPasswordValidity = (value) => {
    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(value)) {
      return "Password must not contain Whitespaces.";
    }

    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    if (!isContainsUppercase.test(value)) {
      return "Password must have at least one Uppercase Character.";
    }

    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    if (!isContainsLowercase.test(value)) {
      return "Password must have at least one Lowercase Character.";
    }

    const isContainsNumber = /^(?=.*[0-9]).*$/;
    if (!isContainsNumber.test(value)) {
      return "Password must contain at least one Digit.";
    }

    const isValidLength = /^.{8,16}$/;
    if (!isValidLength.test(value)) {
      return "Password must be 8-16 Characters Long.";
    }

    return null;
  };
  // setPassCheck("");

  const handleLogin = () => {
    setChecker(true);
    const checkPassowrd = checkPasswordValidity(password);
    if (!checkPassowrd) {
      setPassChecker(true);
      user_login({
        username: "legbaaibon@gmail.com",
        password: "Password@123",
      })
        .then((res) => {
          console.log(res.user.username)
          setChecker(false);
          if (res) {
            const storeData = async () => {
              try {
                // await AsyncStorage.setItem(
                //   "AccessToken",
                //   res.user.username
                // );
              } catch (e) {
                console.warn(e);
              }
              try {
                // await AsyncStorage.setItem("Email", res.user.username);
              } catch (e) {
                console.warn(e);
              }
            };
            storeData();
          }else {
            // console.log(res)
            setChecker(false);
          }

          if (res.success != true){
            setChecker(false);
            // setEmailWarning(res.essage);
            setEmailWarning("Incorrect details is provided");
          } else {
            setEmailWarning("");
            setChecker(false);
            navigation.replace("DealsPage");
          }

        }).catch((err) => {
          setEmailWarning(err);
        });

    } else {
      setPassCheck(checkPassowrd);
      setEmailWarning("");
      setChecker(false);
      setPassChecker(false);
    }
    // console.log(email,password)
  };

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <View
        style={{
          position: "absolute",
          height: height + 100,
          width: width + 100,
          backgroundColor: "#0000001e",
          zIndex: 99,
          display: checker === false ? "none" : "flex",
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

      <View style={styles.container}>
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
        <View>
          <Text style={styles.userName}>Email</Text>
        </View>
        <View style={styles.wrapperInput}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={(text) => handleCheckEmail(text)}
          />
        </View>
        {checkValidEmail && checker === false ? (
          <Text style={styles.textFailed}>Invalid Email</Text>
        ) : (
          <Text style={styles.textFailed}></Text>
        )}
        <View>
          <Text style={styles.userName}>Password</Text>
        </View>
        <View style={styles.wrapperInput}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            secureTextEntry={seePassword}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity
            style={styles.wrapperIcon}
            onPress={() => setSeePassword(!seePassword)}
          ></TouchableOpacity>
        </View>
        <Text
          style={{
            fontFamily: "poppins",
            color: "red",
            display: passChecker === true ? "none" : "flex",
          }}
        >
          {passCheck}
        </Text>
        <Text
          style={{
            fontFamily: "poppins",
            color: "red",
          }}
        >
          {emailWarning}
        </Text>
        {email == "" || password == "" || checkValidEmail == true ? (
          <TouchableOpacity
            disabled
            style={styles.buttonDisable}
          >
            <Text style={styles.text}>Login</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.button} onPress={() => handleLogin()}>
            <Text style={styles.text}>Login</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  userName: {
    fontFamily: "poppins",
    color: "grey",
  },
  wrapperInput: {
    backgroundColor: "#e6e6e6",
    borderRadius: 5,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    padding: 10,
    width: "100%",
    fontFamily: "poppins",
    color: "#4D5D6A",
    fontSize: 15,
  },
  wrapperIcon: {
    position: "absolute",
    right: 0,
    padding: 10,
  },
  icon: {
    width: 30,
    height: 24,
  },
  button: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1D4ED8",
    borderRadius: 5,
    marginTop: 30,
    paddingVertical: 14,
  },
  buttonDisable: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(201, 201, 250)",
    borderRadius: 5,
    marginTop: 25,
    marginTop: 30,
    paddingVertical: 14,
  },
  text: {
    fontFamily: "poppins",
    color: "white",
    fontSize: 18,
  },
  textFailed: {
    alignSelf: "flex-end",
    color: "red",
    fontFamily: "poppins",
  },
});
