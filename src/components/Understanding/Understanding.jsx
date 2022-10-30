import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';


function Understanding() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [newUnderstanding, setNewUnderstanding] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        dispatch({
            type: 'SET_UNDERSTANDING',
            payload: newUnderstanding
        });
        history.push('/support');
    }

    return (
        <>
            <h1 className='makeSpace'> How well are you understanding the content? </h1>
            <form
                onSubmit={handleSubmit}
                className='allforms'
            >
                <label
                    htmlFor='understandingInput'
                    className='aboveInput'
                >
                    Understanding?
                </label>
                <input type="number"
                    onChange={evt => setNewUnderstanding(evt.target.value)}
                    value={newUnderstanding}
                    max="5"
                    min="0"
                    placeholder="From 0-5"
                    id="understandingInput"
                    required
                    className='understandingInput'

                />
                <button type="submit">
                    NEXT
                </button>
            </form>

        </>
    )
}

export default Understanding;