import React, { useState, useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import getShows, { getOneShow } from './data/shows';
import Main from './components/Main';
import TopSection from './components/TopSection'




function App() {
  var [Allshows, setAllShows] = useState([]);
  var [isShowsVisible, setIsShowsVisible] = useState(true)
  var [selectedShow, setSelectedShow] = useState([]);


  //shows = useRef([...getShows()])

  useEffect(() => {
    setAllShows(Allshows = [...getShows()])
    //console.log(getShows())
    // console.log(shows);

  }, [])

  const togleShows = () => {
    setIsShowsVisible(isShowsVisible = !isShowsVisible)
  }

  const showSelectedShowEpisodes = (showId) => {
    // console.log('show id', showId);
    if (showId == "All Shows") { setSelectedShow(selectedShow = []); if (!isShowsVisible) togleShows(); return; }
    let selected = Allshows.filter((s) => { return (s.id == showId); });
    // console.log('selected', selected)
    setSelectedShow(selectedShow = selected);
    if (isShowsVisible) togleShows();

    return;
  }

  return (
    <>
      <h1 className="main-title"> TV Shows </h1>
      {Allshows.length > 0 &&
        <TopSection allShows={Allshows}
          togleShows={togleShows}
          selectedShow={selectedShow}
          showSelectedShowEpisodes={showSelectedShowEpisodes}
          isShowsVisible={isShowsVisible}
        />}
      <div className="root">
        <Main
          shows={Allshows}
          isShowsVisible={isShowsVisible}
          selectedShow={selectedShow}

        />
      </div>
    </>
  );
}


export default App;

