import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { Text } from '@/shared/ui/redesigned/Text';

const AdminPanelPage = () => {
    const { t } = useTranslation();
    return (
        <Page data-testid="AdminPanelPage" variant="filled">
            <Text title={t('Admin panel')} variant="accent" size="l" />
        </Page>
    );
};

export default AdminPanelPage;
