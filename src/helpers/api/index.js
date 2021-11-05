/**
 * This returns the headers to be used in the API
 */

const createHeaders = () => {
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
    headers: createHeaders(),
    method: 'GET',
  };
  return fetch(url, init)
    .then((response) => response.json());
};

/**
 * This returns the full url fo the fetch request
 *
 * @param {string} The url
 */

const url = (urlParam) => `https://swapi.dev/api/${urlParam}`;

export {
  getUrl as default,
  createHeaders,
  url,
};
