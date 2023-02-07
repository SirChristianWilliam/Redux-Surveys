import React, { useEffect, useState } from 'react';

function goBack() {
    history.go(-1); // Previous button for every page (but hidden on page 1, the feeling page)
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
                <h4>We'd love to hear it!</h4>
            </header>
        </>
    );
};

export default Header;