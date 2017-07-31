const express = require('express')
const router = express.Router()
var request = require('request');

router.get('/', (req,res) => {
  res.send('Hello Express!')
})


router.get("/news/latest",(req,res) => {
    var options = {
        method: "GET",
        url: "http://news-at.zhihu.com/api/4/news/latest"
    };
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        res.json(JSON.parse(body))
    });
})

router.get('/news/:id', function (req, res, next) {
    var id = req.params.id;
    var options = {
        method: "GET",
        url: "http://news-at.zhihu.com/api/4/news/" + id
    };
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        res.json(JSON.parse(body))
    });
});

router.get('/news/before/:date', function (req, res, next) {
    var date = req.params.date;
    var options = {
        method: "GET",
        url: "http://news-at.zhihu.com/api/4/news/before/" + date
    };
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        res.json(JSON.parse(body))
    });
});

router.get('/themes', function (req, res, next) {
    var options = {
        method: "GET",
        url: "http://news-at.zhihu.com/api/4/themes"
    };
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        res.json(JSON.parse(body))
    });
});

router.get('/theme/:id', function (req, res, next) {
    var id = req.params.id;
    var options = {
        method: "GET",
        url: "http://news-at.zhihu.com/api/4/theme/"+ id
    };
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        res.json(JSON.parse(body))
    });
});

router.get('/newsDetails/:id', function (req, res, next) {
    var id = req.params.id;
    console.log(1111111111)
    var options = {
        method: "GET",
        url: "http://news-at.zhihu.com/api/4/news/" + id
    };
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        res.json(JSON.parse(body))
    });
});

module.exports = router