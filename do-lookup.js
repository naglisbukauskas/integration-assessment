/**
 * The `doLookup` method should query the Shodan InternetDB for each IPv4 address passed into the `entities`
 * parameter.  You can try your method out by running the command `npm run search` in the root of this project.
 *
 * @param entities {Array} - An array of entity objects.  See `.data/input.json` for an example of what the `entities`
 * parameter looks like.
 * @returns {Promise<*[]>} - An array of results objects (See README.md for the full output specification).
 */
async function doLookup(entities){
    const lookupResults = [];
    // Add additional logic here that will query the Shodan InternetDB API
    // and add the results to the `lookupResults` array.
    // Please see the README.md for full instructions
    return lookupResults;
}

module.exports = {
    doLookup
}