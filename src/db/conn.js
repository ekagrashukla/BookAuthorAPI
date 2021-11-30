const mongoose = require('mongoose');
const express = require('express');
// var config = require('../../config.json');

// const uri = config.SECRET_URI
const uri = ""

mongoose.connect(uri)
.then(()=>console.log("Connection to Database Successful.."))
.catch((err)=>console.log(err));