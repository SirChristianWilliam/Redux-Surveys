import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

function Admin() {
    const [feedbackItems, setFeedbackItems] = useState([]); //As a state array, so new data can be pushed 
    // into it. 
    const params = useParams();
    useEffect(() => {
        getTheData(); // Again, might be redundant, but calls GET on load.
    }, [params.id]);

    const getTheData = () => {
        axios({
            method: 'GET',
            url: '/feedback'
        })
            .then((response) => {
                setFeedbackItems(response.data); //Line 6 variable feedbackItems is an array. GET goes to
                // the server to get the current array, and brings it back here. setFeedbackItems then uses
                // that data (response.data) to change the feedbackItems variable's value to the array
                // grabbed from the server state.
            })
            .catch((err) => {
                console.log('ERROR in Admin GET', err);
            });
    };
    // 'item' is the id of each individual row.
    const removeItem = (item) => {
        console.log("RemoveItem ID", item);
        let text = "Are you sure you'd like to delete this?";
        if (confirm(text) == true) { // Confirm box to ensure the user actually meant to delete the entry.
            axios({
                method: 'DELETE',
                url: `/feedback/${item}` // Sends data to the server using the DELETE method route,
                // but only targets the line with the current id that is being focused. 
            })
                .then((response) => {
                    console.log('DELETE response', response);
                    getTheData(); // After the row is deleted, this will call GET again to show the 
                    // table data with the ommission of the just deleted row, without having to refresh the page.
                })
                .catch((err) => {
                    console.log('ERROR in delete', err)
                });
        } else {
            return; // If the user selects 'cancel' instead of 'ok', then return to exit this function and
            // to not delete or change anything. 
        }
    };
    // changeFlag uses two parameter, tOf(true or false) and rowId
    const changeFlag = (tOf, rowId) => {
        console.log('Flag button clicked, currently set to:', tOf); //Shows the current state of the boolean
        // It's a little confusing, but the true/false seems like it would be opposite when you read it in
        // the console. An easy fix, but I'm not going to because it doesn't really matter in this case.
        axios.put(`/feedback/${rowId}`, { flagged: !tOf }) // Server call to /feedback/${rowId}. 
            // rowId comes from below in the return area. Item is the 'key' of feedBackItems from line 6, as
            // feedBackItems is the array that we are looping through. rowId is the specific id of the selected row.
            // {flagged: !tOf} is a toggle. Flagged is actually item.flagged, and is saying to set item.flagged to 
            // the "NOT" version of itself. Since it's a boolean, that toggles it from true to false and vice versa.
            // In the feedback.router, the "put" method uses this data to change it in the state. 
            .then(res => {
                console.log(`Server response after submission:`, res);
                getTheData();
            })
            .catch(err => {
                console.log("Error updating flags", err);
            });
    }; //End flag change

    return (
        <>
            <h1 id='fbResults'>
                <span id="decoration">
                    &#10032;
                </span>
                <span id="resultsText">
                    Feedback Results!
                </span>
            </h1>
            <table>
                <tbody>
                    <tr>
                        {/* tooltip & tooltipText, shown when hovering over this th element on the DOM
                            for easier understanding for the user */}
                        <th className='tooltip'> 
                            <span className="theFlag tooltiptext">
                                (Click on a row to flag it for review)
                            </span>
                            Flag
                        </th>
                        <th>Feeling</th>
                        <th>Understanding</th>
                        <th>Support</th>
                        <th>Comments</th>
                        <th>Delete</th>
                    </tr>
                    {feedbackItems.map((item) => ( // feedBackItems from line 6 above
                        <tr
                            key={item.id} // Each entry has an individual ID
                            className={item.flagged ? 'flaggedFeedback' : 'notFlaggedFeedback'}
                            // Line 101 is saying, if the the item.flagged is true, set the class to
                            // 'flaggedFeedback', if it's not true, set it to 'notFlaggedFeedback
                            onClick={() => changeFlag(item.flagged, item.id)}> 
                            {/* Line 104 brings us to Line 52, sending the mapped item.flagged
                                and the mapped item.id to be used, sent to the server and updating state */}
                            <td>
                                {/* Display item.flagged, which ultimately comes from the redux store */}
                                {item.flagged} 
                                <span className='theFlag'>
                                    &#9873;
                                </span>
                            </td>
                            {/* These td elements grab the values from the store as well */}
                            <td>{item.feeling}</td> 
                            <td>{item.understanding}</td>
                            <td>{item.support}</td>
                            <td className='commentBox'>{item.comments}</td>
                            <td className='deleteRow'>
                                <form onSubmit={() => removeItem(item.id)}>
                                    {/* When submit button is clicked, remove that item. That process
                                        is initiated here and will take you up above to line 29 */}
                                    <button className='deleteButton'
                                    >&#10060;</button>
                                </form>
                            </td>
                        </tr> //Note that Lines 99-here is all one <tr> element.
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        {/* Empty <td> elements, using classes from CSS to give the table that dark extra
                            padding space below. There are different(better) ways to do this, but this was the
                            first way I thought of so I kept it
                         */}
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tfoot>
            </table>
        </>
    );
};

export default Admin;