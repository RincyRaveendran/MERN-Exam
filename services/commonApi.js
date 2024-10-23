import axios from "axios"

export const commonApi = async(reqmethod,url,reqbody,reqheader)=>{
    const reqConfig = {
        method:reqmethod,
        url:url,
        data:reqbody,
        headers:reqheader?reqheader:{"Content-Type":"application/json"}
    }
    return await axios(reqConfig).then((result)=>{
        return result
    }).catch((err)=>{
        return err
    })
}
