import React, { useState } from 'react';
import Children from './Children';
import Clock from './Clock';
import './App.css';

const App = () => {
    const [state, setState] = useState(false);
    const [clickCount, setClickCount] = useState(0);

    const onClickHandler = () => {
        setState((currentState) => !currentState);
    };

    const incrementCounter = () => {
        setClickCount(clickCount + 1);
    };

    return (
        <div className='App-container'>
            <button onClick={onClickHandler} className='switchBTN'>Switch</button>
            {state && <Children />}

            <button onClick={incrementCounter} className='counterBTN'>
                Клики: {clickCount}
            </button>

            <Clock />
        </div>
    );
};

export default App;
