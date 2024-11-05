import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { Text } from '@/shared/ui/redesigned/Text';
import { HStack } from '@/shared/ui/redesigned/Stack';
import cls from './MainPage.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import bgImage from '@/shared/assets/images/main-bg.png';

const MainPage = ({ className }: { className?: string }) => {
    const { t } = useTranslation();

    return (
        <Page
            data-testid="MainPage"
            className={classNames(cls.MainPage, {}, [className])}
        >
            <Text variant="accent" size="l" title={t('Main page')} />
            <HStack className={cls.imgWrapper}>
                <img
                    className={cls.img}
                    src={bgImage}
                    alt={t('Used technologies')}
                />
            </HStack>
        </Page>
    );
};

export default MainPage;
