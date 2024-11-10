import React from "react";
import { useState, useRef } from "react";
import { View, StyleSheet,FlatList, Animated } from "react-native";
import slides from '../JsonData/Slides'
import OnboardingItems from "../Components/OnboardingItems";
import Paginator from "../Components/Paginator";
import NextPage from "../Components/NextPage";
import { COLORS } from "../JsonData/Colors";


const Onboarding = ({navigation}) => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const scrollX = useRef(new Animated.Value(0)).current
    const slidesRef = useRef(null)
    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index)
    }).current;


    const scrollTo = () => {
        if (currentIndex < slides.length - 1) {
            slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
        }else{
            navigation.replace('GetStarted')
        }
    }
    console.log(scrollTo)
    return ( 
        <View style={styles.container}>
            <View style={{ flex: 3}}>
                <FlatList data={slides} renderItem={({item}) => <OnboardingItems item={item} />}
                horizontal
                showsHorizontalScrollIndicator={false}
                overScrollMode='never'
                pagingEnabled
                bounces={false}
                keyExtractor={(item) => item.id}
                onScroll={Animated.event([{nativeEvent: { contentOffset: { x: scrollX } } }],{
                    useNativeDriver: false,
                })}
                scrollEventThrottle={32}
                onViewableItemsChanged = {viewableItemsChanged}
                viewabilityConfig= {viewConfig}
                ref={slidesRef}
                />

            </View>
            <NextPage scrollTo={ scrollTo } percentage={(currentIndex + 1) * (100 / slides.length)} />
            <Paginator data={ slides } scrollX={ scrollX }/> 
        </View>
     );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: COLORS.backgroundColor,
        alignItems: "center",
    }
})
 
export default Onboarding;