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
import SpecificItem from '../SpecificItem/SpecificItem';
function App() {

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    console.log('in fetchData thats whaddup');

    axios({
      method: 'GET',
      url: '/feedback'
    })
      .then((response) => {
        console.log('response is ', response)
      });
  }
  const addData = (stuff) => {
    console.log(stuff, "in addData");
    axios({
      method: 'POST',
      url: '/feedback',
      data: stuff
    })
      .then(() => {
        fetchData();
      })
      .catch((err) => {
        console.log("ERROR in POST /feedback", err);
      })
  };



  return (

    <>
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
              addData={addData}
            />

          </Route>

          <Route path="/admin" exact>
            <Admin />
          </Route>
          <Route path="/success" exact>
            <Success />
          </Route>

          <Route path="/specific/:id">
            <SpecificItem
              addData={addData}
            />
          </Route>

        </Router>
      </div>
    </>
  );
}

export default App;