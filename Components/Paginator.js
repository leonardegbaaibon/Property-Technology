import React from 'react';
import { View, StyleSheet, useWindowDimensions, Animated} from 'react-native';

export default Paginator = ({ data, scrollX }) =>  {

    const width = useWindowDimensions()

    return (
      <View style={{flexDirection: 'row', height: 64}}>
        {data.map((_, i) => {
            const inputRange =[(i - 1) * width.width, i * width.width, (i + 1) * width.width];

            const dotWidth = 3.5
          

            const opacity = scrollX.interpolate({
              inputRange,
              outputRange:[0.3, 1, 0.3],
              extrapolate: 'clamp'
            })

            return <Animated.View style={[styles.dot, { width: dotWidth, opacity, }]} key={i.toString()} />
        })}
      </View>
    );
  }

const styles = StyleSheet.create({
    dot:{
        height: 3.5,
        borderRadius: 5,
        backgroundColor: 'white',
        marginHorizontal: 5,
    }
});