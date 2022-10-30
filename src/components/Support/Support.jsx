import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Support() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [newSupport, setNewSupport] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        dispatch({
            type: 'SET_SUPPORT',
            payload: newSupport
        });
        history.push('/comments');
    }
    return (
        <>
            <h1 className='makeSpace'> How well are you being supported? </h1>
            <form
                onSubmit={handleSubmit}
                className='allforms'
            >
                <label
                    htmlFor='supportInput'
                    className='aboveInput'
                >
                    Support?
                </label>
                <input
                    type="number"
                    onChange={evt => setNewSupport(evt.target.value)}
                    value={newSupport}
                    max="5"
                    min="0"
                    placeholder="From 0-5"
                    id="supportInput"
                    required
                    className='supportInput'
                />
                <button type='submit'>
                    NEXT
                </button>

            </form>

        </>
    )
}

export default Support;