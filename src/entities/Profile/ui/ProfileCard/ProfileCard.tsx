import { useTranslation } from 'react-i18next';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/redesigned/Text';
import { Input } from '@/shared/ui/redesigned/Input';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { Country, CountrySelect } from '@/entities/Country';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';
import { Card } from '@/shared/ui/redesigned/Card';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

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
            <Card
                className={classNames('', {}, [className, cls.loading])}
                max
                variant="light"
                padding="24"
                border="roundBorder"
                gap="16"
            >
                <HStack justify="center" max>
                    <Skeleton width={180} height={180} border="50%" />
                </HStack>

                <HStack gap="16" max className={cls.inputsWrapper}>
                    <VStack gap="4" max>
                        <Skeleton width="100%" height={50} />
                        <Skeleton width="100%" height={50} />
                        <Skeleton width="100%" height={50} />
                        <Skeleton width="100%" height={50} />
                    </VStack>
                    <VStack gap="4" max>
                        <Skeleton width="100%" height={50} />
                        <Skeleton width="100%" height={50} />
                        <Skeleton width="30%" height={50} />
                        <Skeleton width="30%" height={50} />
                    </VStack>
                </HStack>
            </Card>
        );
    }

    if (error) {
        return (
            <Card
                className={classNames('', {}, [className, cls.error])}
                max
                variant="light"
                padding="24"
                border="roundBorder"
                gap="16"
            >
                <Text
                    variant="error"
                    title={t('An error occurred while loading the profile')}
                    text={t('Try to reload the page')}
                    align="center"
                />
            </Card>
        );
    }
    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <Card
            className={classNames('', mods, [className])}
            max
            variant="light"
            padding="24"
            border="roundBorder"
            gap="16"
        >
            {data?.avatar && (
                <HStack justify="center" max>
                    <Avatar size={180} src={data.avatar} alt={t('Avatar')} />
                </HStack>
            )}
            <HStack gap="16" max className={cls.inputsWrapper}>
                <VStack max gap="4">
                    <Input
                        className={cls.input}
                        value={data?.firstname}
                        label={t('Firstname')}
                        readonly={readonly}
                        data-testid="ProfileCard.firstname"
                        onChange={onChangeFirstname}
                    />
                    <Input
                        className={cls.input}
                        value={data?.lastname}
                        label={t('Lastname')}
                        readonly={readonly}
                        data-testid="ProfileCard.lastname"
                        onChange={onChangeLastname}
                    />
                    <Input
                        className={cls.input}
                        value={data?.age}
                        label={t('Age')}
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
                </VStack>
                <VStack max gap="4">
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
                        label={t('Link to the avatar')}
                        readonly={readonly}
                        onChange={onChangeAvatar}
                    />
                    <CurrencySelect
                        className={cls.select}
                        value={data?.currency}
                        onChange={onChangeCurrency}
                        readonly={readonly}
                    />
                    <CountrySelect
                        className={cls.select}
                        value={data?.country}
                        onChange={onChangeCountry}
                        readonly={readonly}
                    />
                </VStack>
            </HStack>
        </Card>
    );
};
