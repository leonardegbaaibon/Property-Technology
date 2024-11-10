import { View, Text,FlatList,ScrollView,Image,StyleSheet } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import { Animated } from "react-native";
import Icon2 from "react-native-vector-icons/SimpleLineIcons";
import { useFonts } from "expo-font";

const UpForSale = () => {

    const AnimatedLinearGradient =
    Animated.createAnimatedComponent(LinearGradient);


    const [fontsLoaded] = useFonts({
        ubuntu: require("../assets/fonts/Ubuntu-Regular.ttf"),
        poppins: require("../assets/fonts/Poppins-Regular.ttf"),
      });
    
      if (!fontsLoaded) {
        return null;
      }


  return (
    <View >
      <View
        style={{
          margin: 10,
          marginTop:0
        }}
      >
        <View style={{backgroundColor:'#F5FAFF',height:80}}>
            <Text style={{textAlign:'center',color:'#81909D',paddingVertical:6,fontFamily:'poppins',fontSize:14}}>
                Balance(Overall Sales)
            </Text>
            <Text style={{color:'#27BE63',textAlign:'center',fontFamily:'poppins',fontSize:18}}>
            ₦615,230
            </Text>
        </View>
        <AnimatedLinearGradient
          colors={["#03BFFB", "#0D8FB8"]}
          start={[0.6, 0.8]}
          end={[0.1,0.1]}
          style={[{padding:20,borderRadius:10}]}
        >
        <Image
          source={require("../assets/Image/Deals5.png")}
          style={[styles.elevation,{ width: "100%", height: 150, borderRadius: 10 }]}
        />
        <View style={{display:'flex',flexDirection:'row',justifyContent:"space-between"}}>
        <View style={{marginVertical:10}}>
            <Text style={{color:'white', fontSize:16,fontFamily:'rubik',marginVertical:8}}>
                3 Bedroom Duplex
            </Text>
            <Text style={{color:'white', fontSize:13,fontFamily:'rubik'}}>
                12 Units<Text style={{color:'white', fontSize:11}}> of 30</Text>
            </Text>
        </View>
        <View style={{marginVertical:10}}>
            <Text style={{color:'white', fontSize:16,fontFamily:'rubik',marginVertical:8}}>
                120,000<Text style={{color:'white', fontSize:11}}>/units</Text>
            </Text>
            <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                <Icon2 name="location-pin" style={{color:'white', fontSize:13}} />
                <Text style={{color:'white', fontSize:11,fontFamily:'rubik'}}>
                    Ikeja Lagos
                </Text>
            </View>
        </View>
        </View>
        </AnimatedLinearGradient>
      </View>
        <View>
            
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    elevation: {
      elevation: 20,
      shadowColor: "red",
    },
  });



export default UpForSale