!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["feeds/full-content"]=e():t["feeds/full-content"]=e()}(globalThis,(()=>(()=>{var t,e,n={267:(t,e,n)=>{var o=n(218)((function(t){return t[1]}));o.push([t.id,".bili-dyn-content .bili-rich-text__action,\n.bili-dyn-content .expand-btn,\n.bili-dyn-content .content-ellipsis,\n.card .main-content .bili-rich-text__action,\n.card .main-content .expand-btn,\n.card .main-content .content-ellipsis {\n  display: none !important;\n}\n.bili-dyn-content .bili-rich-text__content,\n.bili-dyn-content .content-full,\n.card .main-content .bili-rich-text__content,\n.card .main-content .content-full {\n  -webkit-line-clamp: unset !important;\n  display: block !important;\n  height: auto !important;\n  max-height: unset !important;\n}",""]),t.exports=o},218:t=>{"use strict";
// eslint-disable-next-line func-names
t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
e.i=function(t,n,o){"string"==typeof t&&(
// eslint-disable-next-line no-param-reassign
t=[[null,t,""]]);var r={};if(o)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var c=this[i][0];null!=c&&(r[c]=!0)}for(var a=0;a<t.length;a++){var l=[].concat(t[a]);o&&r[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),e.push(l))}},e}},957:(t,e,n)=>{var o=n(267);o&&o.__esModule&&(o=o.default),t.exports="string"==typeof o?o:o.toString()}},o={};function r(t){var e=o[t];if(void 0!==e)return e.exports;var i=o[t]={id:t,exports:{}};return n[t](i,i.exports,r),i.exports}e=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__,r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"==typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"==typeof n.then)return n}var i=Object.create(null);r.r(i);var c={};t=t||[null,e({}),e([]),e(e)];for(var a=2&o&&n;"object"==typeof a&&!~t.indexOf(a);a=e(a))Object.getOwnPropertyNames(a).forEach((t=>c[t]=()=>n[t]));return c.default=()=>n,r.d(i,c),i},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var i={};return(()=>{"use strict";r.d(i,{component:()=>o});const t=coreApis.componentApis.define,e=coreApis.componentApis.styledComponent,n=coreApis.utils.urls,o=(0,t.defineComponentMetadata)({...(0,e.toggleStyle)("fullFeedsContent",(()=>Promise.resolve().then(r.t.bind(r,957,23)))),displayName:"展开动态内容",description:{"zh-CN":"不管内容多长, 总是完全展开动态的内容."},tags:[componentsTags.style,componentsTags.feeds],urlInclude:n.feedsUrlsWithoutDetail,commitHash:"4ee0fe551ab0f61c8db9621a89caaeebbbf2b15d",coreVersion:"2.8.3"})})(),i=i.component})()));