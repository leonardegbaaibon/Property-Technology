// import liraries
import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useFonts } from "expo-font";
// import { userCorp_requiredDoc } from '../Components/api/userCorp_requiredDoc'; // commented out the import
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';

const UserUploadDoc = ({ navigation }) => {
    const [requiredDoc, setRequiredDoc] = useState([]);
    const [selectedId, setSelectedId] = useState(null);

    // Dummy data to use in place of `userCorp_requiredDoc` data
    const dummyData = [
        { id: '1', name: 'Profile Picture' },
        { id: '2', name: 'Owner’s ID/License' },
        { id: '3', name: 'Company’s Document' },
        { id: '4', name: 'Proof of Address' }
    ];

    useEffect(() => {
        // Setting dummy data directly instead of making an API call
        setRequiredDoc(dummyData);
    }, []);

    const [fontsLoaded] = useFonts({
        ubuntu: require("../assets/fonts/Ubuntu-Regular.ttf"),
        poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <View style={{ marginTop: 10 }}>
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
                        <TouchableOpacity
                            onPress={() => setSelectedId(item.id)}
                            style={{
                                marginHorizontal: 10,
                                padding: 10,
                                backgroundColor: item.id === selectedId ? '#E6A900' : '#FFF8E5',
                                borderRadius: 20,
                                paddingHorizontal: 15
                            }}
                        >
                            <Text style={{
                                color: item.id === selectedId ? '#FFF8E5' : '#E6A900',
                                fontFamily: 'poppins'
                            }}>
                                {item.name}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.ownerPhotos} onPress={() => { if (item.name === "Profile Picture") { navigation.navigate('UploadPhoto') } }}>
                            <View style={styles.photos}>
                                {/* <Image source={require('../assets/Image/image.png')} style={{ width: 30, height: 30, marginTop: 10 }} /> */}
                                <Image source={require('../assets/Image/file-text.png')} style={{ width: 20, height: 20, marginTop: 10 }} />
                                <View style={{ flex: 0.75 }}>
                                    <Text style={{ fontFamily: 'poppins', color: '#061E38', fontSize: 16 }}>
                                        {item.name}
                                    </Text>
                                    <Text style={{ fontFamily: 'poppins', color: '#81909D' }}>
                                        Recommended next step
                                    </Text>
                                </View>
                                <Icon name={"chevron-right"} style={{ marginTop: 10, fontSize: 25 }} />
                            </View>
                        </TouchableOpacity>
                    </View>
                )}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ marginVertical: 10, paddingBottom: 10 }}
            />
            <View style={{ position: 'absolute', bottom: 10, width: '100%' }}>
                <TouchableOpacity style={styles.completeBtn} disabled>
                    <Text style={{ color: 'white', textAlign: 'center', fontSize: 16, fontFamily: 'poppins' }}>
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
    title: {
        fontSize: 32,
        color: '#1D4ED8',
        fontFamily: 'ubuntu'
    },
    steps: {
        fontSize: 14.5,
        color: '#0B2253',
        marginTop: 20,
        marginBottom: 3,
        fontFamily: 'poppins'
    },
    steps2: {
        fontSize: 13.4,
        color: '#0B2253',
        fontFamily: 'poppins'
    },
    ownerPhotos: {
        borderBottomWidth: 1,
        borderBottomColor: '#D1D1D1',
        marginBottom: 10
    },
    photos: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10
    },
    completeBtn: {
        borderRadius: 5,
        backgroundColor: 'rgb(201, 201, 250)',
        padding: 15,
        paddingHorizontal: 20
    }
});

// make this component available to the app
export default UserUploadDoc;
