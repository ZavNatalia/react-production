import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

const AboutPage = () => {
    const { t } = useTranslation('about');
    return (
        <Page>
            <h2>{t('About us')}</h2>
        </Page>
    );
};

export default AboutPage;
