import { useTranslation } from 'react-i18next';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/redesigned/Text';
import { Input } from '@/shared/ui/redesigned/Input';
import { Loader } from '@/shared/ui/deprecated/Loader';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { Country, CountrySelect } from '@/entities/Country';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
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
                className={classNames(cls.ProfileCard, {}, [
                    className,
                    cls.loading,
                ])}
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
                className={classNames(cls.ProfileCard, {}, [
                    className,
                    cls.error,
                ])}
                gap="8"
                justify="center"
            >
                <Text
                    variant="error"
                    title={t('An error occurred while loading the profile')}
                    text={t('Try to reload the page')}
                    align="center"
                />
            </HStack>
        );
    }
    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <VStack
            className={classNames(cls.ProfileCard, mods, [className])}
            gap="16"
            max
        >
            {data?.avatar && (
                <HStack justify="center" max>
                    <Avatar size={180} src={data.avatar} alt={t('Avatar')} />
                </HStack>
            )}
            <Input
                className={cls.input}
                value={data?.firstname}
                label={t('Your firstname')}
                readonly={readonly}
                data-testid="ProfileCard.firstname"
                onChange={onChangeFirstname}
            />
            <Input
                className={cls.input}
                value={data?.lastname}
                label={t('Your lastname')}
                readonly={readonly}
                data-testid="ProfileCard.lastname"
                onChange={onChangeLastname}
            />
            <Input
                className={cls.input}
                value={data?.age}
                label={t('Your age')}
                readonly={readonly}
                type="number"
                data-testid="ProfileCard.age"
                onChange={onChangeAge}
            />
            <Input
                className={cls.input}
                value={data?.city}
                label={t('City')}
                readonly={readonly}
                onChange={onChangeCity}
            />
            <Input
                className={cls.input}
                value={data?.username}
                label={t('Username')}
                readonly={readonly}
                onChange={onChangeUsername}
            />
            <Input
                className={cls.input}
                value={data?.avatar}
                label={t('Avatar')}
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
