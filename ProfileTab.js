import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserProfile from "./Screens/UserProfile";
import ProfileNavigator from "./Screens/ProfileNavigator";
const Stack = createNativeStackNavigator();

const ProfileTab = () => {
  return (
    <Stack.Navigator initialRouteName="UserProfile">
      <Stack.Screen
        name="UserProfile"
        component={UserProfile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="ProfileNav"
        component={ProfileNavigator}
      />
    </Stack.Navigator>
  );
};

export default ProfileTab;
