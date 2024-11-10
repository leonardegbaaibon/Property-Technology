import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { COLORS } from "../JsonData/Colors";
import { useFonts } from "expo-font";
// import useFetch from "../Components/useFetch";

const GetStarted = ({ navigation }) => {
  const [loaded] = useFonts({
    poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    ubuntu: require("../assets/fonts/Ubuntu-Regular.ttf"),
  });
  const { width } = useWindowDimensions();

  if (!loaded) {
    return null;
  }
  const handleGetStarted = () => {
    navigation.navigate("CreateAccount");
  };
  // const handleLogin = () => {
  //   navigation.navigate("CreateAccount");
  // };

  return (
    <View style={[styles.container, { width }]}>
      <View style={styles.textContainer}>
        <Text style={styles.text1}>Musha</Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "400",
            color: COLORS.text,
            textAlign: "center",
            fontFamily: "poppins",
            fontStyle: "normal",
            width: 250,
          }}
        >
          The Perfect Investment Choice for your Future
          {/* {console.log(housemates)} */}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.button,
            paddingVertical: 13,
            borderRadius: 10,
            marginBottom: 30,
            width: width - 30,
          }}
          onPress={handleGetStarted}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button2]}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          <Text style={styles.buttonText2}>Login</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.copyright}>Copyright© 2022</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
    alignItems: "center",
    justifyContent: "center",
  },
  text1: {
    color: COLORS.getstartedTitle,
    fontSize: 40,
    fontFamily: "ubuntu",
    marginBottom: 5,
  },
  textContainer: {
    flex: 0.3,
    alignItems: "center",
  },
  //   button1:{
  //     backgroundColor:COLORS.button,
  //     paddingVertical: 13,
  //     borderRadius: 10,
  //     marginBottom: 30,
  // },
  button2: {
    borderWidth: 2,
    borderColor: COLORS.borderColor,
    paddingVertical: 13,
    borderRadius: 10,
  },
  buttonText: {
    color: COLORS.getstarted,
    textAlign: "center",
    fontSize: 20,
    fontFamily: "poppins",
    fontWeight: "600",
  },
  buttonText2: {
    color: COLORS.borderText,
    textAlign: "center",
    fontSize: 20,
    fontFamily: "poppins",
    fontWeight: "600",
  },
  copyright: {
    position: "absolute",
    bottom: 10,
    color: COLORS.text,
    textAlign: "center",
    fontFamily: "poppins",
  },
});

export default GetStarted;
