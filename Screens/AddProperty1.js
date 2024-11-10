import React, { useState, useEffect, useCallback } from "react";
import {
  Button,
  Image,
  View,
  Platform,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
// import * as ImagePicker from "expo-image-picker";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useFonts } from "expo-font";
import StepsProgress from "../Components/StepsProgress";
import * as ImagePicker from "expo-image-picker";
import * as DocumentPicker from "expo-document-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
// import { ScrollView } from "react-native-gesture-handler";
import { CheckBox } from "react-native-elements";
// import { TouchableOpacity } from "react-native-web";

// create a component
const AddProperty1 = ({ navigation }) => {
  const [image, setImage] = useState([]);
  const [Doc, setDoc] = useState([]);
  const [add, setAdd] = useState(1);
  const [addBath, setAddBath] = useState(1);
  const [addHouse, setAddHouse] = useState(1);
  const [addBed, setAddBed] = useState(1);
  const [addRoom, setAddRoom] = useState(1);
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [convertible, setConvertible] = useState(false);
  const [text, setText] = useState("DD - MM - YYYY");
  const [placeholder1, setPlaceholder1] = useState("");
  const [alert, setAlert] = useState("");

  const pickImages = async () => {
    //No premissions request is neccessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      // allowsEditing: true,
      allowsMultipleSelection: true,
      selectionLimit: 10,
      aspect: [4, 3],
      quality: 1,
    });
    let id = [];
    // console.log(result)
    if (!result.cancelled) {
      for (let i = 0; i < result.selected.length; i++) {
        id.push(result.selected[i]);
      }
      setImage(id ? id : result.selected[i]);
    }
  };

  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      presentationStyle: "fullScreen",
      type: "application/pdf",
      // type: [DocumentPicker.types.pdf]
    });

    setDoc(result.name);

    console.log(result);
  };

  const AddUp = () => {
    // if(add === 0 && add > 0){
    setAdd(add + 1);
    // }
  };
  const SubTract = () => {
    if (add !== 0) {
      setAdd(add - 1);
    }
  };

  // Bed counters

  const AddUpBed = () => {
    // if(add === 0 && add > 0){
    setAddBed(addBed + 1);
    // }
  };
  const SubTractBed = () => {
    if (addBed !== 0) {
      setAddBed(addBed - 1);
    }
  };

  // Bath counters

  const AddUpBath = () => {
    // if(add === 0 && add > 0){
    setAddBath(addBath + 1);
    // }
  };
  const SubTractBath = () => {
    if (addBath !== 0) {
      setAddBath(addBath - 1);
    }
  };

  // House counters
  const AddUpHouse = () => {
    // if(add === 0 && add > 0){
    setAddHouse(addHouse + 1);
    // }
  };
  const SubTractHouse = () => {
    if (addHouse !== 0) {
      setAddHouse(addHouse - 1);
    }
  };

  const AddUpRoom = () => {
    // if(add === 0 && add > 0){
    setAddRoom(addRoom + 1);
    // }
  };
  const SubTractRoom = () => {
    if (addRoom !== 0) {
      setAddRoom(addRoom - 1);
    }
  };

  const OnChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "windows");
    setDate(currentDate);

    let template = new Date(currentDate);
    let fDate =
      template.getDate() +
      "-" +
      (template.getMonth() + 1) +
      "-" +
      template.getFullYear();
    setText(fDate);
    console.log(fDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const removeItem = (uri) => {
    let arr = image.filter(function (item) {
      return item.uri !== uri;
    });
    setImage(arr);
  };

  const [fontsLoaded] = useFonts({
    ubuntu: require("../assets/fonts/Ubuntu-Regular.ttf"),
    poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    mulish: require("../assets/fonts/Mulish-Regular.ttf"),
    rubik: require("../assets/fonts/Rubik-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ marginTop: 40, margin: 15, flex: 1 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon
          style={{
            fontSize: 22,
            color: "#4D5D6A",
            marginVertical: 15,
            // marginHorizontal: 13,
            // marginRight: 23,
          }}
          name={"arrow-left"}
        />
        </TouchableOpacity>
        <Text style={{ color: "blue", fontFamily: "ubuntu", fontSize: 23 }}>
          Musha
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('DealsPage')}>
        <Text style={{ color: "#81909D", fontFamily: "poppins", fontSize: 18 }}>
          Skip
        </Text>
        </TouchableOpacity>

      </View>
      <Text
        style={{
          textAlign: "center",
          color: "#4D5D6A",
          fontSize: 20,
          fontFamily: "mulish",
          marginVertical: 20,
        }}
      >
        Add Properties
      </Text>
      <View style={{}}>
        <Text
          style={{
            textAlign: "center",
            fontFamily: "rubik",
            marginVertical: 15,
            fontSize: 16,
            color: "#4D5D6A",
          }}
        >
          Step 2/ <Text style={{ color: "#D1D1D1" }}>2</Text>
        </Text>
        <View style={{ marginVertical: 15 }}>{/* <StepsProgress /> */}</View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} overScrollMode="never">
        <TouchableOpacity
          style={{
            padding: 15,
            borderColor: "#9AB5FF",
            borderWidth: 1,
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            borderStyle: "dashed",
            backgroundColor: "#F7F9FB",
            borderRadius: 7,
          }}
          onPress={pickImages}
        >
          <Text style={{ color: "#1D4ED8", fontSize: 16, fontFamily: "rubik" }}>
            Upload/Choose
            <Text style={{ color: "gray", fontFamily: "rubik" }}> image</Text>
          </Text>
          <Icon
            name={"file-image"}
            style={{ marginTop: 10, fontSize: 35, color: "#4D5D6A" }}
          />
        </TouchableOpacity>
        {/* <Button title="Pick Images" onPress={pickImages} /> */}
        <View style={{ marginVertical: 1 }}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            bounces={false}
            horizontal
            data={image}
            renderItem={({ item }) => (
              <View>
                <Image
                  source={{ uri: item.uri }}
                  style={{
                    width: 150,
                    height: 150,
                    borderRadius: 10,
                    margin: 15,
                  }}
                />
                <TouchableOpacity
                  style={{
                    backgroundColor: "white",
                    marginTop: 10,
                    padding: 10,
                    position: "absolute",
                    right: 10,
                    top: 5,
                    borderRadius: 100,
                  }}
                  onPress={() => removeItem(item.uri)}
                >
                  <Icon
                    name={"close"}
                    style={{
                      fontSize: 20,
                      color: "#4D5D6A",
                    }}
                  />
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={(item) => item.uri}
            contentContainerStyle={{ marginVertical: 10, paddingBottom: 10 }}
          />
        </View>
        <TouchableOpacity
          style={{
            padding: 15,
            borderColor: "#9AB5FF",
            borderWidth: 1,
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            borderStyle: "dashed",
            backgroundColor: "#F7F9FB",
            borderRadius: 7,
          }}
          onPress={pickDocument}
        >
          <Text style={{ color: "#1D4ED8", fontSize: 16, fontFamily: "rubik" }}>
            Upload
            <Text style={{ color: "gray", fontFamily: "rubik" }}>
              {" "}
              Property Document
            </Text>
          </Text>
          <Icon
            name={"file"}
            style={{ marginTop: 10, fontSize: 35, color: "#4D5D6A" }}
          />
        </TouchableOpacity>
        <Text
          style={{ color: "#81909D", fontFamily: "rubik", marginVertical: 10 }}
        >
          In JPEG, Zip or PDF
        </Text>
        <View>
          <Text style={{ color: "red", margin: 5, padding: 5 }}>{Doc}</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ width: "50%" }}>
              <Text
                style={{
                  color: "#81909D",
                  fontFamily: "rubik",
                  marginBottom: 15,
                }}
              >
                Available(Units)
              </Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-around",
                  borderColor: "#D1D1D1",
                  borderWidth: 1,
                  borderRadius: 5,
                  paddingBottom: 8,
                  marginRight: 10,
                }}
              >
                <TouchableOpacity onPress={SubTract}>
                  <Icon
                    name={"minus"}
                    style={{ marginTop: 10, fontSize: 35, color: "#4D5D6A" }}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    fontFamily: "mulish",
                    color: "#4D5D6A",
                    fontSize: 16,
                    marginTop: 8,
                  }}
                >
                  {add}
                </Text>
                <TouchableOpacity onPress={AddUp}>
                  <Icon
                    name={"plus"}
                    style={{ marginTop: 10, fontSize: 35, color: "#4D5D6A" }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ width: "50%" }}>
              <Text
                style={{
                  color: "#81909D",
                  fontFamily: "rubik",
                  marginBottom: 15,
                }}
              >
                Unit price
              </Text>
              <View
                style={{
                  borderColor: "#D1D1D1",
                  borderWidth: 1,
                  padding: 19,
                  borderRadius: 5,
                }}
              >
                <TextInput
                  style={{
                    height: 16,
                    // backgroundColor: "#e6e6e6",
                    // padding: 10,
                    borderRadius: 5,
                    color: "#4D5D6A",
                    fontFamily: placeholder1 ? "rubik" : "mulish",
                  }}
                  placeholder="Unit Price"
                  onChangeText={(placeholder1) => setPlaceholder1(placeholder1)}
                  defaultValue={placeholder1}
                  keyboardType='numeric'
                />
              </View>
            </View>
          </View>
          <View>
            <Text
              style={{
                color: "#81909D",
                fontFamily: "rubik",
                marginVertical: 15,
              }}
            >
              Extra features
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ padding: 15 }}>
                  <View
                    style={{
                      padding: 10,
                      borderRadius: 7,
                      borderWidth: 1,
                      borderColor: "#D1D1D1",
                      width: 120,
                    }}
                  >
                    <Text style={{ color: "#81909D", fontFamily: "rubik" }}>
                      Beds
                    </Text>
                    <View
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexDirection: "row",
                      }}
                    >
                      <TouchableOpacity onPress={SubTractBed}>
                        <Icon
                          name={"minus"}
                          style={{
                            marginTop: 10,
                            fontSize: 30,
                            color: "#4D5D6A",
                          }}
                        />
                      </TouchableOpacity>
                      <Text
                        style={{
                          fontFamily: "mulish",
                          color: "#4D5D6A",
                          fontSize: 16,
                          marginTop: 8,
                        }}
                      >
                        {addBed}
                      </Text>
                      <TouchableOpacity onPress={AddUpBed}>
                        <Icon
                          name={"plus"}
                          style={{
                            marginTop: 10,
                            fontSize: 30,
                            color: "#4D5D6A",
                          }}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View
                    style={{
                      position: "absolute",
                      padding: 8,
                      backgroundColor: "#F08626",
                      borderRadius: 100,
                    }}
                  >
                    <Image
                      source={require("../assets/Image/bed.png")}
                      style={{ width: 15, height: 13 }}
                    />
                  </View>
                </View>
                <View style={{ padding: 15 }}>
                  <View
                    style={{
                      padding: 10,
                      borderRadius: 7,
                      borderWidth: 1,
                      borderColor: "#D1D1D1",
                      width: 120,
                    }}
                  >
                    <Text style={{ color: "#81909D", fontFamily: "rubik" }}>
                      Baths
                    </Text>
                    <View
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexDirection: "row",
                      }}
                    >
                      <TouchableOpacity onPress={SubTractBath}>
                        <Icon
                          name={"minus"}
                          style={{
                            marginTop: 10,
                            fontSize: 30,
                            color: "#4D5D6A",
                          }}
                        />
                      </TouchableOpacity>
                      <Text
                        style={{
                          fontFamily: "mulish",
                          color: "#4D5D6A",
                          fontSize: 16,
                          marginTop: 8,
                        }}
                      >
                        {addBath}
                      </Text>
                      <TouchableOpacity onPress={AddUpBath}>
                        <Icon
                          name={"plus"}
                          style={{
                            marginTop: 10,
                            fontSize: 30,
                            color: "#4D5D6A",
                          }}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View
                    style={{
                      position: "absolute",
                      padding: 8,
                      backgroundColor: "#F08626",
                      borderRadius: 100,
                    }}
                  >
                    <Image
                      source={require("../assets/Image/bath.png")}
                      style={{ width: 15, height: 15 }}
                    />
                  </View>
                </View>
                <View style={{ padding: 15 }}>
                  <View
                    style={{
                      padding: 10,
                      borderRadius: 7,
                      borderWidth: 1,
                      borderColor: "#D1D1D1",
                      width: 120,
                    }}
                  >
                    <Text style={{ color: "#81909D", fontFamily: "rubik" }}>
                      Sqfts
                    </Text>
                    <View
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexDirection: "row",
                      }}
                    >
                      <TouchableOpacity onPress={SubTractHouse}>
                        <Icon
                          name={"minus"}
                          style={{
                            marginTop: 10,
                            fontSize: 30,
                            color: "#4D5D6A",
                          }}
                        />
                      </TouchableOpacity>
                      <Text
                        style={{
                          fontFamily: "mulish",
                          color: "#4D5D6A",
                          fontSize: 16,
                          marginTop: 8,
                        }}
                      >
                        {addHouse}
                      </Text>
                      <TouchableOpacity onPress={AddUpHouse}>
                        <Icon
                          name={"plus"}
                          style={{
                            marginTop: 10,
                            fontSize: 30,
                            color: "#4D5D6A",
                          }}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View
                    style={{
                      position: "absolute",
                      padding: 8,
                      backgroundColor: "#F08626",
                      borderRadius: 100,
                    }}
                  >
                    <Image
                      source={require("../assets/Image/house.png")}
                      style={{ width: 15, height: 15 }}
                    />
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
          <View>
            <View style={{ width: "50%" }}>
              <Text
                style={{
                  color: "#81909D",
                  fontFamily: "rubik",
                  marginBottom: 15,
                }}
              >
                Investment Details
              </Text>
              <View
                style={{
                  borderColor: "#D1D1D1",
                  borderWidth: 1,
                  borderRadius: 5,
                  paddingBottom: 8,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontFamily: "rubik",
                    color: "#81909D",
                    marginTop: 5,
                  }}
                >
                  Expected Room
                </Text>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-around",
                    marginRight: 10,
                  }}
                >
                  <TouchableOpacity onPress={SubTractRoom}>
                    <Icon
                      name={"minus"}
                      style={{ marginTop: 10, fontSize: 35, color: "#4D5D6A" }}
                    />
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontFamily: "mulish",
                      color: "#4D5D6A",
                      fontSize: 16,
                      marginTop: 8,
                    }}
                  >
                    {addRoom}
                  </Text>
                  <TouchableOpacity onPress={AddUpRoom}>
                    <Icon
                      name={"plus"}
                      style={{ marginTop: 10, fontSize: 35, color: "#4D5D6A" }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View>
              <Text
                style={{
                  fontFamily: "poppins",
                  color: "#81909D",
                  marginVertical: 15,
                }}
              >
                Expected Completion
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: "#F2F2F2",
                  display: show === true ? "flex" : "flex",
                  borderRadius: 5,
                }}
                onPress={() => showMode("date")}
              >
                <Text
                  style={{
                    fontFamily: "poppins",
                    color: "#4D5D6A",
                    padding: 10,
                    fontSize: 15,
                  }}
                >
                  {text}
                </Text>
              </TouchableOpacity>
              {/* <TouchableOpacity style={{backgroundColor:'#F2F2F2',fontFamily:'poppins',display: show === false ? 'none' : 'flex'}} onPress={() => showMode('date')} > */}
              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={mode}
                  display="default"
                  onChange={OnChange}
                />
              )}
              {/* </TouchableOpacity> */}
              <View style={{}}>
                <CheckBox
                  title={
                    <Text style={{ fontFamily: "rubik", color: "#81909D" }}>
                      Will investment be convertible?
                    </Text>
                  }
                  textStyle={{ fontFamily: "poppins" }}
                  fontFamily="poppins"
                  containerStyle={{ marginVertical: 20 }}
                  checkedColor="#1D4ED8"
                  checked={convertible}
                  onPress={() => {
                    convertible === true
                      ? setConvertible(false)
                      : setConvertible(true);
                  }}
                />
              </View>
            </View>
            <View>
              {Doc.length === 0 ||
              image.length === 0 ||
              placeholder1 === "" ||
              text === "DD - MM - YYYY" ? (
                <TouchableOpacity
                  style={{ backgroundColor: "#e1e3e6", borderRadius: 7 }}
                >
                  <Text
                    style={{
                      fontFamily: "poppins",
                      color: "#0B2253",
                      textAlign: "center",
                      padding: 15,
                      fontSize: 20,
                    }}
                    onPress={() => setAlert("Provide the required information")}
                  >
                    Preview
                  </Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={{ backgroundColor: "#e1e3e6", borderRadius: 7 }}
                  onPress={() => navigation.navigate('AssetPreview',)}
                >
                  <Text
                    style={{
                      fontFamily: "poppins",
                      color: "#0B2253",
                      textAlign: "center",
                      padding: 15,
                      fontSize: 20,
                    }}
                  >
                    Preview
                  </Text>
                </TouchableOpacity>
              )}
              {Doc.length == 0 || image.length == 0 || placeholder1 == "" || text === "DD - MM - YYYY" ? (
                <TouchableOpacity
                  style={{
                    backgroundColor: "#1D4ED8",
                    marginVertical: 20,
                    borderRadius: 7,
                  }}
                  onPress={() => setAlert("Provide the required information")}
                >
                  <Text
                    style={{
                      fontFamily: "poppins",
                      color: "white",
                      textAlign: "center",
                      padding: 15,
                      fontSize: 20,
                    }}
                  >
                    Submit
                  </Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={{
                    backgroundColor: "#1D4ED8",
                    marginVertical: 20,
                    borderRadius: 7,
                  }}
                  onPress={() => navigation.navigate('UploadSuccess',)}
                >
                  <Text
                    style={{
                      fontFamily: "poppins",
                      color: "white",
                      textAlign: "center",
                      padding: 15,
                      fontSize: 20,
                    }}
                  >
                    Submit
                  </Text>
                </TouchableOpacity>
              )}
              <Text
                style={{
                  color: "red",
                  fontFamily: "poppins",
                  opacity:
                    Doc.length === 0 || image.length === 0 || placeholder1 === "" || text === "DD - MM - YYYY" ? 1 : 0
                }}
              >
                {alert}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

// // define your styles
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#2c3e50',
//     },
// });

//make this component available to the app
export default AddProperty1;
