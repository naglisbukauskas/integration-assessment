/**
 * The `doLookup` method should query the Shodan InternetDB for each IPv4 address passed into the `entities`
 * parameter.  You can try your method out by running the command `npm run search` in the root of this project.
 *
 * @param entities {Array} - An array of entity objects.  See `.data/input.json` for an example of what the `entities`
 * parameter looks like.
 * @returns {Promise<*[]>} - An array of results objects (See README.md for the full output specification).
 */

const axios = require("axios");
const baseUrl = "https://internetdb.shodan.io/";

async function doLookup(entities) {
  // Add additional logic here that will query the Shodan InternetDB API
  // and add the results to the `lookupResults` array.
  // Please see the README.md for full instructions

    const lookupResults = [];

    //handle duplicates and nonIps ipvalidation?
   entities = entities.filter((item) => (item.isIP));
   let cleanEntities = new Set(entities.map(item => item.value));


   //Iterative

   // for await (let ip of cleanEntities) {
   //   let requestUrl = baseUrl + ip;
   //
   //   //this is assumed to be true bc of the way I filtered and there being no IPv6 in the input. How verify?
   //   let entityObj = {
   //     value: ip,
   //     type: 'IPv4',
   //     isIP: true,
   //     isDomain: false
   //   }
   //
   //   let lookupResultsObject= {}
   //
   //   try {
   //     let result = await axios.get(requestUrl);
   //
   //     lookupResultsObject.entity = entityObj;
   //     lookupResultsObject.data = result.data;
   //
   //     lookupResults.push(lookupResultsObject);
   //
   //   } catch (e) {
   //     lookupResultsObject.entity = entityObj;
   //     lookupResultsObject.data = null;
   //   }
   // }
   //Finished this in 20 mins how better

    //This is bad but map can only be on arrays
    cleanEntities = Array.from(cleanEntities);

    let resList = await Promise.all(
      cleanEntities.map(async ip => {

        let entityObj = {
              value: ip,
              type: 'IPv4',
              isIP: true,
              isDomain: false
            }

        let requestUrl = baseUrl + ip;

        try {

          let apiResult = (await (axios.get(requestUrl))).data;

          return {
            entity: entityObj,
            data: apiResult
          }

        } catch (e) {

          return {
            entity: entityObj,
            data: null
          }
        }
      })
    )
  //done 35:09

    // lookupResults.push(resList);
  for(let item of resList) {
    //cant reassign bc const
    lookupResults.push(item);
  }


  //stop work 40
    return lookupResults;
}

module.exports = {
    doLookup
}