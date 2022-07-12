// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,r;n=this,r=function(){"use strict";function n(n){return n!=n}var r=Math.floor;function t(n){return r(n)===n}function e(n){return t(n/2)}function o(n){return e(n>0?n-1:n+1)}var i=Number.POSITIVE_INFINITY,u=Number.NEGATIVE_INFINITY;function f(n){return n===i||n===u}var a=Math.sqrt;function c(n){return Math.abs(n)}var y,l="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),v=Object.prototype.toString,p=Object.prototype.hasOwnProperty,A="function"==typeof Symbol?Symbol.toStringTag:"",w=l&&"symbol"==typeof Symbol.toStringTag?function(n){var r,t,e,o,i;if(null==n)return v.call(n);t=n[A],i=A,r=null!=(o=n)&&p.call(o,i);try{n[A]=void 0}catch(r){return v.call(n)}return e=v.call(n),r?n[A]=t:delete n[A],e}:function(n){return v.call(n)},b="function"==typeof Uint32Array,h="function"==typeof Uint32Array?Uint32Array:null,m="function"==typeof Uint32Array?Uint32Array:void 0;y=function(){var n,r,t;if("function"!=typeof h)return!1;try{r=new h(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,n=(b&&t instanceof Uint32Array||"[object Uint32Array]"===w(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?m:function(){throw new Error("not implemented")};var s,d=y,U="function"==typeof Float64Array,g="function"==typeof Float64Array?Float64Array:null,I="function"==typeof Float64Array?Float64Array:void 0;s=function(){var n,r,t;if("function"!=typeof g)return!1;try{r=new g([1,3.14,-3.14,NaN]),t=r,n=(U&&t instanceof Float64Array||"[object Float64Array]"===w(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){n=!1}return n}()?I:function(){throw new Error("not implemented")};var N,S=s,F="function"==typeof Uint8Array,E="function"==typeof Uint8Array?Uint8Array:null,H="function"==typeof Uint8Array?Uint8Array:void 0;N=function(){var n,r,t;if("function"!=typeof E)return!1;try{r=new E(r=[1,3.14,-3.14,256,257]),t=r,n=(F&&t instanceof Uint8Array||"[object Uint8Array]"===w(t))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?H:function(){throw new Error("not implemented")};var O,T=N,j="function"==typeof Uint16Array,G="function"==typeof Uint16Array?Uint16Array:null,L="function"==typeof Uint16Array?Uint16Array:void 0;O=function(){var n,r,t;if("function"!=typeof G)return!1;try{r=new G(r=[1,3.14,-3.14,65536,65537]),t=r,n=(j&&t instanceof Uint16Array||"[object Uint16Array]"===w(t))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?L:function(){throw new Error("not implemented")};var W,M={uint16:O,uint8:T};(W=new M.uint16(1))[0]=4660;var V,q,x=52===new M.uint8(W.buffer)[0];!0===x?(V=1,q=0):(V=0,q=1);var P={HIGH:V,LOW:q},Y=new S(1),_=new d(Y.buffer),B=P.HIGH,C=P.LOW;function R(n,r){return Y[0]=r,n[0]=_[B],n[1]=_[C],n}function k(n,r){return 1===arguments.length?R([0,0],n):R(n,r)}var z=!0===x?0:1,D=new S(1),J=new d(D.buffer);function K(n,r){return D[0]=n,J[z]=r>>>0,D[0]}function Q(n){return 0|n}var X,Z,$=!0===x?1:0,nn=new S(1),rn=new d(nn.buffer);function tn(n){return nn[0]=n,rn[$]}!0===x?(X=1,Z=0):(X=0,Z=1);var en={HIGH:X,LOW:Z},on=new S(1),un=new d(on.buffer),fn=en.HIGH,an=en.LOW;function cn(n,r){return un[fn]=n,un[an]=r,on[0]}var yn=[0,0];function ln(n,r){var t,e;return k(yn,n),t=yn[0],t&=2147483647,e=tn(r),cn(t|=e&=2147483648,yn[1])}var vn=!0===x?1:0,pn=new S(1),An=new d(pn.buffer);function wn(n,r){return pn[0]=n,An[vn]=r>>>0,pn[0]}var bn=1023,hn=1048576,mn=[1,1.5],sn=[0,.5849624872207642],dn=[0,1.350039202129749e-8];function Un(r,t){return n(t)||f(t)?(r[0]=t,r[1]=0,r):0!==t&&c(t)<22250738585072014e-324?(r[0]=4503599627370496*t,r[1]=-52,r):(r[0]=t,r[1]=0,r)}var gn=[0,0],In=[0,0];function Nn(r,t){var e,o;return 0===t||0===r||n(r)||f(r)?r:(function(n,r){1===arguments.length?Un([0,0],n):Un(n,r)}(gn,r),t+=gn[1],t+=function(n){var r=tn(n);return(r=(2146435072&r)>>>20)-bn|0}(r=gn[0]),t<-1074?ln(0,r):t>1023?r<0?u:i:(t<=-1023?(t+=52,o=2220446049250313e-31):o=1,k(In,r),e=In[0],e&=2148532223,o*cn(e|=t+bn<<20,In[1])))}var Sn=2147483647,Fn=1048575,En=1048576,Hn=2147483647,On=1083179008,Tn=1e300,jn=1e-300,Gn=[0,0],Ln=[0,0];function Wn(r,e){var y,l,v,p,A,w,b,h,m,s,d,U,g,I;if(n(r)||n(e))return NaN;if(k(Gn,e),A=Gn[0],0===Gn[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return a(r);if(-.5===e)return 1/a(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(f(e))return function(n,r){return-1===n?(n-n)/(n-n):1===n?1:c(n)<1==(r===i)?0:i}(r,e)}if(k(Gn,r),p=Gn[0],0===Gn[1]){if(0===p)return function(n,r){return r===u?i:r===i?0:r>0?o(r)?n:0:o(r)?ln(i,n):i}(r,e);if(1===r)return 1;if(-1===r&&o(e))return-1;if(f(r))return r===u?Wn(-0,-e):e<0?0:i}if(r<0&&!1===t(e))return(r-r)/(r-r);if(v=c(r),y=p&Hn|0,l=A&Hn|0,b=A>>>31|0,w=(w=p>>>31|0)&&o(e)?-1:1,l>1105199104){if(l>1139802112)return function(n,r){return(2147483647&tn(n))<=1072693247?r<0?1/0:0:r>0?1/0:0}(r,e);if(y<1072693247)return 1===b?w*Tn*Tn:w*jn*jn;if(y>1072693248)return 0===b?w*Tn*Tn:w*jn*jn;d=function(n,r){var t,e,o,i,u,f;return t=(u=1.9259629911266175e-8*(o=r-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=K(e=(i=1.4426950216293335*o)+u,0))-i),n[0]=e,n[1]=t,n}(Ln,v)}else d=function(n,r,t){var e,o,i,u,f,a,c,y,l,v,p,A,w,b,h,m,s,d,U,g,I;return d=0,t<hn&&(d-=53,t=tn(r*=9007199254740992)),d+=(t>>20)-bn|0,t=1072693248|(U=1048575&t|0),U<=235662?g=0:U<767610?g=1:(g=0,d+=1,t-=hn),u=K(o=(m=(r=wn(r,t))-(c=mn[g]))*(s=1/(r+c)),0),e=524288+(t>>1|536870912),a=wn(0,e+=g<<18),h=(i=o*o)*i*(0===(I=i)?.5999999999999946:.5999999999999946+I*(.4285714285785502+I*(.33333332981837743+I*(.272728123808534+I*(.23066074577556175+.20697501780033842*I))))),a=K(a=3+(i=u*u)+(h+=(f=s*(m-u*a-u*(r-(a-c))))*(u+o)),0),w=(p=-7.028461650952758e-9*(l=K(l=(m=u*a)+(s=f*a+(h-(a-3-i))*o),0))+.9617966939259756*(s-(l-m))+dn[g])-((A=K(A=(v=.9617967009544373*l)+p+(y=sn[g])+(b=d),0))-b-y-v),n[0]=A,n[1]=w,n}(Ln,v,y);if(s=(e-(h=K(e,0)))*d[0]+e*d[1],m=h*d[0],k(Gn,U=s+m),g=Q(Gn[0]),I=Q(Gn[1]),g>=On){if(0!=(g-On|I))return w*Tn*Tn;if(s+8008566259537294e-32>U-m)return w*Tn*Tn}else if((g&Hn)>=1083231232){if(0!=(g-3230714880|I))return w*jn*jn;if(s<=U-m)return w*jn*jn}return U=function(n,r,t){var e,o,i,u,f,a,c,y,l,v;return l=((y=n&Sn|0)>>20)-bn|0,c=0,y>1071644672&&(o=wn(0,((c=n+(En>>l+1)>>>0)&~(Fn>>(l=((c&Sn)>>20)-bn|0)))>>>0),c=(c&Fn|En)>>20-l>>>0,n<0&&(c=-c),r-=o),n=Q(n=tn(a=1-((a=(i=.6931471824645996*(o=K(o=t+r,0)))+(u=.6931471805599453*(t-(o-r))+-1.904654299957768e-9*o))*(e=a-(o=a*a)*(0===(v=o)?.16666666666666602:.16666666666666602+v*(v*(6613756321437934e-20+v*(4.1381367970572385e-8*v-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=u-(a-i))+a*f)-a))),(n+=c<<20>>>0)>>20<=0?Nn(a,c):wn(a,n)}(g,m,s),w*U}return function(n){var r,t;if(8!==n.length)throw new Error(function(){var n,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(n=1;n<r.length;n++)t+="&arg[]="+encodeURIComponent(r[n]);return t}("invalid argument. Input string must have a length equal to %u. Value: `%s`.",8,n));for(r=0,t=0;t<n.length;t++)"1"===n[t]&&(r+=Wn(2,8-t-1));return r}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(n="undefined"!=typeof globalThis?globalThis:n||self).fromBinaryStringUint8=r();
//# sourceMappingURL=browser.js.map
