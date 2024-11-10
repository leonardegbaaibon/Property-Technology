import React from "react";
import {
  View,
  Text,
  useWindowDimensions,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import MoreStepsDetails from "../Components/MoreStepsDetails";
import details from "../JsonData/FewSteps";
import { COLORS } from "../JsonData/Colors";
import { useFonts } from "expo-font";

const MoreSteps = ({ navigation }) => {
  const [loaded] = useFonts({
    poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    poppins2: require("../assets/fonts/Poppins-Medium.ttf"),
    ubuntu: require("../assets/fonts/Ubuntu-Regular.ttf"),
  });

  const width = useWindowDimensions().width;
  // const height = useWindowDimensions().height

  if (!loaded) {
    return null;
  }

  const handleSelectList = () => {
    navigation.navigate("SelectList");
  };
  return (
    <View style={[styles.container, { width }]}>
      <View style={{ marginVertical: 15 }}>
        <View
          style={[
            {
              flex: 0.4,
              flexDirection: "row",
              display: "flex",
              justifyContent: "space-between",
              marginVertical: 40,
            },
            { width: width - 50 },
          ]}
        >
          <Text
            style={{
              color: COLORS.white,
              fontSize: 28,
              fontWeight: "500",
              fontFamily: "ubuntu",
            }}
          >
            Musha
          </Text>
          <TouchableOpacity onPress={() => navigation.replace("DealsPage")}>
            <Text
              style={{
                color: "#81909D",
                fontSize: 19,
                fontWeight: "500",
                fontFamily: "poppins",
                marginVertical: 3,
              }}
            >
              Skip
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 0.07 }}>
          <Text
            style={{
              color: "#81909D",
              fontSize: 19,
              fontFamily: "poppins",
              textAlign: "center",
            }}
          >
            A few more steps.
          </Text>
        </View>
        <View style={{ flex: 0.6 }}>
          <FlatList
            data={details}
            renderItem={({ item }) => <MoreStepsDetails item={item} />}
          />
        </View>
        <TouchableOpacity style={[styles.button1]} onPress={handleSelectList}>
          <Text style={styles.buttonText}>Proceed</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  button1: {
    backgroundColor: "#1D4ED8",
    paddingHorizontal: 130,
    paddingVertical: 13,
    borderRadius: 10,
    marginBottom: 30,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontFamily: "poppins2",
    fontWeight: "600",
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
    // marginHorizontal: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MoreSteps;
