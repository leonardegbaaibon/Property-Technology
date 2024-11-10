//import liraries
import React, { Component } from "react";
import ListItem from "./ListItem";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  SectionList,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useFonts } from "expo-font";
import { SECTIONS } from "../Data/SECTIONS";
import IconSelect from "./IconSelect";

// create a component
const AssetsDeals = ({navigation}) => {
  
  const [fontsLoaded] = useFonts({
    ubuntu: require("../assets/fonts/Ubuntu-Regular.ttf"),
    poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    mulish: require("../assets/fonts/Mulish-Regular.ttf"),
    rubik: require("../assets/fonts/Rubik-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  // console.log(SECTIONS[0].data)

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <SectionList
          contentContainerStyle={{ paddingHorizontal: 10 }}
          stickySectionHeadersEnabled={false}
          showsVerticalScrollIndicator={false}
          overScrollMode="never"
          sections={SECTIONS}
          renderSectionHeader={({ section }) => (
            <>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginHorizontal: 15,
                  marginVertical: 20,
                  marginTop: 25,
                }}
                >
                <Text
                  style={{
                      color: "#4D5D6A",
                      fontFamily: "mulish",
                      fontSize: 18,
                  }}
                >
                  {section.title}
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate(section.navigate)}>
                  <Text style={{ color: "#1D4ED8", fontFamily: "mulish",fontSize:18 }}>
                    See All
                  </Text>
                </TouchableOpacity>
              </View>
              <FlatList 
              data={section.data}
              horizontal
              overScrollMode="never"
              showsHorizontalScrollIndicator={false}
            //   ListFooterComponent={<IconSelect />}
              renderItem={({ item }) => {
                return <ListItem item={item} />
              }}
              />
            </>
          )}
          renderItem={({ item, section }) => {
            return null;
          }}
        />
      </SafeAreaView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    // marginTop: 40,
    // marginBottom:400,
    // flex: 1,
  },
});

//make this component available to the app
export default AssetsDeals;
