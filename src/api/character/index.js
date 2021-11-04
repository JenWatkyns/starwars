import getUrl from '../../helpers/api';

/**
 * This calls the character url
 * 
 * @param {string} this is the specific character url
 */
const characterInfo = (characterUrl) => {
    return getUrl(characterUrl)
}

export default characterInfo;
