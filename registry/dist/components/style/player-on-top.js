!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["style/player-on-top"]=t():e["style/player-on-top"]=t()}(globalThis,(()=>(()=>{var e,t,n={257:(e,t,n)=>{var o=n(218)((function(e){return e[1]}));o.push([e.id,".v-wrap .l-con,\n.v-wrap .r-con {\n  display: flex;\n  flex-direction: column;\n  margin-top: 24px;\n}\n.v-wrap .l-con .player-wrap {\n  order: -1;\n}\n.v-wrap .l-con .video-info {\n  margin: 20px 0 0 0 !important;\n  padding: 0 !important;\n  height: auto !important;\n}\n.v-wrap .l-con .video-info .video-data .argue,\n.v-wrap .l-con .video-info .video-data .copyright {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.v-wrap .r-con .danmaku-box {\n  order: -1;\n}\n.v-wrap .r-con .up-info {\n  padding-top: 0 !important;\n}",""]),e.exports=o},218:e=>{"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
t.i=function(e,n,o){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var r={};if(o)for(var a=0;a<this.length;a++){
// eslint-disable-next-line prefer-destructuring
var i=this[a][0];null!=i&&(r[i]=!0)}for(var p=0;p<e.length;p++){var c=[].concat(e[p]);o&&r[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},110:(e,t,n)=>{var o=n(257);o&&o.__esModule&&(o=o.default),e.exports="string"==typeof o?o:o.toString()}},o={};function r(e){var t=o[e];if(void 0!==t)return t.exports;var a=o[e]={id:e,exports:{}};return n[e](a,a.exports,r),a.exports}t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"==typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"==typeof n.then)return n}var a=Object.create(null);r.r(a);var i={};e=e||[null,t({}),t([]),t(t)];for(var p=2&o&&n;"object"==typeof p&&!~e.indexOf(p);p=t(p))Object.getOwnPropertyNames(p).forEach((e=>i[e]=()=>n[e]));return i.default=()=>n,r.d(a,i),a},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return(()=>{"use strict";r.d(a,{component:()=>e});const e=(0,coreApis.componentApis.define.defineComponentMetadata)({name:"playerOnTop",displayName:"播放器置顶",description:{"zh-CN":"在视频页面中将播放器放在页面最上方."},instantStyles:[{name:"playerOnTop",style:()=>Promise.resolve().then(r.t.bind(r,110,23))}],tags:[componentsTags.style,componentsTags.video],entry:none,commitHash:"4ee0fe551ab0f61c8db9621a89caaeebbbf2b15d",coreVersion:"2.8.3"})})(),a=a.component})()));