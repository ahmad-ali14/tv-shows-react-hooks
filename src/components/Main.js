import React, { useState, useEffect } from 'react';
import '../App.css'
import { makeTitle } from './helpers/index'


export default ({ AllShows, isShowsVisible, selectedShow, episodes, fetchEpisodes, showSelectedShowEpisodes, isEpisodesVisble, singleEpisode, showSingle, setShowSingle, show, hide }) => {






    // const hideEpisodes = () => {
    //     let elements = [...document.getElementsByClassName('third')];
    //     //console.log('elements', elements);
    //     elements.forEach(e => e.setAttribute('display', 'none'))
    // }

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

            {isEpisodesVisble ?
                <MakePageForEpisodes
                    shows={episodes}
                    makeTitle={makeTitle}
                    show={show}
                    hide={hide}
                    showSingle={showSingle}
                    setShowSingle={setShowSingle}
                //hideEpisodes={hideEpisodes}
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

const MakePageForEpisodes = ({ shows, makeTitle, togleEpisodes, isEpisodesVisible, showSingle, setShowSingle, show, hide }) => {

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

                />)
            })}
        </>
    )
}




const EpiSingliton = ({ epi, makeTitle, show, hide, isEpisodesVisible, showSingle, setShowSingle, }) => {

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
                hide('episodes'); show('single episode');
                //togleEpisodes(); hideEpisodes(); setShowSingle(showSingle = !showSingle)

            }}> All Info </button>
        </div>
    )
}


const SingleEpisode = () => {
    return <div> single Episode </div>
}