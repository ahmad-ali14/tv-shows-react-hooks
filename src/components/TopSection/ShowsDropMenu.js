import React, { useEffect, useRef } from 'react';

export default ({ allShows, showSelectedShowEpisodes, selectedShow, isShowsVisible }) => {


    const fillOptions = (allShows) => {
        return allShows.map(s => { return (<option key={s.id} value={s.id}> {s.name} </option>) })
    }


    return (
        <select id="showSelector" autoFocus="-1" value={selectedShow.length > 0 ? selectedShow[0].id : ''} onChange={(e) => { showSelectedShowEpisodes(e.target.value) }}>
            <option id="defaultShowSelection" value="All Shows" selected={isShowsVisible ? true : false} >All Shows </option>
            {fillOptions(allShows)}
        </select>
    )
}


