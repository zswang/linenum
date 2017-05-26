(function (exportName) {
  /* global exports */
  var exports = {};
  /**
   * @file linenum
   *
   * This tool will replace text pattern with the line number.
   * @author
   *   zswang (http://weibo.com/zswang)
   * @version 0.0.13
   * @date 2017-05-26
   */
  /**
   * 替换字符串行号
   * 
   * @param {String} text 源字符串
   * @param {Object} options 配置项
   * @param {RegExp|String=} options.pattern 匹配模式 default: /\^linenum/g
   * @param {Number=} options.offset 偏移 default: 1
   * @param {String=} options.prefix 前缀
   * @param {String=} options.suffix 后缀
   * @return {String} 返回替换后的字符串
   '''<example>'''
   * @example replace():base
    ```js
    console.log(linenum.replace('^linenum 1\n^linenum 2\n^linenum 3'));
    // > 1 1
    // > 2 2
    // > 3 3
    ```
   * @example replace():prefix & suffix
    ```js
    console.log(linenum.replace('^linenum 1\n^linenum 2\n^linenum 3', {
      prefix: 'app.js:',
      suffix: '->'
    }));
    // > app.js:1-> 1
    // > app.js:2-> 2
    // > app.js:3-> 3
    ```
   * @example replace():pattern
    ```js
    console.log(linenum.replace('__LINE__ 1\n__LINE__ 2\n__LINE__ 3', {
      pattern: '__LINE__'
    }));
    // > 1 1
    // > 2 2
    // > 3 3
    ```
   * @example replace():offset 3
    ```js
    console.log(linenum.replace('^linenum 1\n^linenum 2\n^linenum 3', {
      offset: 3
    }));
    // > 3 1
    // > 4 2
    // > 5 3
    ```
   '''</example>'''
   */
  function replace(content, options) {
    options = options || {};
    var prefix = options.prefix || '';
    var suffix = options.suffix || '';
    var pattern = options.pattern || /\^linenum/g;
    var offset = typeof options.offset === 'undefined' ? 1 : Math.floor(options.offset);
    return String(content).split(/\r?\n/).map(function (line, index) {
      return line.replace(pattern, function () {
        return prefix + (index + offset) + suffix;
      });
    }).join('\n');
  }
  exports.replace = replace;
  /* global define,module,window */
  /* exported exports */
  /* istanbul ignore next */
  if (typeof define === 'function') {
    if (define.amd) {
      define(function () {
        return exports;
      });
    }
  }
  else if (typeof module !== 'undefined' && module.exports) {
    module.exports = exports;
  }
  else {
    window[exportName] = exports;
  }
})('linenum');