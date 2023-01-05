const {doLookup} = require('./do-lookup');
const testData = require('./data/input.json');

(async () => {
    try {
        const results = await doLookup(testData);
        console.info("doLookup results:");
        console.info(results);
    } catch (err) {
        console.error(err);
    }
})();