//import liraries
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useFonts } from "expo-font";
import StepsProgress from "../Components/StepsProgress";
import { CheckBox } from "react-native-elements";

// create a component
const AddProperty = ({navigation}) => {
  const [sell, setSell] = useState(true);
  const [buy, setBuy] = useState(true);
  const [building, setBuilding] = useState(false);
  const [residential, setResidential] = useState(false);
  const [commercial, setCommercial] = useState(false);
  const [apartment, setApartment] = useState(false);
  const [duplex, setDuplex] = useState(false);
  const [shortTerm, setShortTerm] = useState(false);
  const [middleTerm, setMiddleTerm] = useState(false);
  const [longTerm, setLongTerm] = useState(false);
  // const [text, setText] = useState("");
  const [placeholder1, setPlaceholder1] = useState("");
  const [placeholder2, setPlaceholder2] = useState("");
  const [placeholder3, setPlaceholder3] = useState("");
  const [warner, setWarner] = useState("");

  const [fontsLoaded] = useFonts({
    ubuntu: require("../assets/fonts/Ubuntu-Regular.ttf"),
    poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    mulish: require("../assets/fonts/Mulish-Regular.ttf"),
    rubik: require("../assets/fonts/Rubik-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const SelectBuilding = () => {
    setBuilding(true);
    setApartment(false);
    setDuplex(false);
  };
  const SelectApartment = () => {
    setBuilding(false);
    setApartment(true);
    setDuplex(false);
  };
  const SelectDuplex = () => {
    setBuilding(false);
    setApartment(false);
    setDuplex(true);
  };

  // For the Terms
  const SelectShort = () => {
    setShortTerm(true);
    setMiddleTerm(false);
    setLongTerm(false);
  };
  const SelectMiddle = () => {
    setShortTerm(false);
    setMiddleTerm(true);
    setLongTerm(false);
  };
  const SelectLong = () => {
    setShortTerm(false);
    setMiddleTerm(false);
    setLongTerm(true);
  };

  const SelectResidential = () => {
    // setBuilding(false);
    setCommercial(false);
    setResidential(true);
  };

  const SelectCommercial = () => {
    setResidential(false);
    setCommercial(true);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon
          style={{
            fontSize: 22,
            color: "#4D5D6A",
            marginVertical: 15,
            // marginHorizontal: 13,
            // marginRight: 23,
          }}
          name={"arrow-left"}
        />

        </TouchableOpacity>
        <Text style={{ color: "blue", fontFamily: "ubuntu", fontSize: 23 }}>
          Musha
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('DealsPage')}>
        <Text style={{ color: "#81909D", fontFamily: "poppins", fontSize: 18 }}>
          Skip
        </Text>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          textAlign: "center",
          color: "#4D5D6A",
          fontSize: 20,
          fontFamily: "mulish",
          marginVertical: 20,
        }}
      >
        Add Properties
      </Text>
      <View style={{ marginBottom: 10 }}>
        <Text
          style={{
            textAlign: "center",
            fontFamily: "rubik",
            marginVertical: 15,
            fontSize: 16,
            color: "#4D5D6A",
          }}
        >
          Step 1/ <Text style={{ color: "#D1D1D1" }}>2</Text>
        </Text>
        {/* <StepsProgress /> */}
      </View>
      <ScrollView overScrollMode="never" showsVerticalScrollIndicator={false}>
        <View>
          <Text
            style={{
              fontFamily: "rubik",
              color: "#81909D",
              marginVertical: 20,
              marginTop: 30,
            }}
          >
            I want to
          </Text>
          <View
            style={{
              backgroundColor: "#e6e6e6",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              borderRadius: 5,
            }}
          >
            <Text
              style={{
                fontFamily: "rubik",
                paddingLeft: 20,
                color: "#4D5D6A",
                fontSize: 17,
              }}
            >
              Sell
            </Text>
            <CheckBox
              center
              checked={sell}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checkedColor="#1D4ED8"
            />
          </View>
          <Text
            style={{
              fontFamily: "rubik",
              color: "#81909D",
              marginVertical: 20,
            }}
          >
            Property type
          </Text>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            contentContainerStyle={{
              justifyContent: "space-between",
              display: "flex",
              flexDirection: "row",
              marginTop: 10,
              width: "100%",
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#e6e6e6",
                padding: 7,
                marginHorizontal: 5,
                borderRadius: 5,
                borderWidth: apartment === true ? 1 : 1,
                borderColor: apartment === true ? "#9AB5FF" : "transparent",
              }}
              onPress={SelectApartment}
            >
              <View
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../assets/Image/building3.png")}
                  style={{ width: 30, height: 25 }}
                />
                <View style={{ height: 50, marginLeft: 10 }}>
                  <CheckBox
                    // style={{position:'relative',top: 10}}
                    containerStyle={{
                      width: 25,
                      height: 25,
                      position: "relative",
                      top: -10,
                      right: -15,
                      padding: 0,
                    }}
                    // right={true}
                    // size= '32'
                    center
                    checked={apartment}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    checkedColor="#1D4ED8"
                    onPress={SelectApartment}
                  />
                </View>
              </View>
              <Text style={{ fontFamily: "rubik", color: "#4D5D6A" }}>
                Apartment
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#e6e6e6",
                padding: 7,
                marginHorizontal: 5,
                borderRadius: 5,
                borderWidth: duplex === true ? 1 : 1,
                borderColor: duplex === true ? "#9AB5FF" : "transparent",
              }}
              onPress={SelectDuplex}
            >
              <View
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../assets/Image/building2.png")}
                  style={{ width: 30, height: 25 }}
                />
                <View style={{ height: 50, marginLeft: 10 }}>
                  <CheckBox
                    containerStyle={{
                      width: 25,
                      height: 25,
                      position: "relative",
                      top: -10,
                      right: -15,
                      padding: 0,
                    }}
                    center
                    checked={duplex}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    checkedColor="#1D4ED8"
                    onPress={SelectDuplex}
                  />
                </View>
              </View>
              <Text style={{ fontFamily: "rubik", color: "#4D5D6A" }}>
                Duplex
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#e6e6e6",
                padding: 7,
                marginHorizontal: 5,
                borderRadius: 5,
                borderWidth: building === true ? 1 : 1,
                borderColor: building === true ? "#9AB5FF" : "transparent",
              }}
              onPress={SelectBuilding}
            >
              <View
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../assets/Image/building.png")}
                  style={{ width: 30, height: 25 }}
                />
                <View style={{ height: 50, marginLeft: 10 }}>
                  <CheckBox
                    containerStyle={{
                      width: 25,
                      height: 25,
                      position: "relative",
                      top: -10,
                      right: -15,
                      padding: 0,
                    }}
                    center
                    checked={building}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    checkedColor="#1D4ED8"
                    onPress={SelectBuilding}
                  />
                </View>
              </View>
              <Text style={{ fontFamily: "rubik", color: "#4D5D6A" }}>
                Building
              </Text>
            </TouchableOpacity>
          </ScrollView>
          <Text
            style={{ fontFamily: "mulish", color: "#81909D", marginTop: 20 }}
          >
            Investment category
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "#e6e6e6",
                borderRadius: 5,
                borderWidth: residential === true ? 1 : 1,
                borderColor: residential === true ? "#9AB5FF" : "transparent",
              }}
            >
              <Text
                style={{
                  marginHorizontal: 15,
                  fontFamily: "mulish",
                  color: "#4D5D6A",
                  fontSize: 16,
                }}
              >
                Residential
              </Text>
              <CheckBox
                // containerStyle={{paddingHorizontal: 25,}}
                center
                iconRight={true}
                // title="Residential"
                checked={residential}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checkedColor="#1D4ED8"
                onPress={SelectResidential}
              />
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "#e6e6e6",
                borderRadius: 5,
                borderWidth: commercial === true ? 1 : 1,
                borderColor: commercial === true ? "#9AB5FF" : "transparent",
              }}
            >
              <Text
                style={{
                  marginHorizontal: 15,
                  fontFamily: "mulish",
                  color: "#4D5D6A",
                }}
              >
                Comercial
              </Text>
              <CheckBox
                // containerStyle={{C}}
                iconRight={true}
                center
                checked={commercial}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checkedColor="#1D4ED8"
                onPress={SelectCommercial}
              />
            </View>
          </View>
          <View>
            <Text
              style={{
                fontFamily: "rubik",
                color: "#81909D",
                marginVertical: 20,
              }}
            >
              Moratorium
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: shortTerm === false ? "#e6e6e6" : "#21D363",
                  padding: 10,
                  borderRadius: 5,
                  paddingHorizontal: 15,
                }}
                onPress={SelectShort}
              >
                <Text
                  style={{
                    fontFamily: "poppins",
                    color: shortTerm === false ? "#4D5D6A" : "white",
                  }}
                >
                  Short-term
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: middleTerm === false ? "#e6e6e6" : "#21D363",
                  padding: 10,
                  borderRadius: 5,
                  paddingHorizontal: 15,
                }}
                onPress={SelectMiddle}
              >
                <Text
                  style={{
                    fontFamily: "poppins",
                    color: middleTerm === false ? "#4D5D6A" : "white",
                  }}
                >
                  Medium term
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: longTerm === false ? "#e6e6e6" : "#21D363",
                  padding: 10,
                  borderRadius: 5,
                  paddingHorizontal: 15,
                }}
                onPress={SelectLong}
              >
                <Text
                  style={{
                    fontFamily: "poppins",
                    color: longTerm === false ? "#4D5D6A" : "white",
                  }}
                >
                  Long Term
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <View>
              <Text
                style={{
                  color: "#81909D",
                  fontFamily: "rubik",
                  marginVertical: 20,
                }}
              >
                Write Property Title
              </Text>
              <TextInput
                style={{
                  height: 50,
                  backgroundColor: "#e6e6e6",
                  padding: 10,
                  borderRadius: 5,
                  color: "#4D5D6A",
                  fontFamily: placeholder1 ? "rubik" : "mulish",
                }}
                placeholder="Property title"
                onChangeText={(placeholder1) => setPlaceholder1(placeholder1)}
                defaultValue={placeholder1}
              />
            </View>
            <View>
              <Text
                style={{
                  color: "#81909D",
                  fontFamily: "rubik",
                  marginVertical: 20,
                }}
              >
                Description
              </Text>
              <TextInput
                style={{
                  backgroundColor: "#e6e6e6",
                  paddingBottom: 40,
                  padding: 10,
                  borderRadius: 5,
                  color: "#4D5D6A",
                  fontFamily: placeholder2 ? "rubik" : "rubik",
                }}
                onChangeText={(placeholder2) => setPlaceholder2(placeholder2)}
                value={placeholder2}
                placeholder="Description"
                // onChangeText={newText => setText(newText)}
                // defaultValue={text}
                multiline={true}
                numberOfLines={4}
              />
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                backgroundColor: "#e6e6e6",
                justifyContent: "space-between",
                marginVertical: 30,
                borderRadius: 5,
              }}
            >
              <TextInput
                style={{
                  height: 50,
                  backgroundColor: "#e6e6e6",
                  padding: 10,
                  width: 300,
                  color: "#4D5D6A",
                  fontFamily: placeholder3 ? "rubik" : "rubik",
                }}
                onChangeText={(placeholder3) => setPlaceholder3(placeholder3)}
                value={placeholder3}
                placeholder="Address"
              />
              <Icon
                name={"map-marker"}
                style={{ marginTop: 10, fontSize: 25, color: "#4D5D6A" }}
              />
            </View>
            {placeholder1 === "" &&
            placeholder2 === "" &&
            placeholder3 === "" ? (
              <TouchableOpacity
                style={{
                  backgroundColor: "#1D4ED8",
                  borderRadius: 10,
                  paddingVertical: 15,
                }}
                onPress={() => setWarner('Fill in the required details')}
                // disabled
              >
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontSize: 20,
                    fontFamily: "poppins",
                  }}
                >
                  Next
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={{
                  backgroundColor: "#1D4ED8",
                  borderRadius: 10,
                  paddingVertical: 15,
                }}
                onPress={() => navigation.navigate('AddProperty1')}
              >
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontSize: 20,
                    fontFamily: "poppins",
                  }}
                >
                  Next
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View>
          <Text style={{color:'red',fontSize:16,fontFamily:'poppins',marginVertical:10,opacity:placeholder1 === "" && placeholder2 === "" && placeholder3 === "" ? 1 : 0}}>
            {warner}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    margin: 15,
    flex: 1,
  },
});

//make this component available to the app
export default AddProperty;
