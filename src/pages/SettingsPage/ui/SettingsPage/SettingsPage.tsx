import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text } from '@/shared/ui/redesigned/Text';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './SettingsPage.module.scss';
import { Page } from '@/widgets/Page';

interface SettingsPageProps {
    className?: string;
}

const SettingsPage = memo((props: SettingsPageProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <Page
            data-testid="SettingsPage"
            variant="filled"
            className={classNames(cls.SettingsPage, {}, [className])}
        >
            <Text title={t('User settings')} size="l" variant="accent" />
        </Page>
    );
});

export default SettingsPage;
