import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-json-server.typicode.com/JelenaVucetic/jsonfile'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

// instance.interceptors.request...

export default instance;