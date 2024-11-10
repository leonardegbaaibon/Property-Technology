//import liraries
import React, { Component,useState } from "react";
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
import Icon2 from "react-native-vector-icons/SimpleLineIcons";
import Icon3 from "react-native-vector-icons/FontAwesome";
import Icon5 from "react-native-vector-icons/Ionicons";
import { useFonts } from "expo-font";
import { CheckBox } from "react-native-elements";
import IconSelect from "../Components/IconSelect";
import ToggleSwitch from "toggle-switch-react-native";
import { useNavigation } from '@react-navigation/native'
// import { useState } from "react";
// create a component
const UserProfile = () => {

  const [mode,setMode] = useState(false)

  const navigation = useNavigation();

  const height = useWindowDimensions().height

  const [fontsLoaded] = useFonts({
    ubuntu: require("../assets/fonts/Ubuntu-Regular.ttf"),
    poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    mulish: require("../assets/fonts/Mulish-Regular.ttf"),
    rubik: require("../assets/fonts/Rubik-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const changeMode = () => {
    if(mode === false){
      setMode(true)
    }else{
      setMode(false)
    }
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
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name={"arrow-left"}
            style={{ marginTop: 10, fontSize: 30, color: "#4D5D6A" }}
          />
        </TouchableOpacity>
        <Text style={{ color: "#4D5D6A", fontFamily: "rubik", fontSize: 22 }}>
          Profile
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
          backgroundColor: "#1D4ED8",
          padding: 10,
          marginHorizontal: 15,
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
            opacity: 0,
            backgroundColor: "#FFF8E5",
            textAlign: "center",
            marginTop: 30,
            borderRadius: 20,
            width: 70,
            height: 30,
          }}
        ></Text>
      </View>
      <View
        style={{
          display: "flex",
          justifyContent:"space-around",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <View
          style={[
            {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
              width:"43%",
              marginBottom: 15,
              borderRadius: 10,
            },
            styles.elevation,
          ]}
        >
          <View
            style={{
              backgroundColor: "#1d4fd817",
              borderRadius: 100,
              padding: 18,
              margin: 10,
            }}
          >
            <Icon3 name="user-o" style={{ color: "#1D4ED8", fontSize: 20 }} />
          </View>
          <View>
            <Text
              style={{
                textAlign: "center",
                color: "#4D5D6A",
                fontFamily: "rubik",
                fontSize: 18,
                marginVertical: 10,
              }}
            >
              My Assets
            </Text>
            <Text
              style={{
                color: "#81909D",
                textAlign: "center",
                width: 130,
                fontSize: 15,
                fontFamily: "rubik",
                marginHorizontal: 10,
              }}
            >
              Make changes to your account
            </Text>
          </View>
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              width: 70,
              marginVertical: 20,
            }}
            onPress={() => navigation.navigate('ProfileNav')}
          >
            <Text
              style={{ color: "#1D4ED8", fontSize: 20, fontFamily: "poppins" }}
            >
              View
            </Text>
            <Icon
              name="arrow-right"
              style={{ color: "#1D4ED8", fontSize: 20 }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={[
            {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
              width:"43%",
              marginBottom: 15,
              borderRadius:10
              
            },
            styles.elevation,
          ]}
        >
          <View
            style={{
              backgroundColor: "#1d4fd817",
              borderRadius: 100,
              padding: 18,
              margin: 10,
            }}
          >
            <Icon3 name="user-o" style={{ color: "#1D4ED8", fontSize: 20 }} />
          </View>
          <View>
            <Text
              style={{
                textAlign: "center",
                color: "#4D5D6A",
                fontFamily: "rubik",
                fontSize: 18,
                marginVertical: 10,
              }}
            >
              Saved Assets
            </Text>
            <Text
              style={{
                color: "#81909D",
                textAlign: "center",
                width: 130,
                fontSize: 15,
                fontFamily: "rubik",
                marginHorizontal: 10,
              }}
            >
              Make changes to your account
            </Text>
          </View>
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              width: 70,
              marginVertical: 20,
            }}
            onPress={() => navigation.navigate('SavedAssets')}
          >
            <Text
              style={{ color: "#1D4ED8", fontSize: 20, fontFamily: "poppins" }}
            >
              View
            </Text>
            <Icon
              name="arrow-right"
              style={{ color: "#1D4ED8", fontSize: 20 }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} overScrollMode="never">
        <View style={{ height:height-250,display:'flex',justifyContent:'space-around',flexDirection:'column',backgroundColor:'white',marginHorizontal:15,alignItems:'stretch',marginBottom:40 }}>
          <TouchableOpacity onPress={() => navigation.navigate("ChangePassword")}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "white",
              marginHorizontal: 15,
              paddingRight: 15,
            }}
          >
            <View
              style={{
                backgroundColor: "#4d5d6a13",
                borderRadius: 100,
                padding: 17,
                margin: 10,
              }}
            >
              <Icon3 name="user-o" style={{ color: "#4D5D6A", fontSize: 18 }} />
            </View>
            <View>
              <Text
                style={{ color: "#4D5D6A", fontFamily: "rubik", fontSize: 17 }}
              >
                My Account
              </Text>
              <Text style={{ color: "#81909D", fontFamily: "mulish" }}>
                Make changes to your account
              </Text>
            </View>
            <View>
              <Icon
                name="chevron-right"
                style={{ fontSize: 20, color: "#ABABAB" }}
              />
            </View>
          </View>
          </TouchableOpacity>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "white",
              marginHorizontal: 15,
              paddingRight: 15,
            }}
          >
            <View
              style={{
                backgroundColor: "#4d5d6a13",
                borderRadius: 100,
                padding: 17,
                margin: 10,
              }}
            >
              <Icon2 name="lock" style={{ color: "#4D5D6A", fontSize: 18 }} />
            </View>
            <View>
              <Text
                style={{ color: "#4D5D6A", fontFamily: "rubik", fontSize: 17 }}
              >
                Dark Mode
              </Text>
              <Text style={{ color: "#81909D", fontFamily: "mulish" }}>
                Manage your device security
              </Text>
            </View>
            <View>
              <ToggleSwitch
                isOn={mode}
                onColor="#1D4ED8"
                offColor="#E8E8E8"
                // label="Example label"
                labelStyle={{ color: "black", fontWeight: "900" }}
                size="medium"
                onToggle={changeMode}
                
              />
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "white",
              marginHorizontal: 15,
              paddingRight: 15,
            }}
          >
            <View
              style={{
                backgroundColor: "#4d5d6a13",
                borderRadius: 100,
                padding: 17,
                margin: 10,
              }}
            >
              <Icon5
                name="md-shield-checkmark-outline"
                style={{ color: "#4D5D6A", fontSize: 18 }}
              />
            </View>
            <View>
              <Text
                style={{ color: "#4D5D6A", fontFamily: "rubik", fontSize: 17 }}
              >
                Two-Factor Authentication
              </Text>
              <Text style={{ color: "#81909D", fontFamily: "mulish" }}>
                Further secure your account for safety
              </Text>
            </View>
            <View>
              <Icon
                name="chevron-right"
                style={{ fontSize: 20, color: "#ABABAB",margin:10}}
              />
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "white",
              marginHorizontal: 15,
              paddingRight: 15,
            }}
          >
            <View
              style={{
                backgroundColor: "#4d5d6a13",
                borderRadius: 100,
                padding: 17,
                margin: 10,
              }}
            >
              <Icon5
                name="log-out-outline"
                style={{ color: "#4D5D6A", fontSize: 18 }}
              />
            </View>
            <View>
              <Text
                style={{ color: "#4D5D6A", fontFamily: "rubik", fontSize: 17 }}
              >
                Log out
              </Text>
              <Text style={{ color: "#81909D", fontFamily: "mulish" }}>
                Further secure your account for safety
              </Text>
            </View>
            <View>
              <Icon
                name="chevron-right"
                style={{ fontSize: 20, color: "#ABABAB",margin:10}}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // margin:15,
    marginTop: 40,
  },
  elevation: {
    elevation: 10,
    shadowColor: "#8080804b",
  },
});

//make this component available to the app
export default UserProfile;
