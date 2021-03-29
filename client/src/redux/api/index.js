import axios from "axios";

const BASE_API = 'http://localhost:4000/api'

export const getCategory = () => {
    return axios({
        method: 'GET',
        withCredentials: true,
        url: `${BASE_API}/category`
    })
    .then(res => {
        console.log(res)
        return res.data
    })
    .catch(err => {
        throw err.response.data
    })
}