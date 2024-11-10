import ApiManager from "./ApiManager";

export const user_currency = async () => {
    try {
        const result = await ApiManager("/api/v1/Lookup/currency",{
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