import axios from "axios";

/**
 * Make an HTTP request to a specified URI with optional data.
 * @param {Object} options - The request options.
 * @param {string} options.method - The HTTP method for the request (e.g. 'GET', 'POST').
 * @param {string} options.uri - The URI for the request.
 * @param {Object} [options.data] - The data to send with the request.
 * @return {Promise} - A promise that resolves with the server's response.
 */
const req = ({
    method = 'GET',
    url = '',
    uri = '',
    data = {},
    withCredentials = true,
    signal = new AbortController().signal,
}) => {
    let reqUrl = url ? url : `${import.meta.env.SERVER_URL || 'https://localhost:4000/api'}/${uri}`
    var payload = {
        method,
        reqUrl,
        withCredentials,
        signal,
        ...['post', 'patch'].includes(method.toLowerCase()) && { data }
    }
    return axios(payload)
}
export default req;