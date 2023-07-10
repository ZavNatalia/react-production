import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <Page>
            <h2>{t('Main page')}</h2>
        </Page>
    );
};

export default MainPage;
