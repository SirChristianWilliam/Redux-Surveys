import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Admin from '../Admin/Admin';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understanding';
import Success from '../Success/Success';
import Header from '../Header/Header';
// import SpecificItem from '../SpecificItem/SpecificItem'; SEE NOTES IN specificItem COMPONENT.
function App() { // I may have gotten a bit redundant with some of my GET methods. Everything works well though! :)
  useEffect(() => {
    fetchData(); //Get the database data right away on load
  }, []);
//yo
  const fetchData = () => {

    console.log('In fetchData (app.jsx)');
    axios({
      method: 'GET',
      url: '/feedback'
    })
      .then((response) => {
        console.log('response is ', response)
      });
  };

  const addData = (newItem) => { //This is what came from the review page. Down below in return on this page,
    // addData was sent as a prop, and transfers data back and forth between the server, the review component
    // page, and the store. up down up down up down
    console.log(newItem, "in addData");
    axios({
      method: 'POST',
      url: '/feedback',
      data: newItem 
    })
      .then(() => {
        fetchData(); //Every time new data is added to the state/server/database, retrieve that data and display it
        // in the appropriated pages/files
      })
      .catch((err) => {
        console.log("ERROR in POST /feedback", err);
      })
  };

  return (
    <>
    {/* Header is not grouped with the others, as it will always be shown */}
      <Header /> 

      <div className='App'>
        <Router>

          <Route path="/" exact>
            <Feeling />
          </Route>

          <Route path="/understanding" exact>
            <Understanding />
          </Route>

          <Route path="/support" exact>
            <Support />
          </Route>

          <Route path="/comments" exact>
            <Comments />
          </Route>

          <Route path="/review" exact>
            <Review
              addData={addData} // To display this data, it needs to bring the data it received from the store,
              //which was grabbed from the review componenent, which was then brought here,
              // which was then sent to the function above on line
              // 30, which was then saved to the server and was "gotten" using "GET", all to be displayed
              // on the DOM through this path. 
            /> 
          </Route>

          <Route path="/admin" exact>
            <Admin />
          </Route>

          <Route path="/success" exact>
            <Success />
          </Route>

          {/* <Route path="/specific/:id">
            <SpecificItem
              addData={addData}
            />
          </Route> 
          
          SEE NOTES IN specificItem COMPONENT.
          */}

        </Router>
      </div>
    </>
  );
};

export default App;