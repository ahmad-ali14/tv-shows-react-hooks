import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import getShows from './data/shows';
import Main from './components/Main';
import TopSection from './components/TopSection'
import axios from 'axios';





function App() {
  var [Allshows, setAllShows] = useState([]);
  var [isShowsVisible, setIsShowsVisible] = useState(true)
  var [isEpisodesVisble, setIsEpisodesVisble] = useState(false)
  var [selectedShow, setSelectedShow] = useState([]);
  var [episodes, setEpisodes] = useState([])
  var [singleEpisode, setSingleEpisode] = useState({})
  var [showSingle, setShowSingle] = useState(false);

  useEffect(() => {
    setAllShows(Allshows = [...getShows()])
  }, [])


  const fetchEpisodes = (showId) => {
    let selected = Allshows.filter((s) => { return (s.id == showId); });
    setSelectedShow(selectedShow = selected);

    axios.get(`https://api.tvmaze.com/shows/${showId}/episodes`)
      .then(data => { setEpisodes(episodes = data.data); })
  }


  const show = (thing) => {
    switch (thing) {
      case 'shows': setIsShowsVisible(isShowsVisible = true); break;
      case 'episodes': setIsEpisodesVisble(isEpisodesVisble = true); break;
      case 'single episode': setShowSingle(showSingle = true); break;

      default: break;
    }
  }

  const hide = (thing) => {
    switch (thing) {
      case 'shows': setIsShowsVisible(isShowsVisible = false); break;
      case 'episodes': setIsEpisodesVisble(isEpisodesVisble = false); break;
      case 'single episode': setShowSingle(showSingle = false); break;

      default: break;
    }
  }


  const togleShows = () => {
    setIsShowsVisible(isShowsVisible = !isShowsVisible)
  }

  const togleSingle = () => {
    setShowSingle(showSingle = !showSingle);
  }

  const togleEpisodes = () => {
    setIsEpisodesVisble(isEpisodesVisble = !isEpisodesVisble)
    setEpisodes(episodes = []);
  }

  const showSelectedShowEpisodes = (showId) => {
    if (showId == "All Shows") { setSelectedShow(selectedShow = []); show('shows'); hide('episodes'); return; }
    fetchEpisodes(showId);
    hide('shows');
    show('episodes');
    let selected = Allshows.filter((s) => { return (s.id == showId); });
    setSelectedShow(selectedShow = selected);
    // if (isShowsVisible) togleShows();
    return;
  }

  const selectSingleEpisode = () => {

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
          togleSingle={togleSingle}
          showSingle={showSingle}
          isEpisodesVisble={isEpisodesVisble}
          togleEpisodes={togleEpisodes}
          hide={hide}
          show={show}
        />}
      <div className="root">
        <Main
          AllShows={Allshows}
          isShowsVisible={isShowsVisible}
          isEpisodesVisble={isEpisodesVisble}
          showSingle={showSingle}
          show={show}
          hide={hide}

          selectedShow={selectedShow}
          episodes={episodes}
          fetchEpisodes={fetchEpisodes}
          showSelectedShowEpisodes={showSelectedShowEpisodes}
          singleEpisode={singleEpisode}
          selectSingleEpisode={selectSingleEpisode}
          setShowSingle={setShowSingle}

        />


      </div>
    </>
  );
}


export default App;


