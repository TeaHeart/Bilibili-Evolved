!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["style/hide/video/related-videos"]=t():e["style/hide/video/related-videos"]=t()}(globalThis,(()=>(()=>{var e,t,n={525:(e,t,n)=>{var o=n(218)((function(e){return e[1]}));o.push([e.id,"#recom_module,\n#reco_list,\n.bilibili-player-ending-panel-box-videos,\n.r-con .rcmd-list,\n.playlist-container .recommend-list-container,\n.bpx-player-ending-related,\n.plp-r [class*=recommend_wrap] {\n  display: none !important;\n}\n\n.bilibili-player-ending-panel-box-functions .bilibili-player-upinfo-spans {\n  position: static !important;\n}\n\n.bilibili-player-ending-panel-box,\n.bpx-player-ending-content {\n  display: flex !important;\n  justify-content: center !important;\n  flex-direction: column !important;\n}",""]),e.exports=o},218:e=>{"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
t.i=function(e,n,o){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var a=this[i][0];null!=a&&(r[a]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&r[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},70:(e,t,n)=>{var o=n(525);o&&o.__esModule&&(o=o.default),e.exports="string"==typeof o?o:o.toString()},459:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=459,e.exports=t},319:e=>{"use strict";e.exports="隐藏番剧和视频页面右侧的推荐视频列表. 注意: 如果你想关闭 b 站的自动连播 (自动播放下一个推荐视频) 功能, 需要先取消隐藏视频推荐才能看到开关.\n"}},o={};function r(e){var t=o[e];if(void 0!==t)return t.exports;var i=o[e]={id:e,exports:{}};return n[e](i,i.exports,r),i.exports}t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"==typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"==typeof n.then)return n}var i=Object.create(null);r.r(i);var a={};e=e||[null,t({}),t([]),t(t)];for(var s=2&o&&n;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>a[e]=()=>n[e]));return a.default=()=>n,r.d(i,a),i},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{"use strict";r.d(i,{component:()=>n});const e=coreApis.componentApis.define,t=coreApis.utils.urls,n=(0,e.defineComponentMetadata)({name:"hideRelatedVideos",displayName:"隐藏视频推荐",entry:none,instantStyles:[{name:"hideRelatedVideos",style:()=>Promise.resolve().then(r.t.bind(r,70,23))}],tags:[componentsTags.style,componentsTags.video],urlInclude:t.videoAndBangumiUrls,commitHash:"986758cb0ade2d80cbe2b8b556d2b9dde3af86b1",coreVersion:"2.8.9",description:(()=>{const e=r(459);return{...Object.fromEntries(e.keys().map((t=>[t.match(/index\.(.+)\.md$/)[1],e(t)]))),"zh-CN":()=>Promise.resolve().then(r.t.bind(r,319,17)).then((e=>e.default))}})()})})(),i=i.component})()));