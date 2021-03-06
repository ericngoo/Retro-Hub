/*
    Code to web scrape contribution data from github was copied from Eric Baurfeld (github account: Didericis)
*/

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const cheerio = require('cheerio');
const _ = require('lodash');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//serve static assets if in production!
if(process.env.NODE_ENV === 'production') {
  //Set the static folder after react build
  app.use(express.static(path.join(__dirname, 'client/build')));
}

app.post('/contributions', (req, res, next) => {
    let format = req.body.format;
    let user = req.body.user;
  
    // Render 400 if invalid format given
    const VALID_FORMATS = ['activity', 'count'];
    if (!VALID_FORMATS.includes(format)) {
      return next({ 
        status: 400, 
        message: `Format must be one of ${JSON.stringify(VALID_FORMATS)}`
      });
    }
  
    const url = `https://www.github.com/${user}`;
    request.get(url, (err, response, body) => {
      // Return error if request had an error
      if (err) return next(err);
  
      // Return 404 if user not found
      if (response.statusCode === 404) return next({
        status: 404,
        message: `User '${user}' not found`
      });
  
      // Parse github profile page
      const $ = cheerio.load(body);
      const data = $('rect').get().reduce((data, rect) => {
        // Parse contributions value
        const value = (() => {
          const count = $(rect).data('count');
          if (format === 'activity') return count > 0;
          if (format === 'count') return count;
        })();
  
        // Parse contributions date
        const [year, month, day] = $(rect).data('date').split('-').map(
          dateNum => parseInt(dateNum));
        _.setWith(data, [year, month, day], value, Object);

        return data;
      }, {});
  
      // Render parsed contributions data
      res.send({ data });
    });
  });

  //redirects all ambiguous routes to index.html from react build!!
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
  });
  
  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({ message: err.message });
  });

const port = process.env.PORT || 5000;

app.listen(port, function () {
  console.log("Server started successfully on port " + port + "!");
});