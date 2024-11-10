import React from 'react';
import { useFonts } from 'expo-font';

import { View, Text, StyleSheet, Image, TouchableOpacity,useWindowDimensions } from 'react-native';

const MoreStepsDetails = ({item}) => {

    const [loaded] = useFonts({
      poppins: require('../assets/fonts/Poppins-Regular.ttf'),
      poppins2: require('../assets/fonts/Poppins-Medium.ttf'),
      ubuntu: require('../assets/fonts/Ubuntu-Regular.ttf')
    });
    
    const width  = useWindowDimensions().width
      
      if (!loaded) {
          return null;
        }

    return ( 
        <View style={[styles.container]}>
            <TouchableOpacity style={[{flexDirection: 'row',}, { width:200}]}>
                    <Image source={item.image} style={[styles.image]} />
                    <View style={[{flex: 0.4,marginVertical: 3}]}>
                        <Text style={[styles.title, {width: width}]}>
                            {item.title}
                        </Text>
                    </View>
            </TouchableOpacity>

        </View>
     );
}
const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
        // backgroundColor:'red'
    },
    title: {
        color: '#4D5D6A',
        fontFamily: 'poppins',
        marginHorizontal: 8,
        fontSize: 18
    },
    image: {
        marginVertical:10,
        marginRight: 6,
        width: 13,
        height: 13


    }
})

export default MoreStepsDetails;