!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["video/player/auto-light"]=t():e["video/player/auto-light"]=t()}(globalThis,(()=>(()=>{"use strict";var e,t,o={642:e=>{e.exports=coreApis.componentApis.video.playerLight},605:e=>{e.exports=coreApis.utils}},r={};function n(e){var t=r[e];if(void 0!==t)return t.exports;var i=r[e]={exports:{}};return o[e](i,i.exports,n),i.exports}t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,n.t=function(o,r){if(1&r&&(o=this(o)),8&r)return o;if("object"==typeof o&&o){if(4&r&&o.__esModule)return o;if(16&r&&"function"==typeof o.then)return o}var i=Object.create(null);n.r(i);var a={};e=e||[null,t({}),t([]),t(t)];for(var s=2&r&&o;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>a[e]=()=>o[e]));return a.default=()=>o,n.d(i,a),i},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{n.d(i,{component:()=>s});const e=coreApis.componentApis.define,t=coreApis.componentApis.video.playerAgent,o=coreApis.observer,r=coreApis.utils.urls;let a;const s=(0,e.defineComponentMetadata)({name:"playerAutoLight",displayName:"播放时自动关灯",urlInclude:r.allVideoUrls,tags:[componentsTags.video],description:{"zh-CN":"在视频播放时自动关灯, 暂停或结束时再自动打开."},entry:async()=>{const{isEmbeddedPlayer:e}=await Promise.resolve().then(n.t.bind(n,605,23)),{lightOn:r,lightOff:i}=await Promise.resolve().then(n.t.bind(n,642,23));e()||(0,o.videoChange)((async()=>{if(null!=a){const e=await a.query.video.element();e.removeEventListener("ended",r),e.removeEventListener("pause",r),e.removeEventListener("play",i)}a=t.playerAgent;const e=await a.query.video.element();a.isAutoPlay()&&i(),e.addEventListener("ended",r),e.addEventListener("pause",r),e.addEventListener("play",i)}))},commitHash:"20da57bfebbaa8069bd7f145524f0352bbddcbc0",coreVersion:"2.6.0"})})(),i=i.component})()));