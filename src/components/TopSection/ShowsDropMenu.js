import React, { useEffect } from 'react';

export default ({ allShows }) => {

    const fillOptions = (allShows) => {
        return allShows.map(s => { return (<option key={s.id} value={s.id}> {s.name} </option>) })
    }

    const showSelectedShowEpisodes = (showId) => {

    }



    return (
        <select id="showSelector" autoFocus="-1" onChange={(e) => { showSelectedShowEpisodes(e.target.value) }}>
            <option value="All Shows" defaultValue="selected">All Shows </option>
            {fillOptions(allShows.allShows)}
        </select>
    )
}


