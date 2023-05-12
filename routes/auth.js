// let express = require('express');

// let router = express.Router();

// router.get('/login', function(req, res, next) {
//   res.render('login');
// });

// module.exports = router;

let express = require('express');
let passport = require('passport');
let crypto = require('crypto');
let db = require('../db');


let LdapStrategy = require('passport-ldapauth');

passport.use(new LdapStrategy({
    server: {
        url: 'ldap://localhost:389',
        
    }
}));