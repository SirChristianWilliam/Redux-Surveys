import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// PAGE 4
function Comments() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [newComment, setNewComment] = useState('');
    const handleSubmit = (evt) => {
        evt.preventDefault();
        dispatch({
            type: 'SET_COMMENT', // Connected to redux at the index.js file
            payload: newComment // Send this to the redux store to be changed
        });
        history.push('/review');
    };
    return (
        <>
            <h1 className='makeSpace'> Any comments you want to leave? </h1>
            <form onSubmit={handleSubmit}>
                <label
                    htmlFor='commentInput'
                    className='aboveInput'
                >
                    Comments
                </label>
                <input
                    type="text"
                    onChange={evt => setNewComment(evt.target.value)}
                    value={newComment} //Value established every time the setNewcomment function is active
                    maxLength={"100"}
                    id="commentInput"
                    className='commentInput'
                />
                <button type="submit">
                    NEXT
                </button>
            </form>
        </>
    );
};

export default Comments;