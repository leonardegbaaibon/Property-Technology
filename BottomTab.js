import * as React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon3 from "react-native-vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import DealsPage from "./Screens/DealsPage";
import MarketScreen from "./Screens/MarketScreen";
import ProfileTab from "./ProfileTab";
import HomeTab from "./HomeTab";
// import { useFonts } from "expo-font";

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  const [fontsLoaded] = useFonts({
    ubuntu: require("./assets/fonts/Ubuntu-Regular.ttf"),
    poppins: require("./assets/fonts/Poppins-Regular.ttf"),
    mulish: require("./assets/fonts/Mulish-Regular.ttf"),
    rubik: require("./assets/fonts/Rubik-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let iconName2;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Market") {
            iconName = focused ? "basket" : "basket-outline";
          } else if (route.name === "Profile") {
            iconName2 = focused ? "user" : "user-o";
          }

          // You can return any component that you like here!
          return (
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                // paddingVertical:20
              }}
            >
              <Icon2 name={iconName} size={size} color={color} />
              <Icon3 name={iconName2} size={size} color={color} />
            </View>
          );
          // return <Icon2 name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#1D4ED8",
        tabBarInactiveTintColor: "#BEBEBE",
        tabBarLabelStyle: {
          fontSize: 15,
          fontFamily: "mulish",
        },
      })}
      initialRouteName="Home"
    >
      <Tab.Screen
        options={{ headerShown: false }}
        name="Home"
        component={HomeTab}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Market"
        component={MarketScreen}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Profile"
        component={ProfileTab}
      />
    </Tab.Navigator>
  );
}
