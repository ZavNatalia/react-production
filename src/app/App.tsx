import React from 'react';
import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <ThemeSwitcher/>
            <h1>React app</h1>
            <Navbar/>
            <AppRouter/>
        </div>
    );
};

export default App;