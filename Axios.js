// 1 

// Dependencies
const cheerio = require('cheerio');
const url = require('url');

const getImagesInPage = (urlLink, htmlLink, cb) => {

    const arrayOfImages = [];
    const $ = cheerio.load(htmlLink);

    return getImagesInPage 
    .then(resolve => {
        return $('img').map((i, e) => {
        const imgURL = url.resolve(urlLink, $(e).attr('src'));
        arrayOfImages.push(imgURL);
    })
   .catch(err => {
       return err
   })
    });

    cb(arrayOfImages);
}

// Promisified
getImagesInPagePromisified = (urlLink, htmlLink) => {
    return new Promise((resolve, reject) => {
        const arrayOfImages = [];
        const $ = cheerio.load(htmlLink);

        $('img').map((i, e) => {
            const imgURL = url.resolve(urlLink, $(e).attr('src'));
            arrayOfImages.push(imgURL);
        });
        resolve(arrayOfImages);

    })
}


// 2

const request = require('request');

const getURL = (url) => new Promise((resolve, reject) => {
    request(url, function (error, response, body) {
        if (error) reject(error);
        resolve(body);
        .then(body => {
            const buffer = new Buffer(body);
        })
        .catch(err => {
        })
    });
});


// 3 
const axios = require('axios');
const getImagesFrom = (url) => {
    return axios.get(url)
        .then(response => {
            return getImagesInPagePromisified(url, response.data)
        })
        .catch(err => {
            return new Error
}


// 4 

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>This is the Homepage</h1>');
})

app.get('/getImagesFromPage', (req, res) => {
    res.send('<h1>Images</h1>');
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
});