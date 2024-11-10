// import ApiManager from "./ApiManager";
// // import React,{ useState } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// export const user_confirmation = async data => {

  const [value, setValue] = useState("")

    const getData = async () => {
        try {
          const value = await AsyncStorage.getItem("AccessToken")
          if(value !== null) {
            // setValue(value)
            const result = await ApiManager("/api/v1/User/initiate-account-confirmation",{
              method:"POST",
              headers:{
                  'Content-Type':'application/json',
                  "Authorization":"Bearer " +value
              },
              data:data
          });
          alert(value)
          return result
          }
        } catch(e) {
          console.log(e)
        }
      }
      getData()

//     // try {
//     //     const result = await ApiManager("/api/v1/User/initiate-account-confirmation",{
//     //         method:"POST",
//     //         headers:{
//     //             'content-type':'application/json',
//     //             "accept":"text/plain",
//     //             "Authoriztion":Bearer +value
//     //         },
//     //         data:data
//     //     });
//     //     return result
//     // } catch (error){
//     //     return error.response.data

//     // }
// }
