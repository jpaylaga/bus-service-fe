import config from 'config';
import {authHeader} from "../_helpers";

export const busStopService = {
    getAll,
    moreDetails
};

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/bus-stops?lat=1.364313&long=103.991305&radius=4000`, requestOptions).then(handleResponse);
}

function moreDetails(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/bus-stops/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}