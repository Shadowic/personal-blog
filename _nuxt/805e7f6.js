(window.webpackJsonp=window.webpackJsonp||[]).push([[11,2,3,4,5,7],{289:function(t,e,n){var content=n(293);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("06bc262e",content,!0,{sourceMap:!1})},290:function(t,e,n){var content=n(296);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("5c10bf90",content,!0,{sourceMap:!1})},291:function(t,e,n){"use strict";n.r(e);var d=n(5),component=Object(d.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"arrow",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M11.7071,4.29289 L15.4142,8 L11.7071,11.7071 C11.3166,12.0976 10.6834,12.0976 10.2929,11.7071 C9.90237,11.3166 9.90237,10.6834 10.2929,10.2929 L11.5858,9 L2,9 C1.44771,9 1,8.55228 1,8 C1,7.44772 1.44771,7 2,7 L11.5858,7 L10.2929,5.70711 C9.90237,5.31658 9.90237,4.68342 10.2929,4.29289 C10.6834,3.90237 11.3166,3.90237 11.7071,4.29289 Z"}})])}),[],!1,null,null,null);e.default=component.exports},292:function(t,e,n){"use strict";n(289)},293:function(t,e,n){var d=n(15)(!1);d.push([t.i,'.background[data-v-339b4c24]{display:flex;color:#f9faf7;font-size:120px;z-index:-1;font-family:"PlayfairDisplay Semi-bold",serif;font-weight:700;line-height:1.4em;position:absolute;top:-88px;left:0;padding:2% 1%}.background__letter[data-v-339b4c24]{display:inline-block;visibility:hidden;opacity:0;transform:translateX(30px);transition:transform 1s cubic-bezier(.23,.51,.15,.9),opacity .3s}.background .shown[data-v-339b4c24]{visibility:visible;opacity:1;transform:translateX(0)}@media (min-width:992px) and (max-width:1199px){.background[data-v-339b4c24]{font-size:90px}}@media (min-width:768px) and (max-width:991px){.background[data-v-339b4c24]{font-size:60px}}@media (max-width:767px){.background[data-v-339b4c24]{position:relative;top:0;font-size:14vw;line-height:1em}}',""]),t.exports=d},294:function(t,e,n){"use strict";n.r(e);n(29),n(49),n(64),n(62);var d={props:{title:{type:String,required:!0}},data:function(){return{letterClass:""}},computed:{titleLetters:function(){return this.title.replace(" "," ").split("")}},mounted:function(){var t=this;setTimeout((function(){t.letterClass="shown"}),100)}},o=(n(292),n(5)),component=Object(o.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"background"},t._l(t.titleLetters,(function(e,d){return n("span",{key:d,staticClass:"background__letter",class:t.letterClass,style:"transition-delay: "+d/5+"s"},[t._v(t._s(e))])})),0)}),[],!1,null,"339b4c24",null);e.default=component.exports},295:function(t,e,n){"use strict";n(290)},296:function(t,e,n){var d=n(15)(!1);d.push([t.i,'.album[data-v-dbb7fce0]{display:flex;align-items:center;width:100%;height:350px;position:relative}@media (max-width:767px){.album[data-v-dbb7fce0]{flex-direction:column-reverse;height:auto}}.album[data-v-dbb7fce0]:nth-child(2n){display:flex;flex-direction:row-reverse}@media (max-width:767px){.album[data-v-dbb7fce0]:nth-child(2n){flex-direction:column-reverse;height:auto}}.album__outline[data-v-dbb7fce0]{background-color:transparent;display:flex;flex-direction:column;justify-content:center;width:50%;padding:25px 5%}.album__outline-top[data-v-dbb7fce0],.album__outline .btn[data-v-dbb7fce0]{margin:8px 0 3px;color:#79a2ac;font-size:10px;letter-spacing:.2em;line-height:1em;text-transform:uppercase;display:flex;vertical-align:middle}.album__outline .btn[data-v-dbb7fce0]{margin-top:50px;transition:color .2s ease-out}.album__outline .btn span[data-v-dbb7fce0]{position:relative}.album__outline .btn span[data-v-dbb7fce0] .arrow{fill:#79a2ac;width:10px;transform:translateY(4px);transition:all .2s ease-out}.album__outline .btn[data-v-dbb7fce0]:hover,.hovered .album__outline .btn[data-v-dbb7fce0]{color:#1c2522;cursor:pointer}.album__outline .btn:hover span[data-v-dbb7fce0]:after,.hovered .album__outline .btn span[data-v-dbb7fce0]:after{transform:translateX(2px)}.album__outline .btn[data-v-dbb7fce0]:hover .arrow,.hovered .album__outline .btn[data-v-dbb7fce0] .arrow{fill:#1c2522;transform:translate(4px,4px)}@media (max-width:767px){.album__outline[data-v-dbb7fce0]{width:100%}}@-webkit-keyframes animate-svg-line-data-v-dbb7fce0{to{stroke-dashoffset:-1000}}@keyframes animate-svg-line-data-v-dbb7fce0{to{stroke-dashoffset:-1000}}.svg-dotted-line[data-v-dbb7fce0]{position:absolute;bottom:-6px;left:0;width:100%;height:4px;stroke:#79a2ac;stroke-width:2px;stroke-linecap:round;stroke-dasharray:.4px,5px;stroke-dashoffset:-2;transition:stroke .2s ease-out}.btn:hover .svg-dotted-line[data-v-dbb7fce0],.hovered .svg-dotted-line[data-v-dbb7fce0]{stroke:#1c2522;-webkit-animation:animate-svg-line-data-v-dbb7fce0 40s linear infinite;animation:animate-svg-line-data-v-dbb7fce0 40s linear infinite;width:105%}.album__date[data-v-dbb7fce0]{display:block;margin:0 10px 6px 0;padding:0 11px 0 0;position:relative;transition:color .2s ease-out}.album__date[data-v-dbb7fce0]:hover{color:#1c2522;cursor:pointer}.album__date[data-v-dbb7fce0]:after{height:100%;width:2px;content:"";display:block;position:absolute;right:0;background:repeating-linear-gradient(0deg,#79a2ac,#79a2ac 2px,transparent 0,transparent 4px);top:0}.album__title[data-v-dbb7fce0]{margin-right:0;padding-right:0;transition:color .2s ease-out}.album__title[data-v-dbb7fce0]:hover{color:#1c2522;cursor:pointer}.album__description[data-v-dbb7fce0]{font-family:"PlayfairDisplay Semi-bold",serif;color:#1c2522;font-size:33px;line-height:1.212em;word-wrap:break-word}.album__description[data-v-dbb7fce0]:hover{cursor:pointer}.album__cover[data-v-dbb7fce0]{width:50%;height:100%;overflow:hidden}@media (max-width:767px){.album__cover[data-v-dbb7fce0]{width:100%;height:300px}}.album__image-cover[data-v-dbb7fce0]{width:100%;height:100%;background:50%/cover;display:block;transform:scale(1.04);transition:1s cubic-bezier(.17,.59,.05,.96);-webkit-clip-path:inset(0 0 0 0);clip-path:inset(0 0 0 0)}.album__cover:hover .album__image-cover[data-v-dbb7fce0],.hovered .album__image-cover[data-v-dbb7fce0]{transform:scale(1)}',""]),t.exports=d},297:function(t,e,n){"use strict";n.r(e);n(40);var d={props:{album:{required:!0,type:Object},albumType:{default:"",type:String}},data:function(){return{blockClass:""}},methods:{getCurrentLocale:function(){return this.$i18n.localeProperties.code},addClassHovered:function(){this.blockClass="hovered"},removeClassHovered:function(){this.blockClass=""},getAlbumClass:function(){return"".concat(this.blockClass," ").concat(this.albumType)}}},o=(n(295),n(5)),component=Object(o.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"album",class:t.getAlbumClass()},[n("div",{staticClass:"album__outline"},[n("div",{staticClass:"album__outline-top"},[n("div",{staticClass:"album__date"},[t._v(t._s(t.album.date))]),t._v(" "),n("div",{staticClass:"album__title"},[t._v(t._s(t.album.title))])]),t._v(" "),n("nuxt-link",{staticClass:"album__description",attrs:{to:"/album/"+t.album.id},domProps:{innerHTML:t._s("ru"===t.getCurrentLocale()?t.album.description:t.album.descriptionEn)},on:{mouseover:t.addClassHovered,mouseleave:t.removeClassHovered}}),t._v(" "),n("nuxt-link",{staticClass:"btn",attrs:{to:"/album/"+t.album.id},on:{mouseover:t.addClassHovered,mouseleave:t.removeClassHovered}},[n("span",[t._v("discover\n        "),n("arrow"),t._v(" "),n("svg",{staticClass:"svg-dotted-line"},[n("line",{attrs:{x1:"0",y1:"50%",x2:"100%",y2:"50%"}})])],1)])],1),t._v(" "),n("div",{staticClass:"album__cover",on:{mouseover:t.addClassHovered,mouseleave:t.removeClassHovered}},[n("nuxt-link",{staticClass:"album__image-cover",style:{backgroundImage:"url("+t.album.cover+")"},attrs:{to:"/album/"+t.album.id}})],1)])}),[],!1,null,"dbb7fce0",null);e.default=component.exports;installComponents(component,{Arrow:n(291).default})},299:function(t,e,n){var content=n(310);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("346699f9",content,!0,{sourceMap:!1})},300:function(t,e,n){"use strict";n.r(e);n(12),n(63),n(30);var d=n(4),o={props:{isShownOnIndex:{type:Boolean,default:null},category:{type:String,default:""}},data:function(){return{error:null,albums:[]}},fetch:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){var t=this;return Object(d.a)(regeneratorRuntime.mark((function e(){var n,d,i,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3000/data/albums.json");case 2:return 200!==(n=e.sent).status&&(t.error="Не удалось выгрузить альбомы"),e.next=6,n.json();case 6:if(d=e.sent,t.isShownOnIndex)for(i=0;i<d.length;i++)!0===d[i].shownOnIndexPage&&t.albums.push(d[i]);for(o=0;o<d.length;o++)d[o].category===t.category&&t.albums.push(d[o]);case 9:case"end":return e.stop()}}),e)})))()}))},r=n(5),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.error?n("div",{staticClass:"error"},[t._v(t._s(t.error))]):t._e(),t._v(" "),t._l(t.albums,(function(t,e){return n("Album",{key:e,attrs:{album:t}})}))],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Album:n(297).default})},308:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"ru":{"welcome":"личный блог","title":"Путешествия, планы, <span>мечты</span>, и немного керамики","description":"Добро пожаловать","latest":"Последнее","featured":"Последние альбомы"},"en":{"welcome":"welcome to","title":"Travellings, plans, <span>dreams</span> and some ceramic stuff","description":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\'","latest":"Latest","featured":"Latest albums"}}'),delete t.options._Ctor}},309:function(t,e,n){"use strict";n(299)},310:function(t,e,n){var d=n(15)(!1);d.push([t.i,'.slider[data-v-d6dbeb4c]{position:fixed;top:0;bottom:0;left:0;width:100%;opacity:.8;line-height:1}.slider__container[data-v-d6dbeb4c]{width:100%;height:100%;position:absolute}.slider__caption[data-v-d6dbeb4c]{opacity:0;position:absolute;bottom:80px;z-index:20;color:#fff;padding:45px}.slider__caption-top[data-v-d6dbeb4c]{display:flex;margin-bottom:5px;opacity:0;transform:translateX(-40px)}.slider__date[data-v-d6dbeb4c],.slider__title[data-v-d6dbeb4c]{font-size:13px;text-transform:uppercase;letter-spacing:.25em;position:relative;margin-right:22px}@media (min-width:992px) and (max-width:1199px){.slider__date[data-v-d6dbeb4c],.slider__title[data-v-d6dbeb4c]{font-size:10px}}@media (max-width:991px){.slider__date[data-v-d6dbeb4c],.slider__title[data-v-d6dbeb4c]{font-size:8px}}.slider__date[data-v-d6dbeb4c]:after{height:95%;width:2px;content:"";display:block;position:absolute;right:-10px;background:repeating-linear-gradient(0deg,#fff,#fff 2px,transparent 0,transparent 4px);top:-1px}.slider__name[data-v-d6dbeb4c]{font-family:"PlayfairDisplay Semi-bold",serif;font-size:60px;margin-bottom:20px;opacity:0;transform:translateX(-40px)}@media (min-width:992px) and (max-width:1199px){.slider__name[data-v-d6dbeb4c]{font-size:48px}}@media (min-width:768px) and (max-width:991px){.slider__name[data-v-d6dbeb4c]{font-size:36px}}.slider__description[data-v-d6dbeb4c]{font-size:16px;line-height:1.5em;opacity:0;transform:translateX(-40px)}@media (min-width:992px) and (max-width:1199px){.slider__description[data-v-d6dbeb4c]{font-size:14px}}@media (min-width:768px) and (max-width:991px){.slider__description[data-v-d6dbeb4c]{font-size:12px}}.slider .currentCaption[data-v-d6dbeb4c]{opacity:1;transition:opacity 1.5s ease-in-out}.slider .currentCaption .slider__caption-top[data-v-d6dbeb4c],.slider .currentCaption .slider__description[data-v-d6dbeb4c],.slider .currentCaption .slider__name[data-v-d6dbeb4c]{opacity:1;transform:translateX(0);transition:all 1s ease-in-out;transition-delay:.3s}.slider .currentCaption .slider__name[data-v-d6dbeb4c]{transition-delay:.2s}.slider .currentCaption .slider__description[data-v-d6dbeb4c]{transition-delay:.55s}.slider .slider__image[data-v-d6dbeb4c]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;z-index:10;opacity:0;transition:opacity 1.5s ease-in-out}.slider .currentImage[data-v-d6dbeb4c]{opacity:1;transition:opacity 1.5s ease-in-out}.arrows[data-v-d6dbeb4c]{position:absolute;bottom:45px;left:40px;display:flex;z-index:50}@-webkit-keyframes circled-data-v-d6dbeb4c{to{transform:rotate(1turn)}}@keyframes circled-data-v-d6dbeb4c{to{transform:rotate(1turn)}}.arrow[data-v-d6dbeb4c]{cursor:pointer;position:relative;margin:0 5px;display:flex;justify-content:center;align-items:center}.arrow[data-v-d6dbeb4c],.arrow[data-v-d6dbeb4c]:after{width:30px;height:30px}.arrow[data-v-d6dbeb4c]:after{position:absolute;content:"";border:2px dotted #fff;border-radius:50%}.arrow__left[data-v-d6dbeb4c]{transform:rotate(180deg)}.arrow__left[data-v-d6dbeb4c]:hover:after{animation:circled-data-v-d6dbeb4c 4s linear infinite reverse}.arrow__right[data-v-d6dbeb4c]:hover:after{-webkit-animation:circled-data-v-d6dbeb4c 4s linear infinite;animation:circled-data-v-d6dbeb4c 4s linear infinite}.arrow[data-v-d6dbeb4c] .arrow{fill:#fff;width:14px}',""]),t.exports=d},314:function(t,e,n){var content=n(327);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("0ada75a1",content,!0,{sourceMap:!1})},316:function(t,e,n){"use strict";n.r(e);n(62);var d={props:{images:{required:!0,type:Array}},data:function(){return{currentImageIndex:0}},mounted:function(){var t=this;setInterval((function(){return t.nextImage()}),5e3)},methods:{prevImage:function(){this.currentImageIndex-1<0?this.currentImageIndex=this.images.length-1:this.currentImageIndex--},nextImage:function(){this.currentImageIndex+1<this.images.length?this.currentImageIndex++:this.currentImageIndex=0}}},o=(n(309),n(5)),component=Object(o.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slider"},[t._l(t.images,(function(image,e){return n("div",{key:e,staticClass:"slider__container"},[n("img",{staticClass:"slider__image",class:e===t.currentImageIndex?"currentImage":"",attrs:{src:image.cover}}),t._v(" "),n("div",{staticClass:"slider__caption",class:e===t.currentImageIndex?"currentCaption":""},[n("div",{staticClass:"slider__caption-top"},[n("div",{staticClass:"slider__date"},[t._v(t._s(image.date))]),t._v(" "),n("div",{staticClass:"slider__title"},[t._v(t._s(image.title))])]),t._v(" "),n("div",{staticClass:"slider__name",domProps:{innerHTML:t._s(image.name)}}),t._v(" "),n("div",{staticClass:"slider__description",domProps:{innerHTML:t._s(image.description)}})])])})),t._v(" "),n("div",{staticClass:"arrows"},[n("div",{staticClass:"arrow arrow__left",on:{click:function(e){return e.preventDefault(),t.prevImage(e)}}},[n("arrow")],1),t._v(" "),n("div",{staticClass:"arrow arrow__right",on:{click:function(e){return e.preventDefault(),t.nextImage(e)}}},[n("arrow")],1)])],2)}),[],!1,null,"d6dbeb4c",null);e.default=component.exports;installComponents(component,{Arrow:n(291).default})},326:function(t,e,n){"use strict";n(314)},327:function(t,e,n){var d=n(15),o=n(51),r=n(328),l=n(134),c=n(329),m=d(!1),_=o(r),x=o(l),f=o(c);m.push([t.i,".container[data-v-4629387c]{margin:0 auto;display:flex;justify-content:flex-end}.container .index__slider[data-v-4629387c]{left:80px;width:40%}@media (max-width:767px){.container .index__slider[data-v-4629387c]{position:relative;left:0;width:100%;height:100vh}}@media (max-width:767px){.container .index__slider[data-v-4629387c] .arrows,.container .index__slider[data-v-4629387c] .slider__caption{display:none}}.container[data-v-4629387c] .index__albums{display:flex;flex-wrap:wrap}.container[data-v-4629387c] .index__albums .album{width:50%;flex-direction:column;padding:0 20px;margin:0 0 120px}.container[data-v-4629387c] .index__albums .album:nth-child(2n){margin-top:-95px}@media (max-width:767px){.container[data-v-4629387c] .index__albums .album:nth-child(2n){margin-top:0}}.container[data-v-4629387c] .index__albums .album__outline{position:absolute;background-color:#fff;padding:20px;bottom:-10%;width:calc(100% - 80px);z-index:1;box-shadow:0 0 20px rgba(0,0,0,.05)}.container[data-v-4629387c] .index__albums .album__outline-top{display:none}@media (min-width:768px) and (max-width:991px){.container[data-v-4629387c] .index__albums .album__outline{bottom:-50%}}.container[data-v-4629387c] .index__albums .album__description{font-size:1.4vw}@media (min-width:768px) and (max-width:991px){.container[data-v-4629387c] .index__albums .album__description{font-size:14px}}@media (min-width:480px) and (max-width:767px){.container[data-v-4629387c] .index__albums .album__description{font-size:22px}}@media (max-width:479px),only screen and (max-width:900px) and (max-height:500px) and (orientation:landscape){.container[data-v-4629387c] .index__albums .album__description{font-size:16px}}.container[data-v-4629387c] .index__albums .album__cover{width:100%}.container[data-v-4629387c] .index__albums .album .btn{display:none}@media (min-width:768px) and (max-width:991px){.container[data-v-4629387c] .index__albums .album{height:200px}}@media (max-width:767px){.container[data-v-4629387c] .index__albums .album{height:300px;width:100%;margin:0 0 80px}}@media (max-width:767px){.container[data-v-4629387c]{flex-direction:column}}.container[data-v-4629387c] .background{position:absolute;top:-110px;left:10px}@media (min-width:992px) and (max-width:1199px){.container[data-v-4629387c] .background{top:-65px}}@media (max-width:991px){.container[data-v-4629387c] .background{top:-45px}}@media (max-width:479px),only screen and (max-width:900px) and (max-height:500px) and (orientation:landscape){.container[data-v-4629387c] .background{top:-25px}}.content[data-v-4629387c]{padding-left:calc(40% + 80px)}.content__top[data-v-4629387c]{background:url("+_+") 50%/cover;padding:5% 2% 200px;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}@media (max-width:767px){.content__top[data-v-4629387c]{background:transparent;height:100vh;padding:0 2%}}.content__icon[data-v-4629387c]{width:95px;height:95px;background:url("+x+") 50%/cover;transform:translateY(15px)}@media (min-width:768px) and (max-width:991px){.content__icon[data-v-4629387c]{width:60px;height:60px}}@media (max-width:479px),only screen and (max-width:900px) and (max-height:500px) and (orientation:landscape){.content__icon[data-v-4629387c]{width:60px;height:60px}}.content__subtitle[data-v-4629387c]{margin-top:37px;color:#3b4d55;font-size:.9vw;font-weight:600;letter-spacing:.2em;line-height:1em;text-transform:uppercase}@media (max-width:767px){.content__subtitle[data-v-4629387c]{font-size:10px}}.content__title[data-v-4629387c]{background:url("+f+') 50%/cover;-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-family:"PlayfairDisplay Semi-bold",serif;color:#1c2522;font-size:4.2vw;line-height:1.133em;margin:25px 0;word-wrap:break-word}.content__title[data-v-4629387c] span{font-style:italic}@media (min-width:480px) and (max-width:767px){.content__title[data-v-4629387c]{font-size:9vw;line-height:1.2;margin:20px 0}}@media (max-width:479px),only screen and (max-width:900px) and (max-height:500px) and (orientation:landscape){.content__title[data-v-4629387c]{font-size:10vw}}.content__description[data-v-4629387c]{font-family:"Dosis",sans-serif;font-size:1.2vw;padding:0 13%;color:#1c2522;margin:17px 0 0;line-height:1.63em}@media (min-width:992px) and (max-width:1199px){.content__description[data-v-4629387c]{font-size:16px}}@media (min-width:768px) and (max-width:991px){.content__description[data-v-4629387c]{font-size:14px}}@media (max-width:767px){.content__description[data-v-4629387c]{font-size:16px}}.content__body[data-v-4629387c]{position:relative}.content__body__title[data-v-4629387c]{display:block;font-family:"PlayfairDisplay Semi-bold",serif;font-weight:600;color:#1c2522;font-size:2.4vw;line-height:1.212em;margin:70px 0 30px;padding:0 55px;width:-webkit-min-content;width:-moz-min-content;width:min-content}@media (min-width:992px) and (max-width:1199px){.content__body__title[data-v-4629387c]{margin:40px 0 30px}}@media (min-width:768px) and (max-width:991px){.content__body__title[data-v-4629387c]{font-size:26px;margin:30px 0;padding:0 40px}}@media (max-width:767px){.content__body__title[data-v-4629387c]{margin:30px 0;padding:0 30px;width:-webkit-max-content;width:-moz-max-content;width:max-content;font-size:32px}}@media (max-width:479px),only screen and (max-width:900px) and (max-height:500px) and (orientation:landscape){.content__body__title[data-v-4629387c]{font-size:22px}}@media (min-width:768px) and (max-width:991px){.content__body[data-v-4629387c]{margin-top:-10px}}@media (max-width:767px){.content[data-v-4629387c]{position:absolute;top:0;width:100%;padding:0}}',""]),t.exports=m},328:function(t,e,n){t.exports=n.p+"img/index-top2.1bc0399.jpg"},329:function(t,e,n){t.exports=n.p+"img/IMG_0141.a0b072a.JPG"},330:function(t,e,n){"use strict";var d=n(308),o=n.n(d);e.default=o.a},333:function(t,e,n){"use strict";n.r(e);n(12),n(63),n(30);var d=n(4),o={layout:"index",data:function(){return{images:[]}},fetch:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){var t=this;return Object(d.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3000/data/sliderContent.json");case 2:return n=e.sent,console.log("cnt",n),200!==n.status&&(t.error="Не удалось получить картинки"),e.next=7,n.json();case 7:t.images=e.sent;case 8:case"end":return e.stop()}}),e)})))()}))},r=(n(326),n(5)),l=n(330),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("Slider",{staticClass:"index__slider",attrs:{images:t.images}}),t._v(" "),n("div",{staticClass:"content"},[n("div",{staticClass:"content__top"},[n("div",{staticClass:"content__icon"}),t._v(" "),n("div",{staticClass:"content__subtitle"},[t._v(t._s(t.$t("welcome")))]),t._v(" "),n("h1",{staticClass:"content__title",domProps:{innerHTML:t._s(t.$t("title"))}}),t._v(" "),n("p",{staticClass:"content__description"},[t._v("\n        "+t._s(t.$t("description"))+"\n      ")])]),t._v(" "),n("div",{staticClass:"content__body"},[n("BackgroundWord",{attrs:{title:t.$t("latest")}}),t._v(" "),n("div",{staticClass:"content__body__title"},[t._v(t._s(t.$t("featured")))]),t._v(" "),n("AlbumsList",{staticClass:"index__albums",attrs:{"is-shown-on-index":!0}})],1),t._v(" "),n("Footer")],1)],1)}),[],!1,null,"4629387c",null);"function"==typeof l.default&&Object(l.default)(component);e.default=component.exports;installComponents(component,{Slider:n(316).default,BackgroundWord:n(294).default,AlbumsList:n(300).default,Footer:n(187).default})}}]);