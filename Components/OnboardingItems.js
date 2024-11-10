import React from 'react';
import { COLORS } from "../JsonData/Colors";
import { useFonts } from 'expo-font';
import { View, Text, StyleSheet, Image, useWindowDimensions, } from 'react-native';

const OnboardingItems = ({item}) => {

    const [loaded] = useFonts({
        poppins: require('../assets/fonts/Poppins-Regular.ttf'),
        ubuntu: require('../assets/fonts/Ubuntu-Regular.ttf')
      });
      const { width } = useWindowDimensions();
      
      
      if (!loaded) {
          return null;
        }


    return ( 
        <View style={[styles.container, { width }]}>
            <Image source={item.image} style={[styles.image, { width, resizeMode: 'contain'}]} />
            <View style={{flex: 0.5}}>
                <Text style={styles.title}>
                    {item.title}
                </Text>
                <Text style={styles.description}>
                    {item.description}
                </Text>
            </View>
        </View>
     );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        marginTop: 40,
    },
    image: {
        flex: 0.5,
        justifyContent: 'center',
        marginTop:100,

    },
    title: {
        fontFamily: 'poppins',
        fontSize: 22,
        marginBottom: 10,
        color: COLORS.title,
        textAlign: 'center',
        margin: 65
    },
    description: {
        fontFamily: 'poppins',
        fontWeight: '400',
        color: COLORS.text,
        textAlign: 'center',
        paddingHorizontal: 65,
    }

})
 
export default OnboardingItems