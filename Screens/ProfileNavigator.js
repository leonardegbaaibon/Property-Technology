//import liraries
import React from "react";
import { useState, useEffect } from "react";
import CompanyAccount from "../Components/CompanyAccount";
import UserAccount from "../Components/UserAccount";
import LottieView from "lottie-react-native";
import Icon from "react-native-vector-icons/Octicons";
import Icon2 from "react-native-vector-icons/SimpleLineIcons";
import Icon3 from "react-native-vector-icons/FontAwesome";
import Icon5 from "react-native-vector-icons/Ionicons";
import Purchased from "./Purchased";
import UpForSale from "./UpForSale";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { useFonts } from "expo-font";


const ProfileNavigator = ({navigation}) => {
  const [display, setDisplay] = useState("flex");
  const [display2, setDisplay2] = useState("none");
  const [yvalue, setYvalue] = useState(0);
  const [xvalue, setXvalue] = useState(0);
  const [index, setIndex] = useState(0);

  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;

  // console.log(xvalue);

  // },[])
  // }
  // };
  const [fontsLoaded] = useFonts({
    ubuntu: require("../assets/fonts/Ubuntu-Regular.ttf"),
    poppins: require("../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{marginTop:40,flex:1}}>
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
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name={"arrow-left"}
            style={{ marginTop: 10, fontSize: 30, color: "#4D5D6A" }}
          />
        </TouchableOpacity>
        <Text style={{ color: "#4D5D6A", fontFamily: "rubik", fontSize: 22 }}>
          My Assets
        </Text>
        <TouchableOpacity>
          <Icon
            name={"bell"}
            style={{ marginTop: 10, fontSize: 30, color: "#4D5D6A" }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ marginHorizontal: 15 }}>
          <View style={styles.account}>
            <TouchableOpacity
              style={{
                borderBottomColor:
                  xvalue >= 0 && xvalue <= 180 ? "blue" : "#81909d10",
                borderBottomWidth: 2,
                paddingHorizontal: 50,
              }}
            >
              <Text
                style={{
                  fontFamily: "poppins",
                  color: xvalue >= 0 && xvalue <= 180 ? "blue" : "#81909D",
                }}
              >
                Purchased
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderBottomColor:
                  xvalue >= 180 && xvalue <= 360 ? "blue" : "#81909d10",
                borderBottomWidth: 2,
                paddingHorizontal: 50,
              }}
            >
              <Text
                style={{
                  fontFamily: "poppins",
                  color: xvalue >= 180 && xvalue <= 360 ? "blue" : "#81909D",
                }}
              >
                Up-For-Sale
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ height: height - 150 }}>
            <ScrollView
              overScrollMode="never"
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              style={{ height: height }}
              onScroll={(event) => {
                let logx = event.nativeEvent.contentOffset.x;
                let logy = event.nativeEvent.contentOffset.y;
                setYvalue(logy);
                setXvalue(logx);
              }}
            >
              <View style={{ width: width}}>
                <Purchased  />
              </View>
              <View style={{ width: width }}>
                <ScrollView
                  style={{
                    width: width,
                  }}
                  showsVerticalScrollIndicator={true}
                  overScrollMode="never"
                >
                  <UpForSale  />
                </ScrollView>
              </View>
          </ScrollView>
        </View>

    </View>

  )
}
const styles = StyleSheet.create({
  container: {
    marginTop: 45,
  },
  title: {
    fontFamily: "ubuntu",
    color: "#1D4ED8",
    fontSize: 32,
  },
  title2: {
    fontFamily: "poppins",
    color: "#0B2253",
    fontSize: 24,
    marginTop: 10,
  },
  title3: {
    fontFamily: "poppins",
    color: "#81909D",
    fontSize: 14,
  },
  account: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 5,
    marginBottom: 5,
    // paddingBottom: 8,
  },
  accountUser: {
    borderBottomColor: "#81909D",
    fontFamily: "poppins",
    fontSize: 14,
    color: "#81909D",
    borderBottomWidth: 1.5,
    // paddingHorizontal: 38,
  },
  accountCompany: {
    fontFamily: "poppins",
    fontSize: 14,
    // color: '#81909D',
    // paddingHorizontal: 25,
    color: "#1D4ED8",
    borderBottomWidth: 2,
    borderBottomColor: "#1D4ED8",
  },
  accountUserText: {
    fontFamily: "poppins",
    fontSize: 14,
    color: "#81909D",
  },
  accountCompanyText: {
    fontFamily: "poppins",
    fontSize: 14,
    color: "#1D4ED8",
  },
  name: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name1: {
    // width: 50,
    flex: 0.45,
  },
  name2: {
    flex: 0.45,
  },
  userName: {
    color: "#4D5D6A",
    fontSize: 16,
    fontWeight: "500",
    marginVertical: 5,
    fontFamily: "poppins",
  },
  inputContainer: {
    flexDirection: "row",
    height: 57,
    borderRadius: 5,
    backgroundColor: "#F2F2F2",
  },
  userName1: {
    color: "#4D5D6A",
    fontSize: 16,
    fontWeight: "500",
    marginVertical: 5,
    fontFamily: "poppins",
  },
  inputContainer1: {
    flexDirection: "row",
    height: 57,
    borderRadius: 5,
    backgroundColor: "#F2F2F2",
  },
  button3: {
    backgroundColor: "rgb(201, 201, 250)",
    // marginTop: 10,
    paddingVertical: 13,
    borderRadius: 10,
  },
  disablebtn: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontFamily: "poppins",
    fontWeight: "600",
    // backgroundColor:'red'
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontFamily: "poppins",
    fontWeight: "600",
  },
  button1: {
    backgroundColor: "#1D4ED8",
    marginTop: 10,
    paddingVertical: 13,
    borderRadius: 10,
  },
  loginContainer: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    marginVertical: 10,
  },
  buttonText2: {
    color: "#4D5D6A",
    fontSize: 18,
  },
  accUser: {
    fontFamily: "poppins",
  },
});
export default ProfileNavigator