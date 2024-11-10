//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
  VirtualizedList,
  useWindowDimensions,
} from "react-native";
import Icon from "react-native-vector-icons/Octicons";
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon3 from "react-native-vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { CheckBox } from "react-native-elements";
import IconSelect from "../Components/IconSelect";
// create a component
const Details = ({navigation}) => {
  const Data = [
    {
      id: 1,
      name: "Adefakin",
      SecName: "George",
      bool: false,
      unit: 3,
      picture: require("../assets/Image/ProfilePic.png"),
    },
    {
      id: 2,
      name: "Adefakin",
      SecName: "George",
      bool: false,
      unit: 3,
      picture: require("../assets/Image/ProfilePic.png"),
    },
    {
      id: 3,
      name: "Adefakin",
      SecName: "George",
      bool: true,
      unit: 3,
      picture: require("../assets/Image/ProfilePic.png"),
    },
    {
      id: 4,
      name: "Adefakin",
      SecName: "George",
      bool: false,
      unit: 3,
      picture: require("../assets/Image/ProfilePic.png"),
    },
    {
      id: 5,
      name: "Adefakin",
      SecName: "George",
      bool: false,
      unit: 1,
      picture: require("../assets/Image/ProfilePic.png"),
    },
    {
      id: 6,
      name: "Adefakin",
      SecName: "George",
      bool: true,
      unit: 2,
      picture: require("../assets/Image/ProfilePic.png"),
    },
  ];

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
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginVertical: 15,
          marginHorizontal: 15,
          //   margin:'15'
        }}
      >
        <TouchableOpacity onPress={() => navigation.goback()}>
          <Icon
            name={"arrow-left"}
            style={{ marginTop: 10, fontSize: 30, color: "#4D5D6A" }}
          />
        </TouchableOpacity>
        <Text style={{ color: "#4D5D6A", fontFamily: "rubik", fontSize: 22 }}>
          Details
        </Text>
        <TouchableOpacity>
          <Icon
            name={"bell"}
            style={{ marginTop: 10, fontSize: 30, color: "#4D5D6A" }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginHorizontal: 15,
        }}
      >
        <Text
          style={{
            color: "#1442C6",
            fontFamily: "rubik",
            backgroundColor: "rgba(29, 78, 216, 0.1)",
            padding: 20,
            fontStyle: "italic",
            borderRadius: 10,
            fontSize: 16,
          }}
        >
          This offer has to be sent to all the different owners of these units.
          Takes 2-3 Days to get response.
        </Text>
        <View>
          <Text
            style={{
              color: "#81909D",
              fontFamily: "rubik",
              fontSize: 17,
              marginVertical: 10,
            }}
          >
            Status
          </Text>
          <View
            style={{
              borderColor: "blue",
              borderWidth: 2,
              borderRadius: 100,
              width: 50,
            }}
          ></View>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: "#F2F2F1",
            padding: 1,
            borderRadius: 10,
            marginHorizontal: 15,
          }}
        >
          {Data.map((item, index) => (
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                borderBottomWidth: 1,
                borderColor: "#E4E4E1",
                margin: 10,
                //   padding:10
              }}
              key={item.id}
            >
              <View style={{ display: "flex", flexDirection: "row" }}>
                <Image
                  source={item.picture}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 100,
                    margin: 7,
                  }}
                />
                <View>
                  <Text
                    style={{
                      fontFamily: "mulish",
                      color: "#252836",
                      marginTop: 10,
                      fontSize: 18,
                    }}
                  >
                    {item.name}
                  </Text>
                  <Text style={{ color: "#81909D", fontFamily: "mulish" }}>
                    {item.SecName}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CheckBox checkedColor="#1D4ED8" checked={item.bool} />
                <View style={{ marginTop: 10 }}>
                  {item.bool === true ? (
                    <Text style={{ color: "#1D4ED8", fontFamily: "poppins" }}>
                      Approved
                    </Text>
                  ) : (
                    <Text style={{ color: "#81909D", fontFamily: "poppins" }}>
                      Pending
                    </Text>
                  )}
                  <Text style={{ color: "#81909D", fontFamily: "mulish" }}>
                    {item.unit}units
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#1D4ED8",
            padding: 15,
            borderRadius: 10,
            marginVertical: 30,
            marginHorizontal: 15,
            marginBottom:100
          }}
          onPress={() => navigation.navigate('Gateway')}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 18,
              fontFamily: "poppins",
            }}
          >
            Proceed
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

// define your styles

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    // margin: 15,
  },
});

//make this component available to the app
export default Details;
