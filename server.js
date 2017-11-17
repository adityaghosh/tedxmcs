#!/bin/env node
//  OpenShift sample Node application
var express = require('express');
var app = express();
app.use(express.static(__dirname+'/public'));
//var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
//var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;
var port = process.env.PORT || 3000;
http.listen(port,function() {
    console.log('Node app is running on port', app.get('port'));
  });
