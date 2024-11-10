//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  useWindowDimensions,
} from "react-native";
import Icon from "react-native-vector-icons/Octicons";
import { useFonts } from "expo-font";
import StateList from "../Components/StatesList";
import { SECTIONS } from "../Data/SECTIONS";
import ListItem from "../Components/ListItem";
import IconSelect from "../Components/IconSelect";
// create a component
const MarketScreen = ({navigation}) => {
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
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          alignItems:'center',
          marginVertical: 15,
          marginHorizontal: 15,
          //   margin:'15'
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name={"arrow-left"}
            style={{ fontSize: 30, color: "#4D5D6A" }}
          />
        </TouchableOpacity>
        <Text style={{ color: "#4D5D6A", fontFamily: "rubik", fontSize: 22 }}>
          Market
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
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal:15
          }}
        >
          <View
            style={{
              backgroundColor: "#e6e6e6",
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
              borderRadius: 10,
              height:40
              
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
        </View>
        <View style={{height:height - 180,width:width,margin:10}}>
        <FlatList 
              data={SECTIONS[0].data}
            //   horizontal
              overScrollMode="never"
              numColumns={2}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => {
                return <ListItem item={item} />
              }}
              contentContainerStyle={{display:'flex',justifyContent:'space-around'}}
              />
              
        </View>
        {/* <IconSelect /> */}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // margin: 15,
    marginTop: 45,
  },
});

//make this component available to the app
export default MarketScreen;
