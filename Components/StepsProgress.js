//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Animated } from 'react-native';

// create a component
const StepsProgress = () => {
    return (
        <View style={styles.container}>
            <View>
                {/* <Text style={{color:'red'}}>
                    Well played
                </Text> */}
            </View>
            <Animated.View style={[StyleSheet.absoluteFill,styles.progressBar]}>
                <Animated.View style={[StyleSheet.absoluteFill, styles.progresser]}/>
            </Animated.View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // height: 100
        // backgroundColor: '#2c3e50',
    },
    progressBar: {
        // height: 2,
        flexDirection: "row",
        width: '50%',
        backgroundColor: "#81909D",
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 5
    },
    progresser:{
        backgroundColor: "#81909D",
         width:'200%'
    }
});

//make this component available to the app
export default StepsProgress;
