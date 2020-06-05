import React, { useState, useEffect } from 'react';
import '../App.css'
import { makeTitle } from './helpers/index'


const Main = ({ AllShows, isShowsVisible, selectedShow,
    episodes, fetchEpisodes, showSelectedShowEpisodes,
    isEpisodesVisble, singleEpisode, showSingle,
    setShowSingle, show, hide, selectSingleEpisode }) => {



    return (
        <>
            {showSingle ? <SingleEpisodeSingiliton
                sshow={selectedShow}
                epi={singleEpisode}
                hide={hide}
                show={show}
            /> : ''}

            {isEpisodesVisble ?
                <MakePageForEpisodes
                    shows={episodes}
                    makeTitle={makeTitle}
                    show={show}
                    hide={hide}
                    showSingle={showSingle}
                    setShowSingle={setShowSingle}
                    selectSingleEpisode={selectSingleEpisode}
                /> : ''}

            {isShowsVisible ? <MakePageForShows
                shows={AllShows}
                showSelectedShowEpisodes={showSelectedShowEpisodes}
                makeTitle={makeTitle}
                show={show}
                hide={hide}
            /> : ''}

        </>
    )


}


const MakePageForShows = ({ shows, showSelectedShowEpisodes, show, hide }) => {

    return (
        <>
            {shows.map((showNow) => {
                return (<Singliton
                    key={showNow.id}
                    singleShow={showNow}
                    showSelectedShowEpisodes={showSelectedShowEpisodes}
                //togleSingle={togleSingle}
                />)
            })}
        </>
    )
}



const Singliton = ({ singleShow, showSelectedShowEpisodes }) => {
    let show = singleShow;
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

const MakePageForEpisodes = ({ shows, makeTitle, togleEpisodes, isEpisodesVisible,
    showSingle, setShowSingle, show, hide, selectSingleEpisode }) => {

    return (
        <>
            {shows.map((showNow) => {
                return (<EpiSingliton
                    key={showNow.id}
                    epi={showNow}
                    makeTitle={makeTitle}
                    isEpisodesVisible={isEpisodesVisible}
                    showSingle={showSingle}
                    setShowSingle={setShowSingle}
                    show={show}
                    hide={hide}
                    selectSingleEpisode={selectSingleEpisode}

                />)
            })}
        </>
    )
}




const EpiSingliton = ({ epi, makeTitle, show, hide, isEpisodesVisible,
    showSingle, setShowSingle, selectSingleEpisode }) => {

    return (
        <div className="third">
            <h4 className="epi-title" id={epi.id}>  {makeTitle(epi)} </h4>
            <img height="140px" width="250px" src={epi.image ? epi.image.medium ? epi.image.medium : epi.image.original ? epi.image.original : `${process.env.PUBLIC_URL}/no-image-found-360x260.png` : `${process.env.PUBLIC_URL}/no-image-found-360x260.png`} alt={makeTitle(epi)} />
            {epi.summary
                ? <p className="limited"
                    dangerouslySetInnerHTML={{ __html: epi.summary.replace(new RegExp('<p>|</p>', 'gi'), '') }} />
                : <p>No Summary Available</p>
            }

            <hr style={{ marginTop: '15px', marginBottom: '15px' }} />


            <button className="btn-show" onClick={() => {
                hide('episodes'); show('single episode'); selectSingleEpisode(epi.id);
            }}> Episode Info </button>
        </div>
    )
}


const SingleEpisodeSingiliton = ({ epi, sshow, hide, show }) => {
    let ss = sshow[0]
    let ep = epi[0];
    console.log(epi[0])


    return (
        <>
            <div className="half">
                <h4 className="epi-title" id={ep.id}> Episode:  {makeTitle(ep)} </h4>

                {ep.summary
                    ? <p className="fixed"
                        dangerouslySetInnerHTML={{ __html: ep.summary.replace(new RegExp('<p>|</p>', 'gi'), '') }} />
                    : <p>No Summary Available</p>
                }

                <p> First Release: {`${ep.airdate} at: ${ep.airtime}`}</p>
                <p> Run Time: {`${ep.runtime} mins`}</p>

                <a href={ep.url}> <button className="btn-show" onClick={() => { }}> Show on TV mase </button> </a>

                <button className="btn-show" onClick={() => { hide('single episode'); show('episodes') }}> Back To Episodes </button>

                <hr style={{ marginTop: '15px', marginBottom: '15px' }} />
                <img width="100%" src={ep.image ? ep.image.medium ? ep.image.medium : ep.image.original ? ep.image.original : `${process.env.PUBLIC_URL}/no-image-found-360x260.png` : `${process.env.PUBLIC_URL}/no-image-found-360x260.png`} alt={makeTitle(ep)} />
            </div>

            <div className="half" >
                <h4 className="epi-title" id={ss.id}> show: {ss.name} </h4>
                {ss.summary
                    ? <p className="fixed"
                        dangerouslySetInnerHTML={{ __html: ss.summary.replace(new RegExp('<p>|</p>', 'gi'), '') }} />
                    : <p>No Summary Available</p>}



                <hr style={{ marginTop: '15px', marginBottom: '15px' }} />
                <img width="100%" src={ss.image ? ss.image.medium ? ss.image.medium : ss.image.original ? ss.image.original : `${process.env.PUBLIC_URL}/no-image-found-360x260.png` : `${process.env.PUBLIC_URL}/no-image-found-360x260.png`} alt={ss.name} />
            </div>
        </>
    )
}

export default Main;