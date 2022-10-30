import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';


function goBack() {
    history.go(-1);
}

function Header() {

    return (
        <>
            <header className='App-header'>
                <button
                    className="headerButton"
                    onClick={goBack}

                >
                    ⬅ Previous Page
                </button>

                <h1 className='App-title'>Feedback!</h1>
                <h4>Don't forget it!</h4>
            </header>
        </>
    )
}

export default Header;