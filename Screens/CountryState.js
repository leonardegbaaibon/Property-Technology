import React, { useState } from "react";
import RangeSlider from "react-native-range-slider-expo";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { States } from "../Data/States";
import {
  View,
  Text,
  useWindowDimensions,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  FlatList,
  ImageBackground,
} from "react-native";
import { useFonts } from "expo-font";
// import { ImageBackground } from "react-native";

// create a component
const CountryState = ({navigation}) => {
  const [selectedId, setSelectedId] = useState(null);

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
          marginHorizontal: 10,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name={"arrow-left"}
            style={{ marginTop: 10, fontSize: 25, color: "#4D5D6A" }}
          />
        </TouchableOpacity>
        <Text style={{ color: "#1D4ED8", fontFamily: "ubuntu", fontSize: 25 }}>
          Musha
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('DealsPage')}>
          <Text
            style={{ color: "#4D5D6A", fontFamily: "poppins", fontSize: 18 }}
          >
            Skip
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text
          style={{
            textAlign: "center",
            fontFamily: "poppins",
            marginVertical: 20,
          }}
        >
          Answer A few Questions
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "#4D5D6A",
              fontFamily: "poppins",
              textAlign: "center",
              width: 200,
              fontSize: 20,
            }}
          >
            Select Preffered States
          </Text>
        </View>
      </View>
      <View></View>
      <ScrollView
        horizontal
        style={{ height: 50 }}
        showsHorizontalScrollIndicator={false}
        nestedScrollEnabled={true}
      >
        <View style={{ flexDirection: "row" }}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            bounces={false}
            data={States}
            renderItem={({ item }) => (
              <View>
                <TouchableOpacity onPress={() => setSelectedId(item.id)}>
                  <ImageBackground
                    source={item.image}
                    style={{
                      width: 140,
                      height: 150,
                      margin: 10,
                    }}
                    resizeMode="cover"
                  >
                    <View
                      style={{
                        backgroundColor: "#43ff8849",
                        height: "100%",
                        borderRadius: 7,
                        // opacity:0.5
                        display: item.id === selectedId ? "flex" : "none",
                      }}
                    >
                      <View
                        style={{
                          backgroundColor: "#00C747",
                          padding: 10,
                          position: "absolute",
                          right: 10,
                          top: 10,
                          borderRadius: 50,
                          borderColor: "white",
                        }}
                      >
                        <Icon
                          name={"check"}
                          style={{
                            // marginTop: 10,
                            fontSize: 15,
                            fontWeight: "800",
                            color: "white",
                          }}
                        />
                      </View>
                      <Text
                        style={{
                          color: "white",
                          lineHeight: 180,
                          fontFamily: "poppins",
                          textAlign: "center",
                        }}
                      >
                        {item.title}
                      </Text>
                    </View>
                    <Text
                      style={{
                        color: "white",
                        lineHeight: 180,
                        fontFamily: "poppins",
                        textAlign: "center",
                      }}
                    >
                      {item.title}
                    </Text>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={(item) => item.id}
            numColumns={18}
            contentContainerStyle={{ marginVertical: 10, paddingBottom: 10 }}
          />
        </View>
      </ScrollView>
      <Text
        style={{
          textAlign: "center",
          fontFamily: "poppins",
          fontSize: 15,
          color: "#4D5D6A",
        }}
      >
        Minimum: One State
      </Text>
      {selectedId !== null ? (
        <TouchableOpacity
          style={{
            backgroundColor: "#1D4ED8",
            padding: 15,
            marginVertical: 20,
            borderRadius: 7,
            marginHorizontal: 15,
          }}
          onPress={() => navigation.navigate('Loader')}
        >
          <Text
            style={{
              fontFamily: "poppins",
              color: "white",
              textAlign: "center",
              fontSize: 18,
            }}
          >
            Proceed
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={{
            backgroundColor: "#1D4ED8",
            padding: 15,
            marginVertical: 20,
            borderRadius: 7,
            marginHorizontal: 15,
          }}
          disabled
        >
          <Text
            style={{
              fontFamily: "poppins",
              color: "white",
              textAlign: "center",
              fontSize: 18,
            }}
          >
            Proceed
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    margin: 5,
    flex: 1,
  },
});

//make this component available to the app
export default CountryState;
