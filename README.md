Line Number 代码行数
-------

# [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coverage-image]][coverage-url]

## 背景

代码经过预处理后行数可能会发生变化，当我们分析问题时通常需要源代码的行号

### 需求场景

* 标记执行代码所在行数。

## 使用

### 安装

```bash
$ npm i -g linenum
```

### 命令行

```bash
$ linenum app.js -o app.release.js
```

## License

MIT © [zswang](http://weibo.com/zswang)

[npm-url]: https://npmjs.org/package/linenum
[npm-image]: https://badge.fury.io/js/linenum.svg
[travis-url]: https://travis-ci.org/zswang/linenum
[travis-image]: https://travis-ci.org/zswang/linenum.svg?branch=master
[coverage-url]: https://coveralls.io/github/zswang/linenum?branch=master
[coverage-image]: https://coveralls.io/repos/zswang/linenum/badge.svg?branch=master&service=github
