import React, { useEffect } from 'react';

export default ({ allShows, showSelectedShowEpisodes, selectedShow }) => {

    const fillOptions = (allShows) => {
        return allShows.map(s => { return (<option key={s.id} value={s.id}> {s.name} </option>) })
    }





    return (
        <select id="showSelector" autoFocus="-1" onChange={(e) => { showSelectedShowEpisodes(e.target.value) }}>
            <option value="All Shows" defaultValue="selected">All Shows </option>
            {fillOptions(allShows)}
        </select>
    )
}


