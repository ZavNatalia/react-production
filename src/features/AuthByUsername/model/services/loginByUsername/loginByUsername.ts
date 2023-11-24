import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from '@/entities/User';
import { ThunkConfig } from '@/app/providers/StoreProvider';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    ThunkConfig<string>
>('login/loginByUsername', async (authAData, thunkAPI) => {
    const { dispatch, rejectWithValue, extra } = thunkAPI;
    try {
        const { data } = await extra.api.post<User>('/login', authAData);
        if (!data) {
            throw new Error();
        }
        dispatch(userActions.setAuthData(data));
        return data;
    } catch (e) {
        return rejectWithValue('error');
    }
});
