/**
 * Created by Ian on 2014/7/21.
 * 常用功能集合
 * 优化
 * 2016年5月14日13:08:01 添加 window.addEventListener('error', function (e) ... 事件监测
 * 2016年5月28日12:23:26 参照Editor.md 添加加载css和javascript及插件的方式
 * 2016年5月28日15:34:19 添加统一的加载多语言的方式
 * 2016年5月29日09:17:08 添加google语言标识识别
 * 2016年5月29日09:17:24 添加帮助函数。判断undefined和null。 参数转换成数组
 * 2016年6月2日13:26:33 更新$.RTYWebHelper 代码结构，无实质功能升级
 * 2016年6月2日14:27:43 添加$.RTYWebHelper.isSafariExtend 用来扩展判断Safari版本
 * 2016年8月14日22:45:50 修正reportInfo不严谨的问题。现在可以与服务器进行通讯
 *                      添加App运行的平台信息
 * 2016年9月2日09:20:15  reportErrorInfo 添加新参数，用来处理附加的信息
 * 2016年10月19日16:38:06 整個模板加載Agent
 *                      優化語言標識與KendoUI的語言標識
 *                      集成跨平台的加載js\css\html方案。并優化
 *                      幾個RTYConfig單元設置，方便消息共享
 *
 * 2016年11月30日13:02:31
 *                      添加Convert Arguments Into An Array函数
 *                      arguments2Array()
 *
 * 2016年12月25日19:46:52
 *                      直接集成underscore.js 1.8.3 方便处理功能及集成化高的App。
 *                      以前的是间接引用，现在自己集成进来
 */

//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){function n(n){function t(t,r,e,u,i,o){for(;i>=0&&o>i;i+=n){var a=u?u[i]:i;e=r(e,t[a],a,t)}return e}return function(r,e,u,i){e=b(e,i,4);var o=!k(r)&&m.keys(r),a=(o||r).length,c=n>0?0:a-1;return arguments.length<3&&(u=r[o?o[c]:c],c+=n),t(r,e,u,o,c,a)}}function t(n){return function(t,r,e){r=x(r,e);for(var u=O(t),i=n>0?0:u-1;i>=0&&u>i;i+=n)if(r(t[i],i,t))return i;return-1}}function r(n,t,r){return function(e,u,i){var o=0,a=O(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;else if(r&&i&&a)return i=r(e,u),e[i]===u?i:-1;if(u!==u)return i=t(l.call(e,o,a),m.isNaN),i>=0?i+o:-1;for(i=n>0?o:a-1;i>=0&&a>i;i+=n)if(e[i]===u)return i;return-1}}function e(n,t){var r=I.length,e=n.constructor,u=m.isFunction(e)&&e.prototype||a,i="constructor";for(m.has(n,i)&&!m.contains(t,i)&&t.push(i);r--;)i=I[r],i in n&&n[i]!==u[i]&&!m.contains(t,i)&&t.push(i)}var u=this,i=u._,o=Array.prototype,a=Object.prototype,c=Function.prototype,f=o.push,l=o.slice,s=a.toString,p=a.hasOwnProperty,h=Array.isArray,v=Object.keys,g=c.bind,y=Object.create,d=function(){},m=function(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=m),exports._=m):u._=m,m.VERSION="1.8.3";var b=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},x=function(n,t,r){return null==n?m.identity:m.isFunction(n)?b(n,t,r):m.isObject(n)?m.matcher(n):m.property(n)};m.iteratee=function(n,t){return x(n,t,1/0)};var _=function(n,t){return function(r){var e=arguments.length;if(2>e||null==r)return r;for(var u=1;e>u;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;a>c;c++){var f=o[c];t&&r[f]!==void 0||(r[f]=i[f])}return r}},j=function(n){if(!m.isObject(n))return{};if(y)return y(n);d.prototype=n;var t=new d;return d.prototype=null,t},w=function(n){return function(t){return null==t?void 0:t[n]}},A=Math.pow(2,53)-1,O=w("length"),k=function(n){var t=O(n);return"number"==typeof t&&t>=0&&A>=t};m.each=m.forEach=function(n,t,r){t=b(t,r);var e,u;if(k(n))for(e=0,u=n.length;u>e;e++)t(n[e],e,n);else{var i=m.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},m.map=m.collect=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=Array(u),o=0;u>o;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},m.reduce=m.foldl=m.inject=n(1),m.reduceRight=m.foldr=n(-1),m.find=m.detect=function(n,t,r){var e;return e=k(n)?m.findIndex(n,t,r):m.findKey(n,t,r),e!==void 0&&e!==-1?n[e]:void 0},m.filter=m.select=function(n,t,r){var e=[];return t=x(t,r),m.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},m.reject=function(n,t,r){return m.filter(n,m.negate(x(t)),r)},m.every=m.all=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},m.some=m.any=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},m.contains=m.includes=m.include=function(n,t,r,e){return k(n)||(n=m.values(n)),("number"!=typeof r||e)&&(r=0),m.indexOf(n,t,r)>=0},m.invoke=function(n,t){var r=l.call(arguments,2),e=m.isFunction(t);return m.map(n,function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)})},m.pluck=function(n,t){return m.map(n,m.property(t))},m.where=function(n,t){return m.filter(n,m.matcher(t))},m.findWhere=function(n,t){return m.find(n,m.matcher(t))},m.max=function(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],e>i&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(u>o||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},m.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],i>e&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(o>u||1/0===u&&1/0===i)&&(i=n,o=u)});return i},m.shuffle=function(n){for(var t,r=k(n)?n:m.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=m.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},m.sample=function(n,t,r){return null==t||r?(k(n)||(n=m.values(n)),n[m.random(n.length-1)]):m.shuffle(n).slice(0,Math.max(0,t))},m.sortBy=function(n,t,r){return t=x(t,r),m.pluck(m.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=x(r,e),m.each(t,function(e,i){var o=r(e,i,t);n(u,e,o)}),u}};m.groupBy=F(function(n,t,r){m.has(n,r)?n[r].push(t):n[r]=[t]}),m.indexBy=F(function(n,t,r){n[r]=t}),m.countBy=F(function(n,t,r){m.has(n,r)?n[r]++:n[r]=1}),m.toArray=function(n){return n?m.isArray(n)?l.call(n):k(n)?m.map(n,m.identity):m.values(n):[]},m.size=function(n){return null==n?0:k(n)?n.length:m.keys(n).length},m.partition=function(n,t,r){t=x(t,r);var e=[],u=[];return m.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},m.first=m.head=m.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:m.initial(n,n.length-t)},m.initial=function(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},m.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:m.rest(n,Math.max(0,n.length-t))},m.rest=m.tail=m.drop=function(n,t,r){return l.call(n,null==t||r?1:t)},m.compact=function(n){return m.filter(n,m.identity)};var S=function(n,t,r,e){for(var u=[],i=0,o=e||0,a=O(n);a>o;o++){var c=n[o];if(k(c)&&(m.isArray(c)||m.isArguments(c))){t||(c=S(c,t,r));var f=0,l=c.length;for(u.length+=l;l>f;)u[i++]=c[f++]}else r||(u[i++]=c)}return u};m.flatten=function(n,t){return S(n,t,!1)},m.without=function(n){return m.difference(n,l.call(arguments,1))},m.uniq=m.unique=function(n,t,r,e){m.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=x(r,e));for(var u=[],i=[],o=0,a=O(n);a>o;o++){var c=n[o],f=r?r(c,o,n):c;t?(o&&i===f||u.push(c),i=f):r?m.contains(i,f)||(i.push(f),u.push(c)):m.contains(u,c)||u.push(c)}return u},m.union=function(){return m.uniq(S(arguments,!0,!0))},m.intersection=function(n){for(var t=[],r=arguments.length,e=0,u=O(n);u>e;e++){var i=n[e];if(!m.contains(t,i)){for(var o=1;r>o&&m.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},m.difference=function(n){var t=S(arguments,!0,!0,1);return m.filter(n,function(n){return!m.contains(t,n)})},m.zip=function(){return m.unzip(arguments)},m.unzip=function(n){for(var t=n&&m.max(n,O).length||0,r=Array(t),e=0;t>e;e++)r[e]=m.pluck(n,e);return r},m.object=function(n,t){for(var r={},e=0,u=O(n);u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},m.findIndex=t(1),m.findLastIndex=t(-1),m.sortedIndex=function(n,t,r,e){r=x(r,e,1);for(var u=r(t),i=0,o=O(n);o>i;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},m.indexOf=r(1,m.findIndex,m.sortedIndex),m.lastIndexOf=r(-1,m.findLastIndex),m.range=function(n,t,r){null==t&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var E=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=j(n.prototype),o=n.apply(i,u);return m.isObject(o)?o:i};m.bind=function(n,t){if(g&&n.bind===g)return g.apply(n,l.call(arguments,1));if(!m.isFunction(n))throw new TypeError("Bind must be called on a function");var r=l.call(arguments,2),e=function(){return E(n,e,t,this,r.concat(l.call(arguments)))};return e},m.partial=function(n){var t=l.call(arguments,1),r=function(){for(var e=0,u=t.length,i=Array(u),o=0;u>o;o++)i[o]=t[o]===m?arguments[e++]:t[o];for(;e<arguments.length;)i.push(arguments[e++]);return E(n,r,this,this,i)};return r},m.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=m.bind(n[r],n);return n},m.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return m.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},m.delay=function(n,t){var r=l.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},m.defer=m.partial(m.delay,m,1),m.throttle=function(n,t,r){var e,u,i,o=null,a=0;r||(r={});var c=function(){a=r.leading===!1?0:m.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var f=m.now();a||r.leading!==!1||(a=f);var l=t-(f-a);return e=this,u=arguments,0>=l||l>t?(o&&(clearTimeout(o),o=null),a=f,i=n.apply(e,u),o||(e=u=null)):o||r.trailing===!1||(o=setTimeout(c,l)),i}},m.debounce=function(n,t,r){var e,u,i,o,a,c=function(){var f=m.now()-o;t>f&&f>=0?e=setTimeout(c,t-f):(e=null,r||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=m.now();var f=r&&!e;return e||(e=setTimeout(c,t)),f&&(a=n.apply(i,u),i=u=null),a}},m.wrap=function(n,t){return m.partial(t,n)},m.negate=function(n){return function(){return!n.apply(this,arguments)}},m.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},m.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},m.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),1>=n&&(t=null),r}},m.once=m.partial(m.before,2);var M=!{toString:null}.propertyIsEnumerable("toString"),I=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];m.keys=function(n){if(!m.isObject(n))return[];if(v)return v(n);var t=[];for(var r in n)m.has(n,r)&&t.push(r);return M&&e(n,t),t},m.allKeys=function(n){if(!m.isObject(n))return[];var t=[];for(var r in n)t.push(r);return M&&e(n,t),t},m.values=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},m.mapObject=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=u.length,o={},a=0;i>a;a++)e=u[a],o[e]=t(n[e],e,n);return o},m.pairs=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},m.invert=function(n){for(var t={},r=m.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},m.functions=m.methods=function(n){var t=[];for(var r in n)m.isFunction(n[r])&&t.push(r);return t.sort()},m.extend=_(m.allKeys),m.extendOwn=m.assign=_(m.keys),m.findKey=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=0,o=u.length;o>i;i++)if(e=u[i],t(n[e],e,n))return e},m.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;m.isFunction(t)?(u=m.allKeys(o),e=b(t,r)):(u=S(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;c>a;a++){var f=u[a],l=o[f];e(l,f,o)&&(i[f]=l)}return i},m.omit=function(n,t,r){if(m.isFunction(t))t=m.negate(t);else{var e=m.map(S(arguments,!1,!1,1),String);t=function(n,t){return!m.contains(e,t)}}return m.pick(n,t,r)},m.defaults=_(m.allKeys,!0),m.create=function(n,t){var r=j(n);return t&&m.extendOwn(r,t),r},m.clone=function(n){return m.isObject(n)?m.isArray(n)?n.slice():m.extend({},n):n},m.tap=function(n,t){return t(n),n},m.isMatch=function(n,t){var r=m.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;e>i;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var N=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof m&&(n=n._wrapped),t instanceof m&&(t=t._wrapped);var u=s.call(n);if(u!==s.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(m.isFunction(o)&&o instanceof o&&m.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!N(n[c],t[c],r,e))return!1}else{var f,l=m.keys(n);if(c=l.length,m.keys(t).length!==c)return!1;for(;c--;)if(f=l[c],!m.has(t,f)||!N(n[f],t[f],r,e))return!1}return r.pop(),e.pop(),!0};m.isEqual=function(n,t){return N(n,t)},m.isEmpty=function(n){return null==n?!0:k(n)&&(m.isArray(n)||m.isString(n)||m.isArguments(n))?0===n.length:0===m.keys(n).length},m.isElement=function(n){return!(!n||1!==n.nodeType)},m.isArray=h||function(n){return"[object Array]"===s.call(n)},m.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},m.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){m["is"+n]=function(t){return s.call(t)==="[object "+n+"]"}}),m.isArguments(arguments)||(m.isArguments=function(n){return m.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(m.isFunction=function(n){return"function"==typeof n||!1}),m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},m.isNaN=function(n){return m.isNumber(n)&&n!==+n},m.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===s.call(n)},m.isNull=function(n){return null===n},m.isUndefined=function(n){return n===void 0},m.has=function(n,t){return null!=n&&p.call(n,t)},m.noConflict=function(){return u._=i,this},m.identity=function(n){return n},m.constant=function(n){return function(){return n}},m.noop=function(){},m.property=w,m.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},m.matcher=m.matches=function(n){return n=m.extendOwn({},n),function(t){return m.isMatch(t,n)}},m.times=function(n,t,r){var e=Array(Math.max(0,n));t=b(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},m.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},m.now=Date.now||function(){return(new Date).getTime()};var B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},T=m.invert(B),R=function(n){var t=function(t){return n[t]},r="(?:"+m.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};m.escape=R(B),m.unescape=R(T),m.result=function(n,t,r){var e=null==n?void 0:n[t];return e===void 0&&(e=r),m.isFunction(e)?e.call(n):e};var q=0;m.uniqueId=function(n){var t=++q+"";return n?n+t:t},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var K=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\u2028|\u2029/g,L=function(n){return"\\"+z[n]};m.template=function(n,t,r){!t&&r&&(t=r),t=m.defaults({},t,m.templateSettings);var e=RegExp([(t.escape||K).source,(t.interpolate||K).source,(t.evaluate||K).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,o,a){return i+=n.slice(u,a).replace(D,L),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(t.variable||"obj","_",i)}catch(a){throw a.source=i,a}var c=function(n){return o.call(this,n,m)},f=t.variable||"obj";return c.source="function("+f+"){\n"+i+"}",c},m.chain=function(n){var t=m(n);return t._chain=!0,t};var P=function(n,t){return n._chain?m(t).chain():t};m.mixin=function(n){m.each(m.functions(n),function(t){var r=m[t]=n[t];m.prototype[t]=function(){var n=[this._wrapped];return f.apply(n,arguments),P(this,r.apply(m,n))}})},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=o[n];m.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],P(this,r)}}),m.each(["concat","join","slice"],function(n){var t=o[n];m.prototype[n]=function(){return P(this,t.apply(this._wrapped,arguments))}}),m.prototype.value=function(){return this._wrapped},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return m})}).call(this);
//# sourceMappingURL=underscore-min.map

;
(function (factory) {
    "use strict";
    if (typeof define === "function" && define.amd) {
        define("BS.util", ["jquery"], function () {
            return factory(jQuery || $)
        })
    } else {
        factory(jQuery || $);
    }

    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = factory(jQuery || $)
    }


}(function ($, undefined) {
    "use strict";

    (function ($) {
        window['$'] = $ || {};
        var b$ = {};
        if (window.BS) {
            if (window.BS.b$) {
                b$ = window.BS.b$;
            }
        }

        /// 统一设置ajax选项
        try {
            $.ajaxSetup({
                timeout: 20000,
                async:true
            });
        } catch (e) {
        }

        $.RTYWebHelper = {
            ua: function () {
                return navigator.userAgent.toLowerCase();
            },
            isOpera: function () {
                var t$ = this;
                var ua = t$.ua();
                return ua.indexOf("opera") > -1;
            },
            isChrome: function () {
                var t$ = this;
                var ua = t$.ua();
                return ua.indexOf("chrome") > -1;
            },
            isSafari: function () {
                var t$ = this;
                var ua = t$.ua();
                var isChrome = t$.isChrome();
                return !isChrome && (/webkit|khtml/).test(ua);
            },
            isSafari3: function () {
                var t$ = this;
                var ua = t$.ua();
                var isSafari = t$.isSafari();
                return isSafari && ua.indexOf('webkit/5') != -1;
            },
            isSafariExtend: function (version) {
                var t$ = this;
                var ua = t$.ua();
                var isSafari = t$.isSafari();

                /** 各版本对照关系
                 * 可以通过 http://www.51.la/report/3_Client.asp?t=soft&id=2812271 获取现在机器的配置
                 * AppleWebKit/601.6.17    MacOSX 10.11.5
                 * AppleWebKit 601.5.17
                 * AppleWebKit 601.1.46
                 * AppleWebKit/600.8.9     MacSOX 10.10.5
                 * AppleWebKit 600.1.4

                 * AppleWebKit/537.75.14   MacSOX 10.9.3
                 * AppleWebKit/534.57      ====================　windows机器上测试环境
                 * AppleWebKit/534.55      MacSOX 10.7.3
                 * AppleWebKit/534.46
                 * AppleWebKit 534.34
                 * AppleWebKit/537.13      MacSOX 10.6.8
                 * AppleWebKit 534.30
                 * AppleWebKit/534.15      MacSOX 10.6.5
                 * AppleWebKit/533.1
                 */
                return isSafari && ua.indexOf('webkit/' + version) != -1; //Mac 10.10.5
            },
            isMacOS: function () {
                var nav = navigator;
                try {
                    var oscpu = nav["oscpu"]; // for firefox developer editon version
                    if (oscpu) {
                        var low_oscpu = oscpu.toLowerCase();
                        return low_oscpu.indexOf('mac') != -1;
                    }
                } catch (e) {
                    console.error(e);
                }

                return false;
            },
            isWinOS: function () {
                var nav = navigator;
                try {
                    var oscpu = nav["oscpu"]; // for firefox developer editon version
                    if (oscpu) {
                        var low_oscpu = oscpu.toLowerCase();
                        return low_oscpu.indexOf('windows') != -1;
                    }
                } catch (e) {
                    console.error(e);
                }

                return false;
            },
        };


        //============================================================================================
        //兼容函数处理
        //============================================================================================
        if (typeof window.console === "undefined") {
            window.console = {
                log: function () {
                }
            };
        }
        // there are places in the framework where we call `warn` also, so we should make sure it exists
        if (typeof window.console.warn === "undefined") {
            window.console.warn = function (msg) {
                this.log("warn: " + msg);
            }
        }

        if (!Array.from) {
            Array.from = (function () {
                var toStr = Object.prototype.toString;
                var isCallable = function (fn) {
                    return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
                };
                var toInteger = function (value) {
                    var number = Number(value);
                    if (isNaN(number)) {
                        return 0;
                    }
                    if (number === 0 || !isFinite(number)) {
                        return number;
                    }
                    return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
                };
                var maxSafeInteger = Math.pow(2, 53) - 1;
                var toLength = function (value) {
                    var len = toInteger(value);
                    return Math.min(Math.max(len, 0), maxSafeInteger);
                };

                // The length property of the from method is 1.
                return function from(arrayLike /*, mapFn, thisArg */) {
                    // 1. Let C be the this value.
                    var C = this;

                    // 2. Let items be ToObject(arrayLike).
                    var items = Object(arrayLike);

                    // 3. ReturnIfAbrupt(items).
                    if (arrayLike == null) {
                        throw new TypeError(
                            "Array.from requires an array-like object - not null or undefined"
                        );
                    }

                    // 4. If mapfn is undefined, then let mapping be false.
                    var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
                    var T;
                    if (typeof mapFn !== 'undefined') {
                        // 5. else
                        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
                        if (!isCallable(mapFn)) {
                            throw new TypeError(
                                'Array.from: when provided, the second argument must be a function'
                            );
                        }

                        // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
                        if (arguments.length > 2) {
                            T = arguments[2];
                        }
                    }

                    // 10. Let lenValue be Get(items, "length").
                    // 11. Let len be ToLength(lenValue).
                    var len = toLength(items.length);

                    // 13. If IsConstructor(C) is true, then
                    // 13. a. Let A be the result of calling the [[Construct]] internal method of C with an argument list containing the single item len.
                    // 14. a. Else, Let A be ArrayCreate(len).
                    var A = isCallable(C) ? Object(new C(len)) : new Array(len);

                    // 16. Let k be 0.
                    var k = 0;
                    // 17. Repeat, while k < len… (also steps a - h)
                    var kValue;
                    while (k < len) {
                        kValue = items[k];
                        if (mapFn) {
                            A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T,
                                kValue, k);
                        } else {
                            A[k] = kValue;
                        }
                        k += 1;
                    }
                    // 18. Let putStatus be Put(A, "length", len, true).
                    A.length = len;
                    // 20. Return A.
                    return A;
                };
            }());
        }

        //=============================================================================================
        //end 兼容函数处理

        $.enable_AppConfig_debug = false;

        $.ConfigServer = {
            getDomain: function (use_debug) {
                var debug = use_debug || $.enable_AppConfig_debug;
                var isHttps = 'https:' == document.location.protocol;
                // var prex = isHttps ? 'https://' : 'http://';
                var prex = 'https://'; // 升级以后的，都需要https:// 安全请求

                return debug == true ? (prex + "127.0.0.1:3000") : (prex + "www.romanysoft.com");
            },
            getMessageServer: function (use_debug) {
                var debug = use_debug || $.enable_AppConfig_debug;
                return debug == true ? "ws://127.0.0.1:3000" :
                    "ws://www.romanysoft.com:8000";
            }
        };

        $.ConfigClass = {
            domain: function () {
                return $.ConfigServer.getDomain($.enable_AppConfig_debug);
            }(),
            messageServer: function () { //消息服务器
                return $.ConfigServer.getMessageServer($.enable_AppConfig_debug);
            }(),

            CACHE_EXPIRE: 60000 * 10 // 数据缓存时间
        };


        //=============================================================================================
        // 方便配置，
        //=============================================================================================
        (function () {
            var $du = $.RTY_Config = {};
            $du.kendoui_url = ""; // 配置KendoUI的Url方便，全局处理
        })();

        //=============================================================================================
        // 对象克隆
        $.objClone = function (Obj) {
            var buf;
            if (Obj instanceof Array) {
                buf = []; //创建一个空的数组
                var i = Obj.length;
                while (i--) {
                    buf[i] = $.objClone(Obj[i]);
                }
                return buf;
            } else if (Obj instanceof Object) {
                buf = {}; //创建一个空对象
                for (var k in Obj) { //为这个对象添加新的属性
                    buf[k] = $.objClone(Obj[k]);
                }
                return buf;
            } else {
                return Obj;
            }
        };

        // 获取kendo的时间
        $.getMyDateStr = function (format) {
            if (kendo) {
                if (format == null) {
                    return kendo.toString((new Date()), "yyyy/MM/dd hh:mm:ss");
                } else {
                    return kendo.toString((new Date()), format);
                }
            }

            return "";
        };

        // 简易格式化Date
        $.getFormatDateStr = function (dateObj, fmt) {
            // 对Date的扩展，将 Date 转化为指定格式的String
            // 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
            // 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
            // 例子：
            // (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
            // (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
            var that = dateObj;

            var o = {
                "M+": that.getMonth() + 1, //月份
                "d+": that.getDate(), //日
                "h+": that.getHours(), //小时
                "m+": that.getMinutes(), //分
                "s+": that.getSeconds(), //秒
                "q+": Math.floor((that.getMonth() + 3) / 3), //季度
                "S": that.getMilliseconds() //毫秒
            };
            if (/(y+)/.test(fmt))
                fmt = fmt.replace(RegExp.$1, (that.getFullYear() + "").substr(4 - RegExp.$1.length));
            for (var k in o)
                if (new RegExp("(" + k + ")").test(fmt))
                    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(
                        ("" + o[k]).length)));
            return fmt;
        };

        // obj输出为String
        $.obj2string = function (o) {
            var r = [];
            if (typeof o == "string") {
                return "\"" + o.replace(/([\'\"\\])/g, "\\$1").replace(/(\n)/g, "\\n")
                        .replace(/(\r)/g, "\\r").replace(/(\t)/g, "\\t") + "\"";
            }
            if (typeof o == "object" && o != null) {
                if (!o.sort) {
                    for (var i in o) {
                        r.push(i + ":" + $.obj2string(o[i]));
                    }
                    if (!!document.all && !
                            /^\n?function\s*toString\(\)\s*\{\n?\s*\[native code\]\n?\s*\}\n?\s*$/.test(o.toString)
                    ) {
                        r.push("toString:" + o.toString.toString());
                    }
                    r = "{" + r.join() + "}";
                } else {
                    for (var i = 0; i < o.length; i++) {
                        r.push($.obj2string(o[i]))
                    }
                    r = "[" + r.join() + "]";
                }
                return r;
            }

            if (o != null) {
                return o.toString();
            }

            return '';
        };

        // 字符串参数格式化 {index}
        $.stringFormat = function () {
            if (arguments.length == 0) return null;
            var str = arguments[0];
            for (var i = 1; i < arguments.length; i++) {
                var re = new RegExp('\\{' + (i - 1) + '\\}', 'gm');
                str = str.replace(re, arguments[i]);
            }

            return str;
        };

        // 比较两个版本号
        $.compareVersion = function (version1, version2) {
            try {
                var version1Array = version1.split('.');
                var version2Array = version2.split('.');

                var ver1IntList = [],
                    ver2IntList = [];

                $.each(version1Array, function (idx, value) {
                    ver1IntList.push(parseInt(value));
                });
                $.each(version2Array, function (idx, value) {
                    ver2IntList.push(parseInt(value));
                });

                var i = 0;
                // format
                if (ver1IntList.length < ver2IntList.length) {
                    i = 0;
                    for (; i < (ver2IntList.length - ver1IntList.length); ++i) {
                        ver1IntList.push(0);
                    }
                }

                if (ver1IntList.length > ver2IntList.length) {
                    i = 0;
                    for (; i < (ver1IntList.length - ver2IntList.length); ++i) {
                        ver2IntList.push(0);
                    }
                }

                i = 0;
                for (; i < ver1IntList.length; ++i) {
                    var cVer1 = ver1IntList[i];
                    var cVer2 = ver2IntList[i];

                    if (cVer1 > cVer2) return 1;
                    if (cVer1 < cVer2) return -1;
                }

                return 0;
            } catch (e) {
                return -1;
            }
        };

        // 类型检查,类型不符合,弹出警告
        $.testObjectType = function (obj, type) {
            var actualType = $.type(obj);
            if (actualType !== type) {
                var errMsg = "TestType:[" + type + "], actual:[" + actualType + "].";
                $.error(errMsg);
                alert(errMsg);
            }
        };


        // 模板引擎
        var cache = {};
        $.tmpl = function (str, data) {
            try {
                data = data || {};
                if (str[0] == '#') str = $(str).html();
                var fn = cache[str] ||
                    new Function("o", "var p=[];with(o){p.push('" +
                        str.replace(/[\r\t\n]/g, " ")
                            .replace(/'(?=[^%]*%})/g, "\t")
                            .split("'").join("\\'")
                            .split("\t").join("'")
                            .replace(/{%=(.+?)%}/g, "',$1,'")
                            .split("{%").join("');")
                            .split("%}").join("p.push('") + "');} return p.join('');");
                return fn.apply(data, [data]);
            } catch (e) {
                console.error(e)
            }
        };

        // 数据通信
        $.getpcb = {};
        $.flush_cache = function () {
            cache = {};
        };
        $.setp = function (key) {
            return function (r) {
                var cb = $.getpcb[key];
                try {
                    if (typeof r == 'object') {
                        r.__t = (new Date()).getTime();
                        cache[cb.cache_key] = r;
                    }
                } catch (e) {
                }

                if ($.getpcb['now'] == cb || cb.no_cancel) {
                    $.event.trigger('ajaxComplete');
                    cb(r);
                }
                delete $.getpcb[key];
            }
        };

        $.getp = function (url, data, no_cache, cb, no_cancel) {
            try {
                var b$ = {};
                if (window.BS) {
                    if (window.BS.b$) {
                        b$ = window.BS.b$;
                    }
                }

                if (typeof data == 'function') {
                    cb = data;
                    data = {};
                } else if (typeof no_cache == 'function') {
                    cb = no_cache;
                    if (typeof data == 'object') {
                        no_cache = false;
                    } else {
                        no_cache = data;
                        data = {};
                    }
                }

                var cache_key = url + '::' + $.param(data);
                if (!no_cache && cache[cache_key]) {
                    if ((new Date()).getTime() - cache[cache_key].__t < $.ConfigClass.CACHE_EXPIRE) {
                        $.event.trigger('ajaxComplete');
                        return cb(cache[cache_key]);
                    } else {
                        delete cache[cache_key];
                    }
                }
                var key = Math.random();
                $.getpcb['now'] = $.getpcb[key] = cb;
                $.getpcb[key].no_cancel = no_cancel;
                $.getpcb[key].cache_key = cache_key;

                data = $.extend(data, {
                    cb: '$.setp(' + key + ')',
                    navigatorInfo: navigator.userAgent
                });

                try {
                    if (b$.App) {
                        data = $.extend(data, {
                            app_name: b$.App.getAppName() || 'app_name',
                            app_bundle_id: b$.App.getAppId() || 'app_id',
                            app_sandbox_enable: b$.App.getSandboxEnable() || 0,
                            isRegistered: b$.App.getIsRegistered() || 0,
                            os: b$.App.getAppRunOnOS() || "",
                            userName: b$.App.getUserName() || "UNKNWON_ROMANYSOFT",
                            serialNumber: b$.App.getSerialNumber() || "",
                            version: b$.App.getAppVersion() || '2.0'
                        });
                    }
                } catch (e) {
                    console.error(e)
                }


                $.getScript(url + (url.indexOf('?') == -1 ? '?' : '&') + $.param(data));
                $.event.trigger('ajaxSend');
            } catch (e) {
                console.error(e)
            }
        };


        ///////////////////////////////////////////////////////////////////////////////////////////
        ///{方便函数}
        $.RTYUtils = {
            //====================================================================================
            //类型判断
            //====================================================================================
            getType: function (o) {
                return Object.prototype.toString.call(o);
            },
            /**
             * [function 方便函数，检测无效及空值]
             * @param  {[type]} o [description]
             * @return {[type]}   [description]
             */
            isUndefinedOrNull: function (o) {
                return o == null || o == undefined;
            },

            isUnderfinedOrNullOrFalse: function (o) {
                return o == null || o == undefined || o == false;
            },

            isObject: function (o) {
                return Object.prototype.toString.call(o) === "[object Object]";
            },

            isArray: function (o) {
                return Object.prototype.toString.call(o) === "[object Array]";
            },

            isBoolean: function (o) {
                return Object.prototype.toString.call(o) === "[object Boolean]";
            },

            isString: function (o) {
                return Object.prototype.toString.call(o) === "[object String]";
            },

            isNull: function (o) {
                return Object.prototype.toString.call(o) === "[object Null]";
            },

            isUndefined: function (o) {
                return Object.prototype.toString.call(o) === "[object Undefined]";
            },

            isNumber: function (o) {
                return Object.prototype.toString.call(o) === "[object Number]";
            },

            isDate: function (o) {
                return Object.prototype.toString.call(o) === "[object Date]";
            },

            isRegExp: function (o) {
                return Object.prototype.toString.call(o) === "[object RegExp]";
            },

            isFunction: function (o) {
                return Object.prototype.toString.call(o) === "[object Function]";
            },

            isBlob: function (o) {
                return Object.prototype.toString.call(o) === "[object Blob]";
            },

            /**
             * [function Blob数据转换成字符串]
             * @param o Blob对象
             * @param cb 回调函数
             */
            blobData2String: function (o, cb) {
                try {
                    var reader = new FileReader();
                    reader.onload = function (event) {
                        var text = reader.result;
                        cb && cb(text);
                    };
                    reader.readAsText(o);
                } catch (e) {
                    console.error(e);
                }
            },

            /**
             * [function Blob数据转换成ArrayBuffer], 要变成String，你需要解析ArrayBuf
             * @param o
             * @param cb
             */
            blobData2ArrayBuffer: function (o, cb) {
                try {
                    var reader = new FileReader();
                    reader.onload = function (event) {
                        var buf = reader.result;
                        cb && cb(buf);
                    }
                    reader.readAsArrayBuffer(o);
                } catch (e) {
                    console.error(e);
                }
            },

            /**
             * [function 参数包装成数组]
             * @param  {[type]} param      [参数值]
             * @param  {[type]} allowTypes [允许什么类型的param转换成数组]
             * @return {[type]}            [description]
             */
            param2Array: function (param, allowTypes) {
                var t$ = this;

                allowTypes = allowTypes || [];
                if (t$.isUndefinedOrNull(param)) return [];
                if ($.inArray($.type(param), allowTypes) > -1) return [param];
                if ($.type(param) === "array") return param;

                return [];
            },

            /**
             * Convert Arguments Into An Array
             * @returns []
             */
            arguments2Array:function(){
                var args = [].slice.call(arguments, 0);
                return args;
            },

            //====================================================================================
            // 格式化TypeError的信息到字符串
            //====================================================================================
            getErrorMessage: function (err) {
                var msg = "";
                try {
                    if ($.RTYUtils.isString(err)) {
                        msg = err;
                    } else if ($.RTYUtils.isObject(err)) {
                        var errMsg = [];
                        for (var p in err) {
                            if (err.hasOwnProperty(p)) {
                                errMsg.push(p + "=" + err[p]);
                            }
                        }

                        if (errMsg.length === 0) {
                            msg = err;
                        } else {
                            msg = errMsg.join("\n");
                        }
                    } else {
                        msg += "[RTY_CANT_TYPE] = " + $.RTYUtils.getType(err);
                        msg += JSON.stringify(err);
                    }
                } catch (e) {
                }

                return msg;
            },


            //====================================================================================
            // 队列
            //====================================================================================
            // 参照大鹏，DataStorm服务器utils.js 源码
            queue: function (_done) {
                var _next = [];

                function callback(err) {
                    if (!err) {
                        var next = _next.shift();
                        if (next) {
                            var args = arguments;
                            args.length ? (args[0] = callback) : (args = [callback]);
                            return next.apply(null, args);
                        }
                    }
                    return _done.apply(null, arguments);
                }

                var r = {
                    next: function (func) {
                        _next.push(func);
                        return r;
                    },
                    done: function (func) {
                        _done = func;
                        r.start();
                    },
                    start: function () {
                        callback(null, callback);
                    }
                };
                return r;
            },

            //====================================================================================
            // Check 文件后缀名，支持任意长度后缀
            //====================================================================================
            checkFileType: function (fileName, fileTypes) {
                var _fileNameStr = fileName.substring(fileName.lastIndexOf(".") + 1, fileName.length).toLowerCase();
                if (fileTypes.indexOf(_fileNameStr) != -1)
                    return true;

                return false;
            },

            //=================================================================================
            // 参照Editor.md 的插件方式来处理
            //=================================================================================
            //
            loadPlugins: {},
            loadFiles: {
                js: [],
                css: [],
                plugin: []
            },
            isIE: (navigator.appName == "Microsoft Internet Explorer"),
            isIE8: (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(
                /8./i) == "8."),
            /**
             * 动态加载JS文件的方法
             * Load javascript file method
             *
             * @param {String}   fileName              JS文件名
             * @param {Function} [callback=function()] 加载成功后执行的回调函数
             * @param {String}   [into="head"]         嵌入页面的位置
             */
            loadScript: function (fileName, callback, into) {
                var $t = this;
                into = into || "head";
                callback = callback || function () {
                    };

                var script = null;
                script = document.createElement("script");
                script.id = "romanysoft-js-" + fileName.replace(/[\./]+/g, "-");
                script.type = "text/javascript";
                script.charset = "UTF-8";
                if ($t.checkFileType(fileName, 'js')) {
                    script.src = fileName;
                } else {
                    script.src = fileName + ".js";
                }


                if ($t.isIE8 || $.RTYWebHelper.isSafari()) {
                    script.onreadystatechange = function () {
                        if (script.readyState) {
                            if (script.readyState === "loaded" || script.readyState ===
                                "complete") {
                                script.onreadystatechange = null;
                                $t.loadFiles.js.push(fileName);
                                callback();
                            }
                        }
                    };
                } else {
                    script.onload = function () {
                        $t.loadFiles.js.push(fileName);
                        callback();
                    };
                }

                if (into === "head") {
                    document.getElementsByTagName("head")[0].appendChild(script);
                } else {
                    document.body.appendChild(script);
                }
            },


            /**
             * 动态加载CSS文件的方法
             * Load css file method
             *
             * @param {String}   fileName              CSS文件名
             * @param {Function} [callback=function()] 加载成功后执行的回调函数
             * @param {String}   [into="head"]         嵌入页面的位置
             */
            loadCSS: function (fileName, callback, into) {
                var $t = this;
                into = into || "head";
                callback = callback || function () {
                    };

                var css = document.createElement("link");
                css.id = "romanysoft-css-" + fileName.replace(/[\./]+/g, "-");
                css.type = "text/css";
                css.rel = "stylesheet";
                css.charset = "UTF-8";
                css.onload = css.onreadystatechange = function () {
                    $t.loadFiles.css.push(fileName);
                    callback();
                };

                if ($t.checkFileType(fileName, 'css')) {
                    css.href = fileName;
                } else {
                    css.href = fileName + ".css";
                }


                if (into === "head") {
                    document.getElementsByTagName("head")[0].appendChild(css);
                } else {
                    document.body.appendChild(css);
                }
            },
            /**
             * 动态加载插件，但不立即执行
             * Load editor.md plugins
             *
             * @param {String}   fileName              插件文件路径
             * @param {Function} [callback=function()] 加载成功后执行的回调函数
             * @param {String}   [into="head"]         嵌入页面的位置
             */
            loadPlugin: function (fileName, callback, into) {
                callback = callback || function () {
                    };

                var $t = this;
                $t.loadCSS(fileName); // 加载CSS的定义插件样式
                $t.loadScript(fileName, function () {
                    $t.loadFiles.plugin.push(fileName);
                    callback();
                }, into);
            },
            /**
             * 加载并执行插件
             * Load and execute the plugin
             *
             * @param   {String}     name    plugin name / function name
             * @param   {String}     path    plugin load path
             * @returns {this}               返回this对象
             */
            executePlugin: function (name, path, context) {
                var numargs = arguments.length; // 其余的参数
                var _this = this;

                var cm = context;
                var _args = Array.from(arguments);
                var argsList = [cm].concat(_args.slice(3, numargs));

                if (typeof define === "function") {
                    if (typeof this[name] === "undefined") {
                        alert("Error: " + name +
                            " plugin is not found, you are not load this plugin.");

                        return this;
                    }

                    (numargs > 3) ? this[name].apply(_this, argsList) : this[name](cm);

                    return this;
                }

                if ($.inArray(path, _this.loadFiles.plugin) < 0) {
                    _this.loadPlugin(path, function () {
                        _this.loadPlugins[name] = _this[name];
                        (numargs > 3) ? _this[name].apply(_this, argsList) : _this[name](cm);
                    });
                } else {
                    (numargs > 3) ? $.proxy(_this.loadPlugins[name], this).apply(_this, argsList) :
                        $.proxy(
                            _this.loadPlugins[name], this)(cm);
                }

                return this;
            }

            //====================================================================================
            // 语言加载部分，统一放到这里
            //====================================================================================
            ,
            googleLangIDMaps: {
                "af": {
                    englishName: "Afrikaans",
                    localName: "Afrikaans",
                    zhName: "南非荷兰语",
                    compatible: ["af", "af-AF", "af_af"],
                    compatibleForKendoUI:{
                        culture:"af",
                        message:""
                    }
                },
                "sq": {
                    englishName: "Albanian",
                    localName: "Shqiptar",
                    zhName: "阿尔巴尼亚语",
                    compatible: ["sq", "sq-SQ", "sq_sq"],
                    compatibleForKendoUI:{
                        culture:"sq",
                        message:""
                    }
                },
                "ar": {
                    englishName: "Arabic",
                    localName: "العربية",
                    zhName: "阿拉伯语",
                    compatible: ["ar", "ar-AR", "ar_ar"],
                    compatibleForKendoUI:{
                        culture:"ar",
                        message:""
                    }
                },
                "hy": {
                    englishName: "Armenian",
                    localName: "Հայերեն",
                    zhName: "亚美尼亚语",
                    compatible: ["hy", "hy-HY", "hy_HY"],
                    compatibleForKendoUI:{
                        culture:"hy",
                        message:"hy-AM"
                    }
                },
                "az": {
                    englishName: "Azerbaijani",
                    localName: "Azərbaycan",
                    zhName: "阿塞拜疆语",
                    compatible: ["az", "az-AZ", "az_AZ"],
                    compatibleForKendoUI:{
                        culture:"az",
                        message:""
                    }
                },
                "eu": {
                    englishName: "Basque",
                    localName: "Euskal",
                    zhName: "巴斯克语",
                    compatible: ["eu", "eu-EU", "en_EU"],
                    compatibleForKendoUI:{
                        culture:"eu",
                        message:""
                    }
                },
                "be": {
                    englishName: "Belarusian",
                    localName: "Беларуская",
                    zhName: "白俄罗斯语",
                    compatible: ["be", "be-BE", "be_BE"],
                    compatibleForKendoUI:{
                        culture:"be",
                        message:""
                    }
                },
                "bn": {
                    englishName: "Bengali",
                    localName: "বাঙ্গালী",
                    zhName: "孟加拉语",
                    compatible: ["bn", "bn-BN", "bn_BN"],
                    compatibleForKendoUI:{
                        culture:"bn",
                        message:""
                    }
                },
                "bs": {
                    englishName: "Bosnian",
                    localName: "Bosanski",
                    zhName: "波斯尼亚语",
                    compatible: ["bs", "bs-BS", "bs_BS"],
                    compatibleForKendoUI:{
                        culture:"bs",
                        message:""
                    }
                },
                "bg": {
                    englishName: "Bulgarian",
                    localName: "Български",
                    zhName: "保加利亚语",
                    compatible: ["bg", "bg-BG", "bg_BG"],
                    compatibleForKendoUI:{
                        culture:"bg",
                        message:"bg-BG"
                    }
                },
                "ca": {
                    englishName: "Catalan",
                    localName: "Català",
                    zhName: "加泰罗尼亚语",
                    compatible: ['ca', 'ca-ES', 'ca-es'],
                    compatibleForKendoUI:{
                        culture:"ca",
                        message:""
                    }
                },
                "ceb": {
                    englishName: "Cebuano",
                    localName: "Cebuano",
                    zhName: "宿雾语",
                    compatible: ["ceb"],
                    compatibleForKendoUI:{
                        culture:"",
                        message:""
                    }
                },
                "ny": {
                    englishName: "Chichewa",
                    localName: "Chichewa",
                    zhName: "奇切瓦语",
                    compatible: ["ny", "ny-NY", "ny_NY"],
                    compatibleForKendoUI:{
                        culture:"",
                        message:""
                    }
                },
                "zh-CN": {
                    englishName: "Chinese Simplified",
                    localName: "简体中文",
                    zhName: "中文简体",
                    compatible: ['zh', 'zh-CN', 'zh_cn', 'zh-Hans'],
                    compatibleForKendoUI:{
                        culture:"zh-CN",
                        message:"zh-CN"
                    }
                },
                "zh-TW": {
                    englishName: "Chinese Traditional",
                    localName: "繁体中文",
                    zhName: "中文繁体",
                    compatible: ['zh-TW', 'zh_tw', 'zh-Hant'],
                    compatibleForKendoUI:{
                        culture:"zh-TW",
                        message:"zh-TW"
                    }
                },
                "hr": {
                    englishName: "Croatian",
                    localName: "Hrvatski",
                    zhName: "克罗地亚语",
                    compatible: ['hr', 'hr-HR', 'hr_hr'],
                    compatibleForKendoUI:{
                        culture:"hr",
                        message:""
                    }
                },
                "cs": {
                    englishName: "Czech",
                    localName: "Čeština",
                    zhName: "捷克语",
                    compatible: ['cs', 'cs-CZ', 'cs_cz'],
                    compatibleForKendoUI:{
                        culture:"cs",
                        message:"cs-CZ"
                    }
                },
                "da": {
                    englishName: "Danish",
                    localName: "Dansk",
                    zhName: "丹麦语",
                    compatible: ['da', 'da-DK', 'da-da', 'da_da'],
                    compatibleForKendoUI:{
                        culture:"da",
                        message:"da-DK"
                    }
                },
                "nl": {
                    englishName: "Dutch",
                    localName: "Nederlands",
                    zhName: "荷兰语",
                    compatible: ['nl', 'nl-NL', 'nl_nl'],
                    compatibleForKendoUI:{
                        culture:"nl",
                        message:"nl-NL"
                    }
                },
                "en": {
                    englishName: "English",
                    localName: "English",
                    zhName: "英语",
                    compatible: ['en', 'en-US', 'en_us'],
                    compatibleForKendoUI:{
                        culture:"en-US",
                        message:"en-US"
                    }
                },
                "eo": {
                    englishName: "Esperanto",
                    localName: "Esperanto",
                    zhName: "世界语",
                    compatible: ["eo", "eo-EO", "eo_eo"],
                    compatibleForKendoUI:{
                        culture:"",
                        message:""
                    }
                },
                "et": {
                    englishName: "Estonian",
                    localName: "Eesti",
                    zhName: "爱沙尼亚语",
                    compatible: ["et", "et-ET", "et_ET"],
                    compatibleForKendoUI:{
                        culture:"et",
                        message:""
                    }
                },
                "tl": {
                    englishName: "Filipino",
                    localName: "Pilipino",
                    zhName: "菲律宾语",
                    compatible: ["tl", "tl-TL", "tl_TL"],
                    compatibleForKendoUI:{
                        culture:"",
                        message:""
                    }
                },
                "fi": {
                    englishName: "Finnish",
                    localName: "Suomi",
                    zhName: "芬兰语",
                    compatible: ['fi', 'fi-FI', 'fi_fi'],
                    compatibleForKendoUI:{
                        culture:"fi",
                        message:"fi-FI"
                    }
                },
                "fr": {
                    englishName: "French",
                    localName: "Français",
                    zhName: "法语",
                    compatible: ['fr', 'fr-FR', 'fr_fr'],
                    compatibleForKendoUI:{
                        culture:"fr",
                        message:"fr-FR"
                    }
                },
                "gl": {
                    englishName: "Galician",
                    localName: "Galega",
                    zhName: "加利西亚语",
                    compatible: ["gl", "gl-GL", "gl_GL"],
                    compatibleForKendoUI:{
                        culture:"gl",
                        message:""
                    }
                },
                "ka": {
                    englishName: "Georgian",
                    localName: "ქართული",
                    zhName: "格鲁吉亚语",
                    compatible: ["ka", "ka-kA", "ka_ka"],
                    compatibleForKendoUI:{
                        culture:"ka",
                        message:""
                    }
                },
                "de": {
                    englishName: "German",
                    localName: "Deutsch",
                    zhName: "德语",
                    compatible: ['de', 'de-DE', 'de_de'],
                    compatibleForKendoUI:{
                        culture:"de",
                        message:"de-DE"
                    }
                },
                "el": {
                    englishName: "Greek",
                    localName: "Ελληνικά",
                    zhName: "希腊语",
                    compatible: ['el', 'el-GR', 'el_gr'],
                    compatibleForKendoUI:{
                        culture:"el",
                        message:""
                    }
                },
                "gu": {
                    englishName: "Gujarati",
                    localName: "ગુજરાતી",
                    zhName: "古吉拉特语",
                    compatible: ["gu", "gu-GU", "gu_gu"],
                    compatibleForKendoUI:{
                        culture:"gu",
                        message:""
                    }
                },
                "ht": {
                    englishName: "Haitian Creole",
                    localName: "Kreyòl ayisyen",
                    zhName: "海地克里奥尔语",
                    compatible: ["ht", "ht-HT", "ht_ht"],
                    compatibleForKendoUI:{
                        culture:"",
                        message:""
                    }
                },
                "ha": {
                    englishName: "Hausa",
                    localName: "Hausa",
                    zhName: "豪萨语",
                    compatible: ["ha", "ha-HA", "ha_ha"],
                    compatibleForKendoUI:{
                        culture:"ha",
                        message:""
                    }
                },
                "iw": {
                    englishName: "Hebrew",
                    localName: "עברית",
                    zhName: "希伯来语",
                    compatible: ["iw", "iw-IW", "iw_iw", 'he', 'he-IL', 'he-il'],
                    compatibleForKendoUI:{
                        culture:"",
                        message:""
                    }
                },
                "hi": {
                    englishName: "Hindi",
                    localName: "हिन्दी",
                    zhName: "印地语",
                    compatible: ["hi", "hi-HI", "hi_hi"],
                    compatibleForKendoUI:{
                        culture:"hi",
                        message:""
                    }
                },
                "hmn": {
                    englishName: "Hmong",
                    localName: "Hmoob",
                    zhName: "苗族语",
                    compatible: ["hmn"],
                    compatibleForKendoUI:{
                        culture:"",
                        message:""
                    }
                },
                "hu": {
                    englishName: "Hungarian",
                    localName: "Magyar",
                    zhName: "匈牙利语",
                    compatible: ['hu', 'hu-HU', 'hu_hu'],
                    compatibleForKendoUI:{
                        culture:"hu",
                        message:""
                    }
                },
                "is": {
                    englishName: "Icelandic",
                    localName: "Icelandic",
                    zhName: "冰岛语",
                    compatible: ["is", "is-IS", "is_is"],
                    compatibleForKendoUI:{
                        culture:"is",
                        message:""
                    }
                },
                "ig": {
                    englishName: "Igbo",
                    localName: "Igbo",
                    zhName: "伊博语",
                    compatible: ["ig", "ig-IG", "ig_ig"],
                    compatibleForKendoUI:{
                        culture:"ig",
                        message:""
                    }
                },
                "id": {
                    englishName: "Indonesian",
                    localName: "Indonesia",
                    zhName: "印尼语",
                    compatible: ['id', 'id-ID', 'id_id'],
                    compatibleForKendoUI:{
                        culture:"id",
                        message:""
                    }
                },
                "ga": {
                    englishName: "Irish",
                    localName: "Gaeilge",
                    zhName: "爱尔兰语",
                    compatible: ["ga", "ga-GA", "ga_ga"],
                    compatibleForKendoUI:{
                        culture:"ga",
                        message:""
                    }
                },
                "it": {
                    englishName: "Italian",
                    localName: "Italiano",
                    zhName: "意大利语",
                    compatible: ['it', 'it-IT', 'it_it'],
                    compatibleForKendoUI:{
                        culture:"it",
                        message:"it-IT"
                    }
                },
                "ja": {
                    englishName: "Japanese",
                    localName: "日本の",
                    zhName: "日语",
                    compatible: ['ja', 'ja-JP', 'ja_jp'],
                    compatibleForKendoUI:{
                        culture:"ja-JP",
                        message:"ja-JP"
                    }
                },
                "jw": {
                    englishName: "Javanese",
                    localName: "Jawa",
                    zhName: "爪哇语",
                    compatible: ["jw", "jw-JW", "jw_jw"],
                    compatibleForKendoUI:{
                        culture:"",
                        message:""
                    }
                },
                "kn": {
                    englishName: "Kannada",
                    localName: "ಕನ್ನಡ",
                    zhName: "卡纳达语",
                    compatible: ["kn", "kn-KN", "kn_kn"],
                    compatibleForKendoUI:{
                        culture:"kn",
                        message:""
                    }
                },
                "kk": {
                    englishName: "Kazakh",
                    localName: "Қазақ",
                    zhName: "哈萨克语",
                    compatible: ["kk", "kk-KK", "kk_kk"],
                    compatibleForKendoUI:{
                        culture:"kk",
                        message:""
                    }
                },
                "km": {
                    englishName: "Khmer",
                    localName: "ខ្មែរ",
                    zhName: "高棉语",
                    compatible: ["km", "km-KM", "km_km"],
                    compatibleForKendoUI:{
                        culture:"km",
                        message:""
                    }
                },
                "ko": {
                    englishName: "Korean",
                    localName: "한국의",
                    zhName: "韩语",
                    compatible: ['ko', 'ko-KR', 'ko_kr'],
                    compatibleForKendoUI:{
                        culture:"ko",
                        message:""
                    }
                },
                "lo": {
                    englishName: "Lao",
                    localName: "ລາວ",
                    zhName: "老挝语",
                    compatible: ["lo", "lo-LO", "lo_lo"],
                    compatibleForKendoUI:{
                        culture:"lo",
                        message:""
                    }
                },
                "la": {
                    englishName: "Latin",
                    localName: "Latine",
                    zhName: "拉丁语",
                    compatible: ["la", "la-LA", "la_la"],
                    compatibleForKendoUI:{
                        culture:"",
                        message:""
                    }
                },
                "lv": {
                    englishName: "Latvian",
                    localName: "Latvijas",
                    zhName: "拉脱维亚语",
                    compatible: ["lv", "lv-LV", "lv_lv"],
                    compatibleForKendoUI:{
                        culture:"lv",
                        message:""
                    }
                },
                "lt": {
                    englishName: "Lithuanian",
                    localName: "Lietuvos",
                    zhName: "立陶宛语",
                    compatible: ["lt", "lt-LT", "lt_lt"],
                    compatibleForKendoUI:{
                        culture:"lt",
                        message:""
                    }
                },
                "mk": {
                    englishName: "Macedonian",
                    localName: "Македонски",
                    zhName: "马其顿语",
                    compatible: ["mk", "mk-MK", "mk_mk"],
                    compatibleForKendoUI:{
                        culture:"mk",
                        message:""
                    }
                },
                "mg": {
                    englishName: "Malagasy",
                    localName: "Malagasy",
                    zhName: "马尔加什语",
                    compatible: ["mg", "mg-MG", "mg_mg"],
                    compatibleForKendoUI:{
                        culture:"mg",
                        message:""
                    }
                },
                "ms": {
                    englishName: "Malay",
                    localName: "Melayu",
                    zhName: "马来西亚语",
                    compatible: ['ms', 'ms-MS', 'ms_ms'],
                    compatibleForKendoUI:{
                        culture:"ms",
                        message:""
                    }
                },
                "ml": {
                    englishName: "Malayalam",
                    localName: "മലയാളം",
                    zhName: "马拉雅拉姆语",
                    compatible: ["ml", "ml-ML", "ml_ml"],
                    compatibleForKendoUI:{
                        culture:"ml",
                        message:""
                    }
                },
                "mt": {
                    englishName: "Maltese",
                    localName: "Malti",
                    zhName: "马耳他语",
                    compatible: ["mt", "mt-MT", "mt_mt"],
                    compatibleForKendoUI:{
                        culture:"mt",
                        message:""
                    }
                },
                "mi": {
                    englishName: "Maori",
                    localName: "Maori",
                    zhName: "毛利语",
                    compatible: ["mi", "mi-MI", "mi_mi"],
                    compatibleForKendoUI:{
                        culture:"mi",
                        message:""
                    }
                },
                "mr": {
                    englishName: "Marathi",
                    localName: "मराठी",
                    zhName: "马拉语",
                    compatible: ["mr", "mr-MR", "mr_mr", "mr-IN"],
                    compatibleForKendoUI:{
                        culture:"mr",
                        message:""
                    }
                },
                "mn": {
                    englishName: "Mongolian",
                    localName: "Монгол",
                    zhName: "蒙语",
                    compatible: ["mn", "mn-MN", "mn_mn"],
                    compatibleForKendoUI:{
                        culture:"mn",
                        message:""
                    }
                },
                "my": {
                    englishName: "Myanmar (Burmese)",
                    localName: "မြန်မာ (ဗမာ)",
                    zhName: "缅甸语",
                    compatible: ["my", "my-MY", "my_my"],
                    compatibleForKendoUI:{
                        culture:"my",
                        message:""
                    }
                },
                "ne": {
                    englishName: "Nepali",
                    localName: "नेपाली",
                    zhName: "尼泊尔语",
                    compatible: ["ne", "ne-NE", "ne_ne"],
                    compatibleForKendoUI:{
                        culture:"ne",
                        message:""
                    }
                },
                "no": {
                    englishName: "Norwegian",
                    localName: "Norsk",
                    zhName: "挪威语",
                    compatible: ["no", "no-NO", "no_no", 'nb', "nb-NO", "nb_no"],
                    compatibleForKendoUI:{
                        culture:"no",
                        message:""
                    }
                },
                "fa": {
                    englishName: "Persian",
                    localName: "فارسی",
                    zhName: "波斯语",
                    compatible: ["fa", "fa-FA", "fa_fa"],
                    compatibleForKendoUI:{
                        culture:"fa",
                        message:""
                    }
                },
                "pl": {
                    englishName: "Polish",
                    localName: "Polski",
                    zhName: "波兰语",
                    compatible: ['pl', 'pl-PL', 'pl_pl'],
                    compatibleForKendoUI:{
                        culture:"pl",
                        message:"pl-PL"
                    }
                },
                "pt": {
                    englishName: "Portuguese",
                    localName: "Português",
                    zhName: "葡萄牙语",
                    compatible: ['pt', 'pt-BR', 'pt_br', 'pt-PT', 'pt_pt'],
                    compatibleForKendoUI:{
                        culture:"pt",
                        message:"pt-PT"
                    }
                },
                "ma": {
                    englishName: "Punjabi",
                    localName: "ਪੰਜਾਬੀ ਦੇ",
                    zhName: "旁遮普语",
                    compatible: ["ma", "ma-MA", "ma_ma"],
                    compatibleForKendoUI:{
                        culture:"",
                        message:""
                    }
                },
                "ro": {
                    englishName: "Romanian",
                    localName: "Român",
                    zhName: "罗马尼亚语",
                    compatible: ['ro', 'ro-RO', 'ro_ro'],
                    compatibleForKendoUI:{
                        culture:"ro",
                        message:"ro-RO"
                    }
                },
                "ru": {
                    englishName: "Russian",
                    localName: "Русский",
                    zhName: "俄语",
                    compatible: ['ru', 'ru-RU', 'ru_ru'],
                    compatibleForKendoUI:{
                        culture:"ru",
                        message:"ru-RU"
                    }
                },
                "sr": {
                    englishName: "Serbian",
                    localName: "Српски",
                    zhName: "塞尔维亚语",
                    compatible: ["sr", "sr-SR", "sr_sr"],
                    compatibleForKendoUI:{
                        culture:"sr",
                        message:""
                    }
                },
                "st": {
                    englishName: "Sesotho",
                    localName: "Sesotho",
                    zhName: "塞索托语",
                    compatible: ["st", "st-ST", "st_st"],
                    compatibleForKendoUI:{
                        culture:"st",
                        message:""
                    }
                },
                "si": {
                    englishName: "Sinhala",
                    localName: "සිංහල",
                    zhName: "僧伽罗语",
                    compatible: ["si", "si-SI", "si_si"],
                    compatibleForKendoUI:{
                        culture:"si",
                        message:""
                    }
                },
                "sk": {
                    englishName: "Slovak",
                    localName: "Slovenský",
                    zhName: "斯洛伐克语",
                    compatible: ['sk', 'sk-SK', 'sk_sk'],
                    compatibleForKendoUI:{
                        culture:"sk",
                        message:"sk-SK"
                    }
                },
                "sl": {
                    englishName: "Slovenian",
                    localName: "Slovenščina",
                    zhName: "斯洛文尼亚语",
                    compatible: ["sl", "sl-SL", "sl_sl"],
                    compatibleForKendoUI:{
                        culture:"sl",
                        message:""
                    }
                },
                "so": {
                    englishName: "Somali",
                    localName: "Somali",
                    zhName: "索马里语",
                    compatible: ["so", "so-SO", "so_so"],
                    compatibleForKendoUI:{
                        culture:"so",
                        message:""
                    }
                },
                "es": {
                    englishName: "Spanish",
                    localName: "Español",
                    zhName: "西班牙语",
                    compatible: ['es', 'es-ES', 'es_es', 'es-MX', 'es-XL', 'es-xl'],
                    compatibleForKendoUI:{
                        culture:"es",
                        message:"es-ES"
                    }
                },
                "su": {
                    englishName: "Sudanese",
                    localName: "Sudanese",
                    zhName: "苏丹语",
                    compatible: ["su", "su-SU", "su_su"],
                    compatibleForKendoUI:{
                        culture:"",
                        message:""
                    }
                },
                "sw": {
                    englishName: "Swahili",
                    localName: "Kiswahili",
                    zhName: "斯瓦希里语",
                    compatible: ["sw", "sw-SW", "sw_sw"],
                    compatibleForKendoUI:{
                        culture:"sw",
                        message:""
                    }
                },
                "sv": {
                    englishName: "Swedish",
                    localName: "Svenska",
                    zhName: "瑞典语",
                    compatible: ['sv', 'sv-SE', 'sv_se', 'sv-SV', 'sv_sv'],
                    compatibleForKendoUI:{
                        culture:"sv",
                        message:"sv-SV"
                    }
                },
                "tg": {
                    englishName: "Tajik",
                    localName: "Тоҷикистон",
                    zhName: "塔吉克语",
                    compatible: ["tg", "tg-TG", "tg_tg"],
                    compatibleForKendoUI:{
                        culture:"tg",
                        message:""
                    }
                },
                "ta": {
                    englishName: "Tamil",
                    localName: "தமிழ்",
                    zhName: "泰米尔语",
                    compatible: ["ta", "ta-TA", "ta_ta"],
                    compatibleForKendoUI:{
                        culture:"ta",
                        message:""
                    }
                },
                "te": {
                    englishName: "Telugu",
                    localName: "తెలుగు",
                    zhName: "泰卢固语",
                    compatible: ["te", "te-TE", "te_te"],
                    compatibleForKendoUI:{
                        culture:"te",
                        message:""
                    }
                },
                "th": {
                    englishName: "Thai",
                    localName: "ไทย",
                    zhName: "泰语",
                    compatible: ['th', 'th-TH', 'th_th'],
                    compatibleForKendoUI:{
                        culture:"th",
                        message:""
                    }
                },
                "tr": {
                    englishName: "Turkish",
                    localName: "Türk",
                    zhName: "土耳其语",
                    compatible: ['tr', 'tr-TR', 'tr_tr'],
                    compatibleForKendoUI:{
                        culture:"tr",
                        message:"tr-TR"
                    }
                },
                "uk": {
                    englishName: "Ukrainian",
                    localName: "Український",
                    zhName: "乌克兰语",
                    compatible: ['uk', 'uk-UA', 'uk_ua', 'uk-UK', 'uk_uk'],
                    compatibleForKendoUI:{
                        culture:"uk",
                        message:"uk-UA"
                    }
                },
                "ur": {
                    englishName: "Urdu",
                    localName: "اردو",
                    zhName: "乌尔都语",
                    compatible: ["ur", "ur-UR", "ur_ur"],
                    compatibleForKendoUI:{
                        culture:"ur",
                        message:""
                    }
                },
                "uz": {
                    englishName: "Uzbek",
                    localName: "O'zbekiston",
                    zhName: "乌兹别克语",
                    compatible: ["uz", "uz-UZ", "uz_uz"],
                    compatibleForKendoUI:{
                        culture:"uz",
                        message:""
                    }
                },
                "vi": {
                    englishName: "Vietnamese",
                    localName: "Tiếng Việt",
                    zhName: "越南语",
                    compatible: ['vi', 'vi-VN', 'vi-vn', "vi-VI", "vi_vi"],
                    compatibleForKendoUI:{
                        culture:"vi",
                        message:""
                    }
                },
                "cy": {
                    englishName: "Welsh",
                    localName: "Cymraeg",
                    zhName: "威尔士语",
                    compatible: ["cy", "cy-CY", "cy_cy"],
                    compatibleForKendoUI:{
                        culture:"cy",
                        message:""
                    }
                },
                "yi": {
                    englishName: "Yiddish",
                    localName: "ייִדיש",
                    zhName: "意第绪语",
                    compatible: ["yi", "yi-YI", "yi_yi"],
                    compatibleForKendoUI:{
                        culture:"",
                        message:""
                    }
                },
                "yo": {
                    englishName: "Yoruba",
                    localName: "Yoruba",
                    zhName: "约鲁巴语",
                    compatible: ["yo", "yo-YO", "yo_yo"],
                    compatibleForKendoUI:{
                        culture:"yo",
                        message:""
                    }
                },
                "zu": {
                    englishName: "Zulu",
                    localName: "Zulu",
                    zhName: "祖鲁语",
                    compatible: ["zu", "zu-ZU", "zu_zu"],
                    compatibleForKendoUI:{
                        culture:"zu",
                        message:""
                    }
                }
            },
            getGoogleLangID: function (langKey) {
                "use strict";

                var t$ = this;
                var foundLangID = null;

                // 查找过程
                for (var key in t$.googleLangIDMaps) {
                    var valueObj = t$.googleLangIDMaps[key];
                    var compatibleList = valueObj.compatible;
                    $.each(compatibleList, function (i, ele) {
                        if (ele.toLowerCase() === langKey.toLowerCase()) {
                            foundLangID = key;
                            return false;
                        }
                    })
                }

                return foundLangID;
            },
            loadedLanguage: {
                js: [],
                json: [],

                insert: function (info, ext) {
                    var t$ = this;
                    var jsonStr = JSON.stringify(info);

                    var list = (ext === ".js" ? t$.js : t$.json),
                        found = false;
                    $.each(list, function (i, ele) {
                        var _compare = JSON.stringify(ele);
                        if (_compare === jsonStr) {
                            found = true;
                            return false;
                        }
                    });

                    if (!found) list.push(info);

                }
            },
            /**
             * [function 加载语言]
             * @param  {[type]}   languageFilesPath [语言包路径]
             * @param  {[type]}   fileExt           [文件扩展名: .json 或者 .js]
             * @param  {Function} callback          [成功加载回调]
             * @param  {[string or array]}   referLang         [特指语言标识，未指定使用检测到的
             *                                               传入 undefined 参数，否则，使用GoogleLangID]
             * @param  {[bool]}   trySafeMode       [是否使用安全模式，自动检测英文]*
             * @return {[type]}                     [description]
             */
            loadLanguage: function (languageFilesPath, fileExt, callback, referLang, trySafeMode) {
                "use strict";

                var t$ = this;
                var _trySafeMode = (trySafeMode === false ? trySafeMode : true);
                var referLangList = t$.param2Array(referLang, ["string"]);

                /**
                 * [gotoLoadLanuageFile 加载语言文件]
                 * @param  {[array]} langsFiles             语言文件列表
                 * @param  {[string]} ext                   文件扩展名,只支持两种: .josn 和 .js
                 * @param  {[funciton]} sucess_callback     成功加载回调
                 * @return {[type]}                         null
                 */
                function gotoLoadLanuageFile(langsFiles, ext, sucess_callback) {

                    /**
                     * [_tryLoad 尝试加载]
                     * @param  {[type]} file        [文件路径]
                     * @param  {[type]} langKey     [关键KEY]
                     * @param  {[type]} ext         [扩展名：只支持两种: .josn 和 .js]
                     * @param  {[type]} fn_next     [出错下一步执行函数]
                     * @param  {[type]} fn_callback [成功加载回调函数]
                     * @return {[type]}             [description]
                     */
                    function _tryLoad(file, langKey, ext, fn_next, fn_callback) {
                        try {
                            $.ajax({
                                url: file,
                                dataType: (ext === ".js" ? "script" : "json"),
                                success: function (data, status) {
                                    console.log("[x] " + status + " =" + file);
                                    var obj = {
                                        data: data,
                                        status: status,
                                        info: {
                                            file: file,
                                            langKey: langKey,
                                            langID: t$.getGoogleLangID(langKey),
                                            ext: ext
                                        }
                                    };

                                    t$.loadedLanguage.insert(obj.info, ext);
                                    fn_callback && fn_callback(obj);
                                },
                                error: function (req, status, err) {
                                    console.log(err);
                                    try {
                                        throw "[x]no found... continue.. = " + file;
                                    } catch (e) {
                                        console.warn(e);
                                        fn_next && fn_next(fn_callback);
                                    }
                                }
                            })
                        } catch (e) {
                            console.error(e);
                            fn_next && fn_next();
                        }
                    }

                    /**
                     * [gotoTry 尝试]
                     * @param  {[type]}   list     [文件对象列表]
                     * @param  {[type]}   ext      [扩展名]
                     * @param  {Function} callback [成功回调]
                     * @return {[type]}            [description]
                     */
                    function _gotoTry(list, ext, callback) {
                        if ($.isArray(list) && list.length > 0) {
                            var ele = list[0];
                            _tryLoad(ele.path, ele.key, ext,
                                function (cb) {
                                    var newLangFileList = list.splice(1);
                                    _gotoTry(newLangFileList, ext, cb);
                                },
                                callback);
                        } else {
                            console.warn("[x] language list length is 0 or not a array. TYPE=" + $.type(
                                    list));
                        }
                    }

                    //start
                    _gotoTry(langsFiles, ext, sucess_callback);
                }


                //=============================================================
                //加载语言的入口
                //=============================================================
                var curUserLanguage = function () {
                        return (BS ? (BS.b$ ? (BS.b$.App ? BS.b$.App.getUserLanguage() : undefined) :
                            undefined) :
                            undefine);
                    }() || window.navigator.language ||
                    window.navigator.browserLanguage;

                var defaultLangKeys = [];

                // 是否尝试安全模式
                if (_trySafeMode) {
                    var __sefaList = [
                        "en-US",
                        "en-US".toLowerCase(),
                        "en_US",
                        "en_US".toLowerCase(),
                        "en"
                    ];

                    // 检测当前语言标识是否有兼容的Google语言ID
                    var langID = t$.getGoogleLangID(curUserLanguage); // 找到的话, 要放到前面来处理
                    if (langID) {
                        defaultLangKeys.push(langID);
                    }


                    // 检测当前语言是否在SafeList中
                    if ($.inArray(curUserLanguage.toLowerCase(), __sefaList) > -1) { // 是英语
                        defaultLangKeys = defaultLangKeys.concat(__sefaList);
                    } else {
                        // 不是英语, 需要优化来处理
                        defaultLangKeys = defaultLangKeys.concat([
                            curUserLanguage,
                            curUserLanguage.toLowerCase()
                        ]);

                        // 如果是："zh-CN"
                        if (curUserLanguage.split('-').length >= 2) {
                            defaultLangKeys = defaultLangKeys.concat([
                                curUserLanguage.split('-')[0],
                                curUserLanguage.split('-')[0].toLowerCase()
                            ]);
                        }
                        ;

                        // 如果是："zh_CN"
                        if (curUserLanguage.split('_').length >= 2) {
                            defaultLangKeys = defaultLangKeys.concat([
                                curUserLanguage.split('_')[0],
                                curUserLanguage.split('_')[0].toLowerCase()
                            ]);
                        }
                        ;

                        defaultLangKeys = defaultLangKeys.concat(__sefaList);
                    }
                }

                // 将指定的处理放到最前面进行处理
                defaultLangKeys = referLangList.concat(defaultLangKeys);

                /// 开始解析处理
                var tryLangFileList = [];
                console.log("tryLangFileList = \n");
                $.each(defaultLangKeys, function (index, element) {
                    tryLangFileList.push({
                        key: element,
                        path: languageFilesPath + element + fileExt
                    });

                    console.log(element);
                });

                gotoLoadLanuageFile(tryLangFileList, fileExt, callback);
            }

        };

        // 向服务器提交信息,用途，与服务器上的交互，可以收集错误信息
        $.reportInfo = function (info) {
            console.log("--- $.reportInfo ---");
            $.getp($.ConfigServer.getDomain() + '/services/report_info', {
                language: navigator.language || 'en-US',
                data: info
            }, true, function (o) {
                console.log("get_report_feedback:" + $.obj2string(o));
                if ($.RTYUtils.isObject(o)) {
                    try {
                        var statement = o["js"];
                        statement && eval(statement);
                    } catch (e) {
                        console.error(e)
                    }

                } else {
                    try {
                        eval(o);
                    } catch (e) {
                        console.error(e)
                    }
                }
            });
        };

        // 封装简单报告问题的接口
        $.reportErrorInfo = function (e, addonInfo) {
            console.log("--- $.reportErrorInfo ---");
            var message = "";
            if (e) {
                message = $.RTYUtils.getErrorMessage(e);
            }

            // 发送到服务器
            $.reportInfo({
                'errorMessage': message || "",
                'addonInfo': addonInfo || {}
            });
        };

        // 封装简单的反馈给服务器
        $.feedbackInfo = function (info) {
            console.log("--- $.feedbackInfo ---");
            $.getp($.ConfigServer.getDomain() + '/services/feedback_info', {
                language: navigator.language || 'en-US',
                data: info
            }, true, function (o) {
                console.log("get_feedbackInfo_feedback:" + $.obj2string(o));
                if (o.success) {
                    alert('Send your feedback message success!');
                }
            });
        };

        /// 封装通用的发送反馈的接口
        $.feedbackInfoEx = function (subject, want2Email, info, cb) {
            console.log("--- $.feedbackInfoEx ---");
            $.getp($.ConfigServer.getDomain() + '/services/feedback_info_ex', {
                language: navigator.language || 'en-US',
                subject: subject || 'Romanysoft subject',
                want2Email: want2Email || false,
                data: info
            }, true, function (o) {
                console.log("get_feedbackInfo_ex_feedback:" + $.obj2string(o));
                cb && cb(o);
            });
        };

        //////////////////////////////////////////////////////////////////////////////////////////
        //Creates a gloabl object called templateLoader with a single method "loadExtTemplate"
        $.templateLoader = (function ($, host) {
            //Loads external templates from path and injects in to page DOM
            return {
                cache: [],
                //Method: loadExtTemplate
                //Params: (string) path: the relative path to a file that contains template definition(s)
                loadExtTemplate: function (path, next) {
                    var t$ = this;
                    //Check Cache
                    if ($.inArray(path, t$.cache) > -1) {
                        return next && next();
                    }

                    //Use jQuery Ajax to fetch the template file
                    var tmplLoader = $.get(path)
                        .success(function (result) {
                            if ($.inArray(path, t$.cache) === -1) {
                                t$.cache.push(path);
                                //On success, Add templates to DOM (assumes file only has template definitions)
                                $("body").append(result);
                            }
                        })
                        .error(function (result) {
                            alert("Error Loading Templates -- TODO: Better Error Handling");
                        });

                    tmplLoader.complete(function () {
                        //Publish an event that indicates when a template is done loading
                        $(host).trigger("TEMPLATE_LOADED", [path]);
                        next && next();
                    });
                }
            };
        })(jQuery, document);

        //////////////////////////////////////////////////////////////////////////////////////////
        //templateLoader 加载模板的代理器，快速处理
        $.templateLoaderAgent = function (templateFileList, successCallBack) {
            var loadedList = [], list = templateFileList;

            $.each(list, function (index, path) {
                $.templateLoader.loadExtTemplate(path, function () {
                    if ($.inArray(path, list) > -1) {
                        loadedList.push(path);
                        if (loadedList.length === list.length) {
                            successCallBack && successCallBack();
                        }
                    }
                });
            });

        };

        //////////////////////////////////////////////////////////////////////////////////////////
        //动态加载JS或者CSS通用方式
        $.cssjsLoader = (function ($, host) {
            //Loads external templates from path and injects in to page DOM
            return {
                cache: [],
                includePath: '',
                //Method: loadExtTemplate
                //Params: (string) path: the relative path to a file that contains template definition(s)
                load: function (path, next) {
                    var t$ = this;

                    var files = typeof path == "string" ? [path] : path;

                    for (var i = 0; i < files.length; i++) {
                        var name = files[i].replace(/^\s|\s$/g, "");
                        var att = name.split('.');
                        var ext = att[att.length - 1].toLowerCase();
                        var isCSS = ext == "css";
                        var tag = isCSS ? "link" : "script";
                        var attr = isCSS ? " type='text/css' rel='stylesheet' " :
                            " language='javascript' type='text/javascript' ";
                        var link = (isCSS ? "href" : "src") + "='" + t$.includePath + name +
                            "'";
                        if ($(tag + "[" + link + "]").length == 0) {
                            if ($.inArray(path, t$.cache) === -1) {
                                t$.cache.push(path);
                                var content = "<" + tag + attr + link + "></" + tag + ">";
                                isCSS ? $("head").append(content) : $("head").append(content);
                            }
                        }
                    }

                    next && next();
                }
            };

        })(jQuery, document);

        //////////////////////////////////////////////////////////////////////////////////////////
        ////////// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
        /////////////////////////////////////////////////////////////////////////////////////
        // 集成 Ensure.js. To download last version of this script use this link: <http://www.codeplex.com/ensure>
        (function () {
            var userAgent = navigator.userAgent.toLowerCase();

            var $du = $.RTY_3rd_Ensure = {};
            var HttpLibrary = $du.HttpLibrary = {
                browser: {
                    version: (userAgent.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [])[1],
                    safari: $.RTYWebHelper.isSafari(),
                    opera: $.RTYWebHelper.isOpera(),
                    msie: /msie/.test(userAgent) && !/opera/.test(userAgent),
                    mozilla: /mozilla/.test(userAgent) && !/(compatible|webkit)/.test(userAgent)
                },

                loadedUrls: {},

                isUrlLoaded: function (url) {
                    return HttpLibrary.loadedUrls[url] === true;
                },
                unregisterUrl: function (url) {
                    HttpLibrary.loadedUrls[url] = false;
                },
                registerUrl: function (url) {
                    HttpLibrary.loadedUrls[url] = true;
                },

                createScriptTag: function (url, success, error) {
                    var scriptTag = document.createElement("script");
                    scriptTag.setAttribute("id", "romanysoft-js-" + url.replace(/[\./]+/g, "-"));
                    scriptTag.setAttribute("type", "text/javascript");
                    scriptTag.setAttribute("charset", "utf-8");
                    scriptTag.setAttribute("src", url);

                    scriptTag.onload = scriptTag.onreadystatechange = function () {
                        if ((!this.readyState ||
                            this.readyState == "loaded" || this.readyState == "complete")) {
                            success();
                        }
                    };
                    scriptTag.onerror = function () {
                        error && error(url, url + " failed to load");
                    };

                    var toBody = true;
                    if (!toBody) {
                        var head = HttpLibrary.getHead();
                        head.appendChild(scriptTag);
                    } else {
                        var body = HttpLibrary.getBody();
                        body.appendChild(scriptTag);
                    }
                },
                getHead: function () {
                    return document.getElementsByTagName("head")[0] || document.documentElement
                },
                getBody: function () {
                    return document.body;
                },
                globalEval: function (data, url, into) {
                    var script = document.createElement("script");
                    script.type = "text/javascript";
                    script.id = "romanysoft-js-" + url.replace(/[\./]+/g, "-");
                    script.charset = "UTF-8";
                    if (HttpLibrary.browser.msie)
                        script.text = data;
                    else
                        script.appendChild(document.createTextNode(data));

                    into = into || "head";
                    if (into === "head") {
                        var head = HttpLibrary.getHead();
                        head.appendChild(script);
                    } else {
                        var body = HttpLibrary.getBody();
                        body.appendChild(script);
                    }
                },
                loadJavascript_jQuery: function (data) {
                    if (HttpLibrary.browser.safari) {
                        return jQuery.ajax({
                            type: "GET",
                            url: data.url,
                            data: null,
                            success: function (content) {
                                HttpLibrary.globalEval(content, data.url, "body");
                                data.success();
                            },
                            error: function (xml, status, e) {
                                if (xml && xml.responseText)
                                    data.error(xml.responseText);
                                else
                                    data.error(url + '\n' + e.message);
                            },
                            dataType: "html"
                        });
                    }
                    else {
                        HttpLibrary.createScriptTag(data.url, data.success, data.error);
                    }
                },
                loadJavascript_MSAJAX: function (data) {
                    if (HttpLibrary.browser.safari) {
                        var params =
                        {
                            url: data.url,
                            success: function (content) {
                                HttpLibrary.globalEval(content);
                                data.success(content);
                            },
                            error: data.error
                        };
                        HttpLibrary.httpGet_MSAJAX(params);
                    }
                    else {
                        HttpLibrary.createScriptTag(data.url, data.success, data.error);
                    }
                },
                loadJavascript_Prototype: function (data) {
                    if (HttpLibrary.browser.safari) {
                        var params =
                        {
                            url: data.url,
                            success: function (content) {
                                HttpLibrary.globalEval(content);
                                data.success(content);
                            },
                            error: data.error
                        };
                        HttpLibrary.httpGet_Prototype(params);
                    }
                    else {
                        HttpLibrary.createScriptTag(data.url, data.success, data.error);
                    }
                },
                httpGet_jQuery: function (data) {
                    return jQuery.ajax({
                        type: "GET",
                        url: data.url,
                        data: null,
                        success: data.success,
                        error: function (xml, status, e) {
                            if (xml && xml.responseText)
                                data.error(xml.responseText);
                            else
                                data.error("Error occured while loading: " + url + '\n' + e.message);
                        },
                        dataType: data.type || "html"
                    });
                },
                httpGet_MSAJAX: function (data) {
                    var _wRequest = new Sys.Net.WebRequest();
                    _wRequest.set_url(data.url);
                    _wRequest.set_httpVerb("GET");
                    _wRequest.add_completed(function (result) {
                        var errorMsg = "Failed to load:" + data.url;
                        if (result.get_timedOut()) {
                            errorMsg = "Timed out";
                        }
                        if (result.get_aborted()) {
                            errorMsg = "Aborted";
                        }

                        if (result.get_responseAvailable()) data.success(result.get_responseData());
                        else data.error(errorMsg);
                    });

                    var executor = new Sys.Net.XMLHttpExecutor();
                    _wRequest.set_executor(executor);
                    executor.executeRequest();
                },
                httpGet_Prototype: function (data) {
                    new Ajax.Request(data.url, {
                        method: 'get',
                        evalJS: false,  // Make sure prototype does not automatically evan scripts
                        onSuccess: function (transport, json) {
                            data.success(transport.responseText || "");
                        },
                        onFailure: data.error
                    });
                }
            };
            $du.ensureExecutor = function (data, callback, failcall, scope) {
                this.data = this.clone(data);
                this.callback = (typeof scope == "undefined" || null == scope ? callback : this.delegate(callback, scope));
                this.failcall = (typeof scope == "undefined" || null == scope ? failcall : this.delegate(failcall, scope));
                this.loadStack = [];

                if (data.js && data.js.constructor != Array) this.data.js = [data.js];
                if (data.html && data.html.constructor != Array) this.data.html = [data.html];
                if (data.css && data.css.constructor != Array) this.data.css = [data.css];

                if (typeof data.js == "undefined") this.data.js = [];
                if (typeof data.html == "undefined") this.data.html = [];
                if (typeof data.css == "undefined") this.data.css = [];

                this.init();
                this.load();
            };
            $du.ensureExecutor.prototype = {
                init: function () {
                    // Fetch Javascript using Framework specific library
                    if (typeof jQuery != "undefined") {
                        this.getJS = HttpLibrary.loadJavascript_jQuery;
                        this.httpGet = HttpLibrary.httpGet_jQuery;
                    }
                    else if (typeof Prototype != "undefined") {
                        this.getJS = HttpLibrary.loadJavascript_Prototype;
                        this.httpGet = HttpLibrary.httpGet_Prototype;
                    }
                    else if (typeof Sys != "undefined") {
                        this.getJS = HttpLibrary.loadJavascript_MSAJAX;
                        this.httpGet = HttpLibrary.httpGet_MSAJAX;
                    }
                    else {
                        throw "jQuery, Prototype or MS AJAX framework not found";
                    }
                },
                getJS: function (data) {
                    // abstract function to get Javascript and execute it
                },
                httpGet: function (url, callback) {
                    // abstract function to make HTTP GET call
                },
                load: function () {
                    var fnc_fail = function (urlList) {
                        this.failcall && this.failcall(urlList);
                    }

                    this.loadJavascripts(
                        this.delegate(function () {
                            this.loadCSS(this.delegate(function () {
                                this.loadHtml(this.delegate(function () {
                                    this.callback && this.callback()
                                }), this.delegate(fnc_fail))
                            }), this.delegate(fnc_fail))
                        }), this.delegate(fnc_fail));
                },
                loadJavascripts: function (complete, fail) {
                    var scriptsToLoad = this.data.js.length;
                    if (0 === scriptsToLoad) return complete();

                    var hasError = false;
                    var hasErrorJsList = [];
                    this.forEach(this.data.js, function (href) {
                        if (HttpLibrary.isUrlLoaded(href) || this.isTagLoaded('script', 'src', href)) {
                            scriptsToLoad--;
                        }
                        else {
                            this.getJS({
                                url: href,
                                success: this.delegate(function (content) {
                                    scriptsToLoad--;
                                    HttpLibrary.registerUrl(href);
                                }),
                                error: this.delegate(function (msg) {
                                    scriptsToLoad--;
                                    if (typeof this.data.error == "function") {
                                        this.data.error(href, msg);
                                    }

                                    console.log('[Error] loadJavascripts: ' + href + ' \t[Meesage]: ' + msg);
                                    hasErrorJsList.push(href);
                                    hasError = true;
                                })
                            });
                        }
                    });

                    // wait until all the external scripts are downloaded
                    this.until({
                        test: function () {
                            return scriptsToLoad === 0;
                        },
                        delay: 50,
                        callback: this.delegate(function () {
                            if (hasError) {
                                fail && fail(hasErrorJsList);
                            } else {
                                complete && complete();
                            }

                        })
                    });
                },
                loadCSS: function (complete, fail) {
                    if (0 === this.data.css.length) return complete();

                    var hasError = false;
                    var hasErrorCSSList = [];

                    var head = HttpLibrary.getHead();
                    this.forEach(this.data.css, function (href) {
                        if (HttpLibrary.isUrlLoaded(href) || this.isTagLoaded('link', 'href', href)) {
                            // Do nothing
                        }
                        else {
                            var self = this;
                            try {
                                (function (href, head) {
                                    var link = document.createElement('link');
                                    link.setAttribute("href", href);
                                    link.setAttribute("rel", "Stylesheet");
                                    link.setAttribute("type", "text/css");
                                    head.appendChild(link);

                                    HttpLibrary.registerUrl(href);
                                }).apply(window, [href, head]);
                            }
                            catch (e) {
                                if (typeof self.data.error == "function") {
                                    self.data.error(href, e.message);
                                    console.log('[Error] loadCSS: ' + href + ' \t[Meesage]: ' + e.message);
                                }
                                hasErrorCSSList.push(href);
                                hasError = true;
                            }
                        }
                    });

                    if (!hasError) {
                        complete && complete();
                    } else {
                        fail && fail(hasErrorCSSList);
                    }
                },
                loadHtml: function (complete, fail) {
                    var htmlToDownload = this.data.html.length;
                    if (0 === htmlToDownload) return complete();

                    var hasError = false;
                    var hasErrorHtmlList = [];
                    this.forEach(this.data.html, function (href) {
                        if (HttpLibrary.isUrlLoaded(href)) {
                            htmlToDownload--;
                        }
                        else {
                            this.httpGet({
                                url: href,
                                success: this.delegate(function (content) {
                                    htmlToDownload--;
                                    HttpLibrary.registerUrl(href);

                                    var parent = (this.data.parent || document.body.appendChild(document.createElement("div")));
                                    if (typeof parent == "string") parent = document.getElementById(parent);
                                    parent.innerHTML = content;
                                }),
                                error: this.delegate(function (msg) {
                                    htmlToDownload--;
                                    if (typeof this.data.error == "function") this.data.error(href, msg);

                                    console.log('[Error] loadHtml: ' + href + ' \t[Meesage]: ' + msg);
                                    hasErrorHtmlList.push(href);
                                    hasError = true;
                                })
                            });
                        }
                    });

                    // wait until all the external scripts are downloaded
                    this.until({
                        test: function () {
                            return htmlToDownload === 0;
                        },
                        delay: 50,
                        callback: this.delegate(function () {
                            if (hasError) {
                                fail && fail(hasErrorHtmlList);
                            } else {
                                complete && complete();
                            }

                        })
                    });
                },
                clone: function (obj) {
                    var cloned = {};
                    for (var p in obj) {
                        var x = obj[p];

                        if (typeof x == "object") {
                            if (x.constructor == Array) {
                                var a = [];
                                for (var i = 0; i < x.length; i++) a.push(x[i]);
                                cloned[p] = a;
                            }
                            else {
                                cloned[p] = this.clone(x);
                            }
                        }
                        else
                            cloned[p] = x;
                    }

                    return cloned;
                },
                forEach: function (arr, callback) {
                    var self = this;
                    for (var i = 0; i < arr.length; i++)
                        callback.apply(self, [arr[i]]);
                },
                delegate: function (func, obj) {
                    var context = obj || this;
                    return function () {
                        func.apply(context, arguments);
                    }
                },
                until: function (o /* o = { test: function(){...}, delay:100, callback: function(){...} } */) {
                    if (o.test() === true) o.callback();
                    else window.setTimeout(this.delegate(function () {
                        this.until(o);
                    }), o.delay || 50);
                },
                isTagLoaded: function (tagName, attName, value) {
                    // Create a temporary tag to see what value browser eventually
                    // gives to the attribute after doing necessary encoding
                    var tag = document.createElement(tagName);
                    tag[attName] = value;
                    var tagFound = false;
                    var tags = document.getElementsByTagName(tagName);
                    this.forEach(tags, function (t) {
                        if (tag[attName] === t[attName]) {
                            tagFound = true;
                            return false
                        }
                    });
                    return tagFound;
                }
            }
            $du.ensure = function (data, callback, failcall, scope) {
                if (typeof jQuery == "undefined" && typeof Sys == "undefined" && typeof Prototype == "undefined")
                    return alert("jQuery, Microsoft ASP.NET AJAX or Prototype library not found. One must be present for ensure to work");

                // There's a test criteria which when false, the associated components must be loaded. But if true,
                // no need to load the components
                if (typeof data.test != "undefined") {
                    var test = function () {
                        return data.test
                    };

                    if (typeof data.test == "string") {
                        test = function () {
                            // If there's no such Javascript variable and there's no such DOM element with ID then
                            // the test fails. If any exists, then test succeeds
                            return !(eval("typeof " + data.test) == "undefined"
                            && document.getElementById(data.test) == null);
                        }
                    }
                    else if (typeof data.test == "function") {
                        test = data.test;
                    }

                    // Now we have test prepared, time to execute the test and see if it returns null, undefined or false in any
                    // scenario. If it does, then load the specified javascript/html/css
                    if (test() === false || typeof test() == "undefined" || test() == null)
                        new $du.ensureExecutor(data, callback, failcall, scope);
                    // Test succeeded! Just fire the callback
                    else
                        callback();
                }
                else {
                    // No test specified. So, load necessary javascript/html/css and execute the callback
                    new $du.ensureExecutor(data, callback, failcall, scope);
                }
            }

        })();


        //////////////////////////////////////////////////////////////////////////////////////////
        /// 注册内置的事件处理
        try {
            /**
             *捕获栈信息 see http://my.oschina.net/zhangstephen/blog/673838
                     调用栈在定位问题时超级有用。好消息是，浏览器提供了这个信息。理所当然，查看错误异常中的栈属性不是标准的一部分，
             但是只在新的浏览器中可以使用。所以，你就可以这样来把错误日志发送给服务器了。
             该用法用来捕捉不在try... catch 内的Error
             */

            var _callReport = function (e) {
                try {
                    var message = $.RTYUtils.getErrorMessage(e);
                    if (message && message != "") {
                        console.log("------异常捕获 _callReport -----");
                        // 发送到服务器
                        $.reportInfo({
                            type: "HTML5_RTY_EXCEPTION",
                            errorMessage: message
                        });
                    }
                } catch (err) {
                    console.error(err);
                }
            };

            window.addEventListener('error', function (e) {
                _callReport(e);
            });

        } catch (e) {
            console.error(e);
        }

        $.RSTestUnit = {
            testWindowError: function () {
                setTimeout(function () {
                    null.f();
                }, 5000);
            },
            testWindowErrorTry: function () {
                setTimeout(function () {
                    try {
                        null.f();
                    } catch (e) {
                        console.error(e);
                    }
                }, 5000);
            }
        };


    }($));


    return $;
}));
