import React, { useState } from "react";
import RangeSlider from "react-native-range-slider-expo";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { States } from "../Data/States";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  FlatList,
} from "react-native";
import { useFonts } from "expo-font";

// create a component
const StateList = () => {
    const [selectedId,setSelectedId] = useState(null)
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
        <View style={styles.container}>
             <FlatList
            showsHorizontalScrollIndicator={false}
            bounces={false}
            horizontal
            data={States}
            renderItem={({ item }) => (
              <View>
                <TouchableOpacity onPress={() => setSelectedId(item.id)} style={{marginHorizontal:10,padding:10, backgroundColor: item.id === selectedId ? '#E6A900':'#FFF8E5',borderRadius:20,paddingHorizontal:15}}>
                    <Text style={{color:'#E6A900',fontFamily:'mulish',color: item.id === selectedId ? '#FFF8E5':'#E6A900'}}>
                        {item.title}
                    </Text>
                </TouchableOpacity>
              </View> 
            )}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ marginVertical: 10, paddingBottom:10}}
          />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
    },
});

//make this component available to the app
export default StateList;
