import { useState, useEffect } from 'react';
// import axios from "axios";
import axios from 'axios';

const useFetch = (url) => {
    const [data1, setData] = useState([]);

  useEffect(() => {
         axios.get(url,
         {
          headers: {
            'accept': 'text/plain',
            "content-type":"application/json; charset=utf-8", 
          }
         })
          .then((res) => {
            let info = [];
            for(let i = 0; i < res.data.length; i++){
              info.push(res.data[i]);
              console.log(res)

            }
                setData(info)
                // console.log(info)
          })
          .catch(err => {
                console.warn(err)
          })
},[url])


  
  return{data1}
}
 
 
export default useFetch;