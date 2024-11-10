//import liraries
import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity,FlatList } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
// import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useFonts } from "expo-font";
import { userCorp_requiredDoc } from '../Components/api/userCorp_requiredDoc';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';
// imoport axios

// create a component
const Company = ({ navigation }) => {
    const [requiredDoc,setRequiredDoc] = useState([])
    const [selectedId,setSelectedId] = useState(null)

    useEffect(() => {
        getData();
    },[])

    const getData = async () => {
        try {
          const value = await AsyncStorage.getItem("AccessToken");
          if (value !== null) {
            // console.warn(value);
            var authenticate = "Bearer " + value;

            var config = {
              method: "GET",
              url: "https://mushaapp.somee.com/api/v1/User/verification-required-documents",
              headers: {
                accept: "text/plain",
                Authorization: authenticate,
                "Content-Type": "application/json",
              },
            //   data: data,
            };

            axios(config)
              .then(function (response){
                console.log(response.data.data.documents);
                setRequiredDoc(response.data.data.documents)
              })
              .catch(function (error) {
                console.log(error);
              });
          }
        } catch (e) {
          console.warn(e);
        }
      };
    //   getData();



    const [fontsLoaded] = useFonts({
        ubuntu: require("../assets/fonts/Ubuntu-Regular.ttf"),
        poppins: require("../assets/fonts/Poppins-Regular.ttf"),
      });
    

      if (!fontsLoaded) {
        return null;
      }


    return (
        <View style={styles.container}>
            <View style={{marginTop: 10}}>
                <Text style={styles.title}>Musha</Text>
                <Text style={styles.steps}>Required steps</Text>
                <Text style={styles.steps2}>Here's what you need to do to set up your account</Text>
            </View>
            <FlatList
            showsVerticalScrollIndicator={false}
            bounces={false}
            vertical
            data={requiredDoc}
            renderItem={({ item }) => (
              <View>
                {/* <TouchableOpacity onPress={() => setSelectedId(item.id)} style={{marginHorizontal:10,padding:10, backgroundColor: item.id === selectedId ? '#E6A900':'#FFF8E5',borderRadius:20,paddingHorizontal:15}}>
                    <Text style={{color:'#E6A900',fontFamily:'poppins',color: item.id === selectedId ? '#FFF8E5':'#E6A900'}}>
                        {item.name}
                    </Text>
                </TouchableOpacity> */}
                <TouchableOpacity style={styles.ownerPhotos}  onPress={() => {if(item.name === "Profile Picture"){navigation.navigate('UploadPhoto')}}}>
                    <View style={styles.photos}>
                        <Image source={require('../assets/Image/image.png')} style={{width: 30, height: 30, marginTop: 10}} />
                        <View style={{flex: 0.75}}>
                            <Text style={{fontFamily:'poppins', color: '#061E38', fontSize: 16}}>
                                {item.name}
                            </Text>
                            <Text style={{fontFamily:'poppins',color:'#81909D'}}>
                                Recommended next step
                            </Text>
                        </View>
                        <Icon name={"chevron-right"} style={{marginTop: 10, fontSize: 25}} />
                    </View>
                </TouchableOpacity>
              </View> 
            )}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ marginVertical: 10, paddingBottom:10}}
          />
            {/* <View style={{marginTop: 100}}>
                <TouchableOpacity style={styles.ownerPhotos}  onPress={() => navigation.navigate('UploadPhoto')}>
                    <View style={styles.photos}>
                        <Image source={require('../assets/Image/image.png')} style={{width: 30, height: 30, marginTop: 10}} />
                        <View style={{flex: 0.75}}>
                            <Text style={{fontFamily:'poppins', color: '#061E38', fontSize: 16}}>
                                Owner's Photo
                            </Text>
                            <Text style={{fontFamily:'poppins',color:'#81909D'}}>
                                Recommended next step
                            </Text>
                        </View>
                        <Icon name={"chevron-right"} style={{marginTop: 10, fontSize: 25}} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ownerId}>
                    <View style={styles.id}>
                        <Image source={require('../assets/Image/file-text.png')} style={{width: 30, height: 30,marginTop: 10 }} />
                        <View style={{ float:'left',flex: 0.75}}>
                            <Text style={{fontFamily:'poppins', color: '#061E38',fontSize: 16}}>
                            Owner's ID/License
                            </Text>
                            <Text style={{fontFamily:'poppins',color:'#81909D'}}>
                                Get started
                            </Text>
                        </View>
                        <Icon name={"chevron-right"} style={{marginTop: 10, fontSize: 25}} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ownerDoc}>
                    <View style={styles.doc}>
                        <Image source={require('../assets/Image/file-text.png')} style={{width: 30, height: 30, marginTop: 10}} />
                        <View style={{position: 'relative', margin:'auto'}} >
                            <Text style={{fontFamily:'poppins', color: '#061E38',fontSize: 16}}>
                                Company's Document
                            </Text>
                            <Text style={{fontFamily: 'poppins',color:'#81909D'}}>
                                Upload Registration documents
                            </Text>
                        </View>
                        <Icon name={"chevron-right"} style={{marginTop: 10, fontSize: 25}} />
                    </View>
                </TouchableOpacity>
            </View> */}
            <View style={{position: 'absolute', bottom: 10, width: '100%'}}>
                <TouchableOpacity style={styles.completeBtn} disabled>
                    <Text style={{color: 'white',textAlign:'center',fontSize: 20,fontFamily: 'poppins'}}>
                        Complete signup
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 25,
        marginTop: 30,
    },
    title:{
        fontSize: 32,
        color: '#1D4ED8',
        fontFamily: 'ubuntu'
    },
    steps:{
        fontSize: 14.5,
        // fontWeight: '800',
        color: '#0B2253',
        marginTop: 20,
        marginBottom: 3,
        fontFamily: 'poppins'
    },
    steps2:{
        fontSize: 13.4,
        color: '#0B2253',
        fontFamily: 'poppins'
    },
    ownerPhotos:{
        borderBottomWidth: 1,
        borderBottomColor: '#D1D1D1',
        marginBottom: 10
    },
    ownerId:{
        borderBottomWidth: 1,
        borderBottomColor: '#D1D1D1',
        marginBottom: 10

    },
    ownerDoc:{
        borderBottomWidth: 1,
        borderBottomColor: '#D1D1D1',
        marginBottom: 10

    },
    photos:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10
        // backgroundColor: 'red'
    },
    id:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10
    },
    doc:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10
    },
    completeBtn:{
        borderRadius: 5,
        backgroundColor: 'rgb(201, 201, 250)',
        // textAlign: 'center'
        padding: 15,
        paddingHorizontal:20
    }
});

//make this component available to the app
export default Company;
