import React, { useEffect } from 'react';

export default ({ allShows, showSelectedShowEpisodes, selectedShow, isShowsVisible }) => {

    const fillOptions = (allShows) => {
        return allShows.map(s => { return (<option selected={selectedShow.id == s.id ? true : false} key={s.id} value={s.id}> {s.name} </option>) })
    }





    return (
        <select id="showSelector" autoFocus="-1" onChange={(e) => { showSelectedShowEpisodes(e.target.value) }}>
            <option value="All Shows" selected={isShowsVisible && selectedShow.id == null ? true : false} defaultValue="selected">All Shows </option>
            {fillOptions(allShows)}
        </select>
    )
}


