import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


function Admin() {
    const [feedbackItems, setFeedbackItems] = useState([]);
    const params = useParams();

    useEffect(() => {
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
    }, [params.id]);

    return (
        <>
            <h1 id='fbResults'> Feedback Results </h1>
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
                                <button className='deleteButton'>&#10060;</button>
                            </td>
                        </tr>
                    ))}

                </tbody>
                <tfoot>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>

                 </tfoot>
            </table>

        </>
    )
}

export default Admin;