import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

function Success() {
    const history = useHistory();
    const [newFeeling, setNewFeeling] = useState('');
    
    function handleSubmit() {
        history.push('/');
    }

    return (
        <>
            <h1>Survey submitted successfully!</h1>
            <button
                onClick={handleSubmit}
            >Take a new survey!</button>
        </>
    )
}

export default Success;