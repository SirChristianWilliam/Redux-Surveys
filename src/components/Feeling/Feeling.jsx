import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
//THIS IS THE HOME PAGE (1)
function Feeling() {
    const dispatch = useDispatch(); //Needed to change data & talk with the redux store
    const history = useHistory(); //Preferable over using ' <Link to="__"> '
    const [newFeeling, setNewFeeling] = useState(''); //Receives data whenever said data is passed through setNewFeeling
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'SET_FEELING', // Connected to redux @ the index.js file
            payload: newFeeling //Send the variable's data to the store to be used
        });
        history.push('/understanding'); // Goes to the /understanding page
    };
    return (
        //Line 21: I used a cheap tactic to hide the previous button. For this case, I can't see any issues
        //using it this way. Whenever you are on the home page, you won't be able to "go back"
        <>
            <span className='hidePrevious'>Welcome!</span>
            <h1 className='makeSpace'> How are you feeling today? </h1>
            <form
                onSubmit={handleSubmit} // When submit button down below is clicked, call the variable on line 9.
                // All events that happened within this form will finalize up above and dispatch to the store, 
                // to await being saved to the database.
                className='allforms'
            >
                <label
                    htmlFor='feelingInput'
                    className='aboveInput'
                >
                    Feeling?
                </label>
                <input
                    onChange={evt => setNewFeeling(evt.target.value)} // onChange to always ensure the value
                    // is recorded correctly. evt.target.value is the value of the focused input in question.
                    type="number"
                    max="5"
                    min="0"
                    id="feelingInput"
                    value={newFeeling} // setNewFeeling changes the value, while the 'final' value is given here.
                    placeholder="From 0-5"
                    required
                    className='feelingInput'
                />
                <button type="submit">
                    NEXT
                </button>
            </form>
        </>
    );
};

export default Feeling;