import React, { useState, useEffect } from 'react';
import '../App.css'


export default ({ shows, isShowsVisible, selectedShow, episodes, fetchEpisodes }) => {


    const makeTitle = (s) => {
        return `${s.name.length > 25 ? s.name.substring(0, 23) : s.name} - S${s.season < 9 ? '0' + s.season : s.season}E${s.number < 9 ? '0' + s.number : s.number}`;

    }


    useEffect(() => {
        //console.log(props.shows);

    })

    return (
        <>
            {isShowsVisible ? <MakePageForShows shows={shows} fetchEpisodes={fetchEpisodes} makeTitle={makeTitle} /> : <MakePageForEpisodes shows={episodes} makeTitle={makeTitle} />}
        </>
    )


}


const MakePageForShows = ({ shows, fetchEpisodes }) => {

    return (
        <>
            {shows.map((showNow) => { return (<Singliton key={showNow.id} show={showNow} fetchEpisodes={fetchEpisodes} />) })}
        </>
    )
}



const Singliton = ({ show, fetchEpisodes }) => {

    return (
        <div className="third">
            <h4 className="epi-title" id={show.id}>  {show.name} </h4>
            <img height="295px" width="210px" src={show.image ? show.image.medium ? show.image.medium : show.image.original ? show.image.original : `${process.env.PUBLIC_URL}/no-image-found-360x260.png` : `${process.env.PUBLIC_URL}/no-image-found-360x260.png`} alt={show.name} />
            <p className="limited"
                dangerouslySetInnerHTML={{ __html: show.summary.replace(new RegExp('<p>|</p>', 'gi'), '') }} />

            <hr style={{ marginTop: '15px', marginBottom: '15px' }} />


            <button className="btn-show" onClick={() => { fetchEpisodes(show.id) }}> see Episodes </button>
        </div>
    )
}

const MakePageForEpisodes = ({ shows, makeTitle }) => {

    return (
        <>
            {shows.map((showNow) => { return (<EpiSingliton key={showNow.id} show={showNow} makeTitle={makeTitle} />) })}
        </>
    )
}




const EpiSingliton = ({ show, makeTitle }) => {

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


            <button className="btn-show" onClick={() => { }}> All Info </button>
        </div>
    )
}