//File Name: index.js
//Student Name: Karen Dela Cruz
//Student ID: 301296127
//Date: 9/30/2023

let express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home'});
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Home'});
});

/* GET About Us page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About'});
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects'});
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services'});
});

/* GET Contact Us page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact'});
});

/* navigate to Services page. */
router.get('/serviceregister', function(req, res, next) { //routing to service page after service registeration button is clicked. 
  res.render('serviceregister', { title: 'Register'});
});

module.exports = router;
