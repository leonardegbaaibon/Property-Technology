import React from "react";
import { useState, useEffect } from "react";
import LottieView from "lottie-react-native";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { useFonts } from "expo-font";

export default function Loader2({boolValue}) {

  const [checker, setChecker] = useState(true)
    const width = useWindowDimensions().width;
    const height = useWindowDimensions().height;
  
    console.log(checker)

    useEffect(() => {
      setChecker(boolValue)
    })
  
    // console.log(xvalue);
    const [fontsLoaded] = useFonts({
      ubuntu: require("../assets/fonts/Ubuntu-Regular.ttf"),
      poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    });
  
    if (!fontsLoaded) {
      return null;
    }
  
  return (
    <View>
      <View
        style={{
          position: "absolute",
          width: width + 100,
          backgroundColor: "#0000001e",
          height: height + 100,
          // opacity: 0.3,
          zIndex: 99,
          display:checker === false ? 'flex':'none'
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
    </View>
  )
}