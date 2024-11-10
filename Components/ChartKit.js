import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import {
  LineChart,
} from "react-native-chart-kit";
import { useFonts } from "expo-font";


const MyLineChart = () => {

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
<View>
  <View style={{display:'flex',justifyContent:'space-between',alignItems:'center',flexDirection:'row',marginVertical:10}}>
    <View>
      <Text style={{color:'#4D5D6A',fontFamily:'mulish',fontSize:20}}>
      Asset Activity
      </Text>
      <Text style={{color:'#81909D',fontSize:15,fontFamily:'mulish',}}>
      April 8, 2022, 12:41 PM
      </Text>
    </View>
    <View style={{padding:15,borderWidth:1,borderRadius:10,borderColor:'#1D4ED8',paddingHorizontal:50}}>
      <Text style={{color:'#1D4ED8',fontFamily:'rubik'}}>
        Daily
      </Text>
    </View>
  </View>
  <LineChart
    data={{
      labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat"],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={220}
    yAxisLabel="$"
    yAxisSuffix="k"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
        backgroundColor: "#e26a00",
        backgroundGradientFrom: "#F5F5F5",
        // backgroundGradientFromOpacity: 0.5,
        backgroundGradientTo: "#F5F5F5",
        backgroundGradientToOpacity: 0,
        color: (opacity = 1) => `rgb(185, 207, 249, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        stroke: "#2563EB",
        barPercentage: 0.5,
        useShadowColorFromDataset: false, // optional
      labelColor: (opacity = 1) => `rgb(109, 122, 152, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#2563EB"
      },
      propsForHorizontalLabels:{
        fontFamily:'rubik'
      }
    }}
    bezier
    style={{
      borderRadius: 16,
      borderWidth:1,
      borderColor:'#D5D5D5'
    //   backgroundColor:'grey'
    }}
  />
</View>
  );
};

const ChartKit = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <MyLineChart />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChartKit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'white',
    // justifyContent: "center",
    // alignItems: "center",
    textAlign: "center",
    padding: 10,
  },
  header: {
    textAlign: "center",
    fontSize: 18,
    padding: 16,
    marginTop: 16,
  },
});
