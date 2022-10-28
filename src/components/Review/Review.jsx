import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

function Review() {
    const dispatch = useDispatch();
    const history = useHistory();
    const feel = useSelector(store => store.feeling);
    const understand = useSelector(store => store.understanding);
    const support = useSelector(store => store.support);
    const comment = useSelector(store => store.comments);

    return (
        <>
            <h1> Review Your Feedback </h1>
            
            <p>Feelings: {feel}</p>
            <p>Understanding: {understand}</p>
            <p>Support: {support}</p>
            <p>Comments: {comment}</p>

            <button type="submit">
                SUBMIT
            </button>
        </>

    )
}

export default Review;