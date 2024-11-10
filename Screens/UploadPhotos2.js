import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet,ScrollView,Image,TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import * as ImagePicker from "expo-image-picker";
import { useFonts } from "expo-font";
import { useNavigation } from '@react-navigation/native'

// create a component
const UploadPhoto = ({route}) => {
    const navigation = useNavigation();

  const [image, setImage] = useState(null);

  console.log(route.params.paramKey)
      useEffect(() => {
        setImage(route.params.paramKey)
      })
  // const image = navigation.getParam('image')

    const Guildlines = [
        'Face the camera directly with your eyes and mouth clearly visible ',
        'Make sure the photo is well lit, free of glare, and in focus',
        'No photos of a photo, filters, or alterations'
    ];
    const [fontsLoaded] = useFonts({
        ubuntu: require("../assets/fonts/Ubuntu-Regular.ttf"),
        poppins: require("../assets/fonts/Poppins-Regular.ttf"),
      });
    
      if (!fontsLoaded) {
        return null;
      }


  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{fontSize: 21, color:'#1D4ED8',fontFamily: 'ubuntu', marginTop: 15}}>
            Musha
        </Text>
        <Icon name={"close"} style={{marginTop: 10, fontSize: 25, color:'#1D4ED8'}} />
      </View>
      <View>
        <Text style={{color:'#0B2253',fontStyle: 'normal',fontSize: 20,fontFamily: 'poppins',marginTop: 10}}>
            Take your profile photo
        </Text>
        <Text style={{color: '#061E38', fontFamily: 'poppins',fontSize: 14, marginVertical:10}}>
            Your profile photo helps people recognize you. Please note
            that once you submit your profile photo for review it cannot be changed.
        </Text>
      </View>
      <View style={{marginVertical:20}}>
      {Guildlines.map((steps, index) => <View style={styles.guidelines} key={steps}> 
      <Text style={{color:'#4D5D6A',fontFamily: 'poppins',fontSize:14}}>
         {index + 1}.
      </Text>
      <Text style={{color:'#4D5D6A',fontFamily: 'poppins',fontSize:14, paddingHorizontal: 5}}>
         {steps}
      </Text>
      </View>)}
      </View>
      <View style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
      </View>
      <View style={{marginVertical: 20}}>
        <TouchableOpacity style={{backgroundColor:'#1D4ED8',padding: 15,marginVertical: 20, borderRadius: 10,paddingHorizontal:20}} onPress={() => navigation.navigate('MoreSteps')}>
            <Text style={{textAlign:'center',fontSize: 18, color:'white', fontFamily:'poppins'}}>
                Upload
            </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    margin: 15
  },
  guidelines:{
    display: 'flex',
    flexDirection: 'row',
    marginVertical:1
  }
});

//make this component available to the app
export default UploadPhoto;
