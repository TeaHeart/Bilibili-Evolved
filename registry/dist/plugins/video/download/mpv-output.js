!function(o,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["video/download/mpv-output"]=e():o["video/download/mpv-output"]=e()}(globalThis,(()=>(()=>{"use strict";var o={d:(e,t)=>{for(var i in t)o.o(t,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},o:(o,e)=>Object.prototype.hasOwnProperty.call(o,e)},e={};o.d(e,{plugin:()=>i});const t=coreApis.toast,i={name:"downloadVideo.outputs.mpv",displayName:"下载视频 - MPV 输出支持",author:{name:"diannaojiang",link:"https://github.com/diannaojiang"},description:"为下载视频增加 MPV 输出支持, 配置方式请参考 [Bilibili-Playin-Mpv](https://github.com/diannaojiang/Bilibili-Playin-Mpv)",setup:o=>{let{addData:e}=o;e("downloadVideo.outputs",(o=>{o.push({name:"mpv",displayName:"MPV",description:"弹一条消息显示出播放按钮，点击即可使用MPV进行播放",runAction:async o=>{const e=o.infos.flatMap((o=>o.titledFragments)),i=e.map((o=>o.url)).join("\n"),n=`mpv://--http-header-fields="referer:https://www.bilibili.com/" "${e[0].url}" --audio-file="${e[1].url}"`;console.log(n),t.Toast.show(`<a class="link" href="${encodeURI(n)}" >播放</a>`,"MPV播放"),console.log(i),console.log(o)}})}))},commitHash:"20da57bfebbaa8069bd7f145524f0352bbddcbc0",coreVersion:"2.6.0"};return e=e.plugin})()));