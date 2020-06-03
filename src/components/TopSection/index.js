import React, { useState } from 'react'
import ShowsDropMenu from './ShowsDropMenu'

export default ({ allShows, togleShows, showSelectedShowEpisodes, selectedShow, isShowsVisible }) => {
    return (
        <>
            <div className="search-wrapper">
                <label htmlFor="selectShow" className="searchBarStyle"> Select a Show: </label>
                <ShowsDropMenu
                    allShows={allShows}
                    showSelectedShowEpisodes={showSelectedShowEpisodes}
                    selectedShow={selectedShow}
                />
                <label htmlFor="selectBox" className="searchBarStyle"> Select an Episode: </label>
                <div id="selectBox" > </div>
            </div>
            <div className="search-wrapper">
                <label htmlFor="search" className="anotherSearchBarStyle"> search : </label>
                <input id="searchBox" name="search" />

                <label className="anotherSearchBarStyle"> Current Show : </label>
                <label id="showTitle" className="anotherStyle2"> {selectedShow.length > 0 ? selectedShow[0].name : 'All Shows'} </label>

            </div>

            <div className="itemsNumber">
                <div style={{ display: "inline" }} id="itemsNumber"></div>
                <label id="" className="anotherSearchBarStyle"> Sort Via: </label>
                <select id="sort">
                    <option>choose sorting method</option>
                    <option value="no-sort" >No Sort</option>
                    <option value="name-a-z" >Name A-Z</option>
                    <option value="name-z-a">Name Z-A</option>
                    <option value="rating+">Rating (least first)</option>
                    <option value="rating-">Rating (top first)</option>
                </select>

                <button id="goBack" onClick={() => { showSelectedShowEpisodes('All Shows'); if (!isShowsVisible) { togleShows() }; }} className="btn-show1 margin1in100"> Back To All Shows </button>
                <button className="btn-show1 margin1in100" onClick={(e) => { togleShows(); }}> {isShowsVisible ? 'Hide Shows' : 'Show Shows'} </button>
            </div>
        </>
    )
}