import ApiManager from "./ApiManager";

export const user_register = async data => {
    try {
        const result = await ApiManager("/api/v1/User/register",{
            method:"POST",
            headers:{
                'content-type':'application/json',
                "accept":"text/plain",
            },
            data:data
        });
        return result
    } catch (error){
        return error.response.data

    }
}