!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports["style/hide/video/related-videos"]=n():e["style/hide/video/related-videos"]=n()}(self,(function(){return function(){var e,n,t={267:function(e,n,t){var o=t(645)((function(e){return e[1]}));o.push([e.id,"#recom_module,\n#reco_list,\n.bilibili-player-ending-panel-box-videos,\n.r-con .rcmd-list {\n  display: none !important;\n}\n\n.bilibili-player-ending-panel-box-functions .bilibili-player-upinfo-spans {\n  position: static !important;\n}\n\n.bilibili-player-ending-panel-box {\n  display: flex !important;\n  justify-content: center !important;\n  flex-direction: column !important;\n}",""]),e.exports=o},645:function(e){"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},
// eslint-disable-next-line func-names
n.i=function(e,t,o){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var c=this[i][0];null!=c&&(r[c]=!0)}for(var a=0;a<e.length;a++){var u=[].concat(e[a]);o&&r[u[0]]||(t&&(u[2]?u[2]="".concat(t," and ").concat(u[2]):u[2]=t),n.push(u))}},n}},669:function(e,n,t){var o=t(267);o&&o.__esModule&&(o=o.default),e.exports="string"==typeof o?o:o.toString()}},o={};function r(e){var n=o[e];if(void 0!==n)return n.exports;var i=o[e]={id:e,exports:{}};return t[e](i,i.exports,r),i.exports}n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},r.t=function(t,o){if(1&o&&(t=this(t)),8&o)return t;if("object"==typeof t&&t){if(4&o&&t.__esModule)return t;if(16&o&&"function"==typeof t.then)return t}var i=Object.create(null);r.r(i);var c={};e=e||[null,n({}),n([]),n(n)];for(var a=2&o&&t;"object"==typeof a&&!~e.indexOf(a);a=n(a))Object.getOwnPropertyNames(a).forEach((function(e){c[e]=function(){return t[e]}}));return c.default=function(){return t},r.d(i,c),i},r.d=function(e,n){for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return function(){"use strict";r.d(i,{component:function(){return t}});var e=coreApis.componentApis.define,n=coreApis.utils.urls;const t=(0,e.defineComponentMetadata)({name:"hideRelatedVideos",displayName:"隐藏视频推荐",entry:none,instantStyles:[{name:"hideRelatedVideos",style:()=>Promise.resolve().then(r.t.bind(r,669,23))}],tags:[componentsTags.style,componentsTags.video],description:{"zh-CN":"隐藏番剧和视频页面右侧的推荐视频列表. 注意: 如果你想关闭 b 站的自动连播 (自动播放下一个推荐视频) 功能, 需要先取消隐藏视频推荐才能看到开关."},urlInclude:n.videoAndBangumiUrls,commitHash:"0303f0f690ebf94f5cb4ebbd3872400125eeda92",coreVersion:"2.4.0"})}(),i=i.component}()}));