import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, {rejectValue: string}>(
    'users/loginByUsername',
    async (authAData, thunkAPI) => {
        try {
            const { data } = await axios.post<User>('http://localhost:8000/login', authAData);
            if (!data) {
                throw new Error();
            }
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(data));
            thunkAPI.dispatch(userActions.setAuthData(data));
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue('error');
        }
    },
);
