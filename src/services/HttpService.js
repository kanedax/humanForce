import axios from "axios";


const httpServices = (url, method, data=null, )=>{
    const tokenInfo = JSON.parse(localStorage.getItem('loginToken'))
    return axios({
        url: Config.onlineApi+url,
        method,
        data,
        headers:{
            authorization : tokenInfo ? `Bearer ${tokenInfo.token}` : null ,
            "Content-Type" : "application/json"
        }
    })
}
export default httpServices;