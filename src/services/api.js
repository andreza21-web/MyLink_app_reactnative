import axios from 'axios';



//Key b5aef686377a44e46ab5ede4bee0b8092bd18f0e
//base url: https://api-ssl.bitly.com/v4/

export const Key =  'b5aef686377a44e46ab5ede4bee0b8092bd18f0e';

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4/',
    headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Key}`
    }

})

export default api;