import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/redesigned/Text';
import cls from './AboutPage.module.scss';

const AboutPage = ({ className }: { className?: string }) => {
    const { t } = useTranslation('about');
    return (
        <Page
            data-testid="AboutPage"
            variant="filled"
            className={classNames(cls.AboutPage, {}, [className])}
        >
            <Text variant="accent" size="l" title={t('About us')} />
            <Text text={t('The project employs')} size="l" />
            <ul className={cls.list}>
                <li>
                    <span>{t('React')}</span>&nbsp;
                    {t('for building the user interface')}
                </li>
                <li>
                    <span>{t('TypeScript')}</span>&nbsp;
                    {t('for static typing')}
                </li>
                <li>
                    <span>{t('Webpack')}</span>&nbsp;
                    {t('for bundling and dependency management')}
                </li>
                <li>
                    <span>{t('Cypress')}</span>&nbsp;
                    {t('for end-to-end testing')}
                </li>
                <li>
                    <span>{t('Storybook')}</span>&nbsp;
                    {t('for documenting and testing components')}
                </li>
                <li>
                    <span>{t('ESLint')}</span>&nbsp;
                    {t('and Stylelint for code and style quality assurance')}
                </li>
                <li>
                    <span>{t('Babel')}</span>&nbsp;
                    {t('for transpiling modern JavaScript')}
                </li>
                <li>
                    <span>{t('Prettier')}</span>&nbsp;
                    {t('for code formatting')}
                </li>
                <li>
                    <span>{t('Husky')}</span>&nbsp;
                    {t('for pre-commit checks')}
                </li>
                <li>
                    <span>{t('Docker')}</span>&nbsp;
                    {t('for containerizing the application')}
                </li>
                <li>
                    <span>{t('Netlify')}</span>&nbsp;
                    {t('for deployment')}
                </li>
                <li>
                    <span>{t('Jest')}</span>&nbsp;
                    {t('for unit testing')}
                </li>
            </ul>
            <Text
                text={t(
                    'This structure provides a comprehensive approach to developing, testing, and deploying the application',
                )}
                size="m"
            />
        </Page>
    );
};

export default AboutPage;
