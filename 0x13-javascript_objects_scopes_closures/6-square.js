#!/usr/bin/node
const Square = require('./5-square.js');

class MySquare extends Square {
	  charPrint(c) {
		      if (c === undefined) {
			            c = 'X';
			          }
		      const row = c.repeat(this.width); character c
		      for (let i = 0; i < this.height; i++) {
			            console.log(row); 
			          }
		    }
}


module.exports = MySquare;


























