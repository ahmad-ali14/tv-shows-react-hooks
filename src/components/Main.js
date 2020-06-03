import React, { useState, useEffect } from 'react';
import '../App.css'


export default ({ shows, isShowsVisible, selectedShow, episodes }) => {


    const makeTitle = (s) => {
        return ` ${s.name} - S${s.season < 9 ? '0' + s.season : s.season}E${s.number < 9 ? '0' + s.number : s.number}`;

    }


    useEffect(() => {
        //console.log(props.shows);

    })

    return (
        <>
            {isShowsVisible ? <MakePageForShows shows={shows} makeTitle={makeTitle} /> : <MakePageForShows shows={episodes} makeTitle={makeTitle} />}
        </>
    )


}


const MakePageForShows = ({ shows, makeTitle }) => {

    return (
        <>
            {shows.map((showNow) => { return (<Singliton key={showNow.id} show={showNow} />) })}
        </>
    )
}



const Singliton = ({ show }) => {

    return (
        <div className="third">
            <h4 className="epi-title" id={show.id}>  {show.name} </h4>
            <img src={show.image.medium} alt={show.name} />
            <p className="limited"
                dangerouslySetInnerHTML={{ __html: show.summary.replace(new RegExp('<p>|</p>', 'gi'), '') }} />

            <hr style={{ marginTop: '15px', marginBottom: '15px' }} />


            <button className="btn-show" onClick={() => { }}> see Episodes </button>
        </div>
    )
}

