import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserProfile from "./Screens/UserProfile";
import DealsScreen from "./Screens/DealsScreen";
import MarketScreen from "./Screens/MarketScreen";
import PreferredScreen from "./Screens/PreferredScreen";
import RoundupScreen from "./Screens/RoundupScreen";
import DealsPage from "./Screens/DealsPage";
const Stack = createNativeStackNavigator();

const HomeTab = () => {
  return (
    <Stack.Navigator initialRouteName="DealsPage">
        <Stack.Screen
        name="DealsPage"
        component={DealsPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DealsScreen"
        component={DealsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="PreferredScreen"
        component={PreferredScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="RoundupScreen"
        component={RoundupScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeTab;
