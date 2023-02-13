import React, {useState} from 'react';
import classes from './Counter.module.scss'

export const Counter = () => {
    const [value, setValue] = useState(0);
    return (
        <div className={classes.wrapper}>
            <button className={classes.btn}
                    onClick={() => setValue((prevState) => prevState - 1)}>-
            </button>
            <p className={classes.result}>{value}</p>
            <button className={classes.btn}
                    onClick={() => setValue((prevState) => prevState + 1)}>+
            </button>
        </div>
    );
};