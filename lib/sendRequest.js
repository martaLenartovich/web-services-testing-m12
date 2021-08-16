const request = require('request-promise-native');

async function sendRestRequestWithHeader(opts) {
    let options = {
        uri: opts.uri,
        method: opts.method,
        headers: opts.header,
        json: true,
        resolveWithFullResponse: true
    };

   return request(options);

};

module.exports = sendRestRequestWithHeader;