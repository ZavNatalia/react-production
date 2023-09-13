import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const AdminPanelPage = () => {
    const { t } = useTranslation();
    return (
        <Page data-testid="AdminPanelPage">
            <h2>{t('Admin panel')}</h2>
        </Page>
    );
};

export default AdminPanelPage;
