var linenum = require('../');


describe("src/linenum.js", function () {
  var assert = require('should');
  var util = require('util');
  var examplejs_printLines;
  function examplejs_print() {
    examplejs_printLines.push(util.format.apply(util, arguments));
  }
  
  

  it("replace():base", function () {
    examplejs_printLines = [];
    examplejs_print(linenum.replace('^linenum 1\n^linenum 2\n^linenum 3'));
    assert.equal(examplejs_printLines.join("\n"), "1 1\n2 2\n3 3"); examplejs_printLines = [];
  });
          
  it("replace():prefix & suffix", function () {
    examplejs_printLines = [];
    examplejs_print(linenum.replace('^linenum 1\n^linenum 2\n^linenum 3', {
      prefix: 'app.js:',
      suffix: '->'
    }));
    assert.equal(examplejs_printLines.join("\n"), "app.js:1-> 1\napp.js:2-> 2\napp.js:3-> 3"); examplejs_printLines = [];
  });
          
  it("replace():pattern", function () {
    examplejs_printLines = [];
    examplejs_print(linenum.replace('__LINE__ 1\n__LINE__ 2\n__LINE__ 3', {
      pattern: '__LINE__'
    }));
    assert.equal(examplejs_printLines.join("\n"), "1 1\n2 2\n3 3"); examplejs_printLines = [];
  });
          
  it("replace():offset 3", function () {
    examplejs_printLines = [];
    examplejs_print(linenum.replace('^linenum 1\n^linenum 2\n^linenum 3', {
      offset: 3
    }));
    assert.equal(examplejs_printLines.join("\n"), "3 1\n4 2\n5 3"); examplejs_printLines = [];
  });
          
});
         