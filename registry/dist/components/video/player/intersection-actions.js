!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["video/player/intersection-actions"]=t():e["video/player/intersection-actions"]=t()}(self,(function(){return function(){"use strict";var e={d:function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t={};e.d(t,{component:function(){return d}});var n,o=coreApis.componentApis.define,i=coreApis.componentApis.video.playerAgent,r=coreApis.componentApis.video.playerLight,a=coreApis.observer,s=coreApis.settings,p=coreApis.utils.urls;!function(e){e.Top="视频顶部",e.Medium="视频中间",e.Bottom="视频底部"}(n||(n={}));const d=(0,o.defineComponentMetadata)({name:"playerIntersectionActions",author:{name:"FoundTheWOUT",link:"https://github.com/FoundTheWOUT"},tags:[componentsTags.video],urlInclude:p.allVideoUrls,entry:async e=>{let{settings:{options:t},metadata:o}=e;const p=t;Promise.resolve().then((async()=>{const{query:{video:e}}=i.playerAgent,t=await e.element(),d=document.getElementById("video-player")??(dq(".player-wrap")||dq(".player-module"));let c,u=!0;function l(e){switch(e){case n.Top:return 1;case n.Medium:return.5;case n.Bottom:return 0;default:return.5}}function m(){c.observe(d)}function y(){c.unobserve(d)}const f=e=>new IntersectionObserver((e=>{let[n]=e;n.isIntersecting?u||(u=!0,p.pause&&t.paused&&t.play(),p.light&&(0,s.getComponentSettings)("playerAutoLight").enabled&&!p.pause&&!t.paused&&(0,r.lightOff)()):(t.paused||(u=!1),p.pause&&!t.paused&&t.pause(),p.light&&(0,s.getComponentSettings)("playerAutoLight").enabled&&!p.pause&&(0,r.lightOn)())}),{threshold:l(e||p.triggerLocation)});(0,s.addComponentListener)(`${o.name}.triggerLocation`,(e=>{y(),c=f(e),m()})),c=f(),(0,a.videoChange)((async()=>{i.playerAgent.isAutoPlay()&&m(),t.addEventListener("play",m),t.addEventListener("ended",y)}))}))},displayName:"播放器位置动作",description:{"zh-CN":"设置当播放器移出视图的位置变化时执行的动作."},options:{triggerLocation:{defaultValue:n.Medium,displayName:"触发位置",dropdownEnum:n},pause:{defaultValue:!1,displayName:"自动暂停"},light:{defaultValue:!0,displayName:"自动开灯"}},commitHash:"d37d39f5877850c5b48822920143593025b68dd4",coreVersion:"2.5.0"});return t=t.component}()}));