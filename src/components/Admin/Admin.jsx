import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

function Admin({ item }) {
    const [feedbackItems, setFeedbackItems] = useState([]);
    const [removeBtn, setRemoveBtn] = useState(false)
    const params = useParams();

    useEffect(() => {
        getTheData();
    }, [params.id]);
    const getTheData = () => {
        axios({
            method: 'GET',
            url: '/feedback'
        })
            .then((response) => {
                setFeedbackItems(response.data);
            })
            .catch((err) => {
                console.log('ERROR in Admin GET', err);
            });
   
        }
    const removeItem = (item) => {
        console.log("RemoveItem ID", item);
        let text = "Are you sure you'd like to delete this?";
        if(confirm(text) == true) {
        axios({
            method: 'DELETE',
            url: `/feedback/${item}`
        })
            .then((response) => {
                console.log('DELETE response',response );
                getTheData();
                // location.reload();

            })
            .catch((err) => {
                console.log('ERROR in delete', err)
            });
        } else {
            return;
        }
    }

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
                        <th>Feeling</th>
                        <th>Understanding</th>
                        <th>Support</th>
                        <th>Comments</th>
                        <th>Delete</th>
                    </tr>

                    {feedbackItems.map((item) => (
                        <tr key={item.id}>
                            <td>{item.feeling}</td>
                            <td>{item.understanding}</td>
                            <td>{item.support}</td>
                            <td className='commentBox'>{item.comments}</td>
                            <td className='deleteRow'>
                                <form onSubmit={() => removeItem(item.id)}>
                                <button className='deleteButton'
                                    
                                >&#10060;</button>
                                </form>
                            </td>
                        </tr>
                    ))}

                </tbody>
                <tfoot>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tfoot>
            </table>

        </>
    )
}

export default Admin;