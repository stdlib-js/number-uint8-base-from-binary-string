// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";function r(r){return r!=r}var n=Math.floor;function t(r){return n(r)===r}function e(r){return t(r/2)}function o(r){return e(r>0?r-1:r+1)}var i=Number.POSITIVE_INFINITY,u=Number.NEGATIVE_INFINITY;function f(r){return r===i||r===u}var a=Math.sqrt;function c(r){return Math.abs(r)}var l,y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),p=Object.prototype.toString,v=Object.prototype.hasOwnProperty,b="function"==typeof Symbol?Symbol.toStringTag:"";l=y&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,i;if(null==r)return p.call(r);t=r[b],i=b,n=null!=(o=r)&&v.call(o,i);try{r[b]=void 0}catch(n){return p.call(r)}return e=p.call(r),n?r[b]=t:delete r[b],e}:function(r){return p.call(r)};var s,d=l,w="function"==typeof Uint32Array,m="function"==typeof Uint32Array?Uint32Array:null,A="function"==typeof Uint32Array?Uint32Array:void 0;s=function(){var r,n,t;if("function"!=typeof m)return!1;try{n=new m(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(w&&t instanceof Uint32Array||"[object Uint32Array]"===d(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?A:function(){throw new Error("not implemented")};var _,h=s,g="function"==typeof Float64Array,U="function"==typeof Float64Array?Float64Array:null,j="function"==typeof Float64Array?Float64Array:void 0;_=function(){var r,n,t;if("function"!=typeof U)return!1;try{n=new U([1,3.14,-3.14,NaN]),t=n,r=(g&&t instanceof Float64Array||"[object Float64Array]"===d(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?j:function(){throw new Error("not implemented")};var I,S=_,O="function"==typeof Uint8Array,E="function"==typeof Uint8Array?Uint8Array:null,N="function"==typeof Uint8Array?Uint8Array:void 0;I=function(){var r,n,t;if("function"!=typeof E)return!1;try{n=new E(n=[1,3.14,-3.14,256,257]),t=n,r=(O&&t instanceof Uint8Array||"[object Uint8Array]"===d(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?N:function(){throw new Error("not implemented")};var F,T=I,H="function"==typeof Uint16Array,G="function"==typeof Uint16Array?Uint16Array:null,P="function"==typeof Uint16Array?Uint16Array:void 0;F=function(){var r,n,t;if("function"!=typeof G)return!1;try{n=new G(n=[1,3.14,-3.14,65536,65537]),t=n,r=(H&&t instanceof Uint16Array||"[object Uint16Array]"===d(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?P:function(){throw new Error("not implemented")};var V,L={uint16:F,uint8:T};(V=new L.uint16(1))[0]=4660;var W,x,M=52===new L.uint8(V.buffer)[0];!0===M?(W=1,x=0):(W=0,x=1);var k={HIGH:W,LOW:x},q=new S(1),C=new h(q.buffer),Y=k.HIGH,B=k.LOW;function R(r,n){return q[0]=n,r[0]=C[Y],r[1]=C[B],r}function z(r,n){return 1===arguments.length?R([0,0],r):R(r,n)}var D=!0===M?0:1,J=new S(1),K=new h(J.buffer);function Q(r,n){return J[0]=r,K[D]=n>>>0,J[0]}function X(r){return 0|r}var Z,$,rr=!0===M?1:0,nr=new S(1),tr=new h(nr.buffer);function er(r){return nr[0]=r,tr[rr]}!0===M?(Z=1,$=0):(Z=0,$=1);var or={HIGH:Z,LOW:$},ir=new S(1),ur=new h(ir.buffer),fr=or.HIGH,ar=or.LOW;function cr(r,n){return ur[fr]=r,ur[ar]=n,ir[0]}var lr=[0,0];function yr(r,n){var t,e;return z(lr,r),t=lr[0],t&=2147483647,e=er(n),cr(t|=e&=2147483648,lr[1])}var pr=!0===M?1:0,vr=new S(1),br=new h(vr.buffer);function sr(r,n){return vr[0]=r,br[pr]=n>>>0,vr[0]}var dr,wr=1023,mr=1048576,Ar=[1,1.5],_r=[0,.5849624872207642],hr=[0,1.350039202129749e-8],gr="function"==typeof Object.defineProperty?Object.defineProperty:null,Ur=Object.defineProperty,jr=Object.prototype,Ir=jr.toString,Sr=jr.__defineGetter__,Or=jr.__defineSetter__,Er=jr.__lookupGetter__,Nr=jr.__lookupSetter__;function Fr(n,t,e,o){return r(n)||f(n)?(t[o]=n,t[o+e]=0,t):0!==n&&c(n)<22250738585072014e-324?(t[o]=4503599627370496*n,t[o+e]=-52,t):(t[o]=n,t[o+e]=0,t)}dr=function(){try{return gr({},"x",{}),!0}catch(r){return!1}}()?Ur:function(r,n,t){var e,o,i,u;if("object"!=typeof r||null===r||"[object Array]"===Ir.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===Ir.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((o="value"in t)&&(Er.call(r,n)||Nr.call(r,n)?(e=r.__proto__,r.__proto__=jr,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),i="get"in t,u="set"in t,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&Sr&&Sr.call(r,n,t.get),u&&Or&&Or.call(r,n,t.set),r},dr((function(r){return Fr(r,[0,0],1,0)}),"assign",{configurable:!1,enumerable:!1,writable:!1,value:Fr});var Tr=[0,0],Hr=[0,0];function Gr(n,t){var e,o;return 0===t||0===n||r(n)||f(n)?n:(Fr(n,Tr,1,0),t+=Tr[1],t+=function(r){var n=er(r);return(n=(2146435072&n)>>>20)-wr|0}(n=Tr[0]),t<-1074?yr(0,n):t>1023?n<0?u:i:(t<=-1023?(t+=52,o=2220446049250313e-31):o=1,z(Hr,n),e=Hr[0],e&=2148532223,o*cr(e|=t+wr<<20,Hr[1])))}var Pr=2147483647,Vr=1048575,Lr=1048576,Wr=2147483647,xr=1083179008,Mr=1e300,kr=1e-300,qr=[0,0],Cr=[0,0];function Yr(n,e){var l,y,p,v,b,s,d,w,m,A,_,h,g,U;if(r(n)||r(e))return NaN;if(z(qr,e),b=qr[0],0===qr[1]){if(0===e)return 1;if(1===e)return n;if(-1===e)return 1/n;if(.5===e)return a(n);if(-.5===e)return 1/a(n);if(2===e)return n*n;if(3===e)return n*n*n;if(4===e)return(n*=n)*n;if(f(e))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:c(r)<1==(n===i)?0:i}(n,e)}if(z(qr,n),v=qr[0],0===qr[1]){if(0===v)return function(r,n){return n===u?i:n===i?0:n>0?o(n)?r:0:o(n)?yr(i,r):i}(n,e);if(1===n)return 1;if(-1===n&&o(e))return-1;if(f(n))return n===u?Yr(-0,-e):e<0?0:i}if(n<0&&!1===t(e))return(n-n)/(n-n);if(p=c(n),l=v&Wr|0,y=b&Wr|0,d=b>>>31|0,s=(s=v>>>31|0)&&o(e)?-1:1,y>1105199104){if(y>1139802112)return function(r,n){return(2147483647&er(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(n,e);if(l<1072693247)return 1===d?s*Mr*Mr:s*kr*kr;if(l>1072693248)return 0===d?s*Mr*Mr:s*kr*kr;_=function(r,n){var t,e,o,i,u,f;return t=(u=1.9259629911266175e-8*(o=n-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=Q(e=(i=1.4426950216293335*o)+u,0))-i),r[0]=e,r[1]=t,r}(Cr,p)}else _=function(r,n,t){var e,o,i,u,f,a,c,l,y,p,v,b,s,d,w,m,A,_,h,g,U;return _=0,t<mr&&(_-=53,t=er(n*=9007199254740992)),_+=(t>>20)-wr|0,t=1072693248|(h=1048575&t|0),h<=235662?g=0:h<767610?g=1:(g=0,_+=1,t-=mr),u=Q(o=(m=(n=sr(n,t))-(c=Ar[g]))*(A=1/(n+c)),0),e=524288+(t>>1|536870912),a=sr(0,e+=g<<18),w=(i=o*o)*i*(0===(U=i)?.5999999999999946:.5999999999999946+U*(.4285714285785502+U*(.33333332981837743+U*(.272728123808534+U*(.23066074577556175+.20697501780033842*U))))),a=Q(a=3+(i=u*u)+(w+=(f=A*(m-u*a-u*(n-(a-c))))*(u+o)),0),s=(v=-7.028461650952758e-9*(y=Q(y=(m=u*a)+(A=f*a+(w-(a-3-i))*o),0))+.9617966939259756*(A-(y-m))+hr[g])-((b=Q(b=(p=.9617967009544373*y)+v+(l=_r[g])+(d=_),0))-d-l-p),r[0]=b,r[1]=s,r}(Cr,p,l);if(A=(e-(w=Q(e,0)))*_[0]+e*_[1],m=w*_[0],z(qr,h=A+m),g=X(qr[0]),U=X(qr[1]),g>=xr){if(0!=(g-xr|U))return s*Mr*Mr;if(A+8008566259537294e-32>h-m)return s*Mr*Mr}else if((g&Wr)>=1083231232){if(0!=(g-3230714880|U))return s*kr*kr;if(A<=h-m)return s*kr*kr}return h=function(r,n,t){var e,o,i,u,f,a,c,l,y,p;return y=((l=r&Pr|0)>>20)-wr|0,c=0,l>1071644672&&(o=sr(0,((c=r+(Lr>>y+1)>>>0)&~(Vr>>(y=((c&Pr)>>20)-wr|0)))>>>0),c=(c&Vr|Lr)>>20-y>>>0,r<0&&(c=-c),n-=o),r=X(r=er(a=1-((a=(i=.6931471824645996*(o=Q(o=t+n,0)))+(u=.6931471805599453*(t-(o-n))+-1.904654299957768e-9*o))*(e=a-(o=a*a)*(0===(p=o)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=u-(a-i))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?Gr(a,c):sr(a,r)}(g,m,A),s*h}return function(r){var n,t;if(8!==r.length)throw new Error(function(){var r,n=arguments,t="https://stdlib.io/e/"+n[0]+"?";for(r=1;r<n.length;r++)t+="&arg[]="+encodeURIComponent(n[r]);return t}("invalid argument. Input string must have a length equal to %u. Value: `%s`.",8,r));for(n=0,t=0;t<r.length;t++)"1"===r[t]&&(n+=Yr(2,8-t-1));return n}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).fromBinaryStringUint8=n();
//# sourceMappingURL=index.js.map
