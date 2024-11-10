//import liraries
import React, { Component, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Octicons";
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon3 from "react-native-vector-icons/FontAwesome";
import { useFonts } from "expo-font";


// create a component
const IconSelect = () => {
  const width = useWindowDimensions().width;
  const [home, setHome] = useState(false);
  const [market, setMarket] = useState(false);
  const [profile, setprofile] = useState(false);

  // const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    ubuntu: require("../assets/fonts/Ubuntu-Regular.ttf"),
    poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    mulish: require("../assets/fonts/Mulish-Regular.ttf"),
    rubik: require("../assets/fonts/Rubik-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }


  const homeClick = () => {
      setHome(true);
      setMarket(false);
      setprofile(false);
    // }
  };
  const marketClick = () => {
    setHome(false);
    setMarket(true);
    setprofile(false);
  };

  const profileClick = () => {
    setHome(false);
    setMarket(false);
    setprofile(true);
  };

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        position: "absolute",
        bottom: 0,
        backgroundColor: "#F5F5F5",
        width: width,
        paddingHorizontal: 28,
      }}
    >
      <TouchableOpacity
        style={{
          display: "flex",
          alignItems: "center",
          borderTopWidth: 2,
          paddingHorizontal:15,
          borderTopColor: home === true ? "#1D4ED8" : "transparent",
        }}
        onPress={homeClick}
      >
        {home === true ? (
          <Icon2
            name={"home"}
            style={{ marginTop: 10, fontSize: 25, color: "#1D4ED8" }}

          />
        ) : (
          <Icon2
            name={"home-outline"}
            style={{ marginTop: 10, fontSize: 25, color: "#BEBEBE" }}
          />
        )}
        <Text
          style={{
            fontFamily: "mulish",
            color: home === true ? "#1D4ED8" : "#BEBEBE",
          }}
        >
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          display: "flex",
          alignItems: "center",
          paddingHorizontal:15,
          borderTopWidth:2,
          borderTopColor: market === true ? "#1D4ED8" : "transparent",
        }}
        onPress={marketClick}
      >
        {market === true ? (
          <Icon2
            name={"basket"}
            style={{ marginTop: 10, fontSize: 25, color: "#1D4ED8" }}
          />
        ) : (
          <Icon2
            name={"basket-outline"}
            style={{ marginTop: 10, fontSize: 25, color: "#BEBEBE"}}
          />
        )}
        <Text
          style={{
            fontFamily: "mulish",
            color: market === true ? "#1D4ED8" : "#BEBEBE",
          }}
        >
          Market
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          display: "flex",
          alignItems: "center",
          borderTopWidth: 2,
          paddingHorizontal:15,
          borderTopColor: profile === true ? "#1D4ED8" : "transparent",
        }}
        onPress={profileClick}
      >
        {profile === true ? (
          <Icon3
            name={"user"}
            style={{ marginTop: 10, fontSize: 25, color: "#1D4ED8"}}
          />
        ) : (
          <Icon3
            name={"user-o"}
            style={{ marginTop: 10, fontSize: 25, color: "#BEBEBE" }}
          />
        )}
        <Text
          style={{
            fontFamily: "mulish",
            color: profile === true ? "#1D4ED8" : "#BEBEBE",
          }}
        >
          Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
// const styles = StyleSheet.create({
//     container: {

//     },
// });

//make this component available to the app
export default IconSelect;
