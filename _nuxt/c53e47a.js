(window.webpackJsonp=window.webpackJsonp||[]).push([[7,4],{394:function(t,e,r){"use strict";r.r(e);var n=r(16),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"arrow",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M11.7071,4.29289 L15.4142,8 L11.7071,11.7071 C11.3166,12.0976 10.6834,12.0976 10.2929,11.7071 C9.90237,11.3166 9.90237,10.6834 10.2929,10.2929 L11.5858,9 L2,9 C1.44771,9 1,8.55228 1,8 C1,7.44772 1.44771,7 2,7 L11.5858,7 L10.2929,5.70711 C9.90237,5.31658 9.90237,4.68342 10.2929,4.29289 C10.6834,3.90237 11.3166,3.90237 11.7071,4.29289 Z"}})])}),[],!1,null,null,null);e.default=component.exports},403:function(t,e,r){var content=r(415);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(35).default)("6447c334",content,!0,{sourceMap:!1})},414:function(t,e,r){"use strict";r(403)},415:function(t,e,r){var n=r(34)(!1);n.push([t.i,'.slider[data-v-f0828f30]{position:fixed;top:0;bottom:0;left:0;width:100%;line-height:1}.slider__container[data-v-f0828f30]{width:100%;height:100%;position:absolute;opacity:.8}.slider__caption[data-v-f0828f30]{opacity:0;position:absolute;bottom:80px;z-index:20;color:#fff;padding:45px}.slider__caption-top[data-v-f0828f30]{display:flex;margin-bottom:5px;opacity:0;transform:translateX(-40px)}.slider__date[data-v-f0828f30],.slider__title[data-v-f0828f30]{font-size:13px;text-transform:uppercase;letter-spacing:.25em;position:relative;margin-right:22px}@media (min-width:992px) and (max-width:1199px){.slider__date[data-v-f0828f30],.slider__title[data-v-f0828f30]{font-size:10px}}@media (max-width:991px){.slider__date[data-v-f0828f30],.slider__title[data-v-f0828f30]{font-size:8px}}.slider__date[data-v-f0828f30]:after{height:95%;width:2px;content:"";display:block;position:absolute;right:-10px;background:repeating-linear-gradient(0deg,#fff,#fff 2px,transparent 0,transparent 4px);top:-1px}.slider__name[data-v-f0828f30]{font-family:"Caveat",cursive;font-size:60px;margin-bottom:20px;opacity:0;transform:translateX(-40px)}@media (min-width:992px) and (max-width:1199px){.slider__name[data-v-f0828f30]{font-size:48px}}@media (min-width:768px) and (max-width:991px){.slider__name[data-v-f0828f30]{font-size:36px}}.slider__description[data-v-f0828f30]{font-size:16px;line-height:1.5em;opacity:0;transform:translateX(-40px)}@media (min-width:992px) and (max-width:1199px){.slider__description[data-v-f0828f30]{font-size:14px}}@media (min-width:768px) and (max-width:991px){.slider__description[data-v-f0828f30]{font-size:12px}}.slider .currentCaption[data-v-f0828f30]{opacity:1;transition:opacity 1.5s ease-in-out}.slider .currentCaption .slider__caption-top[data-v-f0828f30],.slider .currentCaption .slider__description[data-v-f0828f30],.slider .currentCaption .slider__name[data-v-f0828f30]{opacity:1;transform:translateX(0);transition:all 1s ease-in-out;transition-delay:.3s}.slider .currentCaption .slider__name[data-v-f0828f30]{transition-delay:.2s}.slider .currentCaption .slider__description[data-v-f0828f30]{transition-delay:.55s}.slider .slider__image[data-v-f0828f30]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;z-index:10;opacity:0;transition:opacity 1.5s ease-in-out}.slider .currentImage[data-v-f0828f30]{opacity:1;transition:opacity 1.5s ease-in-out}.arrows[data-v-f0828f30]{position:absolute;bottom:45px;left:40px;display:flex;z-index:50}@-webkit-keyframes circled-data-v-f0828f30{to{transform:rotate(1turn)}}@keyframes circled-data-v-f0828f30{to{transform:rotate(1turn)}}.arrow[data-v-f0828f30]{cursor:pointer;position:relative;margin:0 5px;display:flex;justify-content:center;align-items:center}.arrow[data-v-f0828f30],.arrow[data-v-f0828f30]:after{width:30px;height:30px}.arrow[data-v-f0828f30]:after{position:absolute;content:"";border:2px dotted #fff;border-radius:50%}.arrow__left[data-v-f0828f30]{transform:rotate(180deg);margin-right:20px}.arrow__left[data-v-f0828f30]:hover:after{animation:circled-data-v-f0828f30 4s linear infinite reverse}.arrow__right[data-v-f0828f30]:hover:after{-webkit-animation:circled-data-v-f0828f30 4s linear infinite;animation:circled-data-v-f0828f30 4s linear infinite}.arrow[data-v-f0828f30] .arrow{fill:#fff;width:14px}',""]),t.exports=n},421:function(t,e,r){"use strict";r.r(e);r(118);var n={props:{images:{required:!0,type:Array}},data:function(){return{currentImageIndex:0}},mounted:function(){var t=this;setInterval((function(){return t.nextImage()}),5e3)},methods:{prevImage:function(){this.currentImageIndex-1<0?this.currentImageIndex=this.images.length-1:this.currentImageIndex--},nextImage:function(){this.currentImageIndex+1<this.images.length?this.currentImageIndex++:this.currentImageIndex=0}}},o=(r(414),r(16)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"slider"},[t._l(t.images,(function(image,e){return r("div",{key:e,staticClass:"slider__container"},[r("img",{staticClass:"slider__image",class:e===t.currentImageIndex?"currentImage":"",attrs:{src:image.cover}}),t._v(" "),r("div",{staticClass:"slider__caption",class:e===t.currentImageIndex?"currentCaption":""},[r("div",{staticClass:"slider__caption-top"},[r("div",{staticClass:"slider__date"},[t._v(t._s(image.date))]),t._v(" "),r("div",{staticClass:"slider__title"},[t._v(t._s(image.title))])]),t._v(" "),r("div",{staticClass:"slider__name",domProps:{innerHTML:t._s(image.name)}}),t._v(" "),r("div",{staticClass:"slider__description",domProps:{innerHTML:t._s(image.description)}})])])})),t._v(" "),r("div",{staticClass:"arrows"},[r("div",{staticClass:"arrow arrow__left",on:{click:function(e){return e.preventDefault(),t.prevImage.apply(null,arguments)}}},[r("arrow")],1),t._v(" "),r("div",{staticClass:"arrow arrow__right",on:{click:function(e){return e.preventDefault(),t.nextImage.apply(null,arguments)}}},[r("arrow")],1)])],2)}),[],!1,null,"f0828f30",null);e.default=component.exports;installComponents(component,{Arrow:r(394).default})}}]);