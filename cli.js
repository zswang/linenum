#!/usr/bin/env node

var path = require('path');
var fs = require('fs');
var mkdirp = require('mkdirp');
var packageInfo = require('./package.json');

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
if (process.output) {
  mkdirp(path.dirname(process.output));
  fs.writeFileSync(process.output, content);
  console.log(colors.green(util.format('%j linenum output complete.', filenames)));
}
else {
  console.log(content);
}