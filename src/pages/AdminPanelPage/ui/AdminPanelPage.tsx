import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';

const AdminPanelPage = () => {
    const { t } = useTranslation();
    return (
        <Page>
            <h2>{t('Admin panel')}</h2>
        </Page>
    );
};

export default AdminPanelPage;
