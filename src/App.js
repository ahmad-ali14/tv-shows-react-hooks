import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import getShows from './data/shows';
import Main from './components/Main';
import TopSection from './components/TopSection'
import axios from 'axios';
import { doSort } from './components/helpers/index'





function App() {
  var [Allshows, setAllShows] = useState([]);
  var [sortedAllshows, setsortedAllShows] = useState([]);
  var [isShowsVisible, setIsShowsVisible] = useState(true)
  var [isEpisodesVisble, setIsEpisodesVisble] = useState(false)
  var [selectedShow, setSelectedShow] = useState([]);
  var [episodes, setEpisodes] = useState([])
  var [sortedEpisodes, setSortedEpisodes] = useState([])
  var [singleEpisode, setSingleEpisode] = useState([])
  var [showSingle, setShowSingle] = useState(false);
  var [compare, setCompare] = useState('no-sort');
  var [showSortdShow, setShowSortdShow] = useState(false);
  var [showSortedEpis, setShowSortedEpis] = useState(false);
  var [searchValue, setSearchValue] = useState('');
  var [searchedShows, setSearchedShows] = useState([])
  var [searchedEpisodes, setSearchedEpisodes] = useState([])
  var [showSearchedShows, setShowSearchedShows] = useState(false)
  var [showSearchedEpisodes, setShowSearchedEpisodes] = useState(false)

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
      case 'sorted shows': setShowSortdShow(showSortdShow = true); break;
      case 'sorted episodes': setShowSortedEpis(showSortedEpis = true); break;
      case 'searched shows': setShowSearchedShows(showSearchedShows = true); break;
      case 'searched episodes': setShowSearchedEpisodes(showSearchedEpisodes = true); break;

      default: break;
    }
  }

  const hide = (thing) => {
    switch (thing) {
      case 'shows': setIsShowsVisible(isShowsVisible = false); break;
      case 'episodes': setIsEpisodesVisble(isEpisodesVisble = false); break;
      case 'single episode': setShowSingle(showSingle = false); break;
      case 'sorted shows': setShowSortdShow(showSortdShow = false); break;
      case 'sorted episodes': setShowSortedEpis(showSortedEpis = false); break;
      case 'searched shows': setShowSearchedShows(showSearchedShows = false); break;
      case 'searched episodes': setShowSearchedEpisodes(showSearchedEpisodes = false); break;

      default: break;
    }
  }


  const showSelectedShowEpisodes = (showId) => {
    if (showId == "All Shows") { setSelectedShow(selectedShow = []); show('shows'); hide('episodes'); hide('single episode'); return; }
    fetchEpisodes(showId);
    hide('shows');
    show('episodes');
    let selected = Allshows.filter((s) => { return (s.id == showId); });
    setSelectedShow(selectedShow = selected);
    return;
  }

  const selectSingleEpisode = (epiId) => {
    if (epiId == "All Episodes") { setSingleEpisode([]); hide('shows'); show('episodes'); hide('single episode'); return; }
    let selected = episodes.filter((s) => { return (s.id == epiId); });
    setSingleEpisode(singleEpisode = selected);
    return;
  }

  const chooseCompare = (value) => {
    setCompare(compare = value);
    return;
  }



  const doingDiffSort = () => {

    if (compare !== 'no-sort') {
      if (isShowsVisible) {
        let temp;
        if (showSearchedShows) { temp = searchedShows.slice(); }
        else { temp = Allshows.slice(); }
        setsortedAllShows(sortedAllshows = temp.sort(doSort(compare)))
        show('sorted shows')
      }
    }

    if (isEpisodesVisble) {
      let temp = episodes.slice();
      setSortedEpisodes(sortedEpisodes = temp.sort(doSort(compare)))
      show('sorted episodes')
    }

    if (compare === 'no-sort') {
      if (isShowsVisible) {
        hide('sorted shows');
      }
      if (isEpisodesVisble) {
        hide('sorted episodes')
      }

    }

  }

  const doSeacrh = (value) => {
    // if (value = '') {
    //   hide('sorted shows')
    //   // setSearchedShows(searchedShows = [])
    //   // hide('sorted shows');
    //   show('shows');
    //   return;
    // }
    let term = value.trim();
    if (isShowsVisible) {

      let filteredShows = Allshows.filter((e) => {
        return e.name.toLowerCase().includes(term.toLowerCase()) || e.summary.toLowerCase().includes(term.toLowerCase())
      })
      setSearchedShows(searchedShows = filteredShows);
      show('searched shows');
      return;
    }

    if (isEpisodesVisble) {

      let filteredEpisodes = episodes.filter((e) => {
        return e.name.toLowerCase().includes(term.toLowerCase()) || e.summary.toLowerCase().includes(term.toLowerCase())
      })
      setSearchedEpisodes(searchedEpisodes = filteredEpisodes);
      show('searched episodes');
      return;
    }



  }

  const chooseWhichShows = () => {
    if (showSortdShow) { return sortedAllshows }
    else if (showSearchedShows) { return searchedShows }
    return Allshows;
    //showSortdShow ? searchedShows.length > 0 ? searchedShows : sortedAllshows : Allshows
  }

  const chooseWhichEpisodes = () => {
    if (showSortedEpis) { return sortedEpisodes }
    else if (showSearchedEpisodes) { return searchedEpisodes }
    return episodes;
    // showSortedEpis ? sortedEpisodes : episodes
  }


  const backToAllShows = () => {
    hide('episodes');
    hide('single episode')
    show('shows')
    showSelectedShowEpisodes('All Shows');
  }


  return (
    <>
      <h1 className="main-title"> TV Shows React Hooks </h1>
      {Allshows.length > 0 &&
        <TopSection
          allShows={chooseWhichShows()}
          selectedShow={selectedShow}
          showSelectedShowEpisodes={showSelectedShowEpisodes}
          isShowsVisible={isShowsVisible}
          showSingle={showSingle}
          isEpisodesVisble={isEpisodesVisble}
          hide={hide}
          show={show}
          chooseCompare={chooseCompare}
          doingDiffSort={doingDiffSort}
          backToAllShows={backToAllShows}
          episodes={chooseWhichEpisodes()}
          selectSingleEpisode={selectSingleEpisode}
          singleEpisode={singleEpisode}
          doSeacrh={doSeacrh}

        />}
      <div className="root">
        <Main
          AllShows={chooseWhichShows()}
          isShowsVisible={isShowsVisible}
          isEpisodesVisble={isEpisodesVisble}
          showSingle={showSingle}
          show={show}
          hide={hide}
          selectedShow={selectedShow}
          episodes={chooseWhichEpisodes()}
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


