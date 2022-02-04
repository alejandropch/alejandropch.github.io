import axios from 'axios';


export default function http(){
    return axios.create({
        baseURL: 'http://localhost:3000/api/v1',
    
    })
}