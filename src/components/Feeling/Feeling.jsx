import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';

function Feeling() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [newFeeling, setNewFeeling] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch({
            type: 'SET_FEELING',
            payload: newFeeling
        });

         history.push('/understanding');
    }



    return (
        <>
            <span className='hidePrevious'></span>
            <h1 className='makeSpace'> How are you feeling today? </h1>
            <form 
                onSubmit={handleSubmit}
                className='allforms'
            >
            <label 
                htmlFor='feelingInput'
                className='aboveInput'
            >
                Feeling?
            </label>
            <input
                onChange={evt => setNewFeeling(evt.target.value)}
                type="number"
                max="5"
                min="0"
                id="feelingInput"
                value={newFeeling}
                placeholder="From 0-5"
                required
                className='feelingInput'
            />
            <button type="submit">
                NEXT
            </button>
            </form>
        </>
    )
}

export default Feeling;