import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
 
function Review() {
    // const dispatch = useDispatch();
    const history = useHistory();

    return (
        <>
            <h1> Review Your Feedback </h1>
            <p>Feelings: 0</p>
            <p>Understanding: 0</p>
            <p>Support: 0</p>
            <p>Comments: I love this stuff!</p>

            <button type="submit">
                SUBMIT
            </button>
        </>

    )
}

export default Review;