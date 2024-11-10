import React, { useState, useRef, useCallback } from "react";
import { View, Text, TouchableOpacity, KeyboardAvoidingView, ScrollView, useWindowDimensions, StyleSheet } from "react-native";
import CompanyAccount from "../Components/CompanyAccount";
import UserAccount from "../Components/UserAccount";
import LottieView from "lottie-react-native";
import { useFonts } from "expo-font";

const CreateAccount = ({ navigation }) => {
  const [xvalue, setXvalue] = useState(0);
  const [checker, setChecker] = useState(true);
  const listRef = useRef(null);
  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;

  const [fontsLoaded] = useFonts({
    ubuntu: require("../assets/fonts/Ubuntu-Regular.ttf"),
    poppins: require("../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const handleScroll = useCallback((event) => {
    const logx = event.nativeEvent.contentOffset.x;
    setXvalue(logx);
  }, []);

  return (
    <View>
      <View
        style={{
          position: "absolute",
          height: height + 100,
          width: width + 100,
          backgroundColor: "#0000001e",
          zIndex: 99,
          display: checker ? 'none' : 'flex',
        }}
      >
        <LottieView
          source={require("../assets/Linear_loader2.json")}
          style={{ height: 200, width: 300, alignSelf: 'center', marginTop: 250 }}
          autoPlay
          loop
        />
      </View>
      
      <View style={styles.container}>
        <KeyboardAvoidingView>
          <View style={{ marginHorizontal: 15 }}>
            <Text style={styles.title}>Musha</Text>
            <Text style={styles.title2}>Create Your Account</Text>
            <Text style={styles.title3}>Let's Get Started.</Text>
            <View style={styles.account}>
              <TouchableOpacity
                style={{
                  borderBottomColor: xvalue < 180 ? "blue" : "#81909d10",
                  borderBottomWidth: 2,
                  paddingHorizontal: 37,
                }}
                onPress={() => listRef.current.scrollTo({ x: 0, animated: true })}
              >
                <Text style={{ fontFamily: "poppins", color: xvalue < 180 ? "blue" : "#81909D" }}>User account</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  borderBottomColor: xvalue >= 180 ? "blue" : "#81909d10",
                  borderBottomWidth: 2,
                  paddingHorizontal: 30,
                }}
                onPress={() => listRef.current.scrollTo({ x: width, animated: true })}
              >
                <Text style={{ fontFamily: "poppins", color: xvalue >= 180 ? "blue" : "#81909D" }}>Company account</Text>
              </TouchableOpacity>
            </View>
          </View>
          
          <ScrollView overScrollMode="never" showsVerticalScrollIndicator={false} style={{ height: height - 150 }}>
            <ScrollView
              overScrollMode="never"
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              ref={listRef}
              onScroll={handleScroll}
              scrollEventThrottle={16}
              style={{ height: height + 150 }}
            >
              <ScrollView style={{ width: width - 30, marginHorizontal: 15, height: height + 100 }} showsVerticalScrollIndicator={true}>
                <UserAccount navigation={navigation} handleMoreStep={setChecker} />
              </ScrollView>
              <View style={{ width: width - 30, marginHorizontal: 15 }}>
                <CompanyAccount navigation={navigation} handleMoreStep={setChecker} />
              </View>
            </ScrollView>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginTop: 45 },
  title: { fontFamily: "ubuntu", color: "#1D4ED8", fontSize: 32 },
  title2: { fontFamily: "poppins", color: "#0B2253", fontSize: 24, marginTop: 10 },
  title3: { fontFamily: "poppins", color: "#81909D", fontSize: 14 },
  account: { flexDirection: "row", justifyContent: "space-around", marginTop: 10, marginBottom: 15 },
});

export default CreateAccount;
