import React from 'react';
import {Counter} from './counter/Counter';
import './index.scss';

const App = () => {
    return (
        <div className='app'>
            <h1 className='header'>React app</h1>
            <Counter/>
        </div>
    );
};

export default App;