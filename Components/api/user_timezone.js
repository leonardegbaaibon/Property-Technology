import ApiManager from "./ApiManager";

export const user_timezone = async () => {
    try {
        const result = await ApiManager("/api/v1/User/timezone",{
            method:"GET",
            headers:{
                'content-type':'application/json',
                "accept":"text/plain",
            },
            // data:data
        });
        return result
    } catch (error){
        return error.response.data

    }
}