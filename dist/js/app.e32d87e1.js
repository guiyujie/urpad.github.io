(function(t){function e(e){for(var r,a,u=e[0],s=e[1],l=e[2],d=0,f=[];d<u.length;d++)a=u[d],i[a]&&f.push(i[a][0]),i[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);c&&c(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,u=1;u<n.length;u++){var s=n[u];0!==i[s]&&(r=!1)}r&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},i={app:0},o=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/urpad.github.io/dist/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var c=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),i=n.n(r);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r,i,o,a,u,s,l=n("2b0e"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("div",{staticClass:"body"},[n("transition",{attrs:{"enter-active-class":"animated slideInRight","leave-active-class":"animated slideOutLeft"},on:{"after-leave":t.cal}},[n("media",{directives:[{name:"show",rawName:"v-show",value:!t.n,expression:"!n"}],attrs:{url:t.urlCurrent,video:t.current.video},on:{next:t.play}})],1),n("transition",{attrs:{"enter-active-class":"animated slideInRight","leave-active-class":"animated slideOutLeft"},on:{"after-leave":t.cal}},[n("media",{directives:[{name:"show",rawName:"v-show",value:t.n,expression:"n"}],attrs:{url:t.urlNext,video:t.next.video},on:{next:t.play}})],1)],1):t._e()},d=[],f=(n("4b3c"),n("bc3a")),h=n.n(f);u=void 0,o=/\.(mp4|ogg|swf|avi|flv|mpg|rm|mov|wav|asf|3gp|mkv|rmvb)$/i,s=function(){var t;return t=location.search.match(new RegExp("[?&]"+name+"=([^&]+)","i")),null===t||t.length<1?"":t[1]},r="https://p.gu321.com/",a=1,i=function(t,e=0){var n,i;if(i=e,n=e+a,i<0&&(i=0),!(i>=t.length))return n>=t.length-1&&(n=t.length-1),new Promise(function(e){var o,u,s,l,c,d,f,h;for(o=a,u=function(){if(o--<=0)return e()},h=[],s=c=d=i,f=n;d<=f?c<=f:c>=f;s=d<=f?++c:--c)t[s].video||t[s].preloaded?h.push(u()):(l=new Image,l.onerror=l.onload=u,l.src=r+t[s].h_id,h.push(t[s].preloaded=!0));return h})};var p={components:{media:n("d4eb").default},data:function(){return{n:1,show:!1,config:{sideTime:10},current:{},next:{},key:"h_id",index:0,li:[]}},computed:{urlCurrent:function(){return this.current[this.key]},urlNext:function(){return this.next[this.key]}},watch:{index:function(t){return i(this.li,t+a)}},methods:{timeout:function(){var t;return t=(t=>{return u=setTimeout(this.play,1e3*t)}),0===this.n&&this.current.video||1===this.n&&this.next.video?console.log("stoped"):t(this.config.sideTime)},play:function(){return u&&clearTimeout(u),this.n=!this.n-0,this.index=++this.index%this.li.length,this.timeout()},cal:function(){var t;return t=this.li[this.index],o.test(t[this.key])&&(t.video=!0),1===this.n?this.current=t:this.next=t}},mounted:function(){var t;return t=s("imei")||353114008096366,h.a.get(`https://gyj.urer.top/-api/upad/gg?imei=${t}`).then(async t=>{var e,n,r,a;for(this.li=t.data.filter(t=>{return"0"!==t.h_id}),a=this.li,e=0,n=a.length;e<n;e++)r=a[e],o.test(r[this.key])&&(r.video=!0);if(!(this.li.length<2))return await i(this.li),this.current=this.li[this.index],this.next=this.li[(this.index+1)%this.li.length],this.show=!0,this.play()})}};document.addEventListener("keydown",function(t){return t.preventDefault()}),document.addEventListener("keyup",function(t){return t.preventDefault()});var v=p,m=(n("034f"),n("2877")),g=Object(m["a"])(v,c,d,!1,null,null,null),x=g.exports;l["a"].config.productionTip=!1,new l["a"]({render:function(t){return t(x)}}).$mount("#app")},"64a9":function(t,e,n){},"6aaf":function(t,e,n){},d4eb:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"media"},[t.video?n("video",{attrs:{muted:"",autoplay:"true",poster:"ur.gif"},domProps:{muted:!0},on:{ended:t.next,error:t.next}},[n("source",{attrs:{src:t.prefix+t.url}})]):n("img",{staticClass:"img",attrs:{src:t.prefix+t.url},on:{error:t.next}})])},i=[],o={props:{url:String,video:Boolean,prefix:{type:String,default:"https://p.gu321.com/"}},methods:{next:function(){return this.$emit("next")}}},a=o,u=(n("f8f2"),n("2877")),s=Object(u["a"])(a,r,i,!1,null,null,null);e["default"]=s.exports},f8f2:function(t,e,n){"use strict";var r=n("6aaf"),i=n.n(r);i.a}});
//# sourceMappingURL=app.e32d87e1.js.map