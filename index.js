#!/usr/bin/env node

function rdcl(c){
	return (this instanceof rdcl) ? ((this.c = (c||'0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_,.;:#+*<([{}])>!?$%&/@~^').split("")), this) : new rdcl(c);
};

rdcl.prototype.encode = function(n){ 
	var res = []; 
	do res.push(this.c[(n%this.c.length)]), n = Math.floor(n/this.c.length); while (n > 0); 
	return res.reverse().join("");
};

rdcl.prototype.decode = function(s){
	var c = this.c;
	return s.split("").reduce(function(p,x){ return p*c.length+c.indexOf(x); },0); 
};

module.exports = rdcl;
