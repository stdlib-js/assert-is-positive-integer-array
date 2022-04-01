// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).isPositiveIntegerArray=e()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=function(){try{return t({},"x",{}),!0}catch(t){return!1}},r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,a=n.__lookupGetter__,c=n.__lookupSetter__;var l=r,f=function(t,e,r){var l,f,v,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((f="value"in r)&&(a.call(t,e)||c.call(t,e)?(l=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=l):t[e]=r.value),v="get"in r,p="set"in r,f&&(v||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return v&&i&&i.call(t,e,r.get),p&&u&&u.call(t,e,r.set),t},v=e()?l:f;var p=function(t,e,r){v(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})};var b=function(t){return"number"==typeof t};var y=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var s=function(){return y&&"symbol"==typeof Symbol.toStringTag},m=Object.prototype.toString,_=m;var d=function(t){return _.call(t)},g=Object.prototype.hasOwnProperty;var j=function(t,e){return null!=t&&g.call(t,e)},h="function"==typeof Symbol?Symbol.toStringTag:"",O=j,P=h,S=m;var w=d,T=function(t){var e,r,n;if(null==t)return S.call(t);r=t[P],e=O(t,P);try{t[P]=void 0}catch(e){return S.call(t)}return n=S.call(t),e?t[P]=r:delete t[P],n},I=s()?T:w,N=Number,E=N.prototype.toString;var V=I,A=N,x=function(t){try{return E.call(t),!0}catch(t){return!1}},F=s();var G=function(t){return"object"==typeof t&&(t instanceof A||(F?x(t):"[object Number]"===V(t)))},k=b,M=G;var Y=p,C=function(t){return k(t)||M(t)},q=G;Y(C,"isPrimitive",b),Y(C,"isObject",q);var z=C,B=Number.POSITIVE_INFINITY,D=N.NEGATIVE_INFINITY,H=Math.floor;var J=function(t){return H(t)===t},K=B,L=D,Q=J;var R=function(t){return t<K&&t>L&&Q(t)},U=z.isPrimitive,W=R;var X=function(t){return U(t)&&W(t)},Z=z.isObject,$=R;var tt=function(t){return Z(t)&&$(t.valueOf())},et=X,rt=tt;var nt=p,ot=function(t){return et(t)||rt(t)},it=tt;nt(ot,"isPrimitive",X),nt(ot,"isObject",it);var ut=ot.isPrimitive;var at=function(t){return ut(t)&&t>0},ct=ot.isObject;var lt=function(t){return ct(t)&&t.valueOf()>0},ft=at,vt=lt;var pt=p,bt=function(t){return ft(t)||vt(t)},yt=lt;pt(bt,"isPrimitive",at),pt(bt,"isObject",yt);var st=J;var mt=function(t){return null!=t&&"function"!=typeof t&&"number"==typeof t.length&&st(t.length)&&t.length>=0&&t.length<=4294967295};var _t=bt,dt=p,gt=function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!mt(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}},jt=gt(_t);return dt(jt,"primitives",gt(_t.isPrimitive)),dt(jt,"objects",gt(_t.isObject)),jt}));
//# sourceMappingURL=bundle.js.map
