import React, { useState } from "react";
import RangeSlider from "react-native-range-slider-expo";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  View,
  Text,
  useWindowDimensions,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet
} from "react-native";
import { useFonts } from "expo-font";
import { color } from "react-native-reanimated";

const ASlider = ({navigation}) => {
  const [fromValue, setFromValue] = useState(0);
  const [toValue, setToValue] = useState(0);
  const [value, setValue] = useState(0);
  const [change, setChange] = useState(false);
  const { width } = useWindowDimensions();

  const changeToInput = () => {
    setChange(true);
  };
  const changer = () => {
    setChange(false);
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
    <View
      style={{
        marginTop: 40,
        margin: 5,
        flex: 1,
      }}
    >
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
        <TouchableOpacity onPress={() => navigation.navigate('DealPage')}>
          <Text style={{ color: "#4D5D6A", fontFamily: "poppins" }}>Skip</Text>
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
            Set a Preffered price range for your assets
          </Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} overScrollMode='never'>
        <View>
          <View>
            <Text
              style={{
                marginLeft: 10,
                fontFamily: "poppins",
                color: "#81909D",
              }}
            >
              Min.Amount
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                margin: 10,
                display: change === true ? "flex" : "none",
                padding: 5,
                backgroundColor: "#e1e3e6",
                // justifyContent: "center",
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
              <TextInput
                style={{
                  width: width - 30,
                  height: 45,
                  fontFamily: "poppins",
                  fontSize: 17,
                  color: "#4D5D6A"
                }}
                keyboardType="numeric"
                maxLength={7}
              />
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  width: width - 30,
                  display: change === true ? "none" : "flex",
                }}
                onPress={changeToInput}
              >
                <Text
                  style={{
                    backgroundColor: "#e1e3e6",
                    padding: 10,
                    marginVertical: 10,
                    // height: 45,
                    fontFamily: "poppins",
                    fontSize: 18,
                    color: "#4D5D6A",
                    paddingVertical: 15,
                  }}
                >
                  ₦{fromValue * 1000}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ marginBottom: 10 }}>
            <Text
              style={{
                marginLeft: 10,
                fontFamily: "poppins",
                color: "#81909D",
              }}
            >
              Max.Amount
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                margin: 10,
                display: change === true ? "flex" : "none",
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
                  fontSize: 17,
                  height: 45,
                  color: "#4D5D6A",
                }}
              >
                ₦
              </Text>
              <TextInput
                style={{
                  width: width - 30,
                  height: 45,
                  fontSize: 17,
                  color: "#4D5D6A",
                  fontFamily: "poppins",
                }}
                maxLength={7}
                keyboardType="numeric"
              />
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  width: width - 30,

                  display: change === true ? "none" : "flex",
                }}
                onPress={changeToInput}
              >
                <Text
                  style={{
                    backgroundColor: "#e1e3e6",
                    padding: 10,
                    marginVertical: 10,
                    fontFamily: "poppins",
                    fontSize: 18,
                    color: "#4D5D6A",
                    paddingVertical: 15,
                  }}
                >
                  ₦{toValue * 1000}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <View></View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginVertical: 20,
        }}
      >
        <Text
          style={{
            borderWidth: 1,
            padding: 0,
            height: 1,
            flex: 0.47,
            borderColor: "#e1e3e6",
          }}
        ></Text>
        <Text style={{ fontFamily: "poppins", color: "#4D5D6A" }}>or</Text>
        <Text
          style={{
            borderWidth: 1,
            padding: 0,
            height: 1,
            flex: 0.47,
            borderColor: "#e1e3e6",
          }}
        ></Text>
      </View>
      <View
        style={{}}
      >
        <TouchableOpacity style={{opacity: change===true?1:0}} onPress={changer}>
          <Text style={{color:'#1D4ED8',fontFamily:'rubik',textAlign:'center',fontSize:18}}>
            Use PaymentRange
          </Text>
        </TouchableOpacity>
      </View>
      <RangeSlider
        min={5}
        max={25}
        styleSize="small"
        fromValueOnChange={(value) => setFromValue(value)}
        toValueOnChange={(value) => setToValue(value)}
        initialFromValue={10}
        initialToValue={20}
        inRangeBarColor="white"
        outOfRangeBarColor="#D5D5D5"
        toKnobColor="white"
        fromKnobColor="white"
        showRangeLabels={false}
        showValueLabels={false}
        barHeight={5}
        containerStyle={{ backgroundColor: "#e1e3e6", marginBottom: 20,opacity:change === true? 0:1 }}
      />
      {/* <TouchableOpacity
        style={{
          backgroundColor: "#1D4ED8",
          padding: 10,
          paddingVertical:15,
          borderRadius: 5,
          marginTop: 100,
          marginHorizontal: 10,
        }}
        onPress={() => navigation.navigate('CountryState')}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontFamily: "poppins",
            fontSize: 20,
          }}
        >
          Proceed
        </Text>
      </TouchableOpacity> */}
      <TouchableOpacity
          style={{
            backgroundColor:'#1D4ED8',
            paddingVertical: 13,
            borderRadius: 10,
            marginHorizontal:10,
            width: width - 30,
            marginVertical:50
            // position:'absolute'
          }}
          onPress={() => navigation.navigate('CountryState')}
        >
          <Text style={styles.buttonText}>Proceed</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: 'white',
    textAlign: "center",
    fontSize: 20,
    fontFamily: "poppins",
    fontWeight: "600",
  },
})

export default ASlider;
