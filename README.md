# Integration Interview Assignment

## Setup

We recommend cloning this repo to your local system to get started.

```
git clone https://github.com/breachintelligence/integration-interview-assignment
```

Alternatively, you can download the repo as a zip: https://github.com/breachintelligence/integration-interview-assignment/archive/refs/heads/master.zip

When submitting your result you can send us a copy of the repo with your solution zipped or tar'd.  Alternatively, you can push your solution to a new GitHub repository by changing the remote origin and then sending us a link to your repo.

```
git remote set-url origin git@github.com:{{your-account}}/{{your-repo}}.git
git branch -M main
git push -u origin main
```

> Please do not fork or create a PR off of this repo when working on your solution

## Overview

Your assignment is to implement a method called `doLookup` which takes as input an array of entity objects. You can find the input to the `doLookup` method in the `data/input.json` file. For each IPv4 address in the list of entity objects, the `doLookup` method should query the Shodan InternetDB API and return the results.  A scaffold for the `doLookup` method has been provided within the `do-lookup.js` file for you to use.

This particular API has a single endpoint `GET /{ip}` which takes as input an IP address and returns information about that IP address in JSON format.  You can view sample output here: https://internetdb.shodan.io/8.8.8.8.

You can view the full documentation for the Shodan InternetDB API here: https://internetdb.shodan.io/

The `doLookup` method should return an Array of result objects where a result object has two, top-level properties.  The first property is `entity` and should be the entity object that was queried.  The second property is `data` and should be the JSON output from the REST API's `GET /{ip}` endpoint.

Here is an example of the structure of the Array the `doLookup` method should return:

```json
[
    {
        "entity": <entity>,
        "data": <apiData>
    },
    {
        "entity": <entity>,
        "data": <apiData>
    }
  ...
]
```

Here is an example of what the `doLookup` method should return if it was querying a single IP address:

```json
[
  {
    "entity": {
      "value": "8.8.8.8",
      "type": "IPv4",
      "isIP": true,
      "isDomain": false
    },
    "data": {
      "cpes":[],
      "hostnames":["dns.google"],
      "ip":"8.8.8.8",
      "ports":[53,443],
      "tags":[],
      "vulns":[]
    }
  }
]
```

Some IP addresses will not have any results returned (e.g., the IP address `1.2.3.4`).  For these IP addresses simply return `null` for the data.  As an example:

```json
[
  {
    "entity": {
      "value": "1.2.3.4",
      "type": "IPv4",
      "isIP": true,
      "isDomain": false
    },
    "data": null
  }
]
```

We've set up a simple wrapper that will call the `doLookup` method you implement within the `do-lookup.js` file. You can run it with the command:

```
npm run search
```

You should see the output from your method printed to the console.

## Additional Information

1. You can use any third-party NPM modules to assist you with your code (in fact it is encouraged!).  Just add the module(s) to this repo's package.json to incorporate them.

2. Within the `doLookup` method which is async, your implementation can use callbacks, promises or async/await syntax. Regardless of what choice you make for your implementation we may ask you about the other styles during the code review.

3. The `input.json` file includes duplicate entity values as well as non-IP Address data that does not need to be queried.

4. Consider how you will run your queries.  Will you run them in serial, in parallel, in groups?  There is no right or wrong answer, but we will be discussing your choice and how the various options could be implemented during the code review. 

## FAQ

Q: What version of NodeJS should I use?  
A: You can use any version from Node 12 onward.

Q: How long should I spend on the assignment?  
A: Our expectation is that the assignment will take an hour or less to complete.

Q: What is Shodan?  
A: Shodan is a search engine for Internet Connected devices typically used by information security professionals


## Repo Contents

### do-lookup.js

This is the file that contains the `doLookup` method you should provide an implementation for.

### data/input.json

This is the input data for the `doLookup` method which is passed through when running `npm run search`

### main.js

Entrypoint to test the `doLookup` method.