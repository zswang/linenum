#!/usr/bin/env node

var path = require('path');
var fs = require('fs');
var mkdirp = require('mkdirp');
var packageInfo = require('./package.json');
var colors = require('colors');
var util = require('util');

var linenum = require('./');

var program = require('commander');

program
  .version(packageInfo.version)
  .usage('[options] <file ...>')
  .option('-p, --pattern <substr>', 'text replace pattern')
  .option('-o, --output <file>', 'output file')
  .option('-v, --version', 'output version number and exit')
  .option('--prefix <prefix>', 'prefix, default <filename>:')
  .option('--suffix <suffix>', 'suffix')
  .option('--offset <offset>', 'offset, default 1')
  .option('--pattern <pattern>', 'pattern, default "^linenum"')
  .parse(process.argv);

var contents = [];
var filenames = [];
program.args.forEach(function (filename) {
  filenames.push(filename);
  contents.push(linenum.replace(fs.readFileSync(filename), {
    prefix: program.prefix === undefined ? (filename + ':') : '',
    suffix: program.suffix,
    offset: program.offset,
    pattern: program.pattern
  }));
});
var content = contents.join('\n');
if (program.output) {
  mkdirp(path.dirname(program.output));
  fs.writeFileSync(program.output, content);
  console.log(colors.green(util.format('%j linenum output complete.', filenames)));
}
else {
  console.log(content);
}