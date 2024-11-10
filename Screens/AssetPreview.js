//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useFonts } from "expo-font";
// import { TouchableOpacity } from "react-native-gesture-handler";

// create a component
const AssetPreview = ({ navigation }) => {
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
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: 20,
        }}
      >
        <Text style={{ color: "#4D5D6A", fontFamily: "mulish", fontSize: 20 }}>
          Asset Preview
        </Text>
        <Icon
          name={"close"}
          style={{ color: "#81909D", fontSize: 25 }}
          onPress={() => navigation.navigate("AddProperty1")}
        />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Text style={{ color: "#4D5D6A", fontFamily: "mulish" }}>
          Up for
          sale..............................................................
        </Text>
        <View>
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#1D4ED8",
                fontFamily: "rubik",
                fontSize: 20,
                marginRight: 10,
              }}
            >
              Edit
            </Text>
            <Icon
              name={"square-edit-outline"}
              style={{ fontSize: 20, color: "#1D4ED8" }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#1D4ED8",
          padding: 10,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          borderRadius: 5,
          marginVertical: 20,
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/Image/Userimage.png")}
          style={{ width: 70, height: 70 }}
        />
        <View>
          <Text style={{ color: "white", fontFamily: "mulish", fontSize: 18 }}>
            Desmond Uchenna
          </Text>
          <Text style={{ color: "white", fontFamily: "mulish" }}>
            Real Estate Developer
          </Text>
        </View>
        <Text
          style={{
            color: "#F08626",
            padding: 5,
            backgroundColor: "#FFF8E5",
            textAlign: "center",
            marginTop: 30,
            borderRadius: 20,
            width: 70,
            height: 30,
          }}
        >
          Owner
        </Text>
      </View>
      <View>
        <Text style={{ color: "#4D5D6A", fontFamily: "mulish", fontSize: 23 }}>
          A beautiful Residential duplex for Big Boys
        </Text>
        <Text
          style={{
            color: " #4D5D6A",
            fontFamily: "mulish",
            borderBottomWidth: 1,
            paddingBottom: 20,
            borderBottomColor: "#4d5d6a67",
            marginVertical: 20,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit commodo
          viverra scelerisque curabitur dolor, risus. Commodo mauris vitae
          felis, nibh quam. Duis vehicula curabitur malesuada auctor enim,
          lobortis nibh justo tempus. Sit tellus sed amet eu.
        </Text>
      </View>
      <View>
        <Text
          style={{
            color: "#4D5D6A",
            fontFamily: "rubik",
            fontSize: 19,
            marginVertical: 8,
          }}
        >
          ₦518,000<Text style={{ color: "#81909D", fontSize: 12 }}>/units</Text>
        </Text>
        <Text
          style={{
            color: "#81909D",
            fontSize: 13,
            fontFamily: "rubik",
            marginVertical: 10,
          }}
        >
          Property type
        </Text>
        <Text style={{ color: "#1D4ED8", fontFamily: "rubik", fontSize: 18 }}>
          Duplex
        </Text>
        <Text
          style={{
            color: "#81909D",
            fontSize: 13,
            fontFamily: "rubik",
            marginVertical: 10,
          }}
        >
          Investment category
        </Text>
        <Text style={{ color: "#1D4ED8", fontFamily: "rubik", fontSize: 18 }}>
          Residential
        </Text>
        <Text
          style={{
            color: "#81909D",
            fontSize: 13,
            fontFamily: "rubik",
            marginVertical: 10,
          }}
        >
          Monatorium
        </Text>
        <Text style={{ color: "#1D4ED8", fontFamily: "rubik", fontSize: 18 }}>
          Medium term
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 15,
          }}
        >
          <Icon
            name={"map-marker"}
            style={{ fontSize: 25, color: "#4D5D6A" }}
          />
          <Text style={{ color: "#81909D", fontSize: 13, fontFamily: "rubik" }}>
            Independence Layout Enugu
          </Text>
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    margin: 15,
  },
});

//make this component available to the app
export default AssetPreview;
