import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const AboutPage = () => {
    const { t } = useTranslation('about');
    return (
        <Page data-testid="AboutPage">
            <h2>{t('About us')}</h2>
        </Page>
    );
};

export default AboutPage;
