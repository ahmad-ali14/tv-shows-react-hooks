import React, { useState, useEffect } from 'react';
import '../App.css'


export default ({ shows, isShowsVisible }) => {
    const selectedShow = useState(0);


    const makeTitle = (s) => {
        return ` ${s.name} - S${s.season < 9 ? '0' + s.season : s.season}E${s.number < 9 ? '0' + s.number : s.number}`;

    }


    useEffect(() => {
        //console.log(props.shows);

    })

    return (
        <>
            {isShowsVisible ? <MakePageForShows shows={shows} makeTitle={makeTitle} /> : <p>No shows</p>}
        </>
    )


}


const MakePageForShows = ({ shows, makeTitle }) => {

    return (
        <>
            {shows.map((showNow) => { return (<Singliton key={showNow.id} show={showNow} makeTitle={makeTitle} />) })}
        </>
    )
}



const Singliton = ({ show, makeTitle }) => {

    return (
        <div className="third">
            <h4 className="epi-title" id={show.id}>  {makeTitle(show)} </h4>
            <img src={show.image.medium} alt={makeTitle(show)} />
            <p> {show.summary} </p>
            <p className="lasttext"> status:  Ended   ,
        rating: 6.5   </p>
            <p className="lasttext">
                runtime: 60   ,
                genres:  DramaScience-FictionThriller
      </p>

            <button className="btn-show" onClick={() => { }}> see Episodes </button>
        </div>
    )
}

