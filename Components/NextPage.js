import React,{ useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import   Svg, {G, Circle}  from 'react-native-svg';
import Icon from "react-native-vector-icons/FontAwesome";
import { COLORS } from '../JsonData/Colors';

const NextPage = ({percentage, scrollTo}) =>  {

    const size = 65;  

    const strokeWidth = 3

    const center = size / 2;

    const radius = size / 2 - strokeWidth /2;

    const circumference = 2 * Math.PI * radius;

    const progressAnimation = useRef(new Animated.Value(0)).current;

    const progressRef = useRef(null);

    const animation = (toValue) =>{
          return Animated.timing(progressAnimation, {
            toValue,
            duration: 300,
            useNativeDriver: true
            
          }).start()
    }

    useEffect(() =>{
      animation(percentage);
    }, [percentage])

    useEffect(() =>{
      progressAnimation.addListener((value) => {
        const strokeDashoffset = circumference - (circumference * value.value) / 100;

        if(progressRef?.current){
          progressRef.current.setNativeProps({
            strokeDashoffset
          })
        }
      },
      [percentage]
      )
      return () =>{
        progressAnimation.removeAllListeners()
      }
    },[]);





    return (
      <View style={styles.container}>
        <Svg width={size} height={size}>
          <G rotation="-90"  origin={center}>
            <Circle stroke="hsla(0, 0%, 100%, 0.1)" cx={center} cy={center} r={radius} strokeWidth={strokeWidth} />
            <Circle
            ref={progressRef}
            stroke={COLORS.roll}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
             />
          </G>
        </Svg>
        <TouchableOpacity onPress={scrollTo} style={styles.button}>
          <Text style={styles.iconText}>
              <Icon name='angle-right' color='white' size={25} style={styles.icon} />
          </Text>
        </TouchableOpacity>

      </View>
    );
  }

export default NextPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    button: {
        position: 'absolute',
      },
      image: {
        height: 10,
      },
    iconText: {
      backgroundColor: '#1D4ED8',
      textAlign:'center',
      borderRadius: 100,
      width: 50,
      padding: 13
    }
});