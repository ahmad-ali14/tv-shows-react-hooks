import React from 'react'
import ShowsDropMenu from './ShowsDropMenu'

export default (allShows, isShowsVisible, hideShows) => {
    return (
        <>
            <div className="search-wrapper">
                <label htmlFor="selectShow" className="searchBarStyle"> Select a Show: </label>
                <ShowsDropMenu allShows={allShows} />
                <label htmlFor="selectBox" className="searchBarStyle"> Select an Episode: </label>
                <div id="selectBox" > </div>
            </div>
            <div className="search-wrapper">
                <label htmlFor="search" className="anotherSearchBarStyle"> search : </label>
                <input id="searchBox" name="search" />

                <label className="anotherSearchBarStyle"> Current Show : </label>
                <label id="showTitle" className="anotherStyle2"> All Shows </label>

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

                <button id="goBack" style={{ marginLeft: "30%" }} className="btn-show1"> Back To All Shows </button>
                <button className="btn-show1" onClick={() => { hideShows(isShowsVisible = !isShowsVisible) }}> Hide Shows </button>
            </div>
        </>
    )
}