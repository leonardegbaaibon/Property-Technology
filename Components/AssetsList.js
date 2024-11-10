import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import { useFonts } from 'expo-font';
import { COLORS } from '../JsonData/Colors';

const AssetsList = ({navigation}) => {
    const Data = [
        {
    id: '1',
    title: 'Sell',
    selected: false,
  },
  {
    id: '2',
    title: 'Rent',
    selected: false,
  },
  {
    id: '3',
    title: 'Lease',
    selected: false,
  },
  {
    id: '4',
    title: 'Event',
    selected: false,
  },
  {
    id: '5',
    title: 'Land',
    selected: false,
  },
  {
    id: '6',
    title: 'House',
    selected: false,
  },
  {
    id: '7',
    title: 'Shop',
    selected: false,
  },
  {
    id: '8',
    title: 'Buy',
    selected: false,
  },
];
    const [items, setItems] = useState([]);
    const [select, setSelect] = useState(Data);
    const [loaded] = useFonts({
        poppins: require('../assets/fonts/Poppins-Regular.ttf'),
        ubuntu: require('../assets/fonts/Ubuntu-Regular.ttf')
      });
      
    
      const width = useWindowDimensions().width;
        
if (!loaded) {
    return null;
  }

  const handleOnpress = item => {
    const newItem = select.map(val => {
      if (val.id === item.id) {
        return {...val, selected: true};
      } 
      else {
        return val;
      }

    });
    let man = newItem.filter(city => city.selected === true);
    setSelect(newItem);
    setItems(man);
  };

  const handleProceedbtn = () => {
      if(items.length >= 5){
          // alert('proceed')
          navigation.navigate('ASlider')
      }else{
        alert('Select a list of Five assets')
      }
  }

  const handleRemoveList = high =>{
    const newItems = select.map(val => {
      if (high.id === val.id) {
        return {...val, selected: false};
      } else {
        return val;
      }
    });
    let man2 = newItems.filter(city => city.selected === !false);
    setSelect(newItems);
    setItems(man2)
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} overScrollMode="never">
      <View style={[styles.container2, {width: width - 22}]}>
        {items.map(high => {
          return (
            <View
              key={high.id}
              style={{
                alignItems: 'center',
                backgroundColor:'#bbbdc293',
                borderRadius: 5,
                // width: 60,
                paddingHorizontal: 10,
                paddingVertical: 4,
                marginHorizontal: 3,
                marginVertical: 3
              }}>
                  <View style={{display:'flex', flexDirection: 'row',}}> 
                    <Text style={{  color:COLORS.line,fontFamily: 'poppins',fontSize: 14,marginHorizontal: 10}}>{high.title}</Text>
                    <Icon
                 onPress={() => handleRemoveList(high)}
                style={{
                  height: 15,
                  marginTop: 2,
                  textAlign:'center',
                  fontSize: 17,
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: COLORS.line,
                }}
                name={'close'}
              />
              </View>
            </View>
          );
        })}
        <Text style={styles.minimum}>
          Minimum: five
        </Text>
      </View>
      <View style={[styles.container, {width: width - 27}]}>
        {select.map(item => {
          return (
            <TouchableOpacity
              style={[styles.itemContainer]}
              key={item.id}
              onPress={() => handleOnpress(item)}>
              <Text style={styles.item}>{item.title}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <TouchableOpacity style={items.length >= 5 ? styles.button1 : styles.buttoner} onPress={() => {handleProceedbtn()}}>
            <Text style={items.length >= 5 ? styles.buttonText : styles.buttonerText}>
              Proceed
            </Text>
        </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 3
  },
  container2: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor:COLORS.inputBackground,
    borderWidth: 2,
    borderRadius: 10,
    height: 170,
    borderColor:COLORS.borderColor2,
    marginVertical: 15,
    padding: 10,
    flexWrap: 'wrap',
  },
  button1:{
    backgroundColor: COLORS.proceedbtn,
    paddingVertical: 13,
    borderRadius: 10,
    marginTop: 50,
    marginBottom: 30,
    marginHorizontal: 5,
  },
  buttoner:{
    backgroundColor:COLORS.proceed,
    paddingVertical: 13,
    borderRadius: 10,
    marginTop: 50,
    marginBottom: 30,
    marginHorizontal: 5,
  },
  buttonText: {
    color:COLORS.proceedtext,
    // backgroundColor:'red',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'poppins',
    fontWeight: '600'
  },
  buttonerText: {
    color:COLORS.proceeder,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'poppins',
    fontWeight: '600'
  },
  itemContainer: {
    // backgroundColor: 'green',
    borderColor: '#bbbdc293',
    paddingHorizontal: 15,
    paddingVertical: 4,
    marginHorizontal: 4,
    marginVertical: 3,
    alignItems: 'center',
    backgroundColor:'#bbbdc293',
    borderRadius: 5,
    borderWidth: 1.5,
    // width:80
  },
  item: {
    width: 50,
    color:COLORS.line,
    fontFamily: 'poppins',
    fontSize: 14,
    textAlign: 'center',
    // paddingHorizontal:10
  },
  minimum: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    color: '#4D5D6A',
    fontFamily: 'poppins'
  }
});

export default AssetsList;
