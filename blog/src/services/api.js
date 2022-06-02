import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.1.4.13:1337/'
    
})

export default api;