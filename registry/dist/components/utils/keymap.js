!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["utils/keymap"]=t():e["utils/keymap"]=t()}(self,(function(){return function(){var e,t,n={709:function(e,t,n){"use strict";n.d(t,{Nw:function(){return u},vN:function(){return l},$j:function(){return s},kW:function(){return d}});var i=coreApis.componentApis.video.playerAgent,o=n(986),r=n(153);const s=(e,t)=>{const{event:n}=t,i=new MouseEvent("click",{...lodash.pick(n,"ctrlKey","shiftKey","altKey","metaKey")});if("string"==typeof e){const t=dq(e);if(!t)return!1;t.dispatchEvent(i)}else{if(!e)return!1;e.dispatchEvent(i)}return!0},a=e=>t=>s(e,t),l=e=>()=>i.playerAgent.changeTime("number"==typeof e?e:e());let c;const d=async(e,t)=>{let n=dq(".keymap-tip");if(!n){const o=await i.playerAgent.query.playerArea();if(!o)return;o.insertAdjacentHTML("afterbegin",`\n      <div class="keymap-tip-container">\n        <i class="keymap-tip-icon mdi ${t}"></i>\n        <div class="keymap-tip">${e}</div>\n      </div>\n    `),n=dq(".keymap-tip")}n.innerHTML=e;const o=dq(".keymap-tip-container"),r=dq(o,".mdi");r.classList.remove(...r.classList.values()),r.classList.add("mdi",t),c&&clearTimeout(c),o.classList.add("show"),c=window.setTimeout((()=>{o.classList.remove("show")}),2e3)},p={fullscreen:{displayName:"全屏",run:()=>i.playerAgent.fullscreen()},webFullscreen:{displayName:"网页全屏",run:()=>i.playerAgent.webFullscreen()},wideScreen:{displayName:"宽屏",run:()=>i.playerAgent.widescreen()},volumeUp:{displayName:"增加音量",run:()=>{const e=i.playerAgent.changeVolume(10);return lodash.isNil(e)?e:(d(`${e}%`,"mdi-volume-high"),!0)}},volumeDown:{displayName:"降低音量",run:()=>{const e=i.playerAgent.changeVolume(-10);return lodash.isNil(e)?e:(0===e?d("静音","mdi-volume-off"):d(`${e}%`,"mdi-volume-high"),!0)}},mute:{displayName:"静音",run:()=>{const e=i.playerAgent.toggleMute();return lodash.isNil(e)?e:(i.playerAgent.isMute()?d("已静音","mdi-volume-off"):d("已取消静音","mdi-volume-high"),!0)}},pictureInPicture:{displayName:"画中画",run:()=>i.playerAgent.togglePip()},coin:{displayName:"投币",run:a(".video-toolbar .coin, .tool-bar .coin-info, .video-toolbar-module .coin-box, .play-options-ul > li:nth-child(2), .video-toolbar-v1 .coin")},favorite:{displayName:"收藏",run:a(".video-toolbar .collect, .video-toolbar-module .fav-box, .play-options-ul > li:nth-child(3), .video-toolbar-v1 .collect")},pause:{displayName:"暂停/播放",run:()=>i.playerAgent.togglePlay()},like:{displayName:"点赞",run:(()=>{let e=!0;return t=>{const{event:n}=t,i=dq(".video-toolbar .like, .tool-bar .like-info, .video-toolbar-v1 .like");if(!i)return!1;n.preventDefault();const o=(e,t)=>{const n=new CustomEvent(e,t);i.dispatchEvent(n)};return e=!0,setTimeout((()=>e=!1),200),o("mousedown",n),document.body.addEventListener("keyup",(t=>{t.preventDefault(),o("mouseup",t),e&&o("click",t)}),{once:!0}),!0}})()},danmaku:{displayName:"弹幕开关",run:()=>i.playerAgent.toggleDanmaku()},longJumpBackward:{displayName:"长倒退",run:()=>i.playerAgent.changeTime(-(0,o.getComponentSettings)("keymap").options.longJumpSeconds)},longJumpForward:{displayName:"长前进",run:()=>i.playerAgent.changeTime((0,o.getComponentSettings)("keymap").options.longJumpSeconds)},jumpBackward:{displayName:"倒退",run:()=>i.playerAgent.changeTime(-5)},jumpForward:{displayName:"前进",run:()=>i.playerAgent.changeTime(5)},playerMenu:{displayName:"播放器菜单",run:()=>{const e=i.playerAgent.query.video.container.sync();if(!e)return null;const t=e.getBoundingClientRect();return e.dispatchEvent(new MouseEvent("contextmenu",{bubbles:!0,cancelable:!1,view:unsafeWindow,button:2,buttons:0,clientX:t.x+t.width/2-88.325,clientY:t.y+t.height/2-97})),!0}},seekBegin:{displayName:"回开头",run:()=>i.playerAgent.seek(0)},sendComment:{displayName:"发送评论",ignoreTyping:!1,run:()=>{var e;const t=null===(e=document.activeElement)||void 0===e?void 0:e.nextElementSibling;return t?(t.click(),!0):null}}},[u]=(0,r.registerAndGetData)("keymap.actions",p)},455:function(e,t,n){"use strict";n.d(t,{Wb:function(){return o},um:function(){return r}});var i=n(153);const o={fullscreen:"f",webFullscreen:"w",wideScreen:"t",volumeUp:"arrowUp",volumeDown:"arrowDown",mute:"m",pictureInPicture:"p",coin:"c",favorite:"s",pause:"space",like:"l",playerMenu:"`",longJumpForward:"j",longJumpBackward:"shift j",jumpBackward:"arrowLeft",jumpForward:"arrowRight",danmaku:"d",seekBegin:"0",sendComment:"ctrl enter"},[,r]=(0,i.registerAndGetData)("keymap.presets",o,{Default:{},YouTube:{like:"",pause:"space k",longJumpForward:"l",longJumpBackward:"j",seekBegin:"0 Home"},HTML5Player:{coin:"shift c",danmaku:"shift d",fullscreen:"enter",webFullscreen:"shift enter",pictureInPicture:"shift p",longJumpBackward:"ctrl arrowLeft",longJumpForward:"ctrl arrowRight"},PotPlayer:{coin:"shift c",danmaku:"shift d",fullscreen:"enter",webFullscreen:"6",longJumpBackward:"ctrl arrowLeft",longJumpForward:"ctrl arrowRight",seekBegin:"backspace"}})},781:function(e,t,n){"use strict";n.r(t),n.d(t,{loadKeymapSettings:function(){return r},toggleKeymapSettings:function(){return s}});var i=n(605);let o;const r=async e=>{if(o)return;const t=await Promise.resolve().then(n.bind(n,742)).then((e=>e.default));o=(0,i.mountVueComponent)(t),e&&(o.triggerElement=e),document.body.insertAdjacentElement("beforeend",o.$el)},s=async e=>{o||await r(e),o.popupOpen=!o.popupOpen}},786:function(e,t,n){var i=n(645)((function(e){return e[1]}));i.push([e.id,".keymap-extra-options {\n  display: flex;\n  align-items: center;\n  gap: 0;\n  justify-content: center;\n}\n.keymap-extra-options .keymap-settings-button .be-icon {\n  margin-right: 8px;\n}",""]),e.exports=i},848:function(e,t,n){var i=n(645)((function(e){return e[1]}));i.push([e.id,".keymap-settings-popup {\n  background-color: #fff;\n  color: black;\n  border-radius: 8px;\n  border: 1px solid rgba(136, 136, 136, 0.1333333333);\n  box-sizing: border-box;\n  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);\n  transition: 0.2s ease-out;\n  width: 550px;\n  top: 50%;\n  left: 50%;\n  z-index: 100002;\n  transform: translateX(-50%) translateY(-50%) scale(0.9);\n  display: flex;\n  flex-direction: column;\n}\nbody.dark .keymap-settings-popup {\n  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);\n}\nbody.dark .keymap-settings-popup {\n  background-color: #282828;\n  color: #eee;\n}\nbody.dark .keymap-settings-popup {\n  background-color: #222;\n}\n.keymap-settings-popup.open {\n  transform: translateX(-50%) translateY(-50%) scale(1);\n}\n.keymap-settings {\n  font-size: 12px;\n  display: flex;\n  flex-direction: column;\n  padding: 12px 12px 0 18px;\n}\n.keymap-settings-header {\n  display: flex;\n  align-items: center;\n  gap: 0;\n  margin-bottom: 8px;\n}\n.keymap-settings-header-title {\n  flex: 1 0 auto;\n  display: flex;\n  align-items: center;\n  gap: 0;\n  font-size: 18px;\n  font-weight: bold;\n}\n.keymap-settings-header-title .be-icon {\n  margin-right: 6px;\n}\n.keymap-settings-header-help, .keymap-settings-header-close {\n  display: flex;\n  padding: 6px;\n  cursor: pointer;\n  transition: 0.2s ease-out;\n  color: inherit;\n}\n.keymap-settings-header-help:hover, .keymap-settings-header-close:hover {\n  color: var(--theme-color);\n}\n.keymap-settings-content {\n  flex: 1 0 auto;\n  max-height: calc(100vh - 200px);\n  overflow: auto;\n  padding-bottom: 12px;\n}\n.keymap-settings-content .keymap-settings-grid .grid-header,\n.keymap-settings-content .keymap-settings-grid .grid-row {\n  display: flex;\n  align-items: center;\n  gap: 0;\n  gap: 8px;\n  justify-content: space-between;\n  height: 24px;\n  box-sizing: content-box;\n}\n.keymap-settings-content .keymap-settings-grid .grid-header > *,\n.keymap-settings-content .keymap-settings-grid .grid-row > * {\n  flex: 1 0 0;\n  display: flex;\n  align-items: center;\n  gap: 0;\n}\n.keymap-settings-content .keymap-settings-grid .grid-header {\n  margin-bottom: 4px;\n  padding: 4px 0 6px 0;\n  border-bottom: 1px solid rgba(136, 136, 136, 0.1333333333);\n  position: sticky;\n  top: 0;\n  z-index: 1;\n  background-color: #fff;\n}\nbody.dark .keymap-settings-content .keymap-settings-grid .grid-header {\n  background-color: #222;\n}",""]),e.exports=i},542:function(e,t,n){var i=n(645)((function(e){return e[1]}));i.push([e.id,".keymap-settings-grid .grid-row {\n  padding: 2px 0;\n}\n.keymap-settings-grid .grid-row .row-name,\n.keymap-settings-grid .grid-row .row-default-binding,\n.keymap-settings-grid .grid-row .row-preset-binding {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: auto;\n  scrollbar-width: none !important;\n  overscroll-behavior: contain;\n}\n.keymap-settings-grid .grid-row .row-name::-webkit-scrollbar,\n.keymap-settings-grid .grid-row .row-default-binding::-webkit-scrollbar,\n.keymap-settings-grid .grid-row .row-preset-binding::-webkit-scrollbar {\n  height: 0 !important;\n  width: 0 !important;\n}\n.keymap-settings-grid .grid-row .row-name.not-set, .keymap-settings-grid .grid-row .row-name.overwritten,\n.keymap-settings-grid .grid-row .row-default-binding.not-set,\n.keymap-settings-grid .grid-row .row-default-binding.overwritten,\n.keymap-settings-grid .grid-row .row-preset-binding.not-set,\n.keymap-settings-grid .grid-row .row-preset-binding.overwritten {\n  opacity: 0.25;\n}\n.keymap-settings-grid .grid-row .row-custom-binding .be-button {\n  padding: 4px;\n  margin-right: 4px;\n}\n.keymap-settings-grid .grid-row .row-custom-binding .be-icon {\n  margin: 0;\n}\n.keymap-settings-grid .grid-row .row-custom-binding .be-textbox {\n  margin-right: 6px;\n  flex: 1 0 auto;\n}\n.keymap-settings-grid .grid-row .row-custom-binding .custom-binding-edit,\n.keymap-settings-grid .grid-row .row-custom-binding .custom-binding-add {\n  display: flex;\n  align-items: center;\n  gap: 0;\n  flex: 1 0 auto;\n}",""]),e.exports=i},280:function(e,t,n){var i=n(645)((function(e){return e[1]}));i.push([e.id,".keymap-tip-container {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  padding: 8px 16px;\n  background-color: rgba(0, 0, 0, 0.6666666667);\n  color: white;\n  pointer-events: none;\n  opacity: 0;\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  font-size: 14pt;\n  border-radius: 4px;\n  transition: 0.2s ease-out;\n}\nbody.player-mode-blackmask .keymap-tip-container {\n  z-index: 10017;\n}\n.keymap-tip-container.show {\n  opacity: 1;\n}\n.keymap-tip-container i {\n  line-height: 1;\n  margin-right: 8px;\n  font-size: 18pt;\n}\n\n.bilibili-player .bilibili-player-area .bilibili-player-video-wrap .bilibili-player-volumeHint {\n  background-color: rgba(0, 0, 0, 0.6666666667);\n  color: white;\n}\n.bilibili-player .bilibili-player-area .bilibili-player-video-wrap .bilibili-player-volumeHint-icon {\n  line-height: 1;\n}",""]),e.exports=i},645:function(e){"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
t.i=function(e,n,i){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var o={};if(i)for(var r=0;r<this.length;r++){
// eslint-disable-next-line prefer-destructuring
var s=this[r][0];null!=s&&(o[s]=!0)}for(var a=0;a<e.length;a++){var l=[].concat(e[a]);i&&o[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},379:function(e,t,n){"use strict";var i,o=function(){return void 0===i&&(
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// @see https://github.com/webpack-contrib/style-loader/issues/177
i=Boolean(window&&document&&document.all&&!window.atob)),i},r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),s=[];function a(e){for(var t=-1,n=0;n<s.length;n++)if(s[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},i=[],o=0;o<e.length;o++){var r=e[o],l=t.base?r[0]+t.base:r[0],c=n[l]||0,d="".concat(l," ").concat(c);n[l]=c+1;var p=a(d),u={css:r[1],media:r[2],sourceMap:r[3]};-1!==p?(s[p].references++,s[p].updater(u)):s.push({identifier:d,updater:y(u,t),references:1}),i.push(d)}return i}function c(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var o=n.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var s=r(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var d,p=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function u(e,t,n,i){var o=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=p(t,o);else{var r=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(r,s[t]):e.appendChild(r)}}function m(e,t,n){var i=n.css,o=n.media,r=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var g=null,f=0;function y(e,t){var n,i,o;if(t.singleton){var r=f++;n=g||(g=c(t)),i=u.bind(null,n,r,!1),o=u.bind(null,n,r,!0)}else n=c(t),i=m.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var o=a(n[i]);s[o].references--}for(var r=l(e,t),c=0;c<n.length;c++){var d=a(n[c]);0===s[d].references&&(s[d].updater(),s.splice(d,1))}n=r}}}},233:function(e,t,n){var i=n(280);i&&i.__esModule&&(i=i.default),e.exports="string"==typeof i?i:i.toString()},658:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"keymap-extra-options"},[n("VButton",{ref:"button",staticClass:"keymap-settings-button",on:{mouseover:function(t){return e.loadSettings()},click:function(t){return e.toggleSettings()}}},[n("VIcon",{attrs:{icon:"mdi-keyboard-settings-outline",size:18}}),e._v("\n    快捷键设置\n  ")],1)],1)};i._withStripped=!0;var o=n(648),r=n(781),s=Vue.extend({components:{VButton:o.VButton,VIcon:o.VIcon},data:()=>({popupOpen:!1}),methods:{async loadSettings(){await(0,r.loadKeymapSettings)(this.$refs.button)},async toggleSettings(){await(0,r.toggleKeymapSettings)(this.$refs.button)}}}),a=n(379),l=n.n(a),c=n(786),d=n.n(c),p={insert:"head",singleton:!1},u=(l()(d(),p),d().locals,(0,n(900).Z)(s,i,[],!1,null,null,null));u.options.__file="registry/lib/components/utils/keymap/settings/ExtraOptions.vue";var m=u.exports},742:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return S}});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("VPopup",{staticClass:"keymap-settings-popup be-settings-extra-options",attrs:{fixed:"","trigger-element":e.triggerElement},model:{value:e.popupOpen,callback:function(t){e.popupOpen=t},expression:"popupOpen"}},[n("div",{staticClass:"keymap-settings"},[n("div",{staticClass:"keymap-settings-header"},[n("div",{staticClass:"keymap-settings-header-title"},[n("VIcon",{attrs:{icon:"mdi-keyboard-settings-outline"}}),e._v("\n        快捷键设置\n      ")],1),e._v(" "),n("a",{staticClass:"keymap-settings-header-help",attrs:{href:"https://github.com/the1812/Bilibili-Evolved/blob/preview/registry/lib/components/utils/keymap/help.md",target:"_blank",title:"查看帮助"}},[n("VIcon",{attrs:{size:18,icon:"mdi-help-circle-outline"}})],1),e._v(" "),n("div",{staticClass:"keymap-settings-header-close",attrs:{title:"关闭"}},[n("VIcon",{attrs:{size:18,icon:"close"},on:{click:function(t){e.popupOpen=!1}}})],1)]),e._v(" "),n("div",{staticClass:"keymap-settings-content"},[n("div",{staticClass:"keymap-settings-grid"},[n("div",{staticClass:"grid-header"},[n("div",{staticClass:"header-name"},[e._v("\n            动作\n          ")]),e._v(" "),n("div",{staticClass:"header-default-binding"},[e._v("\n            默认按键\n          ")]),e._v(" "),n("div",{staticClass:"header-preset-binding"},[n("VDropdown",{attrs:{items:e.presetOptions,"key-mapper":function(e){return e}},scopedSlots:e._u([{key:"item",fn:function(t){var n=t.item;return[e._v("\n                "+e._s(n)+"\n              ")]}}]),model:{value:e.selectedPreset,callback:function(t){e.selectedPreset=t},expression:"selectedPreset"}})],1),e._v(" "),n("div",{staticClass:"header-custom-binding"},[e._v("\n            自定义按键\n          ")])]),e._v(" "),e._l(e.rows,(function(t){return n("KeymapSettingsRow",{key:t.name,attrs:{row:t,"selected-preset":e.selectedPreset}})}))],2)])])])};i._withStripped=!0;var o=n(986),r=n(648),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"grid-row"},[n("div",{staticClass:"row-name",attrs:{title:e.row.name}},[e._v("\n    "+e._s(e.row.displayName)+"\n  ")]),e._v(" "),n("div",{staticClass:"row-default-binding",class:{overwritten:e.isOverwrittern(e.presets[e.selectedPreset],e.customKeyBindings),"not-set":void 0===e.presetBase[e.row.name]}},[e._v("\n    "+e._s(e.showReadonlyKey(e.presetBase))+"\n  ")]),e._v(" "),n("div",{staticClass:"row-preset-binding",class:{overwritten:e.isOverwrittern(e.customKeyBindings),"not-set":void 0===e.presets[e.selectedPreset][e.row.name]}},[e._v("\n    "+e._s(e.showReadonlyKey(e.presets[e.selectedPreset]))+"\n  ")]),e._v(" "),n("div",{staticClass:"row-custom-binding"},[e.editable?n("div",{staticClass:"custom-binding-edit"},[n("TextBox",{ref:"customBindingTextBox",attrs:{placeholder:"禁用","change-on-blur":"",text:e.customKeyBindings[e.row.name]},on:{change:e.updateCustomBinding}}),e._v(" "),n("VButton",{attrs:{type:"transparent",title:"删除自定义键位"},on:{click:function(t){return e.removeCustomBinding()}}},[n("VIcon",{attrs:{icon:"mdi-trash-can-outline",size:16}})],1)],1):n("div",{staticClass:"custom-binding-add"},[n("VButton",{attrs:{type:"transparent",title:"添加自定义键位"},on:{click:function(t){return e.addCustomBinding()}}},[n("VIcon",{attrs:{icon:"mdi-plus",size:16}})],1)],1)])])};s._withStripped=!0;var a=n(455);const l=(0,o.getComponentSettings)("keymap").options;var c=Vue.extend({components:{TextBox:r.TextBox,VButton:r.VButton,VIcon:r.VIcon},props:{row:{type:Object,required:!0},selectedPreset:{type:String,required:!0}},data:()=>({presets:a.um,presetBase:a.Wb,customKeyBindings:l.customKeyBindings,editable:!1}),created(){this.checkEditable()},methods:{checkEditable(){this.editable=void 0!==this.customKeyBindings[this.row.name]},showReadonlyKey(e){const{name:t}=this.row,n=e[t];return void 0===n?"继承":""===n?"禁用":n},isOverwrittern(){const{name:e}=this.row;for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return n.some((t=>void 0!==t[e]))},async addCustomBinding(){const{name:e}=this.row;this.customKeyBindings[e]="",this.checkEditable(),await this.$nextTick(),this.$refs.customBindingTextBox.focus()},removeCustomBinding(){const{name:e}=this.row;delete this.customKeyBindings[e],this.checkEditable()},updateCustomBinding(e){console.log("update",e);const{name:t}=this.row;this.customKeyBindings[t]=e}}}),d=c,p=n(379),u=n.n(p),m=n(542),g=n.n(m),f={insert:"head",singleton:!1},y=(u()(g(),f),g().locals,n(900)),h=(0,y.Z)(d,s,[],!1,null,null,null);h.options.__file="registry/lib/components/utils/keymap/settings/KeymapSettingsRow.vue";var v=h.exports,b=n(709);const w=(0,o.getComponentSettings)("keymap").options;console.log(a.um,b.Nw,w.preset,w.customKeyBindings);var k=Vue.extend({components:{VIcon:r.VIcon,VDropdown:r.VDropdown,VPopup:r.VPopup,KeymapSettingsRow:v},props:{triggerElement:{type:HTMLElement,default:null}},data:()=>({popupOpen:!1,actions:b.Nw,presets:a.um,customKeyBindings:w.customKeyBindings}),computed:{selectedPreset:{get:()=>w.preset,set(e){w.preset=e}},rows(){return Object.entries(this.actions).map((e=>{let[t,n]=e;return{name:t,...n}}))},presetOptions(){return Object.keys(this.presets)}}}),x=n(848),_=n.n(x),C={insert:"head",singleton:!1},B=(u()(_(),C),_().locals,(0,y.Z)(k,i,[],!1,null,null,null));B.options.__file="registry/lib/components/utils/keymap/settings/KeymapSettings.vue";var S=B.exports},900:function(e,t,n){"use strict";function i(e,t,n,i,o,r,s,a){var l,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),s?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},c._ssrRegister=l):o&&(l=a?function(){o.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:o),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(e,t){return l.call(t),d(e,t)}}else{var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,l):[l]}return{exports:e,options:c}}n.d(t,{Z:function(){return i}})},153:function(e){"use strict";e.exports=coreApis.pluginApis.data},986:function(e){"use strict";e.exports=coreApis.settings},648:function(e){"use strict";e.exports=coreApis.ui},605:function(e){"use strict";e.exports=coreApis.utils}},i={};function o(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={id:e,exports:{}};return n[e](r,r.exports,o),r.exports}o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,{a:t}),t},t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},o.t=function(n,i){if(1&i&&(n=this(n)),8&i)return n;if("object"==typeof n&&n){if(4&i&&n.__esModule)return n;if(16&i&&"function"==typeof n.then)return n}var r=Object.create(null);o.r(r);var s={};e=e||[null,t({}),t([]),t(t)];for(var a=2&i&&n;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((function(e){s[e]=function(){return n[e]}}));return s.default=function(){return n},o.d(r,s),r},o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return function(){"use strict";o.d(r,{component:function(){return u}});var e=coreApis.componentApis.styledComponent,t=o(986),n=o(709),i=o(605),s=coreApis.utils.urls;const a=["shift","alt","ctrl","meta"],l=lodash.once((e=>{const t=s.watchlaterUrls.some((e=>(0,i.matchUrlPattern)(e))),o=s.mediaListUrls.some((e=>(0,i.matchUrlPattern)(e))),r={enable:!0,bindings:e};return document.body.addEventListener("keydown",(e=>{r.enable&&r.bindings.forEach((r=>{if(0===r.keys.length)return;if(!1!==r.action.ignoreTyping&&(0,i.isTyping)())return;const s=e.key.toLowerCase(),l=dq(".bilibili-player-sphere-control");if(null!==l&&"none"!==l.style.display&&["w","a","s","d"].includes(s))return;if(a.some((t=>{const n=r.keys.includes(t);if(r.keys.includes(`[${t}]`))return!1;return n!==e[`${t}Key`]})))return;const c=r.keys.filter((e=>!a.includes(e.toLowerCase()))).map((e=>e.toLowerCase()));if(!(c.includes(e.key.toLowerCase())||c.includes(e.code.toLowerCase())))return;const d=r.action.run({binding:r,isWatchlater:t,isMediaList:o,event:e,clickElement:n.$j,changeVideoTime:n.vN,showTip:n.kW}),p=!lodash.isNil(d);(r.action.prevent??p)&&(e.stopPropagation(),e.preventDefault())}))})),r}));var c=o(455);let d=null;const p=(0,e.styledComponentEntry)((()=>Promise.resolve().then(o.t.bind(o,233,23))),(async e=>{let{settings:i}=e;const o=()=>{const e=i.options.preset,t=c.um[e]||{},o=(e=>Object.entries(e).map((e=>{let[t,i]=e;return{keys:i.split(" ").filter((e=>""!==e)),action:n.Nw[t]||none}})))({...c.Wb,...t,...i.options.customKeyBindings});d?d.bindings=o:d=l(o)};(0,t.addComponentListener)("keymap.preset",o,!0),(0,t.addComponentListener)("keymap.customKeyBindings",o)})),u={name:"keymap",displayName:"快捷键扩展",tags:[componentsTags.video,componentsTags.utils],entry:p,unload:()=>{d&&(d.enable=!1)},reload:()=>{d&&(d.enable=!0)},description:{"zh-CN":"为脚本的功能和 b 站的功能启用键盘快捷键支持, 快捷键列表可在`快捷键设置`中查看和配置."},extraOptions:()=>Promise.resolve().then(o.bind(o,658)).then((e=>e.default)),options:{longJumpSeconds:{defaultValue:85,displayName:"长跳跃秒数"},customKeyBindings:{defaultValue:{},displayName:"自定义键位",hidden:!0},preset:{defaultValue:"Default",displayName:"预设",hidden:!0}},plugin:{displayName:"快捷键扩展 - 搜索支持",setup:e=>{let{addData:t}=e;t("launchBar.actions",(e=>{e.push({name:"keymapSettings",getActions:async()=>[{name:"快捷键扩展设置",description:"Keymap Settings",icon:"mdi-keyboard-settings-outline",action:async()=>{const{toggleKeymapSettings:e}=await Promise.resolve().then(o.bind(o,781));e()}}]})}))}},commitHash:"0303f0f690ebf94f5cb4ebbd3872400125eeda92",coreVersion:"2.4.0"}}(),r=r.component}()}));