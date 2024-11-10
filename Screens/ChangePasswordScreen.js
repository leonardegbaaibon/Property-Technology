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
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
  Toast,
  IConfigDialog,
} from "react-native-alert-notification";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useFonts } from "expo-font";
import { user_login } from "../Components/api/user_login";
import LottieView from "lottie-react-native";
import { user_change_password } from "../Components/api/user_change_password";

export default function LoginScreen({ navigation }) {
  const [errorwarning, setErrorWarning] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [seePassword, setSeePassword] = useState(true);
  const [passCheck1, setPassCheck1] = useState("");
  const [passCheck2, setPassCheck2] = useState("");
  const [passCheck3, setPassCheck3] = useState("");
  const [passChecker, setPassChecker] = useState(false);
  const [checker, setChecker] = useState(false);
  const [checkValidEmail, setCheckValidEmail] = useState(false);

  // useEffect(() => {
  //   if(email.length > 0){
  //     setChecker(false)
  //   }
  //   else{
  //     setChecker(true)
  //   }
  // })
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

  const handleToast = () => {
    Toast.show({
      type: ALERT_TYPE.WARNING,
      title: (
        <Text style={{ fontFamily: "poppins", color: "gray" }}>Error</Text>
      ),
      textBody: (
        <Text style={{ fontFamily: "poppins", color: "gray" }}>
          {errorwarning}
          Typo error
        </Text>
      ),
    });
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

  const checkPassowrd1 = checkPasswordValidity(oldPassword);
  const checkPassowrd2 = checkPasswordValidity(newPassword);
  const checkPassowrd3 = checkPasswordValidity(confirmPassword);
  const handlePasswordChange = () => {
    setChecker(true);
    if (!checkPassowrd1 || !checkPassowrd2 || !checkPassowrd3) {
      setPassChecker(true);
      user_change_password({
        oldPassword: oldPassword,
        newPassword: newPassword,
        confirmNewPassword: confirmPassword,
      })
        .then((res) => {
          if (res.status == 200) {
            // console.log(res);
            navigation.navigate("DealsPage");
            const storeData = async () => {
              try {
                await AsyncStorage.setItem(
                  "AccessToken",
                  res.data.data.jwtToken
                );
              } catch (e) {
                console.warn(e);
              }

              try {
                await AsyncStorage.setItem("Email", res.data.data.email);
              } catch (e) {
                console.warn(e);
              }
            };
            // storeData();
          } else {
            // console.log(res);
            handleToast();
          }
          if (res.data == null) {
            setErrorWarning(res.responseMessage);
            handleToast();
            setChecker(false);
          } else {
            navigation.navigate("DealsPage");
          }
        })
        .catch((err) => {
          console.log(err);
          handleToast();
          setChecker(false);
        });
    } else {
      setPassCheck1(checkPassowrd1);
      setPassCheck2(checkPassowrd2);
      setPassCheck3(checkPassowrd3);
      setPassChecker(false);
    }
    // console.log(email,password)
  };

  return (
    <View style={{ flex: 1, marginTop: 30 }}>
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
        <View>
          <Text style={styles.userName}>Old password</Text>
        </View>
        <View style={styles.wrapperInput}>
          <TextInput
            style={styles.input}
            placeholder="Old password"
            value={oldPassword}
            secureTextEntry={seePassword}
            onChangeText={(text) => setOldPassword(text)}
          />
          <TouchableOpacity
            style={styles.wrapperIcon}
            onPress={() => setSeePassword(!seePassword)}
          >
            <Icon
              style={{
                fontSize: 22,
                color: "#4D5D6A",
                marginVertical: 15,
                marginHorizontal: 13,
              }}
              name={seePassword ? "eye-outline" : "eye-off-outline"}
            />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontFamily: "poppins",
            color: "red",
            display: passCheck1 === "" ? "none" : "flex",
          }}
        >
          {passCheck1}
        </Text>

        <View>
          <Text style={styles.userName}>New Password</Text>
        </View>
        <View style={styles.wrapperInput}>
          <TextInput
            style={styles.input}
            placeholder="New password"
            value={newPassword}
            secureTextEntry={seePassword}
            onChangeText={(text) => setNewPassword(text)}
          />
          <TouchableOpacity
            style={styles.wrapperIcon}
            onPress={() => setSeePassword(!seePassword)}
          >
            <Icon
              style={{
                fontSize: 22,
                color: "#4D5D6A",
                marginVertical: 15,
                marginHorizontal: 13,
              }}
              name={seePassword ? "eye-outline" : "eye-off-outline"}
            />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontFamily: "poppins",
            color: "red",
            display: passChecker === true ? "none" : "flex",
          }}
        >
          {passCheck2}
        </Text>

        <View>
          <Text style={styles.userName}>Confirm new password</Text>
        </View>
        <View style={styles.wrapperInput}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={confirmPassword}
            secureTextEntry={seePassword}
            onChangeText={(text) => setConfirmPassword(text)}
          />
          <TouchableOpacity
            style={styles.wrapperIcon}
            onPress={() => setSeePassword(!seePassword)}
          >
            <Icon
              style={{
                fontSize: 22,
                color: "#4D5D6A",
                marginVertical: 15,
                marginHorizontal: 13,
              }}
              name={seePassword ? "eye-outline" : "eye-off-outline"}
            />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontFamily: "poppins",
            color: "red",
            display: passCheck3 === "" ? "none" : "flex",
          }}
        >
          {passCheck3}
        </Text>
        {oldPassword == "" || newPassword == "" || confirmPassword == "" ? (
          <TouchableOpacity
            disabled
            style={styles.buttonDisable}
            // onPress={handleLogin}
          >
            <Text style={styles.text}>Change Password</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePasswordChange()}
          >
            <Text style={styles.text}>Change Password</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: "center",

    marginHorizontal: 20,
  },
  userName: {
    fontFamily: "poppins",
    color: "grey",
    marginTop: 10,
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
