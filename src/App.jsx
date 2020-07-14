import React, { useEffect, useContext, Fragment } from 'react';
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/SearchBox";
import Scroll from "./components/scroll/Scroll";
import ErrorBoundry from "./components/ErrorBoundry/ErrorBoundry";

import RobotsContext from "./context/robots/robotsContext";
import './App.css';



const App = () => {
  const robotsContext = useContext(RobotsContext)
  const { fetchRobots, setCurrentSearch, robotFriends, noResults } = robotsContext
  useEffect(() => {
    fetchRobots()
    // eslint-disable-next-line
  }, [])



  const onSearchChange = (e) => {
    e.preventDefault();
    setCurrentSearch(e.target.value)
  }

  //console.log(robotFriends);

  return (

    <div className='App tc'>
      <h1 className='f1'>Robot Friends</h1>
      {robotFriends.length === 0 ? (<h1>Loading...</h1>) :
        (<Fragment>
          <SearchBox onSearchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              {(noResults === true) ? (<h2>No results...</h2>) : (<CardList robots={robotFriends} />)}
            </ErrorBoundry>
          </Scroll>
        </Fragment>)}
    </div>


  );
};


export default App;
