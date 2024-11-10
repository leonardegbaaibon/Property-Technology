import ApiManagerSec from "./ApiManagerSec";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const userCorp_requiredDoc= async () => {
    const getData = async () => {
        try {
          const value = await AsyncStorage.getItem("AccessToken")
          if(value !== null) {
            // setValue(value)
            const result = await ApiManagerSec("/api/v1/User/verification-required-documents",{
                method:"GET",
                headers:{
                    'Content-Type':'application/json',
                    "accept":"text/plain",
                    Authorization:"Bearer "+ value
                },
                // data:data
              });
              return result
              // console.log(result.data.data.documents[0])
          }
        } catch(err) {
          console.log(err)
        }
      }
      getData()
}