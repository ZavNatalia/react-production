import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from '@/entities/User';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { ThunkConfig } from '@/app/providers/StoreProvider';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    ThunkConfig<string>
    >(
        'login/loginByUsername',
        async (authAData, thunkAPI) => {
            const { dispatch, rejectWithValue, extra } = thunkAPI;
            try {
                const { data } = await extra.api.post<User>('/login', authAData);
                if (!data) {
                    throw new Error();
                }
                localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(data));
                dispatch(userActions.setAuthData(data));
                return data;
            } catch (e) {
                return rejectWithValue('error');
            }
        },
    );
