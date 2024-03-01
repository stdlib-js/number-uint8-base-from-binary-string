// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return r!=r}var e=Math.floor;function n(r){return e(r)===r}function t(r){return n(r/2)}function i(r){return t(r>0?r-1:r+1)}var a=Number.POSITIVE_INFINITY,o=Number.NEGATIVE_INFINITY;function u(r){return r===a||r===o}var c=Math.sqrt;function f(r){return Math.abs(r)}var s="function"==typeof Object.defineProperty?Object.defineProperty:null;var l=Object.defineProperty;function p(r){return"number"==typeof r}function g(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function v(r,e,n){var t=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=n?r+g(i):g(i)+r,t&&(r="-"+r)),r}var y=String.prototype.toLowerCase,d=String.prototype.toUpperCase;function h(r){var e,n,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,t=parseInt(n,10),!isFinite(t)){if(!p(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(n=(-t).toString(e),r.precision&&(n=v(n,r.precision,r.padRight)),n="-"+n):(n=t.toString(e),t||r.precision?r.precision&&(n=v(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===d.call(r.specifier)?d.call(n):y.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var w=Math.abs,b=String.prototype.toLowerCase,m=String.prototype.toUpperCase,A=String.prototype.replace,_=/e\+(\d)$/,E=/e-(\d)$/,U=/^(\d+)$/,I=/^(\d+)e/,S=/\.0$/,k=/\.0*e/,x=/(\..*[^0])0*e/;function F(r){var e,n,t=parseFloat(r.arg);if(!isFinite(t)){if(!p(r.arg))throw new Error("invalid floating-point number. Value: "+n);t=r.arg}switch(r.specifier){case"e":case"E":n=t.toExponential(r.precision);break;case"f":case"F":n=t.toFixed(r.precision);break;case"g":case"G":w(t)<1e-4?((e=r.precision)>0&&(e-=1),n=t.toExponential(e)):n=t.toPrecision(r.precision),r.alternate||(n=A.call(n,x,"$1e"),n=A.call(n,k,"e"),n=A.call(n,S,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=A.call(n,_,"e+0$1"),n=A.call(n,E,"e-0$1"),r.alternate&&(n=A.call(n,U,"$1."),n=A.call(n,I,"$1.e")),t>=0&&r.sign&&(n=r.sign+n),n=r.specifier===m.call(r.specifier)?m.call(n):b.call(n)}function j(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}var T=String.fromCharCode,N=isNaN,O=Array.isArray;function V(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function $(r){var e,n,t,i,a,o,u,c,f,s,l,p,g;if(!O(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,c=0;c<r.length;c++)if(t=r[c],"string"==typeof t)o+=t;else{if(e=void 0!==t.precision,!(t=V(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),n=t.flags,f=0;f<n.length;f++)switch(i=n.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,N(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,N(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=h(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!N(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=N(a)?String(t.arg):T(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=F(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=v(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(s=t.arg,l=t.width,p=t.padRight,g=void 0,(g=l-s.length)<0?s:s=p?s+j(g):j(g)+s)),o+=t.arg||"",u+=1}return o}var G=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function C(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function H(r){var e,n,t,i;for(n=[],i=0,t=G.exec(r);t;)(e=r.slice(i,G.lastIndex-t[0].length)).length&&n.push(e),n.push(C(t)),i=G.lastIndex,t=G.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function W(r){var e,n;if("string"!=typeof r)throw new TypeError(W("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[H(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return $.apply(null,e)}var L=Object.prototype,P=L.toString,R=L.__defineGetter__,Z=L.__defineSetter__,M=L.__lookupGetter__,X=L.__lookupSetter__;var Y=function(){try{return s({},"x",{}),!0}catch(r){return!1}}()?l:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===P.call(r))throw new TypeError(W("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===P.call(n))throw new TypeError(W("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(M.call(r,e)||X.call(r,e)?(t=r.__proto__,r.__proto__=L,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&R&&R.call(r,e,n.get),o&&Z&&Z.call(r,e,n.set),r};function q(r,e,n){Y(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}var z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var B=Object.prototype.toString;var D=Object.prototype.hasOwnProperty;var J="function"==typeof Symbol?Symbol:void 0,K="function"==typeof J?J.toStringTag:"";var Q=z&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return B.call(r);n=r[K],a=K,e=null!=(i=r)&&D.call(i,a);try{r[K]=void 0}catch(e){return B.call(r)}return t=B.call(r),e?r[K]=n:delete r[K],t}:function(r){return B.call(r)},rr="function"==typeof Uint32Array;var er="function"==typeof Uint32Array?Uint32Array:null;var nr,tr="function"==typeof Uint32Array?Uint32Array:void 0;nr=function(){var r,e,n;if("function"!=typeof er)return!1;try{e=new er(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(rr&&n instanceof Uint32Array||"[object Uint32Array]"===Q(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?tr:function(){throw new Error("not implemented")};var ir=nr,ar="function"==typeof Float64Array;var or="function"==typeof Float64Array?Float64Array:null;var ur,cr="function"==typeof Float64Array?Float64Array:void 0;ur=function(){var r,e,n;if("function"!=typeof or)return!1;try{e=new or([1,3.14,-3.14,NaN]),n=e,r=(ar&&n instanceof Float64Array||"[object Float64Array]"===Q(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?cr:function(){throw new Error("not implemented")};var fr=ur,sr="function"==typeof Uint8Array;var lr="function"==typeof Uint8Array?Uint8Array:null;var pr,gr="function"==typeof Uint8Array?Uint8Array:void 0;pr=function(){var r,e,n;if("function"!=typeof lr)return!1;try{e=new lr(e=[1,3.14,-3.14,256,257]),n=e,r=(sr&&n instanceof Uint8Array||"[object Uint8Array]"===Q(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?gr:function(){throw new Error("not implemented")};var vr=pr,yr="function"==typeof Uint16Array;var dr="function"==typeof Uint16Array?Uint16Array:null;var hr,wr="function"==typeof Uint16Array?Uint16Array:void 0;hr=function(){var r,e,n;if("function"!=typeof dr)return!1;try{e=new dr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(yr&&n instanceof Uint16Array||"[object Uint16Array]"===Q(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?wr:function(){throw new Error("not implemented")};var br,mr={uint16:hr,uint8:vr};(br=new mr.uint16(1))[0]=4660;var Ar,_r,Er=52===new mr.uint8(br.buffer)[0];!0===Er?(Ar=1,_r=0):(Ar=0,_r=1);var Ur={HIGH:Ar,LOW:_r},Ir=new fr(1),Sr=new ir(Ir.buffer),kr=Ur.HIGH,xr=Ur.LOW;function Fr(r,e,n,t){return Ir[0]=r,e[t]=Sr[kr],e[t+n]=Sr[xr],e}function jr(r){return Fr(r,[0,0],1,0)}q(jr,"assign",Fr);var Tr=!0===Er?0:1,Nr=new fr(1),Or=new ir(Nr.buffer);function Vr(r,e){return Nr[0]=r,Or[Tr]=e>>>0,Nr[0]}function $r(r){return 0|r}var Gr,Cr,Hr=2147483647,Wr=2147483648,Lr=!0===Er?1:0,Pr=new fr(1),Rr=new ir(Pr.buffer);function Zr(r){return Pr[0]=r,Rr[Lr]}!0===Er?(Gr=1,Cr=0):(Gr=0,Cr=1);var Mr={HIGH:Gr,LOW:Cr},Xr=new fr(1),Yr=new ir(Xr.buffer),qr=Mr.HIGH,zr=Mr.LOW;function Br(r,e){return Yr[qr]=r,Yr[zr]=e,Xr[0]}var Dr=[0,0];function Jr(r,e){var n,t;return jr.assign(r,Dr,1,0),n=Dr[0],n&=Hr,t=Zr(e),Br(n|=t&=Wr,Dr[1])}var Kr=1072693247,Qr=1e300,re=1e-300;var ee=!0===Er?1:0,ne=new fr(1),te=new ir(ne.buffer);function ie(r,e){return ne[0]=r,te[ee]=e>>>0,ne[0]}var ae=1023;var oe=1048575,ue=1048576,ce=1072693248,fe=536870912,se=524288,le=20,pe=9007199254740992,ge=.9617966939259756,ve=.9617967009544373,ye=-7.028461650952758e-9,de=[1,1.5],he=[0,.5849624872207642],we=[0,1.350039202129749e-8];var be=1.4426950408889634,me=1.4426950216293335,Ae=1.9259629911266175e-8;var _e=1023,Ee=-1023,Ue=-1074,Ie=22250738585072014e-324,Se=4503599627370496;function ke(e,n,t,i){return r(e)||u(e)?(n[i]=e,n[i+t]=0,n):0!==e&&f(e)<Ie?(n[i]=e*Se,n[i+t]=-52,n):(n[i]=e,n[i+t]=0,n)}q((function(r){return ke(r,[0,0],1,0)}),"assign",ke);var xe=2146435072;var Fe=2220446049250313e-31,je=2148532223,Te=[0,0],Ne=[0,0];function Oe(e,n){var t,i;return 0===n||0===e||r(e)||u(e)?e:(ke(e,Te,1,0),e=Te[0],n+=Te[1],n+=function(r){var e=Zr(r);return(e=(e&xe)>>>20)-ae|0}(e),n<Ue?Jr(0,e):n>_e?e<0?o:a:(n<=Ee?(n+=52,i=Fe):i=1,jr.assign(e,Ne,1,0),t=Ne[0],t&=je,i*Br(t|=n+ae<<20,Ne[1])))}var Ve=.6931471805599453,$e=1048575;var Ge=1048576,Ce=1071644672,He=20,We=.6931471824645996,Le=-1.904654299957768e-9;var Pe=1072693247,Re=1105199104,Ze=1139802112,Me=1083179008,Xe=1072693248,Ye=1083231232,qe=3230714880,ze=31,Be=1e300,De=1e-300,Je=8008566259537294e-32,Ke=[0,0],Qe=[0,0];function rn(e,t){var s,l,p,g,v,y,d,h,w,b,m,A,_,E;if(r(e)||r(t))return NaN;if(jr.assign(t,Ke,1,0),v=Ke[0],0===Ke[1]){if(0===t)return 1;if(1===t)return e;if(-1===t)return 1/e;if(.5===t)return c(e);if(-.5===t)return 1/c(e);if(2===t)return e*e;if(3===t)return e*e*e;if(4===t)return(e*=e)*e;if(u(t))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:f(r)<1==(e===a)?0:a}(e,t)}if(jr.assign(e,Ke,1,0),g=Ke[0],0===Ke[1]){if(0===g)return function(r,e){return e===o?a:e===a?0:e>0?i(e)?r:0:i(e)?Jr(a,r):a}(e,t);if(1===e)return 1;if(-1===e&&i(t))return-1;if(u(e))return e===o?rn(-0,-t):t<0?0:a}if(e<0&&!1===n(t))return(e-e)/(e-e);if(p=f(e),s=g&Hr|0,l=v&Hr|0,d=v>>>ze|0,y=(y=g>>>ze|0)&&i(t)?-1:1,l>Re){if(l>Ze)return function(r,e){return(Zr(r)&Hr)<=Kr?e<0?Qr*Qr:re*re:e>0?Qr*Qr:re*re}(e,t);if(s<Pe)return 1===d?y*Be*Be:y*De*De;if(s>Xe)return 0===d?y*Be*Be:y*De*De;m=function(r,e){var n,t,i,a,o,u,c;return a=(i=e-1)*i*(0===(c=i)?.5:.5+c*(.25*c-.3333333333333333)),n=(u=i*Ae-a*be)-((t=Vr(t=(o=me*i)+u,0))-o),r[0]=t,r[1]=n,r}(Qe,p)}else m=function(r,e,n){var t,i,a,o,u,c,f,s,l,p,g,v,y,d,h,w,b,m,A,_,E;return m=0,n<ue&&(m-=53,n=Zr(e*=pe)),m+=(n>>le)-ae|0,n=(A=n&oe|0)|ce|0,A<=235662?_=0:A<767610?_=1:(_=0,m+=1,n-=ue),o=Vr(i=(w=(e=ie(e,n))-(f=de[_]))*(b=1/(e+f)),0),t=(n>>1|fe)+se,c=ie(0,t+=_<<18),h=(a=i*i)*a*(0===(E=a)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),c=Vr(c=3+(a=o*o)+(h+=(u=b*(w-o*c-o*(e-(c-f))))*(o+i)),0),l=Vr(l=(w=o*c)+(b=u*c+(h-(c-3-a))*i),0),p=ve*l,y=(g=ye*l+(b-(l-w))*ge+we[_])-((v=Vr(v=p+g+(s=he[_])+(d=m),0))-d-s-p),r[0]=v,r[1]=y,r}(Qe,p,s);if(A=(b=(t-(h=Vr(t,0)))*m[0]+t*m[1])+(w=h*m[0]),jr.assign(A,Ke,1,0),_=$r(Ke[0]),E=$r(Ke[1]),_>=Me){if(0!=(_-Me|E))return y*Be*Be;if(b+Je>A-w)return y*Be*Be}else if((_&Hr)>=Ye){if(0!=(_-qe|E))return y*De*De;if(b<=A-w)return y*De*De}return A=function(r,e,n){var t,i,a,o,u,c,f,s,l,p;return l=((s=r&Hr|0)>>He)-ae|0,f=0,s>Ce&&(i=ie(0,((f=r+(Ge>>l+1)>>>0)&~($e>>(l=((f&Hr)>>He)-ae|0)))>>>0),f=(f&$e|Ge)>>He-l>>>0,r<0&&(f=-f),e-=i),r=$r(r=Zr(c=1-((c=(a=(i=Vr(i=n+e,0))*We)+(o=(n-(i-e))*Ve+i*Le))*(t=c-(i=c*c)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(c-a))+c*u)-c))),(r+=f<<He>>>0)>>He<=0?Oe(c,f):ie(c,r)}(_,w,b),y*A}function en(r){var e,n;if(8!==r.length)throw new Error(function(){var r,e=arguments,n="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}("0m960",8,r));for(e=0,n=0;n<r.length;n++)"1"===r[n]&&(e+=rn(2,8-n-1));return e}export{en as default};
//# sourceMappingURL=mod.js.map
