import React from 'react'
import ShowsDropMenu from './ShowsDropMenu';
import EpisodesDropDown from './EpisodesDropDown';

const TopSection = ({ allShows, showSelectedShowEpisodes,
    selectedShow, isShowsVisible, isEpisodesVisble,
    hide, show, chooseCompare, doingDiffSort, backToAllShows,
    showSingle, episodes, singleEpisode, selectSingleEpisode, doSeacrh }) => {


    return (

        <div className="h1Style">
            <h1 className="main-title"> TV Shows React Hooks </h1>

            <div className="top">
                <div className="selectrosStyle">
                    <label htmlFor="selectShow" className="searchBarStyle"> Select a Show: </label>
                    <ShowsDropMenu
                        allShows={allShows}
                        showSelectedShowEpisodes={showSelectedShowEpisodes}
                        selectedShow={selectedShow}
                        isShowsVisible={isShowsVisible}
                    />
                    {(!isShowsVisible) && <>
                        <label htmlFor="selectBox" className="searchBarStyle"> Select an Episode: </label>
                        <EpisodesDropDown
                            episodes={episodes}
                            singleEpisode={singleEpisode}
                            isEpisodesVisble={isEpisodesVisble}
                            hide={hide}
                            show={show}
                            selectSingleEpisode={selectSingleEpisode}

                        />

                    </>}

                    <button id="goBack" onClick={() => { backToAllShows() }} className="floatedRight"> Back To All Shows </button>

                </div>

                <hr className="hrTop" />

                <div className="">

                    {!showSingle && <> <label htmlFor="search" className="anotherSearchBarStyle"> search : </label>
                        <input id="searchBox" onChange={(e) => { doSeacrh(e.target.value) }} name="search" />
                    </>}

                    {!showSingle && <> <div style={{ display: "inline" }} id="itemsNumber"></div>
                        <label id="" className="anotherSearchBarStyle"> Sort Via: </label>
                        <select id="sort" onChange={(e) => { chooseCompare(e.target.value); doingDiffSort(); }}>
                            <option value="no-sort">choose sorting method</option>
                            <option value="no-sort" >No Sort</option>
                            <option value="name-a-z" >Name A-Z</option>
                            <option value="name-z-a">Name Z-A</option>
                            {!isEpisodesVisble ? <option value="rating+">Rating (least first)</option> : ''}
                            {!isEpisodesVisble ? <option value="rating-">Rating (top first)</option> : ''}
                        </select></>
                    }

                    {(!showSingle) && <div className="searchBarStyle" style={{ display: 'inline' }}>
                        {isShowsVisible ? "Shows Found :  " + allShows.length : "Episodes Found : " + episodes.length}
                    </div>
                    }
                    {/* 
                <div className="floatedRight"> Current Show :  {selectedShow.length > 0 ? selectedShow[0].name : 'All Shows'} </div> */}

                </div>


                {/* <button className="btn-show1 margin1in100" onClick={(e) => { isEpisodesVisble ? hide('shows') : show('shows') }}> {isShowsVisible ? 'Hide Shows' : 'Show Shows'} </button> */}
            </div>
        </div>
    )
}



export default TopSection;