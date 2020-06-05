export const makeTitle = (s) => {
    if (!s || !s.name) { return ''; }
    return `${s.name.length > 25 ? s.name.substring(0, 23) : s.name} - S${s.season < 9 ? '0' + s.season : s.season}E${s.number < 9 ? '0' + s.number : s.number}`;

}


export const extractPhoto = (obj) => {
    return obj.image ? obj.image.medium ? obj.image.medium : obj.image.original ? obj.image.original : `${process.env.PUBLIC_URL}/no-image-found-360x260.png` : `${process.env.PUBLIC_URL}/no-image-found-360x260.png`
}

export const doSort = (v) => {
    if (v === 'name-a-z') {
        return function compare(a, b) {
            if (a.name > b.name) return 1;
            if (b.name > a.name) return -1;

            return 0;
        }
    }

    if (v === 'name-z-a') {
        return function compare(a, b) {
            if (b.name > a.name) return 1;
            if (a.name > b.name) return -1;

            return 0;
        }

    }

    if (v === 'rating+') {
        return function compare(a, b) {
            if (a.rating.average > b.rating.average) return 1;
            if (b.rating.average > a.rating.average) return -1;

            return 0;
        }

    }

    if (v === 'rating-') {
        return function compare(a, b) {
            if (b.rating.average > a.rating.average) return 1;
            if (a.rating.average > b.rating.average) return -1;

            return 0;
        }

    }
}


