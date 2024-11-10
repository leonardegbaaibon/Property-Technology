//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import Icon from "react-native-vector-icons/Octicons";
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon3 from "react-native-vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { States } from "../Data/States";
import StateList from "../Components/StatesList";
import { useState } from "react";
import AssetsDeals from "../Components/AssetsDeals";

// create a component

const DealsPage = ({ navigation }) => {
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

  return (
    <View style={styles.container}>
      <View style={{ width: width }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginHorizontal: 15,
          }}
        >
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
            onPress={() => navigation.navigate("Profile")}
          >
            <View>
              <Image
                source={require("../assets/Image/ProfilePic.png")}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 100,
                  margin: 7,
                }}
              />
            </View>
            <View>
              <Text style={{ color: "#81909D", fontFamily: "mulish" }}>
                Hello
              </Text>
              <Text
                style={{ color: "#4D5D6A", fontFamily: "mulish", fontSize: 20 }}
              >
                Temitayo
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../assets/Image/Vector.png")}
              style={{
                width: 17,
                height: 15,
                margin: 7,
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 15,
          }}
        >
          <View
            style={{
              backgroundColor:'#e6e6e6',
              display: "flex",
              flexDirection: "row",
              width: "49%",
              justifyContent: "space-between",
              borderRadius: 10,
            }}
          >
            <TextInput
              placeholder="Search for assets"
              placeholderTextColor={{ color: "#81909D" }}
              style={{
                width: "80%",
                height: "100%",
                paddingHorizontal: 10,
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
                fontFamily: "mulish",
                color: "#4D5D6A",
                fontSize: 15,
              }}
            />
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Icon
                name={"search"}
                style={{
                  fontSize: 20,
                  color: "#4D5D6A",
                  textAlign: "center",
                  paddingHorizontal: 10,
                }}
              />
            </View>
          </View>


          <TouchableOpacity
            style={{
              backgroundColor: "#1D4ED8",
              display: "flex",
              width: "48%",
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 10,
              paddingHorizontal: 15,
              paddingVertical: 5,
              justifyContent: "space-between",
            }}
            onPress={() => navigation.navigate('AddProperty')}
          >
            <View>
              <View
                style={{
                  backgroundColor: "white",
                  borderWidth: 1,
                  borderColor: "#FFC5B9",
                  borderRadius: 10,
                  margin: 1,
                }}
              >
                <Image
                  source={require("../assets/Image/clarity_building-line.png")}
                  style={{
                    width: 30,
                    height: 30,
                    margin: 5,
                  }}
                />
              </View>
              <Text
                style={{
                  backgroundColor: "#21D363",
                  position: "absolute",
                  height: 18,
                  width: 17.5,
                  top: 0,
                  right: 0,
                  borderRadius: 10,
                  color: "white",
                  textAlign: "center",
                  borderWidth: 3,
                  borderColor: "#1D4ED8",
                }}
              >
                $
              </Text>
            </View>
            <View>
              <Text
                style={{ color: "white", fontFamily: "mulish", marginLeft: 10 }}
              >
                Upload for sale
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <StateList />
        </View>
        <View style={{ height: height - 250 }}>
          <AssetsDeals navigation={navigation} />
        </View>
      </View>
      {/* <View style={{width:width}}>
        <MarketScreen />
      </View>
      <View style={{width:width}}>
        <UserProfile />
      </View> */}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    // margin: 15,
  },
});

//make this component available to the app
export default DealsPage;