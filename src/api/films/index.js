import getUrl, { url } from '../../helpers/api';

/**
 * This calls the film url
 */
const films = () => {
    const urlFetch = url("films");
    return getUrl(urlFetch)
}

export default films;
