/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{132:function(t,e,n){"use strict";var r=n(43);n.n(r).a},133:function(t,e,n){(t.exports=n(30)(!1)).push([t.i,"\n.nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;transition:width .2s,opacity .4s;opacity:1;background-color:#efc14e;z-index:999999\n}",""])},134:function(t,e,n){"use strict";var r=n(44);n.n(r).a},135:function(t,e,n){(t.exports=n(30)(!1)).push([t.i,"\n.wrapper[data-v-3564bc48]{position:fixed;top:0;left:0;right:0;width:100%;height:100%;background-color:rgba(0,0,0,.5);z-index:900\n}\n.wrapper.hidden[data-v-3564bc48]{display:none\n}\n.menu[data-v-3564bc48]{display:flex;padding:4.5rem;width:100%;min-height:100%;flex-flow:column-reverse;justify-content:center;align-items:center;color:#fff;position:relative\n}",""])},136:function(t,e,n){"use strict";var r=n(45);n.n(r).a},137:function(t,e,n){(t.exports=n(30)(!1)).push([t.i,"\nb,h1,h2,h3,h4,h5,h6,i,input,p,span,textarea{font-family:inherit;font-weight:300\n}\n*{box-sizing:border-box\n}\nbody,html{width:100%;height:100%;margin:0;padding:0\n}\nbody{font-family:Source Sans Pro,sans-serif;font-weight:300\n}\nh1{font-size:200%\n}",""])},138:function(t,e,n){"use strict";var r=n(46);n.n(r).a},139:function(t,e,n){(t.exports=n(30)(!1)).push([t.i,"\n.menu-icon[data-v-0492109c]{position:absolute;overflow:hidden;width:3rem;height:3rem;left:1.5rem;top:1.5rem;z-index:999;background-image:url(https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png);background-size:2rem;background-position:.5rem .5rem;background-repeat:no-repeat;-webkit-filter:invert(1);filter:invert(1)\n}",""])},140:function(t,e,n){var r={"./index.js":141,"./markers.js":142,"./ui.js":146};function o(t){var e=a(t);return n(e)}function a(t){var e=r[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}o.keys=function(){return Object.keys(r)},o.resolve=a,t.exports=o,o.id=140},141:function(t,e,n){"use strict";n.r(e),n.d(e,"plugins",function(){return i});n(1),n(2),n(3);var r=n(0),o=n(29),a=n(18);r.a.use(o.a);var i=[function(t){var e=[];try{localMarkers=JSON.parse(window.localStorage.getItem(a.a))}catch(t){window.localStorage.setItem(a.a,e)}t.commit("markers/addLocalMarkers",e)}]},142:function(t,e,n){"use strict";n.r(e),n.d(e,"state",function(){return c}),n.d(e,"getters",function(){return l}),n.d(e,"mutations",function(){return p}),n.d(e,"actions",function(){return f});n(32);var r,o=n(6),a=n.n(o),i=n(60),s=n.n(i),u=(n(1),n(2),n(3),n(18)),c=function(){return{locationMarker:null,fetchedMarkers:[],localMarkers:[]}},l={markers:function(t){return s()(t.localMarkers).concat(s()(t.fetchedMarkers))}},p={addLocalMarkers:function(t,e){t.localMarkers=e,window.localStorage.setItem(u.a,JSON.stringify(e))}},f={addFetched:(r=a()(regeneratorRuntime.mark(function t(e,n){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t,this)})),function(t,e){return r.apply(this,arguments)})}},146:function(t,e,n){"use strict";n.r(e),n.d(e,"state",function(){return r}),n.d(e,"getters",function(){return o}),n.d(e,"mutations",function(){return a});n(1),n(2),n(3);var r=function(){return{activeUIElement:null}},o={isMenuActive:function(t){return"menu"===t.activeUIElement},isDescriptionActive:function(t){return"description"===t.activeUIElement}},a={setActiveUIElement:function(t,e){t.activeUIElement=e}}},147:function(t,e,n){"use strict";n.r(e);n(62),n(69),n(72);var r=n(25),o=n.n(r),a=(n(32),n(103),n(6)),i=n.n(a),s=(n(75),n(76),n(33),n(79),n(80),n(81),n(82),n(42),n(59),n(1),n(2),n(3),n(0)),u={},c=n(24),l=n.n(c),p=n(91),f=n.n(p),d=n(61),h=function(){return Promise.all([n.e(4),n.e(2)]).then(n.bind(null,178)).then(function(t){return t.default||t})};s.a.use(d.a),window.history.scrollRestoration="manual";var m=function(t,e,n){var r=!1;return t.matched.length<2?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),n&&(r=n),new Promise(function(e){window.$nuxt.$once("triggerScroll",function(){if(t.hash){var n=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substr(1)));try{document.querySelector(n)&&(r={selector:n})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)})})};var v=n(92),g=n.n(v).a,x={name:"nuxt-child",functional:!0,props:["keepAlive","keepAliveProps"],render:function(t,e){var n=e.parent,r=e.data,o=e.props;r.nuxtChild=!0;for(var a=n,i=n.$nuxt.nuxt.transitions,s=n.$nuxt.nuxt.defaultTransition,u=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&u++,n=n.$parent;r.nuxtChildDepth=u;var c=i[u]||s,l={};y.forEach(function(t){void 0!==c[t]&&(l[t]=c[t])});var p={};w.forEach(function(t){"function"==typeof c[t]&&(p[t]=c[t].bind(a))});var f=p.beforeEnter;p.beforeEnter=function(t){if(window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")}),f)return f.call(a,t)};var d=[t("router-view",r)];return void 0!==o.keepAlive&&(d=[t("keep-alive",{props:o.keepAliveProps},d)]),t("transition",{props:l,on:p},d)}},y=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],w=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"],b={name:"nuxt-link",functional:!0,render:function(t,e){return t("router-link",e.data,e.children)}},_={props:{error:{default:function(){return{statusCode:404,message:"This page could not be found"}}}}},C=n(16),k=Object(C.a)(_,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm status"},[e("div",[e("h3",[this._v(this._s(this.error.statusCode))]),e("p",[this._v(this._s(this.error.message))])])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm"},[e("div",{staticClass:"homepage-link"},[e("nuxt-link",{attrs:{to:"/"}},[this._v("Go to homepage")])],1)])])])},[],!1,null,null,null);k.options.__file="error.vue";var $=k.exports,E=(n(89),n(125),n(126),n(128),n(131),n(90),function(){return{}});function R(t,e){var n=t.options.data||E;!e&&t.options.hasAsyncData||(t.options.hasAsyncData=!0,t.options.data=function(){var r=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),l()({},r,e)},t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data))}function S(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=s.a.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function T(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).map(function(r){return e&&e.push(n),t.components[r]})}))}function M(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).reduce(function(r,o){return t.components[o]?r.push(e(t.components[o],t.instances[o],t,o,n)):delete t.components[o],r},[])}))}function j(t){return Promise.all(M(t,function(){var t=i()(regeneratorRuntime.mark(function t(e,n,r,o){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return t.abrupt("return",r.components[o]=S(e));case 5:case"end":return t.stop()}},t,this)}));return function(e,n,r,o){return t.apply(this,arguments)}}()))}function A(t){return N.apply(this,arguments)}function N(){return(N=i()(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j(e);case 2:return t.abrupt("return",l()({},e,{meta:T(e).map(function(t){return t.options.meta||{}})}));case 3:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function O(t,e){return U.apply(this,arguments)}function U(){return(U=i()(regeneratorRuntime.mark(function t(e,n){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n.to?n.to:n.route,e.context||(e.context={isStatic:!0,isDev:!1,isHMR:!1,app:e,store:e.store,payload:n.payload,error:n.error,base:"",env:{}},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),e.context.redirect=function(t,n,r){if(t){e.context._redirected=!0;var a=o()(n);if("number"==typeof t||"undefined"!==a&&"object"!==a||(r=n||{},n=t,a=o()(n),t=302),"object"===a&&(n=e.router.resolve(n).href),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(n))throw n=F(n,r),window.location.replace(n),new Error("ERR_REDIRECT");e.context.next({path:n,query:r,status:t})}},e.context.nuxtState=window.__NUXT__),e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!!n.isHMR,!n.route){t.next=10;break}return t.next=9,A(n.route);case 9:e.context.route=t.sent;case 10:if(e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{},!n.from){t.next=16;break}return t.next=15,A(n.from);case 15:e.context.from=t.sent;case 16:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function P(t,e){var n;return(n=2===t.length?new Promise(function(n){t(e,function(t,r){t&&e.error(t),n(r=r||{})})}):t(e))&&(n instanceof Promise||"function"==typeof n.then)||(n=Promise.resolve(n)),n}function I(t,e){var n=window.location.pathname;return"hash"===e?window.location.hash.replace(/^#\//,""):(t&&0===n.indexOf(t)&&(n=n.slice(t.length)),(n||"/")+window.location.search+window.location.hash)}function L(t,e){return function(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"===o()(t[n])&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var o="",a=n||{},i=r||{},s=i.pretty?J:encodeURIComponent,u=0;u<t.length;u++){var c=t[u];if("string"!=typeof c){var l,p=a[c.name];if(null==p){if(c.optional){c.partial&&(o+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(Array.isArray(p)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var f=0;f<p.length;f++){if(l=s(p[f]),!e[u].test(l))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(l)+"`");o+=(0===f?c.prefix:c.delimiter)+l}}else{if(l=c.asterisk?encodeURI(p).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}):s(p),!e[u].test(l))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+l+'"');o+=c.prefix+l}}else o+=c}return o}}(function(t,e){var n,r=[],o=0,a=0,i="",s=e&&e.delimiter||"/";for(;null!=(n=D.exec(t));){var u=n[0],c=n[1],l=n.index;if(i+=t.slice(a,l),a=l+u.length,c)i+=c[1];else{var p=t[a],f=n[2],d=n[3],h=n[4],m=n[5],v=n[6],g=n[7];i&&(r.push(i),i="");var x=null!=f&&null!=p&&p!==f,y="+"===v||"*"===v,w="?"===v||"*"===v,b=n[2]||s,_=h||m;r.push({name:d||o++,prefix:f||"",delimiter:b,optional:w,repeat:y,partial:x,asterisk:!!g,pattern:_?z(_):g?".*":"[^"+B(b)+"]+?"})}}a<t.length&&(i+=t.substr(a));i&&r.push(i);return r}(t,e))}function q(t,e){var n={},r=l()({},t,e);for(var o in r)String(t[o])!==String(e[o])&&(n[o]=!0);return n}window.onNuxtReadyCbs=[],window.onNuxtReady=function(t){window.onNuxtReadyCbs.push(t)};var D=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function J(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function B(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function z(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function F(t,e){var n,r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):t.startsWith("//")&&(t=t.substring(2));var o,a=t.split("/"),i=(n?n+"://":"//")+a.shift(),s=a.filter(Boolean).join("/");return 2===(a=s.split("#")).length&&(s=a[0],o=a[1]),i+=s?"/"+s:"",e&&"{}"!==JSON.stringify(e)&&(i+=(2===t.split("?").length?"&":"?")+function(t){return Object.keys(t).sort().map(function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(function(t){return[e,"=",t].join("")}).join("&"):e+"="+n}).filter(Boolean).join("&")}(e)),i+=o?"#"+o:""}var H={name:"nuxt",props:["nuxtChildKey","keepAlive"],render:function(t){return this.nuxt.err?t("nuxt-error",{props:{error:this.nuxt.err}}):t("nuxt-child",{key:this.routerViewKey,props:this.$props})},beforeCreate:function(){s.a.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||L(this.$route.matched[0].path)(this.$route.params);var t=this.$route.matched[0]&&this.$route.matched[0].components.default;return t&&t.options&&t.options.key?"function"==typeof t.options.key?t.options.key(this.$route):t.options.key:this.$route.path}},components:{NuxtChild:x,NuxtError:$}},K={name:"nuxt-loading",data:function(){return{percent:0,show:!1,canSuccess:!0,throttle:200,duration:5e3,height:"2px",color:"black",failedColor:"red"}},methods:{start:function(){var t=this;return this.canSuccess=!0,this._throttle&&clearTimeout(this._throttle),this._timer&&(clearInterval(this._timer),this._timer=null,this.percent=0),this._throttle=setTimeout(function(){t.show=!0,t._cut=1e4/Math.floor(t.duration),t._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()},100)},this.throttle),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,clearTimeout(this._throttle),this._throttle=null,setTimeout(function(){t.show=!1,s.a.nextTick(function(){setTimeout(function(){t.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}},Q=(n(132),Object(C.a)(K,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"nuxt-progress",style:{width:this.percent+"%",height:this.height,"background-color":this.canSuccess?this.color:this.failedColor,opacity:this.show?1:0}})},[],!1,null,null,null));Q.options.__file="nuxt-loading.vue";var X=Q.exports,G={components:{MenuComponent:n(148).default},data:function(){return{hiddenMenu:!0}},methods:{toggleMenu:function(){this.hiddenMenu=!this.hiddenMenu,this.$store.commit("ui/setActiveUIElement",this.hiddenMenu?null:"menu")}}},V=(n(136),n(138),Object(C.a)(G,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"_"},[n("nuxt"),n("div",{staticClass:"menu"},[n("MenuComponent",{attrs:{hide:t.hiddenMenu}}),n("div",{staticClass:"menu-icon",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.toggleMenu(e)}}})],1)],1)},[],!1,null,"0492109c",null));V.options.__file="default.vue";var W={_default:V.exports},Y={head:{meta:[{hid:"charset",charset:"utf-8"},{hid:"viewport",name:"viewport",content:"width=device-width,initial-scale=1"},{hid:"yandex-verification",name:"yandex-verification",content:"72f2c5fa362f4ae3"}],link:[{rel:"icon",type:"image/png",href:"/img/favicon.png"}],style:[],script:[]},render:function(t,e){var n=t("nuxt-loading",{ref:"loading"}),r=t(this.layout||"nuxt"),o=t("div",{domProps:{id:"__layout"},key:this.layoutName},[r]),a=t("transition",{props:{name:"layout",mode:"out-in"}},[o]);return t("div",{domProps:{id:"__nuxt"}},[n,a])},data:function(){return{layout:null,layoutName:""}},beforeCreate:function(){s.a.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){s.a.prototype.$nuxt=this,"undefined"!=typeof window&&(window.$nuxt=this),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},methods:{errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){return t&&W["_"+t]||(t="default"),this.layoutName=t,this.layout=W["_"+t],this.layout},loadLayout:function(t){return t&&W["_"+t]||(t="default"),Promise.resolve(W["_"+t])}},components:{NuxtLoading:X}},Z=n(29);s.a.use(Z.a);var tt=n(140),et=tt.keys(),nt={},rt=et.find(function(t){return t.includes("./index.")});if(rt&&(nt=Ct(rt)),"function"!=typeof nt){nt.modules||(nt.modules={});var ot=!0,at=!1,it=void 0;try{for(var st,ut=et[Symbol.iterator]();!(ot=(st=ut.next()).done);ot=!0){var ct=st.value,lt=ct.replace(/^\.\//,"").replace(/\.(js|mjs)$/,"");if("index"!==lt){var pt=lt.split(/\//);if(lt=pt[pt.length-1],["state","getters","actions","mutations"].includes(lt)){$t(kt(nt,pt,!0),ct,lt)}else{var ft="index"===lt;ft&&pt.pop();var dt=kt(nt,pt),ht=Ct(ct);if(dt[lt=pt.pop()]=dt[lt]||{},ft){var mt={};if(dt[lt].appends){mt.appends=dt[lt].appends;var vt=!0,gt=!1,xt=void 0;try{for(var yt,wt=dt[lt].appends[Symbol.iterator]();!(vt=(yt=wt.next()).done);vt=!0){var bt=yt.value;mt[bt]=dt[lt][bt]}}catch(t){gt=!0,xt=t}finally{try{vt||null==wt.return||wt.return()}finally{if(gt)throw xt}}}dt[lt]=Object.assign({},dt[lt],ht,mt),dt[lt].namespaced=!0}else dt[lt]=Object.assign({},ht,dt[lt]),dt[lt].namespaced=!0}}}}catch(t){at=!0,it=t}finally{try{ot||null==ut.return||ut.return()}finally{if(at)throw it}}}var _t=nt instanceof Function?nt:function(){return new Z.a.Store(Object.assign({strict:!1},nt,{state:nt.state instanceof Function?nt.state():{}}))};function Ct(t){var e=tt(t),n=e.default||e;if(n.commit)throw new Error("[nuxt] store/"+t.replace("./","")+" should export a method which returns a Vuex instance.");if(n.state&&"function"!=typeof n.state)throw new Error("[nuxt] state should be a function in store/"+t.replace("./",""));return n}function kt(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(1===e.length)return n?t:t.modules;var r=e.shift();return t.modules[r]=t.modules[r]||{},t.modules[r].namespaced=!0,t.modules[r].modules=t.modules[r].modules||{},kt(t.modules[r],e,n)}function $t(t,e,n){var r=tt(e);t.appends=t.appends||[],t.appends.push(n),t[n]=r.default||r}s.a.component(g.name,g),s.a.component(x.name,x),s.a.component(b.name,b),s.a.component(H.name,H),s.a.use(f.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var Et={name:"page",mode:"out-in",appear:!0,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};function Rt(){return(Rt=i()(regeneratorRuntime.mark(function t(e){var n,r,o,a,i,u;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new d.a({mode:"history",base:"",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:m,routes:[{path:"/",component:h,name:"index"}],fallback:!1});case 2:return n=t.sent,(r=_t(e)).$router=n,o=l()({router:n,store:r,nuxt:{defaultTransition:Et,transitions:[Et],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?Object.assign({},Et,{name:t}):Object.assign({},Et,t):Et}),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,o.context._errored=!!t,"string"==typeof t&&(t={statusCode:500,message:t});var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},Y),r.app=o,a=e?e.next:function(t){return o.router.push(t)},e?i=n.resolve(e.url).route:(u=I(n.options.base),i=n.resolve(u).route),t.next=11,O(o,{route:i,next:a,error:o.nuxt.error.bind(o),store:r,payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0});case 11:(function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(!e)throw new Error("inject(key, value) has no value provided");o[t="$"+t]=e,r[t]=o[t];var n="__nuxt_"+t+"_installed__";s.a[n]||(s.a[n]=!0,s.a.use(function(){s.a.prototype.hasOwnProperty(t)||Object.defineProperty(s.a.prototype,t,{get:function(){return this.$root.$options[t]}})}))}),window.__NUXT__&&window.__NUXT__.state&&r.replaceState(window.__NUXT__.state),t.next=16;break;case 16:return t.abrupt("return",{app:o,router:n,store:r});case 17:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}var St,Tt,Mt=[],jt=window.__NUXT__||{};if(Object.assign(s.a.config,{silent:!0,performance:!1}),!s.a.config.$nuxt){var At=s.a.config.errorHandler;s.a.config.errorHandler=function(t,e,n){var r={statusCode:t.statusCode||t.name||"Whoops!",message:t.message||t.toString()},o=null;if("function"==typeof At){for(var a=arguments.length,i=new Array(a>3?a-3:0),u=3;u<a;u++)i[u-3]=arguments[u];o=At.apply(void 0,[t,e,n].concat(i))}if(!0===o)return o;if(e&&e.$root){var c=Object.keys(s.a.config.$nuxt).find(function(t){return e.$root[t]});c&&e.$root[c].error&&"render function"!==n&&e.$root[c].error(r)}if("function"==typeof At)return o;console.error(t.message||r.message)},s.a.config.$nuxt={}}function Nt(t,e,n){var r=function(t){var r=function(t,e){if(!t||!t.options||!t.options[e])return{};var n=t.options[e];if("function"==typeof n){for(var r=arguments.length,o=new Array(r>2?r-2:0),a=2;a<r;a++)o[a-2]=arguments[a];return n.apply(void 0,o)}return n}(t,"transition",e,n)||{};return"string"==typeof r?{name:r}:r};return t.map(function(t){var e=Object.assign({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var o=r(n.matched[0].components.default);Object.keys(o).filter(function(t){return o[t]&&t.toLowerCase().includes("leave")}).forEach(function(t){e[t]=o[t]})}return e})}function Ot(t,e,n){return Ut.apply(this,arguments)}function Ut(){return(Ut=i()(regeneratorRuntime.mark(function t(e,n,r){var o,a,i=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=!!St.nuxt.err||n.path!==e.path,this._queryChanged=JSON.stringify(e.query)!==JSON.stringify(n.query),this._diffQuery=this._queryChanged?q(e.query,n.query):[],this._pathChanged&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),t.prev=4,t.next=7,j(e);case 7:o=t.sent,!this._pathChanged&&this._queryChanged&&o.some(function(t){var e=t.options.watchQuery;return!0===e||!!Array.isArray(e)&&e.some(function(t){return i._diffQuery[t]})})&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),r(),t.next=19;break;case 12:t.prev=12,t.t0=t.catch(4),t.t0=t.t0||{},a=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,this.error({statusCode:a,message:t.t0.message}),this.$nuxt.$emit("routeChanged",e,n,t.t0),r(!1);case 19:case"end":return t.stop()}},t,this,[[4,12]])}))).apply(this,arguments)}function Pt(t,e){return jt.serverRendered&&e&&R(t,e),t._Ctor=t,t}function It(t,e,n){var r=this,o=[],a=!1;if(void 0!==n&&(o=[],n.middleware&&(o=o.concat(n.middleware)),t.forEach(function(t){t.options.middleware&&(o=o.concat(t.options.middleware))})),o=o.map(function(t){return"function"==typeof t?t:("function"!=typeof u[t]&&(a=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),u[t])}),!a)return function t(e,n){return!e.length||n._redirected||n._errored?Promise.resolve():P(e[0],n).then(function(){return t(e.slice(1),n)})}(o,e)}function Lt(t,e,n){return qt.apply(this,arguments)}function qt(){return(qt=i()(regeneratorRuntime.mark(function t(e,n,r){var o,a,i,u,c,l,p,f,d,h,m,v,g,x,y,w,b=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return Mt=e===n?[]:T(n,o=[]).map(function(t,e){return L(n.matched[o[e]].path)(n.params)}),a=!1,i=function(t){n.path===t.path&&b.$loading.finish&&b.$loading.finish(),n.path!==t.path&&b.$loading.pause&&b.$loading.pause(),a||(a=!0,r(t))},t.next=7,O(St,{route:e,from:n,next:i.bind(this)});case 7:if(this._dateLastError=St.nuxt.dateErr,this._hadError=!!St.nuxt.err,(c=T(e,u=[])).length){t.next=25;break}return t.next=14,It.call(this,c,St.context);case 14:if(!a){t.next=16;break}return t.abrupt("return");case 16:return t.next=18,this.loadLayout("function"==typeof $.layout?$.layout(St.context):$.layout);case 18:return l=t.sent,t.next=21,It.call(this,c,St.context,l);case 21:if(!a){t.next=23;break}return t.abrupt("return");case 23:return St.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 25:return c.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(Nt(c,e,n)),t.prev=27,t.next=30,It.call(this,c,St.context);case 30:if(!a){t.next=32;break}return t.abrupt("return");case 32:if(!St.context._errored){t.next=34;break}return t.abrupt("return",r());case 34:return"function"==typeof(p=c[0].options.layout)&&(p=p(St.context)),t.next=38,this.loadLayout(p);case 38:return p=t.sent,t.next=41,It.call(this,c,St.context,p);case 41:if(!a){t.next=43;break}return t.abrupt("return");case 43:if(!St.context._errored){t.next=45;break}return t.abrupt("return",r());case 45:f=!0,t.prev=46,d=!0,h=!1,m=void 0,t.prev=50,v=c[Symbol.iterator]();case 52:if(d=(g=v.next()).done){t.next=64;break}if("function"==typeof(x=g.value).options.validate){t.next=56;break}return t.abrupt("continue",61);case 56:return t.next=58,x.options.validate(St.context);case 58:if(f=t.sent){t.next=61;break}return t.abrupt("break",64);case 61:d=!0,t.next=52;break;case 64:t.next=70;break;case 66:t.prev=66,t.t0=t.catch(50),h=!0,m=t.t0;case 70:t.prev=70,t.prev=71,d||null==v.return||v.return();case 73:if(t.prev=73,!h){t.next=76;break}throw m;case 76:return t.finish(73);case 77:return t.finish(70);case 78:t.next=84;break;case 80:return t.prev=80,t.t1=t.catch(46),this.error({statusCode:t.t1.statusCode||"500",message:t.t1.message}),t.abrupt("return",r());case 84:if(f){t.next=87;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 87:return t.next=89,Promise.all(c.map(function(t,n){if(t._path=L(e.matched[u[n]].path)(e.params),t._dataRefresh=!1,b._pathChanged&&b._queryChanged||t._path!==Mt[n])t._dataRefresh=!0;else if(!b._pathChanged&&b._queryChanged){var r=t.options.watchQuery;!0===r?t._dataRefresh=!0:Array.isArray(r)&&(t._dataRefresh=r.some(function(t){return b._diffQuery[t]}))}if(!b._hadError&&b._isMounted&&!t._dataRefresh)return Promise.resolve();var o=[],a=t.options.asyncData&&"function"==typeof t.options.asyncData,i=!!t.options.fetch,s=a&&i?30:45;if(a){var c=P(t.options.asyncData,St.context).then(function(e){R(t,e),b.$loading.increase&&b.$loading.increase(s)});o.push(c)}if(b.$loading.manual=!1===t.options.loading,i){var l=t.options.fetch(St.context);l&&(l instanceof Promise||"function"==typeof l.then)||(l=Promise.resolve(l)),l.then(function(t){b.$loading.increase&&b.$loading.increase(s)}),o.push(l)}return Promise.all(o)}));case 89:a||(this.$loading.finish&&!this.$loading.manual&&this.$loading.finish(),r()),t.next=111;break;case 92:if(t.prev=92,t.t2=t.catch(27),t.t2){t.next=98;break}t.t2={},t.next=100;break;case 98:if("ERR_REDIRECT"!==t.t2.message){t.next=100;break}return t.abrupt("return",this.$nuxt.$emit("routeChanged",e,n,t.t2));case 100:return Mt=[],y=t.t2.response&&t.t2.response.status,t.t2.statusCode=t.t2.statusCode||t.t2.status||y||500,_=t.t2,s.a.config.errorHandler&&s.a.config.errorHandler(_),"function"==typeof(w=$.layout)&&(w=w(St.context)),t.next=108,this.loadLayout(w);case 108:this.error(t.t2),this.$nuxt.$emit("routeChanged",e,n,t.t2),r(!1);case 111:case"end":return t.stop()}var _},t,this,[[27,92],[46,80],[50,66,70,78],[71,,73,77]])}))).apply(this,arguments)}function Dt(t,e){M(t,function(t,e,n,r){return"object"!==o()(t)||t.options||((t=s.a.extend(t))._Ctor=t,n.components[r]=t),t})}function Jt(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?$.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e(St.context)),this.setLayout(e)}function Bt(t,e){var n=this;!1===this._pathChanged&&!1===this._queryChanged||s.a.nextTick(function(){var e=[],r=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.instances).map(function(r){return e&&e.push(n),t.instances[r]})}))}(t,e),o=T(t,e);r.forEach(function(t,e){if(t&&t.constructor._dataRefresh&&o[e]===t.constructor&&"function"==typeof t.constructor.options.data){var n=t.constructor.options.data.call(t);for(var r in n)s.a.set(t.$data,r,n[r])}}),Jt.call(n,t)})}function zt(t){window.onNuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),Tt.afterEach(function(e,n){s.a.nextTick(function(){return t.$nuxt.$emit("routeChanged",e,n)})})}function Ft(){return(Ft=i()(regeneratorRuntime.mark(function t(e){var n,r,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return St=e.app,Tt=e.router,e.store,t.next=5,Promise.all((void 0,u=I((a=Tt).options.base,a.options.mode),M(a.match(u),function(){var t=i()(regeneratorRuntime.mark(function t(e,n,r,o,a){var i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return i=Pt(S(e),jt.data?jt.data[a]:null),r.components[o]=i,t.abrupt("return",i);case 7:case"end":return t.stop()}},t,this)}));return function(e,n,r,o,a){return t.apply(this,arguments)}}())));case 5:if(n=t.sent,r=new s.a(St),o=function(){r.$mount("#__nuxt"),s.a.nextTick(function(){zt(r)})},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(Nt(n,Tt.currentRoute)),Mt=Tt.currentRoute.matched.map(function(t){return L(t.path)(Tt.currentRoute.params)})),r.$loading={},jt.error&&r.error(jt.error),Tt.beforeEach(Ot.bind(r)),Tt.beforeEach(Lt.bind(r)),Tt.afterEach(Dt),Tt.afterEach(Bt.bind(r)),!jt.serverRendered){t.next=19;break}return o(),t.abrupt("return");case 19:Lt.call(r,Tt.currentRoute,Tt.currentRoute,function(t){if(!t)return Dt(Tt.currentRoute,Tt.currentRoute),Jt.call(r,Tt.currentRoute),void o();Tt.push(t,function(){return o()},function(t){if(!t)return o();console.error(t)})});case 20:case"end":return t.stop()}var a,u},t,this)}))).apply(this,arguments)}s.a.config.$nuxt.$nuxt=!0,function(t){return Rt.apply(this,arguments)}().then(function(t){return Ft.apply(this,arguments)}).catch(function(t){console.error("[nuxt] Error while initializing app",t)})},148:function(t,e,n){"use strict";n.r(e);n(1),n(2),n(3);var r=n(18),o={props:{hide:{type:Boolean,default:function(){return!0}}},methods:{clearMarkers:function(){window.localStorage.setItem(r.a,"[]"),this.$router.go()}}},a=(n(134),n(16)),i=Object(a.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper",class:{hidden:!!t.hide}},[n("div",{staticClass:"menu"},[n("span",{on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.clearMarkers(e)}}},[t._v("Clear markers")])])])},[],!1,null,"3564bc48",null);i.options.__file="menu.vue";e.default=i.exports},18:function(t,e,n){"use strict";n.d(e,"a",function(){return r});n(1),n(2),n(3);var r="leaflet:markers"},30:function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(i=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),a=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(a).concat([o]).join("\n")}var i;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<t.length;o++){var i=t[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},31:function(t,e,n){"use strict";function r(t,e){for(var n=[],r={},o=0;o<e.length;o++){var a=e[o],i=a[0],s={id:t+":"+o,css:a[1],media:a[2],sourceMap:a[3]};r[i]?r[i].parts.push(s):n.push(r[i]={id:i,parts:[s]})}return n}n.r(e),n.d(e,"default",function(){return h});var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a={},i=o&&(document.head||document.getElementsByTagName("head")[0]),s=null,u=0,c=!1,l=function(){},p=null,f="data-vue-ssr-id",d="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(t,e,n,o){c=n,p=o||{};var i=r(t,e);return m(i),function(e){for(var n=[],o=0;o<i.length;o++){var s=i[o];(u=a[s.id]).refs--,n.push(u)}e?m(i=r(t,e)):i=[];for(o=0;o<n.length;o++){var u;if(0===(u=n[o]).refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete a[u.id]}}}}function m(t){for(var e=0;e<t.length;e++){var n=t[e],r=a[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(g(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var i=[];for(o=0;o<n.parts.length;o++)i.push(g(n.parts[o]));a[n.id]={id:n.id,refs:1,parts:i}}}}function v(){var t=document.createElement("style");return t.type="text/css",i.appendChild(t),t}function g(t){var e,n,r=document.querySelector("style["+f+'~="'+t.id+'"]');if(r){if(c)return l;r.parentNode.removeChild(r)}if(d){var o=u++;r=s||(s=v()),e=w.bind(null,r,o,!1),n=w.bind(null,r,o,!0)}else r=v(),e=function(t,e){var n=e.css,r=e.media,o=e.sourceMap;r&&t.setAttribute("media",r);p.ssrId&&t.setAttribute(f,e.id);o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}var x,y=(x=[],function(t,e){return x[t]=e,x.filter(Boolean).join("\n")});function w(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=y(e,o);else{var a=document.createTextNode(o),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(a,i[e]):t.appendChild(a)}}},43:function(t,e,n){var r=n(133);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(31).default)("116d68b0",r,!0,{sourceMap:!1})},44:function(t,e,n){var r=n(135);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(31).default)("031aaebe",r,!0,{sourceMap:!1})},45:function(t,e,n){var r=n(137);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(31).default)("1ac16c96",r,!0,{sourceMap:!1})},46:function(t,e,n){var r=n(139);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(31).default)("59c29176",r,!0,{sourceMap:!1})},92:function(t,e,n){"use strict";var r={name:"no-ssr",functional:!0,props:{placeholder:String,placeholderTag:{type:String,default:"div"}},render:function(t,e){var n=e.parent,r=e.slots,o=e.props,a=r(),i=a.default,s=a.placeholder;return n._isMounted?i:(n.$once("hook:mounted",function(){n.$forceUpdate()}),t(o.placeholderTag,{class:["no-ssr-placeholder"]},o.placeholder||s))}};t.exports=r},94:function(t,e,n){t.exports=n(147)}},[[94,3,1]]]);