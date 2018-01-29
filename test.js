#!/usr/bin/env node

var rdcl = require("./index.js")("abcdefghij");
var rnd = Math.round(Math.random()*1000000000);
//console.log("rnd:", rnd, rdcl.to(rnd));
process.exit((rnd === rdcl.decode(rdcl.encode(rnd)))?0:1);