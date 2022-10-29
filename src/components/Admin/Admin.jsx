import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


function Admin() {
    // const dispatch = useDispatch();
    // dispatch({
    //     type: 'SET_ADMIN',
    //     payload: {feedbackList}
    // })
    const [feedbackItems,setFeedbackItems] = useState([]);
    const params = useParams();

    useEffect(() => {
        axios({
            method:'GET',
            url:'/feedback'
        })
        .then((response) => {
            setFeedbackItems(response.data);
        })
        .catch((err) => {
            console.log('ERROR in Admin GET',err);
        });
    }, [params.id]);

    return (
        <>
            <h1> Admin </h1>
            <table>
                <tbody>
                    <tr>
                        <th>Feeling</th>
                        <th>Understanding</th>
                        <th>Support</th>
                        <th>Comments</th>

                    </tr>
                    
                    {feedbackItems.map((item) => (
                        <tr key={item.id}>
                            <td>{item.feeling}</td>
                            <td>{item.understanding}</td>
                            <td>{item.support}</td>
                            <td>{item.comments}</td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>

        </>
    )
}

export default Admin;