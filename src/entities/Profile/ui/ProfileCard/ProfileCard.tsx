import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency } from 'entities/Currency/model/types/currency';
import { CurrencySelect } from 'entities/Currency';
import { Country } from 'entities/Country/model/types/country';
import { CountrySelect } from 'entities/Country';
import { HStack, VStack } from 'shared/ui/Stack';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onChangeFirstname?: (value?: string) => void;
    onChangeLastname?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency?: (value?: Currency) => void;
    onChangeCountry?: (value?: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
    } = props;
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <HStack
                className={classNames(cls.ProfileCard, {}, [className, cls.loading])}
                gap="8"
                max
                justify="center"
            >
                <Loader />
            </HStack>
        );
    }

    if (error) {
        return (
            <HStack
                className={classNames(cls.ProfileCard, {}, [className, cls.error])}
                gap="8"
                justify="center"
            >
                <Text
                    theme={TextTheme.ERROR}
                    title={t('An error occurred while loading the profile')}
                    text={t('Try to reload the page')}
                    align={TextAlign.CENTER}
                />
            </HStack>
        );
    }
    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <VStack className={classNames(cls.ProfileCard, mods, [className])} gap="16" max>
            {data?.avatar && (
                <HStack justify="center" max className={cls.avatarWrapper}>
                    <Avatar
                        src={data.avatar}
                        alt={t('Avatar')}
                    />
                </HStack>
            )}
            <Input
                className={cls.input}
                value={data?.firstname}
                placeholder={t('Your firstname')}
                readonly={readonly}
                onChange={onChangeFirstname}
            />
            <Input
                className={cls.input}
                value={data?.lastname}
                placeholder={t('Your lastname')}
                readonly={readonly}
                onChange={onChangeLastname}
            />
            <Input
                className={cls.input}
                value={data?.age}
                placeholder={t('Your age')}
                readonly={readonly}
                type="number"
                onChange={onChangeAge}
            />
            <Input
                className={cls.input}
                value={data?.city}
                placeholder={t('City')}
                readonly={readonly}
                onChange={onChangeCity}
            />
            <Input
                className={cls.input}
                value={data?.username}
                placeholder={t('Username')}
                readonly={readonly}
                onChange={onChangeUsername}
            />
            <Input
                className={cls.input}
                value={data?.avatar}
                placeholder={t('Avatar')}
                readonly={readonly}
                onChange={onChangeAvatar}
            />
            <CurrencySelect
                value={data?.currency}
                onChange={onChangeCurrency}
                readonly={readonly}
            />
            <CountrySelect
                value={data?.country}
                onChange={onChangeCountry}
                readonly={readonly}
            />
        </VStack>
    );
};
