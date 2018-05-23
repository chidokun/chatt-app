import _ from 'superagent';

const __ = 'http://localhost:10010';

export const $ = {
    get: (url) => {
        return _.get(`${__}${url}`);
    },
    post: (url) => {
        return _.post(`${__}${url}`);
    },
    put: (url) => {
        return _.put(`${__}${url}`);
    },
    patch: (url) => {
        return _.patch(`${__}${url}`);
    },
    delete: (url) => {
        return _.delete(`${__}${url}`);
    }
}