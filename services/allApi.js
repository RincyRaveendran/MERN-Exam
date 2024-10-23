import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"

export const registerApi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/register`,reqBody,"")
}

//api to add  details
export const addDetailsApi = async(reqbody)=>{
    return await commonApi('POST',`${serverUrl}/add-details`,reqbody)
}

//api to get all details
export const getAllDetailsApi= async(searchkey)=>{
    return await commonApi('GET',`${serverUrl}/all-details?search=${searchkey}`,"")
}