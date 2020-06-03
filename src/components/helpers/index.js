export const makeTitle = (s) => {
    return ` ${s.name} - S${s.season < 9 ? '0' + s.season : s.season}E${s.number < 9 ? '0' + s.number : s.number}`;

}

