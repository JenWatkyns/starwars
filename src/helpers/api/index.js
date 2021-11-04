/**
 * This returns the headers to be used in the API
 */

const headers = () => {
    const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    };
    return new Headers(headers);
};

/**
 * This returns the promise from the fetch request
 * 
 * @param {string} The url to be fetched
 */

const getUrl = (url) => {
    const init = {
        headers: headers(),
        method: 'GET',
    };
    return fetch(url, init)
    .then(response => response.json());
};

/**
 * This returns the full url fo the fetch request
 * 
 * @param {string} The url 
 */

const url = (url) => `https://swapi.dev/api/${url}`; 

export {
    getUrl as default, 
    headers,
    url,
};
