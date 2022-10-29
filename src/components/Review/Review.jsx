import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

function Review({addData}) {
    // const dispatch = useDispatch();
    const history = useHistory();
    const feel = useSelector(store => store.feeling);
    const understand = useSelector(store => store.understanding);
    const support = useSelector(store => store.support);
    const comment = useSelector(store => store.comments);

    const addResponse = event => {
        event.preventDefault();
        console.log('addRESPONSE was clicked')
        addData({
            feel,
            understand,
            support,
            comment
        });
    };
   

    return (
        <>
        <form  onSubmit={(event) => addResponse(event)}>
            <h1> Review Your Feedback </h1>
            
            <p>Feelings: {feel}</p>
            <p>Understanding: {understand}</p>
            <p>Support: {support}</p>
            <p>Comments: {comment}</p>

            <button >
            
                SUBMIT
            </button>
        </form>
        </>
    )
}

export default Review;