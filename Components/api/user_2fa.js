import ApiManagerSec from "./ApiManagerSec";
// import React,{ useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const user_2fa = async data => {

    // const [value, setValue] = useState("")

    const getData = async () => {
        try {
          const value = await AsyncStorage.getItem("AccessToken")
          if(value !== null) {
            // setValue(value)
            const result = await ApiManagerSec("/api/v1/User/enable-2fa",{
                method:"POST",
                headers:{
                    'Content-Type':'application/json',
                    "accept":"text/plain",
                    Authentication:"Bearer "+ value
                },
                data:data
            });
            // console.log(headers)
            return result
          }
        } catch(err) {
          console.log(err)
        }
      }
      getData()
}