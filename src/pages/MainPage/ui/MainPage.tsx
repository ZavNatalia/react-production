import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h2>{t('Main page')}</h2>
        </div>
    );
};

export default MainPage;
