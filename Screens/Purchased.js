import {
  View,
  Text,
  FlatList,
  ScrollView,
  StyleSheet,
  Image,
  useWindowDimensions,
} from "react-native";
import React from "react";
import ListItem from "../Components/ListItem";
import { SECTIONS } from "../Data/SECTIONS";
import { LinearGradient } from "expo-linear-gradient";
import { Animated } from "react-native";
import Icon from "react-native-vector-icons/Octicons";
import Icon2 from "react-native-vector-icons/SimpleLineIcons";
import Icon3 from "react-native-vector-icons/FontAwesome";
import { useFonts } from "expo-font";

const Purchased = () => {
  const height = useWindowDimensions().height;
  const width = useWindowDimensions().width;


  const AnimatedLinearGradient =
    Animated.createAnimatedComponent(LinearGradient);

  return (
    <View style={{ }}>
      <View
        style={{
          margin: 10,
        }}
      >
        <AnimatedLinearGradient
          colors={["#03BFFB", "#0D8FB8"]}
          start={[0.6, 0.8]}
          end={[0.1,0.1]}
          style={[{padding:20,borderRadius:10}]}
        >
        <Image
          source={require("../assets/Image/Deals5.png")}
          style={[styles.elevation,{ width: "100%", height: 230, borderRadius: 10 }]}
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
      <View style={{height:height - 530,width:width,margin:10,display:'flex',flexDirection:'row',justifyContent:'center'}}>
        <FlatList
          data={SECTIONS[0].data}
          //   horizontal
          overScrollMode="never"
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return <ListItem item={item} />;
          }}
          contentContainerStyle={{display:'flex',justifyContent:'space-around'}}
        />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
    elevation: {
      elevation: 20,
      shadowColor: "red",
    },
  });

export default Purchased;
