/** Routes for Lunchly */

const express = require("express");
const router = new express.Router();

/** Homepage: show list of customers. */

router.get("/", function (req, res, next) {
    try {
        return res.render("homepage.html");
    } catch (err) {
        return next(err);
    }
});

router.get('/projects', function (req, res, next) {
    try {
        return res.render('projects.html');
    } catch (err) {
        return next(err);
    }
})

router.get('/resume', function (req, res, next) {
    try {
        return res.render('resume.html');
    } catch (err) {
        return next(err);
    }
})




module.exports = router;
