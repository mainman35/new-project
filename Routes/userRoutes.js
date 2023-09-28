const express = require("express");
const {home,register,login }=require("../Controllers/userController");

 const router =express.Router();

 
 router.get('/', home),
 router.get('/register', register)
 router.get('/login', login)

 module.exports = router;
