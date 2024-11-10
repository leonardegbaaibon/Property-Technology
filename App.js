import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BottomTab from "./BottomTab";
import Onboarding from "./Screens/Onboarding";
import GetStarted from "./Screens/GetStarted";
import CreateAccount from "./Screens/CreateAccount";
import OtpScreen from "./Screens/OtpScreen";
import OtpScreen2 from "./Screens/OtpScreen2";
import ContactPerson from "./Screens/ContactPersonScreen";
import UserUploadDoc from "./Screens/UserUploadDoc";
import LoginScreen from "./Screens/LoginScreen";
import ChooseAction from "./Screens/ChooseAction";
import AddProperty from "./Screens/AddProperty";
import AddProperty1 from "./Screens/AddProperty1";
import AssetPreview from "./Screens/AssetPreview";
import UploadSuccess from "./Screens/UploadSuccess";
import MoreSteps from "./Screens/MoreSteps";
import CameraMain from "./Screens/CameraMain";
import SelectList from "./Screens/SelectList";
import CountryState from "./Screens/CountryState";
import Company from "./Screens/Company";
import UploadPhoto from "./Screens/UploadPhoto";
import UploadPhotos2 from "./Screens/UploadPhotos2";
import PreferredScreen from "./Screens/PreferredScreen";
import RoundupScreen from "./Screens/RoundupScreen";
import MarketScreen from "./Screens/MarketScreen";
import UserProfile from "./Screens/UserProfile";
import ChangePasswordScreen from "./Screens/ChangePasswordScreen";
import EachAssetScreen from "./Screens/EachAssetScreen";
import Details from "./Screens/Details";
import SavedAssets from "./Screens/SavedAssets";
import Gateway from "./Screens/Gateway";
import { LocaleProvider } from "./localeContext";

const Stack = createStackNavigator();

export default function App() {
  return (
    <LocaleProvider> 
      <NavigationContainer>
        <View style={styles.container}>
          <Stack.Navigator initialRouteName="Onboarding">
            <Stack.Screen
              options={{ headerShown: false }}
              name="Onboarding"
              component={Onboarding}
            />
          <Stack.Screen
            options={{ headerShown: false }}
            name="GetStarted"
            component={GetStarted}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="CreateAccount"
            component={CreateAccount}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="OtpScreen"
            component={OtpScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="OtpScreen2"
            component={OtpScreen2}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="ContactPerson"
            component={ContactPerson}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="UploadDocs"
            component={UserUploadDoc}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="LoginScreen"
            component={LoginScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="ChooseAction"
            component={ChooseAction}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="AddProperty"
            component={AddProperty}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="AddProperty1"
            component={AddProperty1}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="AssetPreview"
            component={AssetPreview}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="UploadSuccess"
            component={UploadSuccess}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="DealsPage"
            component={BottomTab}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="MoreSteps"
            component={MoreSteps}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="CameraMain"
            component={CameraMain}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="SelectList"
            component={SelectList}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="CountryState"
            component={CountryState}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Company"
            component={Company}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="UploadPhoto"
            component={UploadPhoto}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="UploadPhotos2"
            component={UploadPhotos2}
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
          <Stack.Screen
            options={{ headerShown: false }}
            name="MarketScreen"
            component={MarketScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="UserProfile"
            component={UserProfile}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="ChangePassword"
            component={ChangePasswordScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="BottomTab"
            component={BottomTab}  // Again, BottomTab must handle navigation correctly
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="EachAssetScreen"
            component={EachAssetScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Details"
            component={Details}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="SavedAssets"
            component={SavedAssets}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Gateway"
            component={Gateway}
          />
          </Stack.Navigator>
          <StatusBar animated={true} backgroundColor="#1D4ED8" barStyle="white" />
        </View>
      </NavigationContainer>
    </LocaleProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});