import React, { useState, useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import getShows, { getOneShow } from './data/shows';
import Main from './components/Main';
import TopSection from './components/TopSection'
import axios from 'axios';




function App() {
  var [Allshows, setAllShows] = useState([]);
  var [isShowsVisible, setIsShowsVisible] = useState(true)
  var [selectedShow, setSelectedShow] = useState([]);
  var [episodes, setEpisodes] = useState([])

  useEffect(() => {
    setAllShows(Allshows = [...getShows()])
  }, [])

  const fetchEpisodes = (showId) => {
    axios.get(`https://api.tvmaze.com/shows/${showId}/episodes`)
      .then(data => { console.log(data); setEpisodes(episodes = data.data); })
  }

  const togleShows = () => {
    setIsShowsVisible(isShowsVisible = !isShowsVisible)
  }

  const showSelectedShowEpisodes = (showId) => {
    if (showId == "All Shows") { setSelectedShow(selectedShow = []); if (!isShowsVisible) togleShows(); return; }
    fetchEpisodes(showId);
    let selected = Allshows.filter((s) => { return (s.id == showId); });
    // console.log('selected', selected)
    setSelectedShow(selectedShow = selected);
    if (isShowsVisible) togleShows();

    return;
  }

  return (
    <>
      <h1 className="main-title"> TV Shows React Hooks </h1>
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
          episodes={episodes}

        />
      </div>
    </>
  );
}


export default App;

