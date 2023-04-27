import { BugButton } from 'app/providers/ErrorBoundary';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Counter from '../../../entities/Counter/ui/Counter';

const MainPage = () => {
    const { t } = useTranslation('main');
    return (
        <div>
            <BugButton />
            <h2>{t('Main page')}</h2>
            <Counter />
        </div>
    );
};

export default MainPage;
