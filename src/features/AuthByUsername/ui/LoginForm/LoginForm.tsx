import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/redesigned/Button';
import { Input } from '@/shared/ui/redesigned/Input';
import { Text } from '@/shared/ui/redesigned/Text';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
    onClose: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className, onClose }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch],
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );

    const onCancelClick = () => {
        onClose();
    };

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onClose();
        }
    }, [dispatch, onClose, password, username]);

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <DynamicModuleLoader reducers={initialReducers}>
            <VStack
                gap="8"
                className={classNames(cls.LoginForm, {}, [className])}
            >
                <Text
                    className={cls.title}
                    title={t('Authorization form')}
                    variant="accent"
                />
                {error && (
                    <Text
                        className={cls.error}
                        text={t('Invalid username or password')}
                        variant="error"
                    />
                )}
                <Input
                    type="text"
                    className={cls.input}
                    label={t('Username')}
                    placeholder={t('Username')}
                    direction="column"
                    autofocus
                    value={username}
                    onChange={onChangeUsername}
                />
                <Input
                    type="text"
                    className={cls.input}
                    label={t('Password')}
                    placeholder={t('Password')}
                    direction="column"
                    value={password}
                    onChange={onChangePassword}
                />
                <HStack max justify="end" gap="8">
                    <Button
                        variant="clear"
                        disabled={isLoading}
                        onClick={onCancelClick}
                    >
                        {t('Cancel')}
                    </Button>
                    <Button
                        variant="filled"
                        disabled={isLoading}
                        onClick={onLoginClick}
                    >
                        {t('Log in')}
                    </Button>
                </HStack>
            </VStack>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
