import React from 'react';
import { View, Text,StyleSheet, useWindowDimensions,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AssetsList from '../Components/AssetsList';
import { useFonts } from 'expo-font';
import { COLORS } from '../JsonData/Colors';

const SelectList = ({navigation}) => {

    const [loaded] = useFonts({
        poppins: require('../assets/fonts/Poppins-Regular.ttf'),
        ubuntu: require('../assets/fonts/Ubuntu-Regular.ttf')
      });
      const width = useWindowDimensions().width
        
        
        if (!loaded) {
            return null;
          }
    const handleMoresteps = () => {
        navigation.goBack()
    }

    return (
      <View style={[styles.container, {width: width}]}>
        <View style={[{ alignItems: 'center',flex: 0.15, display: 'flex',flexDirection: 'row',justifyContent: 'space-around'},{width: width}]}>
            <TouchableOpacity>
                    <Icon
                            style={{
                            marginTop: 2,
                            textAlign:'center',
                            fontSize: 27,
                            justifyContent: 'center',
                            alignItems: 'center',
                            color:COLORS.arrow,
                            }}
                            name={'arrow-left'}
                            onPress={handleMoresteps}
                        />
            </TouchableOpacity>
            <Text style={{color:COLORS.white,fontFamily: 'ubuntu',fontSize: 30,marginHorizontal: 90,}}>
                Musha
            </Text>
            <TouchableOpacity onPress={() => navigation.replace('DealsPage')}>
                <Text style={{color:COLORS.text,fontFamily: 'poppins',fontSize:16}}>
                    Skip
                </Text>
            </TouchableOpacity>
        </View>
        <View style={{flex: 0.18}}>
            <Text style={{color:COLORS.question, textAlign: 'center',fontFamily: 'poppins', fontSize: 14}}>
                Answer A Few Questions
            </Text>
            <Text style={[{color:COLORS.arrow,textAlign: 'center',marginHorizontal: 45,fontFamily: 'poppins', fontSize: 25,marginVertical: 10}, {width: width - 100} ]}> 
                Select A List of Assets do you want to buy 
            </Text>
        </View>
        <View style={styles.assets} >
            <View style={{backgroundColor:COLORS.line,height: 4, borderRadius: 20,marginVertical: 20}} />
         <AssetsList style={styles.items} navigation={navigation} />
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.backgroundColor,
        marginTop: 10,
    },
    assets:{
        flex:0.77,
        marginHorizontal:10
    },
})



export default SelectList;