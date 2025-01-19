# Express.js JSON Body Parsing Bug

This repository demonstrates a common issue encountered when working with JSON request bodies in Express.js applications. The problem arises when the `express.json()` middleware fails to correctly parse the incoming JSON data, resulting in an empty `req.body` object.

## Bug Description

The `bug.js` file contains a simple Express.js server that attempts to handle POST requests with JSON data.  Despite using `express.json()`, the `req.body` remains empty. This prevents the server from processing the intended data.

## Solution

The `bugSolution.js` file provides a solution to this problem by ensuring that the `express.json()` middleware is correctly positioned in the application's middleware stack.  The issue often stems from placing it after other middleware that may alter the request body.