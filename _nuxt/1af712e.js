(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{289:function(t,e,n){var content=n(293);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("06bc262e",content,!0,{sourceMap:!1})},292:function(t,e,n){"use strict";n(289)},293:function(t,e,n){var o=n(15)(!1);o.push([t.i,'.background[data-v-339b4c24]{display:flex;color:#f9faf7;font-size:120px;z-index:-1;font-family:"PlayfairDisplay Semi-bold",serif;font-weight:700;line-height:1.4em;position:absolute;top:-88px;left:0;padding:2% 1%}.background__letter[data-v-339b4c24]{display:inline-block;visibility:hidden;opacity:0;transform:translateX(30px);transition:transform 1s cubic-bezier(.23,.51,.15,.9),opacity .3s}.background .shown[data-v-339b4c24]{visibility:visible;opacity:1;transform:translateX(0)}@media (min-width:992px) and (max-width:1199px){.background[data-v-339b4c24]{font-size:90px}}@media (min-width:768px) and (max-width:991px){.background[data-v-339b4c24]{font-size:60px}}@media (max-width:767px){.background[data-v-339b4c24]{position:relative;top:0;font-size:14vw;line-height:1em}}',""]),t.exports=o},294:function(t,e,n){"use strict";n.r(e);n(29),n(49),n(64),n(62);var o={props:{title:{type:String,required:!0}},data:function(){return{letterClass:""}},computed:{titleLetters:function(){return this.title.replace(" "," ").split("")}},mounted:function(){var t=this;setTimeout((function(){t.letterClass="shown"}),100)}},r=(n(292),n(5)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"background"},t._l(t.titleLetters,(function(e,o){return n("span",{key:o,staticClass:"background__letter",class:t.letterClass,style:"transition-delay: "+o/5+"s"},[t._v(t._s(e))])})),0)}),[],!1,null,"339b4c24",null);e.default=component.exports}}]);