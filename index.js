// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=function(){try{return t({},"x",{}),!0}catch(t){return!1}},r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,c=n.__lookupGetter__,l=n.__lookupSetter__,f=r,a=function(t,e,r){var f,a,p,b;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((a="value"in r)&&(c.call(t,e)||l.call(t,e)?(f=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=f):t[e]=r.value),p="get"in r,b="set"in r,a&&(p||b))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(t,e,r.get),b&&u&&u.call(t,e,r.set),t},p=e()?f:a,b=function(t,e,r){p(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})},y=function(t){return"number"==typeof t},s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),m=function(){return s&&"symbol"==typeof Symbol.toStringTag},_=Object.prototype.toString,v=_,d=function(t){return v.call(t)},g=Object.prototype.hasOwnProperty,j=function(t,e){return null!=t&&g.call(t,e)},h="function"==typeof Symbol?Symbol.toStringTag:"",O=j,P=h,S=_,w=d,T=function(t){var e,r,n;if(null==t)return S.call(t);r=t[P],e=O(t,P);try{t[P]=void 0}catch(e){return S.call(t)}return n=S.call(t),e?t[P]=r:delete t[P],n},I=m()?T:w,N=Number,E=N.prototype.toString,V=I,A=N,x=function(t){try{return E.call(t),!0}catch(t){return!1}},F=m(),G=function(t){return"object"==typeof t&&(t instanceof A||(F?x(t):"[object Number]"===V(t)))},k=y,M=G,Y=b,C=function(t){return k(t)||M(t)},q=G;Y(C,"isPrimitive",y),Y(C,"isObject",q);var z=C,B=Number.POSITIVE_INFINITY,D=N.NEGATIVE_INFINITY,H=Math.floor,J=function(t){return H(t)===t},K=B,L=D,Q=J,R=function(t){return t<K&&t>L&&Q(t)},U=z.isPrimitive,W=R,X=function(t){return U(t)&&W(t)},Z=z.isObject,$=R,tt=function(t){return Z(t)&&$(t.valueOf())},et=X,rt=tt,nt=b,ot=function(t){return et(t)||rt(t)},it=tt;nt(ot,"isPrimitive",X),nt(ot,"isObject",it);var ut=ot.isPrimitive,ct=function(t){return ut(t)&&t>0},lt=ot.isObject,ft=function(t){return lt(t)&&t.valueOf()>0},at=ct,pt=ft,bt=b,yt=function(t){return at(t)||pt(t)},st=ft;bt(yt,"isPrimitive",ct),bt(yt,"isObject",st);var mt=yt,_t=J,vt=function(t){return null!=t&&"function"!=typeof t&&"number"==typeof t.length&&_t(t.length)&&t.length>=0&&t.length<=4294967295},dt=function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!vt(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}},gt=dt(mt);return b(gt,"primitives",dt(mt.isPrimitive)),b(gt,"objects",dt(mt.isObject)),gt},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).isPositiveIntegerArray=e();
//# sourceMappingURL=index.js.map
