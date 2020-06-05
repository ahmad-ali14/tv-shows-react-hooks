export const makeTitle = (s) => {
    if (!s || !s.name) { return ''; }
    return `${s.name.length > 25 ? s.name.substring(0, 23) : s.name} - S${s.season < 9 ? '0' + s.season : s.season}E${s.number < 9 ? '0' + s.number : s.number}`;

}


export const extractPhoto = (obj) => {
    return obj.image ? obj.image.medium ? obj.image.medium : obj.image.original ? obj.image.original : `${process.env.PUBLIC_URL}/no-image-found-360x260.png` : `${process.env.PUBLIC_URL}/no-image-found-360x260.png`
} 