import React from 'react';
import { makeTitle } from '../helpers/index';

const EpisodesDropDown = ({ episodes, showSelectedShowEpisodes, singleEpisode,
    isEpisodesVisible, hide, show, selectSingleEpisode }) => {


    const fillOptions = (episodes) => {
        return episodes.map(s => { return (<option key={s.id} value={s.id}> {makeTitle(s)} </option>) })
    }


    return (
        <>
            <select id="showSelector" autoFocus="-1" value={singleEpisode.length > 0 ? singleEpisode[0].id : ''} onChange={(e) => { hide('episodes'); show('single episode'); selectSingleEpisode(e.target.value); }}>
                <option id="defaultShowSelection" value="All Episodes" defaultValue={isEpisodesVisible ? true : false} >All Episodes </option>
                {fillOptions(episodes)}
            </select>
        </>
    )
}


export default EpisodesDropDown;