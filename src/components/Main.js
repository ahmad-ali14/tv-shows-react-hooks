import React, { useState, useEffect } from 'react';
import '../App.css'
import { makeTitle } from './helpers/index'


export default ({ shows, isShowsVisible, selectedShow, episodes, fetchEpisodes, showSelectedShowEpisodes, isEpisodesVisible, togleEpisode, singleEpisodes, showSingle, togleSingle, togleEpisodes, setShowSingle }) => {






    const hideEpisodes = () => {
        let elements = [...document.getElementsByClassName('third')];
        //console.log('elements', elements);
        elements.forEach(e => e.setAttribute('display', 'none'))
    }

    return (
        <>
            {showSingle ? <SingleEpisode /> : ''}
            {/* {isShowsVisible ? <MakePageForShows
                shows={shows}
                showSelectedShowEpisodes={showSelectedShowEpisodes}
                makeTitle={makeTitle}
            /> : !isEpisodesVisible ?
                    <MakePageForEpisodes
                        shows={episodes}
                        makeTitle={makeTitle}
                        togleEpisodes={togleEpisodes}
                        showSingle={showSingle}
                        setShowSingle={setShowSingle}
                        hideEpisodes={hideEpisodes}
                    /> :
                    '<SingleEpisode />'
            } */}

            {!isEpisodesVisible ?
                <MakePageForEpisodes
                    shows={episodes}
                    makeTitle={makeTitle}
                    togleEpisodes={togleEpisodes}
                    showSingle={showSingle}
                    setShowSingle={setShowSingle}
                    hideEpisodes={hideEpisodes}
                /> : ''}

            {isShowsVisible ? <MakePageForShows
                shows={shows}
                showSelectedShowEpisodes={showSelectedShowEpisodes}
                makeTitle={makeTitle}
                togleSingle={togleSingle}
            /> : ''}



        </>
    )


}


const MakePageForShows = ({ shows, showSelectedShowEpisodes, togleSingle }) => {

    return (
        <>
            {shows.map((showNow) => {
                return (<Singliton
                    key={showNow.id}
                    show={showNow}
                    showSelectedShowEpisodes={showSelectedShowEpisodes}
                    togleSingle={togleSingle}
                />)
            })}
        </>
    )
}



const Singliton = ({ show, showSelectedShowEpisodes }) => {

    return (
        <div className="third">
            <h4 className="epi-title" id={show.id}>  {show.name} </h4>
            <img height="295px" width="210px" src={show.image ? show.image.medium ? show.image.medium : show.image.original ? show.image.original : `${process.env.PUBLIC_URL}/no-image-found-360x260.png` : `${process.env.PUBLIC_URL}/no-image-found-360x260.png`} alt={show.name} />
            <p className="limited"
                dangerouslySetInnerHTML={{ __html: show.summary.replace(new RegExp('<p>|</p>', 'gi'), '') }} />

            <hr style={{ marginTop: '15px', marginBottom: '15px' }} />


            <button className="btn-show" onClick={() => { showSelectedShowEpisodes(show.id) }}> see Episodes </button>
        </div>
    )
}

const MakePageForEpisodes = ({ shows, makeTitle, togleEpisodes, isEpisodesVisible, showSingle, setShowSingle, hideEpisodes }) => {

    return (
        <>
            {shows.map((showNow) => {
                return (<EpiSingliton
                    key={showNow.id} show={showNow}
                    makeTitle={makeTitle}
                    togleEpisodes={togleEpisodes}
                    isEpisodesVisible={isEpisodesVisible}
                    showSingle={showSingle}
                    setShowSingle={setShowSingle}
                    hideEpisodes={hideEpisodes}

                />)
            })}
        </>
    )
}




const EpiSingliton = ({ show, makeTitle, togleEpisodes, isEpisodesVisible, showSingle, setShowSingle, hideEpisodes }) => {

    return (
        <div className="third">
            <h4 className="epi-title" id={show.id}>  {makeTitle(show)} </h4>
            <img height="140px" width="250px" src={show.image ? show.image.medium ? show.image.medium : show.image.original ? show.image.original : `${process.env.PUBLIC_URL}/no-image-found-360x260.png` : `${process.env.PUBLIC_URL}/no-image-found-360x260.png`} alt={makeTitle(show)} />
            {show.summary
                ? <p className="limited"
                    dangerouslySetInnerHTML={{ __html: show.summary.replace(new RegExp('<p>|</p>', 'gi'), '') }} />
                : <p>No Summary Available</p>
            }

            <hr style={{ marginTop: '15px', marginBottom: '15px' }} />


            <button className="btn-show" onClick={() => { togleEpisodes(); hideEpisodes(); setShowSingle(showSingle = !showSingle) }}> All Info </button>
        </div>
    )
}


const SingleEpisode = () => {
    return <div> single Episode </div>
}