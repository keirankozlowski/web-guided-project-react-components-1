import React, { useState } from 'react';
import { Playplace } from './Playplace';

// Rules of STATE
// state, for our purposes, is a collection of variables
// we use state to store info that changes as the user is interacting with the site
// we don't want to directly update the state
export function Playground() {
    // syntax for useState hook
    const [count, setCount] = useState(0);
    const [spinnerOn, setSpinnerOn] = useState(true);
    // const [object, setObject] = useState({});
    // console.log(object);

    // this is the equivalent of the above
    // const theState = useState(0);
    // const count = theState[0];
    // const setCount = theState[1];

    // don't do this directly right here, infinite loop territory
    // setCount(2);

    if (spinnerOn) {
        return (
            <div className='container'>
                <h3>the spinner is { spinnerOn ? 'ON' : 'OFF' }. Loading....</h3>
                <button onClick={e => setSpinnerOn(false)}>turn off spinner</button>
            </div>
        );
    }

    return(
        <div>
            <p>Hello from Playground</p>
            {/* <Playplace /> */}

            <h3>The count is: {count}</h3>
            <button onClick={e => setCount(count + 1) }>increase count</button>
            <button onClick={e => setCount(count - 1) }>decrease count</button>
        </div>
    );
}
