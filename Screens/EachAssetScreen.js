//import liraries
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  TextInput,
  SectionList,
} from "react-native";
import Icon from "react-native-vector-icons/Octicons";
import Icon3 from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/Ionicons";
import { useFonts } from "expo-font";
import ListItem from "../Components/ListItem";
import { SECTIONS } from "../Data/SECTIONS";
import ChartKit from "../Components/ChartKit";
import { useNavigation } from "@react-navigation/native";
// import {  } from "react";

// create a component
const EachAssetScreen = ({ route, navigation }) => {
  const {paramKey} = route.params
  const [item, setItem] = useState();
  const [placeholder1, setPlaceholder1] = useState(0);
  const [overlay, setOverlay] = useState(false);

  console.log(paramKey)
  // useEffect(() => {
  //   setItem(route.params.paramKey);

  // });

  const height = useWindowDimensions().height;
  const width = useWindowDimensions().width;

  const handlePresser = () => {
    if(placeholder1  > 0){
      navigation.navigate("Details");
      setOverlay(false);
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

  return (
    <View style={styles.container}>
      <View
        style={{
          position: "absolute",
          top: 0,
          backgroundColor: "#0000003a",
          zIndex: 1,
          width: width,
          height: height,
          display: overlay === false ? "none" : "flex",
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            marginHorizontal: 30,
            marginVertical: 50,
            padding: 10,
            borderRadius: 10,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "black", fontFamily: "rubik", fontSize: 18 }}>
              Buy Asset
            </Text>
            <TouchableOpacity onPress={() => setOverlay(false)}>
              <View
                style={{
                  backgroundColor: "#D5D5D5",
                  padding: 5,
                  borderRadius: 50,
                }}
              >
                <Icon2
                  name={"close"}
                  style={{ color: "black", fontFamily: "rubik", fontSize: 15 }}
                />
              </View>
            </TouchableOpacity>
          </View>
          <Text
            style={{ marginLeft: 10, fontFamily: "poppins", color: "#81909D" }}
          >
            Quantity
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              margin: 10,
              borderRadius: 10,
              padding: 5,
              backgroundColor: "#e1e3e6",
              textAlign: "center",
            }}
          >
            <TextInput
              style={{
                width: width - 30,
                height: 45,
                fontFamily: "poppins",
                fontSize: 17,
                color: "#4D5D6A",
              }}
              keyboardType="numeric"
              maxLength={2}
              onChangeText={(placeholder1) => setPlaceholder1(placeholder1)}
              defaultValue={placeholder1}
            />
          </View>
          <Text
            style={{ marginLeft: 10, fontFamily: "poppins", color: "#81909D" }}
          >
            Amount
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              margin: 10,
              borderRadius: 10,
              padding: 5,
              backgroundColor: "#e1e3e6",
              textAlign: "center",
            }}
          >
            <Text
              style={{
                marginTop: 5,
                fontFamily: "poppins",
                padding: 5,
                fontSize: 18,
                color: "#4D5D6A",
              }}
            >
              ₦
            </Text>
            <View
              style={{
                width: width - 30,
                height: 45,
              }}
            >
              <Text
                style={{
                  fontFamily: "poppins",
                  fontSize: 17,
                  color: "#4D5D6A",
                  marginTop:12
                }}
              >{ placeholder1 *  Math.floor(paramKey.price / paramKey.units)}</Text>
            </View>
          </View>
          <View>
            <TouchableOpacity
              style={{
                backgroundColor: "#1D4ED8",
                padding: 15,
                marginHorizontal: 10,
                borderRadius: 10,
              }}
              onPress={handlePresser}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontFamily: "poppins",
                  fontSize: 16,
                }}
              >
                Proceed
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          alignItems: "center",
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
          Best Deals
        </Text>
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
      <ScrollView showsVerticalScrollIndicator={false} overScrollMode="never">
        <View style={{ margin: 15 }}>
          <Image
            source={paramKey.image}
            style={{ width: "100%", height: 200, borderRadius: 10 }}
          />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            alignItems: "center",
            margin: 15,
          }}
        >
          <View>
            <View
              style={{
                padding: 10,
                backgroundColor: "rgba(68, 137, 198, 0.06)",
                borderRadius: 5,
                margin: 5,
                width: 50,
              }}
            >
              <Image
                source={require("../assets/Image/Home2.png")}
                style={{ width: 27, height: 23.8 }}
              />
            </View>
            <Text style={{ color: "#81909D", fontFamily: "rubik" }}>
              Ikorun,Bauchi
            </Text>
          </View>

          <View>
            <Text
              style={{ fontFamily: "mulish", color: "#4D5D6A", fontSize: 25 }}
            >
              {paramKey.units} of {paramKey.totalUnits} Units
            </Text>
          </View>
          <TouchableOpacity
            style={{ backgroundColor: "#1D4ED8", borderRadius: 100 }}
            onPress={() => setOverlay(true)}
          >
            <Text
              style={{
                color: "white",
                fontFamily: "poppins",
                paddingHorizontal: 15,
                padding: 6,
                fontSize: 15,
              }}
            >
              Buy Asset
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <View style={{ backgroundColor: "#e1e4e7", margin: 15 }}>
            <Text
              style={{
                fontStyle: "italic",
                fontFamily: "rubik",
                color: "#4D5D6A",
                marginLeft: 20,
                marginVertical: 5,
                fontSize: 15,
              }}
            >
              Description
            </Text>
          </View>
          <View
            style={{
              marginHorizontal: 15,
              borderBottomWidth: 1,
              borderBottomColor: "#D5D5D5",
              marginBottom: 18,
            }}
          >
            <Text
              style={{
                color: "#81909D",
                fontStyle: "italic",
                fontFamily: "rubik",
                fontSize: 17,
              }}
            >
              {paramKey.description}
            </Text>
          </View>
          <View style={{ backgroundColor: "#e1e4e7", margin: 15 }}>
            <Text
              style={{
                fontStyle: "italic",
                fontFamily: "rubik",
                color: "#4D5D6A",
                marginLeft: 20,
                marginVertical: 5,
                fontSize: 17,
              }}
            >
              Features
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 10,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Icon3 name="bath" style={{ color: "#81909D", fontSize: 20 }} />
              <Text
                style={{
                  color: "#81909D",
                  fontFamily: "poppins",
                  paddingHorizontal: 5,
                }}
              >
                3 baths
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Icon2
                name="bed-outline"
                style={{ color: "#81909D", fontSize: 20 }}
              />
              <Text
                style={{
                  color: "#81909D",
                  fontFamily: "poppins",
                  paddingHorizontal: 5,
                }}
              >
                5 Beds
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Icon2
                name="home-outline"
                style={{ color: "#81909D", fontSize: 20 }}
              />
              <Text
                style={{
                  color: "#81909D",
                  fontFamily: "poppins",
                  paddingHorizontal: 5,
                }}
              >
                4634 sqft
              </Text>
            </View>
          </View>
          <View style={{ backgroundColor: "#e1e4e7", margin: 15 }}>
            <Text
              style={{
                fontStyle: "italic",
                fontFamily: "rubik",
                color: "#4D5D6A",
                marginLeft: 20,
                marginVertical: 5,
                fontSize: 17,
              }}
            >
              Investment Details
            </Text>
          </View>
          <View style={{ marginHorizontal: 15 }}>
            <Text
              style={{ color: "#4D5D6A", fontSize: 18, fontFamily: "mulish" }}
            >
              Min. ROI : 15% per annum
            </Text>
            <Text
              style={{ color: "#4D5D6A", fontSize: 18, fontFamily: "mulish" }}
            >
              Expected Project completion : 15 July 2023
            </Text>
            <Text
              style={{ color: "#4D5D6A", fontSize: 18, fontFamily: "mulish" }}
            >
              Investment Conversion allowed? Yes
            </Text>
          </View>
        </View>
        <View style={{ marginHorizontal: 10 }}>
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
              Best Deals $20,000 - $200,000
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("DealsScreen")}
            >
              <Text style={{ color: "#1D4ED8", fontFamily: "mulish" }}>
                See All
              </Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={SECTIONS[0].data}
            horizontal
            overScrollMode="never"
            //   numColumns={2}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
              return <ListItem item={item} />;
            }}
          />
        </View>
        <View style={{ marginTop: 50 }}>
          <ChartKit />
        </View>
      </ScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
});

//make this component available to the app
export default EachAssetScreen;
