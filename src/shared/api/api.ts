import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';

export const $api = axios.create({
    baseURL: __API__,
});

$api.interceptors.request.use((config) => {
    const key = localStorage.getItem(USER_LOCALSTORAGE_KEY);
    if (config.headers && key) {
        config.headers.Authorization = key;
    }
    return config;
});
