import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page/Page';
import cls from './ForbiddenPage.module.scss';

interface ForbiddenPageProps {
    className?: string
}

export const ForbiddenPage = ({ className }: ForbiddenPageProps) => {
    const { t } = useTranslation();
    return (
        <Page className={classNames(cls.ForbiddenPage, {}, [className])}>
            {t('You do not have access to this page')}
        </Page>
    );
};
