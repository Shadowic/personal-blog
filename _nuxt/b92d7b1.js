(window.webpackJsonp=window.webpackJsonp||[]).push([[11,2,3,4,5,7],{391:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"ru":{"discover":"открыть"},"en":{"discover":"discover"}}'),delete t.options._Ctor}},392:function(t,e,n){var content=n(396);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(35).default)("7a18d282",content,!0,{sourceMap:!1})},393:function(t,e,n){var content=n(399);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(35).default)("16e95b95",content,!0,{sourceMap:!1})},394:function(t,e,n){"use strict";n.r(e);var o=n(16),component=Object(o.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"arrow",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M11.7071,4.29289 L15.4142,8 L11.7071,11.7071 C11.3166,12.0976 10.6834,12.0976 10.2929,11.7071 C9.90237,11.3166 9.90237,10.6834 10.2929,10.2929 L11.5858,9 L2,9 C1.44771,9 1,8.55228 1,8 C1,7.44772 1.44771,7 2,7 L11.5858,7 L10.2929,5.70711 C9.90237,5.31658 9.90237,4.68342 10.2929,4.29289 C10.6834,3.90237 11.3166,3.90237 11.7071,4.29289 Z"}})])}),[],!1,null,null,null);e.default=component.exports},395:function(t,e,n){"use strict";n(392)},396:function(t,e,n){var o=n(34)(!1);o.push([t.i,'.background[data-v-79f547c0]{display:flex;color:#fffcf7;font-size:120px;z-index:-1;font-family:"Caveat",cursive;font-weight:700;line-height:1.4em;position:absolute;top:-88px;left:0;padding:2% 1%}.background__letter[data-v-79f547c0]{display:inline-block;visibility:hidden;opacity:0;transform:translateX(30px);transition:transform 1s cubic-bezier(.23,.51,.15,.9),opacity .3s}.background .shown[data-v-79f547c0]{visibility:visible;opacity:1;transform:translateX(0)}@media (min-width:992px) and (max-width:1199px){.background[data-v-79f547c0]{font-size:90px}}@media (min-width:768px) and (max-width:991px){.background[data-v-79f547c0]{font-size:60px}}@media (max-width:767px){.background[data-v-79f547c0]{position:relative;top:0;font-size:14vw;line-height:1em}}',""]),t.exports=o},397:function(t,e,n){"use strict";n.r(e);n(36),n(100),n(99),n(118);var o={props:{title:{type:String,required:!0}},data:function(){return{letterClass:""}},computed:{titleLetters:function(){return this.title.replace(" "," ").split("")}},mounted:function(){var t=this;setTimeout((function(){t.letterClass="shown"}),100)}},r=(n(395),n(16)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"background"},t._l(t.titleLetters,(function(e,o){return n("span",{key:o,staticClass:"background__letter",class:t.letterClass,style:"transition-delay: "+o/5+"s"},[t._v(t._s(e))])})),0)}),[],!1,null,"79f547c0",null);e.default=component.exports},398:function(t,e,n){"use strict";n(393)},399:function(t,e,n){var o=n(34)(!1);o.push([t.i,'.album[data-v-fc4c22d8]{display:flex;align-items:center;width:100%;height:350px;position:relative;margin:20px 0;justify-content:space-between}@media (max-width:767px){.album[data-v-fc4c22d8]{flex-direction:column-reverse;height:auto}}.album[data-v-fc4c22d8]:nth-child(2n){display:flex;flex-direction:row-reverse}@media (max-width:767px){.album[data-v-fc4c22d8]:nth-child(2n){flex-direction:column-reverse;height:auto}}.album__outline[data-v-fc4c22d8]{background-color:transparent;display:flex;flex-direction:column;justify-content:center;width:50%;padding:25px 5%}.album__outline-top[data-v-fc4c22d8],.album__outline .btn[data-v-fc4c22d8]{margin:8px 0 3px;color:#79a2ac;font-size:10px;letter-spacing:.2em;line-height:1em;text-transform:uppercase;display:flex;vertical-align:middle}.album__outline .btn[data-v-fc4c22d8]{margin-top:50px;transition:color .2s ease-out}.album__outline .btn span[data-v-fc4c22d8]{position:relative}.album__outline .btn span[data-v-fc4c22d8] .arrow{fill:#79a2ac;width:10px;transform:translateY(4px);transition:all .2s ease-out}.album__outline .btn[data-v-fc4c22d8]:hover,.hovered .album__outline .btn[data-v-fc4c22d8]{color:#1c2522;cursor:pointer}.album__outline .btn:hover span[data-v-fc4c22d8]:after,.hovered .album__outline .btn span[data-v-fc4c22d8]:after{transform:translateX(2px)}.album__outline .btn[data-v-fc4c22d8]:hover .arrow,.hovered .album__outline .btn[data-v-fc4c22d8] .arrow{fill:#1c2522;transform:translate(4px,4px)}@media (max-width:767px){.album__outline[data-v-fc4c22d8]{width:100%}}@-webkit-keyframes animate-svg-line-data-v-fc4c22d8{to{stroke-dashoffset:-1000}}@keyframes animate-svg-line-data-v-fc4c22d8{to{stroke-dashoffset:-1000}}.svg-dotted-line[data-v-fc4c22d8]{position:absolute;bottom:-6px;left:0;width:100%;height:4px;stroke:#79a2ac;stroke-width:2px;stroke-linecap:round;stroke-dasharray:.4px,5px;stroke-dashoffset:-2;transition:stroke .2s ease-out}.btn:hover .svg-dotted-line[data-v-fc4c22d8],.hovered .svg-dotted-line[data-v-fc4c22d8]{stroke:#1c2522;-webkit-animation:animate-svg-line-data-v-fc4c22d8 40s linear infinite;animation:animate-svg-line-data-v-fc4c22d8 40s linear infinite;width:105%}.album__date[data-v-fc4c22d8]{display:block;margin:0 10px 6px 0;padding:0 11px 0 0;position:relative;transition:color .2s ease-out}.album__date[data-v-fc4c22d8]:hover{color:#1c2522;cursor:pointer}.album__date[data-v-fc4c22d8]:after{height:100%;width:2px;content:"";display:block;position:absolute;right:0;background:repeating-linear-gradient(0deg,#79a2ac,#79a2ac 2px,transparent 0,transparent 4px);top:0}.album__title[data-v-fc4c22d8]{margin-right:0;padding-right:0;transition:color .2s ease-out}.album__title[data-v-fc4c22d8]:hover{color:#1c2522;cursor:pointer}.album__description[data-v-fc4c22d8]{font-family:"Caveat",cursive;color:#1c2522;font-size:33px;line-height:1.212em;word-wrap:break-word;transition:all .25s ease-in-out}.album__description[data-v-fc4c22d8]:hover{cursor:pointer}.hovered .album__description[data-v-fc4c22d8]{color:#79a2ac}.album__cover[data-v-fc4c22d8]{width:calc(50% - 10px);height:100%;overflow:hidden}@media (max-width:767px){.album__cover[data-v-fc4c22d8]{width:100%;height:300px}}.album__image-cover[data-v-fc4c22d8]{width:100%;height:100%;background:50%/cover;display:block;transform:scale(1.04);transition:1s cubic-bezier(.17,.59,.05,.96);-webkit-clip-path:inset(0 0 0 0);clip-path:inset(0 0 0 0)}.album__cover:hover .album__image-cover[data-v-fc4c22d8],.hovered .album__image-cover[data-v-fc4c22d8]{transform:scale(1)}',""]),t.exports=o},400:function(t,e,n){"use strict";var o=n(391),r=n.n(o);e.default=r.a},401:function(t,e,n){"use strict";n.r(e);n(81);var o={props:{album:{required:!0,type:Object},albumType:{default:"",type:String}},data:function(){return{blockClass:""}},methods:{getCurrentLocale:function(){return this.$i18n.localeProperties.code},addClassHovered:function(){this.blockClass="hovered"},removeClassHovered:function(){this.blockClass=""},getAlbumClass:function(){return"".concat(this.blockClass," ").concat(this.albumType)}}},r=(n(398),n(16)),d=n(400),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"album",class:t.getAlbumClass()},[n("div",{staticClass:"album__outline"},[n("div",{staticClass:"album__outline-top"},[n("div",{staticClass:"album__date"},[t._v(t._s(t.album.date))]),t._v(" "),n("div",{staticClass:"album__title"},[t._v(t._s(t.album.title))])]),t._v(" "),n("nuxt-link",{staticClass:"album__description",attrs:{to:"/album/"+t.album.id},domProps:{innerHTML:t._s("ru"===t.getCurrentLocale()?t.album.description:t.album.descriptionEn)},nativeOn:{mouseover:function(e){return t.addClassHovered.apply(null,arguments)},mouseleave:function(e){return t.removeClassHovered.apply(null,arguments)}}}),t._v(" "),n("nuxt-link",{staticClass:"btn",attrs:{to:"/album/"+t.album.id},nativeOn:{mouseover:function(e){return t.addClassHovered.apply(null,arguments)},mouseleave:function(e){return t.removeClassHovered.apply(null,arguments)}}},[n("span",[t._v(t._s(t.$t("discover"))+"\n        "),n("arrow"),t._v(" "),n("svg",{staticClass:"svg-dotted-line"},[n("line",{attrs:{x1:"0",y1:"50%",x2:"100%",y2:"50%"}})])],1)])],1),t._v(" "),n("div",{staticClass:"album__cover",on:{mouseover:t.addClassHovered,mouseleave:t.removeClassHovered}},[n("nuxt-link",{staticClass:"album__image-cover",style:{backgroundImage:"url("+t.album.cover+")"},attrs:{to:"/album/"+t.album.id}})],1)])}),[],!1,null,"fc4c22d8",null);"function"==typeof d.default&&Object(d.default)(component);e.default=component.exports;installComponents(component,{Arrow:n(394).default})},403:function(t,e,n){var content=n(415);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(35).default)("6447c334",content,!0,{sourceMap:!1})},404:function(t,e,n){"use strict";n.r(e);var o=n(10),r=(n(67),n(20),n(119),{props:{isShownOnIndex:{type:Boolean,default:null},category:{type:String,default:""}},data:function(){return{error:null,albums:[]}},fetch:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,i,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3000/data/albums.json");case 2:return 200!==(n=e.sent).status&&(t.error="Не удалось выгрузить альбомы"),e.next=6,n.json();case 6:if(o=e.sent,t.isShownOnIndex)for(i=0;i<o.length;i++)!0===o[i].shownOnIndexPage&&t.albums.push(o[i]);for(r=0;r<o.length;r++)o[r].category===t.category&&t.albums.push(o[r]);case 9:case"end":return e.stop()}}),e)})))()}))}),d=r,l=n(16),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.error?n("div",{staticClass:"error"},[t._v(t._s(t.error))]):t._e(),t._v(" "),t._l(t.albums,(function(t,e){return n("Album",{key:e,attrs:{album:t}})}))],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Album:n(401).default})},413:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"ru":{"welcome":"личный блог","title":"Мечтаю,<br /> <span>исследую</span>, <br />создаю","description":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\'","latest":"Последнее","featured":"Последние альбомы"},"en":{"welcome":"you\'re welcome","title":"Dreaming,<br /> <span>exploring</span>, <br />creating","description":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\'","latest":"Latest","featured":"Latest albums"}}'),delete t.options._Ctor}},414:function(t,e,n){"use strict";n(403)},415:function(t,e,n){var o=n(34)(!1);o.push([t.i,'.slider[data-v-f0828f30]{position:fixed;top:0;bottom:0;left:0;width:100%;line-height:1}.slider__container[data-v-f0828f30]{width:100%;height:100%;position:absolute;opacity:.8}.slider__caption[data-v-f0828f30]{opacity:0;position:absolute;bottom:80px;z-index:20;color:#fff;padding:45px}.slider__caption-top[data-v-f0828f30]{display:flex;margin-bottom:5px;opacity:0;transform:translateX(-40px)}.slider__date[data-v-f0828f30],.slider__title[data-v-f0828f30]{font-size:13px;text-transform:uppercase;letter-spacing:.25em;position:relative;margin-right:22px}@media (min-width:992px) and (max-width:1199px){.slider__date[data-v-f0828f30],.slider__title[data-v-f0828f30]{font-size:10px}}@media (max-width:991px){.slider__date[data-v-f0828f30],.slider__title[data-v-f0828f30]{font-size:8px}}.slider__date[data-v-f0828f30]:after{height:95%;width:2px;content:"";display:block;position:absolute;right:-10px;background:repeating-linear-gradient(0deg,#fff,#fff 2px,transparent 0,transparent 4px);top:-1px}.slider__name[data-v-f0828f30]{font-family:"Caveat",cursive;font-size:60px;margin-bottom:20px;opacity:0;transform:translateX(-40px)}@media (min-width:992px) and (max-width:1199px){.slider__name[data-v-f0828f30]{font-size:48px}}@media (min-width:768px) and (max-width:991px){.slider__name[data-v-f0828f30]{font-size:36px}}.slider__description[data-v-f0828f30]{font-size:16px;line-height:1.5em;opacity:0;transform:translateX(-40px)}@media (min-width:992px) and (max-width:1199px){.slider__description[data-v-f0828f30]{font-size:14px}}@media (min-width:768px) and (max-width:991px){.slider__description[data-v-f0828f30]{font-size:12px}}.slider .currentCaption[data-v-f0828f30]{opacity:1;transition:opacity 1.5s ease-in-out}.slider .currentCaption .slider__caption-top[data-v-f0828f30],.slider .currentCaption .slider__description[data-v-f0828f30],.slider .currentCaption .slider__name[data-v-f0828f30]{opacity:1;transform:translateX(0);transition:all 1s ease-in-out;transition-delay:.3s}.slider .currentCaption .slider__name[data-v-f0828f30]{transition-delay:.2s}.slider .currentCaption .slider__description[data-v-f0828f30]{transition-delay:.55s}.slider .slider__image[data-v-f0828f30]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;z-index:10;opacity:0;transition:opacity 1.5s ease-in-out}.slider .currentImage[data-v-f0828f30]{opacity:1;transition:opacity 1.5s ease-in-out}.arrows[data-v-f0828f30]{position:absolute;bottom:45px;left:40px;display:flex;z-index:50}@-webkit-keyframes circled-data-v-f0828f30{to{transform:rotate(1turn)}}@keyframes circled-data-v-f0828f30{to{transform:rotate(1turn)}}.arrow[data-v-f0828f30]{cursor:pointer;position:relative;margin:0 5px;display:flex;justify-content:center;align-items:center}.arrow[data-v-f0828f30],.arrow[data-v-f0828f30]:after{width:30px;height:30px}.arrow[data-v-f0828f30]:after{position:absolute;content:"";border:2px dotted #fff;border-radius:50%}.arrow__left[data-v-f0828f30]{transform:rotate(180deg);margin-right:20px}.arrow__left[data-v-f0828f30]:hover:after{animation:circled-data-v-f0828f30 4s linear infinite reverse}.arrow__right[data-v-f0828f30]:hover:after{-webkit-animation:circled-data-v-f0828f30 4s linear infinite;animation:circled-data-v-f0828f30 4s linear infinite}.arrow[data-v-f0828f30] .arrow{fill:#fff;width:14px}',""]),t.exports=o},419:function(t,e,n){var content=n(432);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(35).default)("02e851f7",content,!0,{sourceMap:!1})},421:function(t,e,n){"use strict";n.r(e);n(118);var o={props:{images:{required:!0,type:Array}},data:function(){return{currentImageIndex:0}},mounted:function(){var t=this;setInterval((function(){return t.nextImage()}),5e3)},methods:{prevImage:function(){this.currentImageIndex-1<0?this.currentImageIndex=this.images.length-1:this.currentImageIndex--},nextImage:function(){this.currentImageIndex+1<this.images.length?this.currentImageIndex++:this.currentImageIndex=0}}},r=(n(414),n(16)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slider"},[t._l(t.images,(function(image,e){return n("div",{key:e,staticClass:"slider__container"},[n("img",{staticClass:"slider__image",class:e===t.currentImageIndex?"currentImage":"",attrs:{src:image.cover}}),t._v(" "),n("div",{staticClass:"slider__caption",class:e===t.currentImageIndex?"currentCaption":""},[n("div",{staticClass:"slider__caption-top"},[n("div",{staticClass:"slider__date"},[t._v(t._s(image.date))]),t._v(" "),n("div",{staticClass:"slider__title"},[t._v(t._s(image.title))])]),t._v(" "),n("div",{staticClass:"slider__name",domProps:{innerHTML:t._s(image.name)}}),t._v(" "),n("div",{staticClass:"slider__description",domProps:{innerHTML:t._s(image.description)}})])])})),t._v(" "),n("div",{staticClass:"arrows"},[n("div",{staticClass:"arrow arrow__left",on:{click:function(e){return e.preventDefault(),t.prevImage.apply(null,arguments)}}},[n("arrow")],1),t._v(" "),n("div",{staticClass:"arrow arrow__right",on:{click:function(e){return e.preventDefault(),t.nextImage.apply(null,arguments)}}},[n("arrow")],1)])],2)}),[],!1,null,"f0828f30",null);e.default=component.exports;installComponents(component,{Arrow:n(394).default})},431:function(t,e,n){"use strict";n(419)},432:function(t,e,n){var o=n(34),r=n(102),d=n(433),l=n(212),c=n(434),f=o(!1),m=r(d),_=r(l),x=r(c);f.push([t.i,".container[data-v-65e48042]{margin:0 auto;display:flex;justify-content:flex-end}.container .index__slider[data-v-65e48042]{left:80px;width:40%}@media (max-width:767px){.container .index__slider[data-v-65e48042]{position:relative;left:0;width:100%;height:100vh}}@media (max-width:767px){.container .index__slider[data-v-65e48042] .arrows,.container .index__slider[data-v-65e48042] .slider__caption{display:none}}.container[data-v-65e48042] .index__albums{display:flex;flex-wrap:wrap}.container[data-v-65e48042] .index__albums .album{width:50%;flex-direction:column;padding:0 20px;margin:0 0 120px}.container[data-v-65e48042] .index__albums .album:nth-child(2n){margin-top:-95px}@media (max-width:767px){.container[data-v-65e48042] .index__albums .album:nth-child(2n){margin-top:0}}.container[data-v-65e48042] .index__albums .album__outline{position:absolute;background-color:#fff;padding:20px;bottom:-10%;width:calc(100% - 80px);z-index:1;box-shadow:0 0 20px rgba(0,0,0,.05)}.container[data-v-65e48042] .index__albums .album__outline-top{display:none}@media (min-width:768px) and (max-width:991px){.container[data-v-65e48042] .index__albums .album__outline{bottom:-50%}}.container[data-v-65e48042] .index__albums .album__description{font-size:1.4vw}@media (min-width:768px) and (max-width:991px){.container[data-v-65e48042] .index__albums .album__description{font-size:14px}}@media (min-width:480px) and (max-width:767px){.container[data-v-65e48042] .index__albums .album__description{font-size:22px}}@media (max-width:479px),only screen and (max-width:900px) and (max-height:500px) and (orientation:landscape){.container[data-v-65e48042] .index__albums .album__description{font-size:16px}}.container[data-v-65e48042] .index__albums .album__cover{width:100%}.container[data-v-65e48042] .index__albums .album .btn{display:none}@media (min-width:768px) and (max-width:991px){.container[data-v-65e48042] .index__albums .album{height:200px}}@media (max-width:767px){.container[data-v-65e48042] .index__albums .album{height:300px;width:100%;margin:0 0 80px}}@media (max-width:767px){.container[data-v-65e48042]{flex-direction:column}}.container[data-v-65e48042] .background{position:absolute;top:-110px;left:10px}@media (min-width:992px) and (max-width:1199px){.container[data-v-65e48042] .background{top:-65px}}@media (max-width:991px){.container[data-v-65e48042] .background{top:-45px}}@media (max-width:479px),only screen and (max-width:900px) and (max-height:500px) and (orientation:landscape){.container[data-v-65e48042] .background{top:-25px}}.content[data-v-65e48042]{padding-left:calc(40% + 80px)}.content__top[data-v-65e48042]{background:url("+m+") 50%/cover;padding:3% 2% 15%;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}@media (max-width:767px){.content__top[data-v-65e48042]{background:transparent;height:100vh;padding:0 2%}}.content__icon[data-v-65e48042]{width:95px;height:95px;background:url("+_+") 50%/cover;transform:translateY(15px)}@media (min-width:768px) and (max-width:991px){.content__icon[data-v-65e48042]{width:60px;height:60px}}@media (max-width:479px),only screen and (max-width:900px) and (max-height:500px) and (orientation:landscape){.content__icon[data-v-65e48042]{width:60px;height:60px}}.content__subtitle[data-v-65e48042]{margin-top:22px;color:#3b4d55;font-size:.77vw;font-weight:600;letter-spacing:.2em;line-height:1em;text-transform:uppercase}@media (max-width:767px){.content__subtitle[data-v-65e48042]{font-size:10px}}.content__title[data-v-65e48042]{background:url("+x+') 50%/cover;-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-family:"Caveat",cursive;color:#1c2522;font-size:8.4vw;line-height:.8em;margin:25px 0;word-wrap:break-word;padding-bottom:30px}.content__title[data-v-65e48042] span{font-style:italic}@media (min-width:480px) and (max-width:767px){.content__title[data-v-65e48042]{font-size:9vw;line-height:1.2;margin:20px 0}}@media (max-width:479px),only screen and (max-width:900px) and (max-height:500px) and (orientation:landscape){.content__title[data-v-65e48042]{font-size:10vw}}.content__description[data-v-65e48042]{font-family:"Caveat",cursive;font-size:1.2vw;padding:0 13%;color:#1c2522;margin:17px 0 0;line-height:1.63em}@media (min-width:992px) and (max-width:1199px){.content__description[data-v-65e48042]{font-size:16px}}@media (min-width:768px) and (max-width:991px){.content__description[data-v-65e48042]{font-size:14px}}@media (max-width:767px){.content__description[data-v-65e48042]{font-size:16px}}.content__body[data-v-65e48042]{position:relative}.content__body__title[data-v-65e48042]{display:block;font-family:"Caveat",cursive;font-weight:600;color:#1c2522;font-size:2.4vw;line-height:1.212em;margin:110px 0 30px;padding:0 55px;width:-webkit-min-content;width:-moz-min-content;width:min-content}@media (min-width:992px) and (max-width:1199px){.content__body__title[data-v-65e48042]{margin:40px 0 30px}}@media (min-width:768px) and (max-width:991px){.content__body__title[data-v-65e48042]{font-size:26px;margin:30px 0;padding:0 40px}}@media (max-width:767px){.content__body__title[data-v-65e48042]{margin:30px 0;padding:0 30px;width:-webkit-max-content;width:-moz-max-content;width:max-content;font-size:32px}}@media (max-width:479px),only screen and (max-width:900px) and (max-height:500px) and (orientation:landscape){.content__body__title[data-v-65e48042]{font-size:22px}}@media (min-width:768px) and (max-width:991px){.content__body[data-v-65e48042]{margin-top:-10px}}@media (max-width:767px){.content[data-v-65e48042]{position:absolute;top:0;width:100%;padding:0}}',""]),t.exports=f},433:function(t,e,n){t.exports=n.p+"img/index-top2.1bc0399.jpg"},434:function(t,e,n){t.exports=n.p+"img/IMG_0141.a0b072a.JPG"},435:function(t,e,n){"use strict";var o=n(413),r=n.n(o);e.default=r.a},438:function(t,e,n){"use strict";n.r(e);var o=n(10),r=(n(67),n(20),n(119),{layout:"index",data:function(){return{images:[]}},fetch:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3000/data/sliderContent.json");case 2:return 200!==(n=e.sent).status&&(t.error="Не удалось получить картинки"),e.next=6,n.json();case 6:t.images=e.sent;case 7:case"end":return e.stop()}}),e)})))()}))}),d=r,l=(n(431),n(16)),c=n(435),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("Slider",{staticClass:"index__slider",attrs:{images:t.images}}),t._v(" "),n("div",{staticClass:"content"},[n("div",{staticClass:"content__top"},[n("div",{staticClass:"content__icon"}),t._v(" "),n("div",{staticClass:"content__subtitle"},[t._v(t._s(t.$t("welcome")))]),t._v(" "),n("h1",{staticClass:"content__title",domProps:{innerHTML:t._s(t.$t("title"))}}),t._v(" "),n("p",{staticClass:"content__description"},[t._v("\n        "+t._s(t.$t("description"))+"\n      ")])]),t._v(" "),n("div",{staticClass:"content__body"},[n("BackgroundWord",{attrs:{title:t.$t("latest")}}),t._v(" "),n("div",{staticClass:"content__body__title"},[t._v(t._s(t.$t("featured")))]),t._v(" "),n("AlbumsList",{staticClass:"index__albums",attrs:{"is-shown-on-index":!0}})],1),t._v(" "),n("Footer")],1)],1)}),[],!1,null,"65e48042",null);"function"==typeof c.default&&Object(c.default)(component);e.default=component.exports;installComponents(component,{Slider:n(421).default,BackgroundWord:n(397).default,AlbumsList:n(404).default,Footer:n(272).default})}}]);