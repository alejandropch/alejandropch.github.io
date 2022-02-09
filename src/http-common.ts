import axios from 'axios';


export default function http(){
    return axios.create({
        baseURL: 'https://alejandro-portfolio-api.herokuapp.com/api/v1',
    
    })
}