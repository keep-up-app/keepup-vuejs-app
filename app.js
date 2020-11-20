/**
 * Loading all dependencies
 */

const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');


/**
 * Creating new Express app.
 */
const app = express();


/**
 * Joining __dirname to /dist for heroku
 */

app.use('/', serveStatic(path.join(__dirname, '/dist')));
app.get(/.*/, (req, res) => res.sendFile(path.resolve(__dirname,'public/index.html')));


/**
 * Deploying app on port 8080 or env.PORT 
 */

const port = process.env.PORT || 8080;
app.listen(port);


/**
 * Simple deployment success feedback
 */

console.log('VUEJS app running on port: ' + port);