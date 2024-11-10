//import liraries
import React, { Component, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

// create a component

const ListItem = ({ item }) => {
  const [selectedAssets, setSelectedAssets] = useState(item);
  const navigation = useNavigation();

  const handleNavigate = () => {
    setSelectedAssets(item);

    // console.warn(item.image)
    if(selectedAssets){
      // console.log(item)
      // console.log(selectedAssets)
      navigation.navigate("EachAssetScreen", {
        paramKey: item,
      });

    }

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

  // console.log(item.id)

  return (
    <TouchableOpacity
      style={[
        styles.container,
        { display: selectedAssets !== item.id ? "flex" : "none" },
      ]}
      onPress={handleNavigate}
    >
      <View>
        <Image
          source={item.image}
          style={{ width: "100%", height: 150, borderRadius: 10 }}
          resizeMode="cover"
        />
        <Text
          style={{
            color: "white",
            fontStyle: "italic",
            position: "absolute",
            top: 5,
            right: 5,
            backgroundColor: item.rate < 0 ? "#FA3E3E" : "#27BE63",
            paddingHorizontal: 10,
            borderRadius: 10,
          }}
        >
          {item.rate}%
          <Icon
            name={item.rate < 0 ? "arrow-down-left" : "arrow-up-right"}
            style={{ marginTop: 10, fontSize: 15, color: "white" }}
          />
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottomWidth: 1,
          borderBottomColor: "#4D5D6A",
        }}
      >
        <View
          style={{
            padding: 10,
            backgroundColor: "rgba(68, 137, 198, 0.06)",
            borderRadius: 5,
            margin: 5,
          }}
        >
          <Image
            source={require("../assets/Image/Home2.png")}
            style={{ width: 27, height: 23.8 }}
          />
        </View>
        <Text style={{ fontFamily: "mulish", color: "#4D5D6A", fontSize: 17 }}>
          {item.units} Units
        </Text>
        <Text
          style={{
            fontFamily: "mulish",
            fontSize: 15,
            color: "#81909D",
            marginHorizontal: 3,
          }}
        >
          of {item.totalUnits}
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Text style={{ color: "#4D5D6A", fontFamily: "rubik", fontSize: 20 }}>
          ₦{item.price}
        </Text>
        <Text style={{ color: "#81909D", fontFamily: "rubik" }}>/Units</Text>
      </View>
    </TouchableOpacity>
  );
};

// define your styles

const styles = StyleSheet.create({
  container: {
    margin: 5,
    backgroundColor: "white",
    padding: 6,
    paddingVertical: 20,
    borderRadius: 10,
  },
});

//make this component available to the app
export default ListItem;
