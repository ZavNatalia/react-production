import React from 'react';
import {Link} from 'react-router-dom';
import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Изменить тему</button>
            <h1>React app</h1>
            <Navbar/>
            <AppRouter/>
        </div>
    );
};

export default App;