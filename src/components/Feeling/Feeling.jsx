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
            <h1> How are you feeling today? </h1>
            <form onSubmit={handleSubmit}>
            <input
                onChange={evt => setNewFeeling(evt.target.value)}
                type="number"
                max="5"
                min="0"
                value={newFeeling}
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