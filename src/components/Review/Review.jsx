import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
//PAGE 5
function Review({ addData }) { // This is sent as a prop from app.jsx, to be modified here and then sent back
    // after the modifications are complete
    const history = useHistory(); //Since this page is displaying the data, we need to grab the data that the
    //store recieved from the last 4 pages.
    const feel = useSelector(store => store.feeling); // feel uses useSelector to access the store's "feeling" property.
    const understand = useSelector(store => store.understanding); // store.understanding property is now called understand
    const support = useSelector(store => store.support); //and so on
    const comment = useSelector(store => store.comments); // and so on

    const addResponse = event => { 
        event.preventDefault();
        console.log('addResponse was clicked');
        if (feel == 0 && understand == 0 && support == 0 && comment == "") {
        // This part wasn't necessary, but I feel like it's a good way to prevent people from just
        //spamming empty input over and over again. If there is absolutely no values input, an alert will
        // prompt the user to at least leave a comment
            alert(`If you answered "0" for all, please leave a comment explaining why.`)
        } else {
            addData({ // Otherwise, if everything checks out, send addData values received from the store
                // and send it back through the prop route as an object to be further modified 
                // in a POST method to save to the database. Currently, these values are just coming from
                // the redux store and have yet to be saved permanently in the database.
                feel,
                understand,
                support,
                comment
            });
            history.push('/success');
            window.location.reload(); // This is a very simple way to clear the inputs. Now, if you were to
            //go back a page, they will all be empty and the user can't keep spamming surveys. And again,
            //they won't be able to spam empty surveys either. Take that trolls!
        };
    };
    return (
        <>
            <form onSubmit={(event) => addResponse(event)}>
                <h1> Review Your Feedback: </h1>
                {/* These p elements grab the value of the variables from the store from lines 9-12.
                app.jsx imports this review component and displays the return, and uses the addData prop
                to display the values from the store  */}
                <p>Feelings: {feel}</p>
                <p>Understanding: {understand}</p>
                <p>Support: {support}</p>
                <p>Comments: {comment}</p>
                <button
                    className='reviewSubmit'
                >
                    SUBMIT
                </button>
{/* Line 40, onSubmit gets called when this button is clicked(submitted). addResponse gets called, sending 
event data to be used */}
            </form>
        </>
    );
};

export default Review;