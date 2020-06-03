import React, { useState, useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import getShows, { getOneShow } from './data/shows';
import Main from './components/Main';
import TopSection from './components/TopSection'




function App() {
  var [Allshows, setAllShows] = useState([]);
  const [isShowsVisible, setIsShowsVisible] = useState(true)

  //shows = useRef([...getShows()])

  useEffect(() => {
    setAllShows(Allshows = [...getShows()])
    //console.log(getShows())
    // console.log(shows);

  }, [])


  return (
    <>
      <h1 className="main-title"> TV Shows </h1>
      {Allshows.length > 0 && <TopSection allShows={Allshows} isShowsVisible={isShowsVisible} hideShows={setIsShowsVisible} />}
      <div className="root">
        <Main shows={Allshows} isShowsVisible={isShowsVisible} />
      </div>
    </>
  );
}


export default App;

