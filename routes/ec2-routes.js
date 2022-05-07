'use strict';
const express=require('express');
var controllerEc2 = require("../controllers/ec2.controller");
 
const router =express.Router();
router.post('/createEC2Instance',controllerEc2.createEC2Instance);


module.exports={
    routes:router
}