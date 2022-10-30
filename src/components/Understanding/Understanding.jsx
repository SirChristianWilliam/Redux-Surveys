import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// PAGE 2
function Understanding() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [newUnderstanding, setNewUnderstanding] = useState('');
    const handleSubmit = (evt) => {
        evt.preventDefault();
        dispatch({
            type: 'SET_UNDERSTANDING', //Connected to redux @ index.js file
            payload: newUnderstanding //This dispatch works the same as the one on the Feeling component
        });
        history.push('/support');
    };
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
    );
};

export default Understanding;