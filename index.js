// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";function r(r){return r!=r}var e=Math.floor;function t(r){return e(r)===r}function n(r){return t(r/2)}function i(r){return n(r>0?r-1:r+1)}var o=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY;function u(r){return r===o||r===a}var c=Math.sqrt;function f(r){return Math.abs(r)}var l="function"==typeof Object.defineProperty?Object.defineProperty:null,s=Object.defineProperty;function p(r){return"number"==typeof r}function y(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function g(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+y(i):y(i)+r,n&&(r="-"+r)),r}var d=String.prototype.toLowerCase,b=String.prototype.toUpperCase;function v(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!p(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=g(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=g(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===b.call(r.specifier)?b.call(t):d.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function h(r){return"string"==typeof r}var w=Math.abs,m=String.prototype.toLowerCase,S=String.prototype.toUpperCase,I=String.prototype.replace,A=/e\+(\d)$/,_=/e-(\d)$/,E=/^(\d+)$/,T=/^(\d+)e/,N=/\.0$/,U=/\.0*e/,F=/(\..*[^0])0*e/;function j(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!p(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":w(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=I.call(t,F,"$1e"),t=I.call(t,U,"e"),t=I.call(t,N,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=I.call(t,A,"e+0$1"),t=I.call(t,_,"e-0$1"),r.alternate&&(t=I.call(t,E,"$1."),t=I.call(t,T,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===S.call(r.specifier)?S.call(t):m.call(t)}function x(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function k(r,e,t){var n=e-r.length;return n<0?r:r=t?r+x(n):x(n)+r}var O=String.fromCharCode,V=isNaN,G=Array.isArray;function $(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function P(r){var e,t,n,i,o,a,u,c,f;if(!G(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(h(n=r[c]))a+=n;else{if(e=void 0!==n.precision,!(n=$(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,V(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,V(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=v(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!V(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=V(o)?String(n.arg):O(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=j(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=g(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=k(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var H=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function W(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function C(r){var e,t,n,i;for(t=[],i=0,n=H.exec(r);n;)(e=r.slice(i,H.lastIndex-n[0].length)).length&&t.push(e),t.push(W(n)),i=H.lastIndex,n=H.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function L(r){return"string"==typeof r}function R(r){var e,t;if(!L(r))throw new TypeError(R("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[C(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return P.apply(null,e)}var Y,Z=Object.prototype,M=Z.toString,X=Z.__defineGetter__,q=Z.__defineSetter__,z=Z.__lookupGetter__,B=Z.__lookupSetter__;Y=function(){try{return l({},"x",{}),!0}catch(r){return!1}}()?s:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===M.call(r))throw new TypeError(R("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===M.call(t))throw new TypeError(R("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(z.call(r,e)||B.call(r,e)?(n=r.__proto__,r.__proto__=Z,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&X&&X.call(r,e,t.get),a&&q&&q.call(r,e,t.set),r};var D=Y;function J(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var K=J(),Q=Object.prototype.toString,rr=Object.prototype.hasOwnProperty;function er(r,e){return null!=r&&rr.call(r,e)}var tr,nr="function"==typeof Symbol?Symbol:void 0,ir="function"==typeof nr?nr.toStringTag:"",or=K&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n;if(null==r)return Q.call(r);t=r[ir],e=er(r,ir);try{r[ir]=void 0}catch(e){return Q.call(r)}return n=Q.call(r),e?r[ir]=t:delete r[ir],n}:function(r){return Q.call(r)},ar="function"==typeof Uint32Array,ur="function"==typeof Uint32Array?Uint32Array:null,cr="function"==typeof Uint32Array?Uint32Array:void 0;tr=function(){var r,e,t;if("function"!=typeof ur)return!1;try{e=new ur(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(ar&&t instanceof Uint32Array||"[object Uint32Array]"===or(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?cr:function(){throw new Error("not implemented")};var fr,lr=tr,sr=J(),pr=Object.prototype.toString,yr="function"==typeof Symbol?Symbol:void 0,gr="function"==typeof yr?yr.toStringTag:"",dr=sr&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n;if(null==r)return pr.call(r);t=r[gr],e=er(r,gr);try{r[gr]=void 0}catch(e){return pr.call(r)}return n=pr.call(r),e?r[gr]=t:delete r[gr],n}:function(r){return pr.call(r)},br="function"==typeof Float64Array,vr="function"==typeof Float64Array?Float64Array:null,hr="function"==typeof Float64Array?Float64Array:void 0;fr=function(){var r,e,t;if("function"!=typeof vr)return!1;try{e=new vr([1,3.14,-3.14,NaN]),t=e,r=(br&&t instanceof Float64Array||"[object Float64Array]"===dr(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?hr:function(){throw new Error("not implemented")};var wr,mr=fr,Sr=J(),Ir=Object.prototype.toString,Ar="function"==typeof Symbol?Symbol:void 0,_r="function"==typeof Ar?Ar.toStringTag:"",Er=Sr&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n;if(null==r)return Ir.call(r);t=r[_r],e=er(r,_r);try{r[_r]=void 0}catch(e){return Ir.call(r)}return n=Ir.call(r),e?r[_r]=t:delete r[_r],n}:function(r){return Ir.call(r)},Tr="function"==typeof Uint8Array,Nr="function"==typeof Uint8Array?Uint8Array:null,Ur="function"==typeof Uint8Array?Uint8Array:void 0;wr=function(){var r,e,t;if("function"!=typeof Nr)return!1;try{e=new Nr(e=[1,3.14,-3.14,256,257]),t=e,r=(Tr&&t instanceof Uint8Array||"[object Uint8Array]"===Er(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Ur:function(){throw new Error("not implemented")};var Fr,jr=wr,xr=J(),kr=Object.prototype.toString,Or="function"==typeof Symbol?Symbol:void 0,Vr="function"==typeof Or?Or.toStringTag:"",Gr=xr&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n;if(null==r)return kr.call(r);t=r[Vr],e=er(r,Vr);try{r[Vr]=void 0}catch(e){return kr.call(r)}return n=kr.call(r),e?r[Vr]=t:delete r[Vr],n}:function(r){return kr.call(r)},$r="function"==typeof Uint16Array,Pr="function"==typeof Uint16Array?Uint16Array:null,Hr="function"==typeof Uint16Array?Uint16Array:void 0;Fr=function(){var r,e,t;if("function"!=typeof Pr)return!1;try{e=new Pr(e=[1,3.14,-3.14,65536,65537]),t=e,r=($r&&t instanceof Uint16Array||"[object Uint16Array]"===Gr(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Hr:function(){throw new Error("not implemented")};var Wr,Cr={uint16:Fr,uint8:jr};(Wr=new Cr.uint16(1))[0]=4660;var Lr,Rr,Yr=52===new Cr.uint8(Wr.buffer)[0];!0===Yr?(Lr=1,Rr=0):(Lr=0,Rr=1);var Zr={HIGH:Lr,LOW:Rr},Mr=new mr(1),Xr=new lr(Mr.buffer),qr=Zr.HIGH,zr=Zr.LOW;function Br(r,e,t,n){return Mr[0]=r,e[n]=Xr[qr],e[n+t]=Xr[zr],e}function Dr(r){return Br(r,[0,0],1,0)}D(Dr,"assign",{configurable:!1,enumerable:!1,writable:!1,value:Br});var Jr=!0===Yr?0:1,Kr=new mr(1),Qr=new lr(Kr.buffer);function re(r,e){return Kr[0]=r,Qr[Jr]=e>>>0,Kr[0]}function ee(r){return 0|r}var te,ne,ie=Number.NEGATIVE_INFINITY,oe=Number.POSITIVE_INFINITY,ae=2147483647,ue=!0===Yr?1:0,ce=new mr(1),fe=new lr(ce.buffer);function le(r){return ce[0]=r,fe[ue]}!0===Yr?(te=1,ne=0):(te=0,ne=1);var se={HIGH:te,LOW:ne},pe=new mr(1),ye=new lr(pe.buffer),ge=se.HIGH,de=se.LOW;function be(r,e){return ye[ge]=r,ye[de]=e,pe[0]}var ve=[0,0];function he(r,e){var t,n;return Dr.assign(r,ve,1,0),t=ve[0],t&=ae,n=le(e),be(t|=n&=2147483648,ve[1])}var we=!0===Yr?1:0,me=new mr(1),Se=new lr(me.buffer);function Ie(r,e){return me[0]=r,Se[we]=e>>>0,me[0]}var Ae=1023,_e=1048576,Ee=[1,1.5],Te=[0,.5849624872207642],Ne=[0,1.350039202129749e-8],Ue=Number.POSITIVE_INFINITY,Fe=Number.NEGATIVE_INFINITY;function je(e,t,n,i){return r(e)||u(e)?(t[i]=e,t[i+n]=0,t):0!==e&&f(e)<22250738585072014e-324?(t[i]=4503599627370496*e,t[i+n]=-52,t):(t[i]=e,t[i+n]=0,t)}!function(r,e,t){D(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}((function(r){return je(r,[0,0],1,0)}),"assign",je);var xe=[0,0],ke=[0,0];function Oe(e,t){var n,i;return 0===t||0===e||r(e)||u(e)?e:(je(e,xe,1,0),t+=xe[1],t+=function(r){var e=le(r);return(e=(2146435072&e)>>>20)-Ae|0}(e=xe[0]),t<-1074?he(0,e):t>1023?e<0?Fe:Ue:(t<=-1023?(t+=52,i=2220446049250313e-31):i=1,Dr.assign(e,ke,1,0),n=ke[0],n&=2148532223,i*be(n|=t+Ae<<20,ke[1])))}var Ve=1048575,Ge=1048576,$e=1083179008,Pe=1e300,He=1e-300,We=[0,0],Ce=[0,0];function Le(e,n){var o,a,l,s,p,y,g,d,b,v,h,w,m,S;if(r(e)||r(n))return NaN;if(Dr.assign(n,We,1,0),p=We[0],0===We[1]){if(0===n)return 1;if(1===n)return e;if(-1===n)return 1/e;if(.5===n)return c(e);if(-.5===n)return 1/c(e);if(2===n)return e*e;if(3===n)return e*e*e;if(4===n)return(e*=e)*e;if(u(n))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:f(r)<1==(e===oe)?0:oe}(e,n)}if(Dr.assign(e,We,1,0),s=We[0],0===We[1]){if(0===s)return function(r,e){return e===ie?oe:e===oe?0:e>0?i(e)?r:0:i(e)?he(oe,r):oe}(e,n);if(1===e)return 1;if(-1===e&&i(n))return-1;if(u(e))return e===ie?Le(-0,-n):n<0?0:oe}if(e<0&&!1===t(n))return(e-e)/(e-e);if(l=f(e),o=s&ae|0,a=p&ae|0,g=p>>>31|0,y=(y=s>>>31|0)&&i(n)?-1:1,a>1105199104){if(a>1139802112)return function(r,e){return(le(r)&ae)<=1072693247?e<0?1/0:0:e>0?1/0:0}(e,n);if(o<1072693247)return 1===g?y*Pe*Pe:y*He*He;if(o>1072693248)return 0===g?y*Pe*Pe:y*He*He;h=function(r,e){var t,n,i,o,a,u;return t=(a=1.9259629911266175e-8*(i=e-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((n=re(n=(o=1.4426950216293335*i)+a,0))-o),r[0]=n,r[1]=t,r}(Ce,l)}else h=function(r,e,t){var n,i,o,a,u,c,f,l,s,p,y,g,d,b,v,h,w,m,S,I,A;return m=0,t<_e&&(m-=53,t=le(e*=9007199254740992)),m+=(t>>20)-Ae|0,t=1072693248|(S=1048575&t|0),S<=235662?I=0:S<767610?I=1:(I=0,m+=1,t-=_e),a=re(i=(h=(e=Ie(e,t))-(f=Ee[I]))*(w=1/(e+f)),0),n=524288+(t>>1|536870912),c=Ie(0,n+=I<<18),v=(o=i*i)*o*(0===(A=o)?.5999999999999946:.5999999999999946+A*(.4285714285785502+A*(.33333332981837743+A*(.272728123808534+A*(.23066074577556175+.20697501780033842*A))))),c=re(c=3+(o=a*a)+(v+=(u=w*(h-a*c-a*(e-(c-f))))*(a+i)),0),d=(y=-7.028461650952758e-9*(s=re(s=(h=a*c)+(w=u*c+(v-(c-3-o))*i),0))+.9617966939259756*(w-(s-h))+Ne[I])-((g=re(g=(p=.9617967009544373*s)+y+(l=Te[I])+(b=m),0))-b-l-p),r[0]=g,r[1]=d,r}(Ce,l,o);if(w=(v=(n-(d=re(n,0)))*h[0]+n*h[1])+(b=d*h[0]),Dr.assign(w,We,1,0),m=ee(We[0]),S=ee(We[1]),m>=$e){if(0!=(m-$e|S))return y*Pe*Pe;if(v+8008566259537294e-32>w-b)return y*Pe*Pe}else if((m&ae)>=1083231232){if(0!=(m-3230714880|S))return y*He*He;if(v<=w-b)return y*He*He}return w=function(r,e,t){var n,i,o,a,u,c,f,l,s,p;return s=((l=r&ae|0)>>20)-Ae|0,f=0,l>1071644672&&(i=Ie(0,((f=r+(Ge>>s+1)>>>0)&~(Ve>>(s=((f&ae)>>20)-Ae|0)))>>>0),f=(f&Ve|Ge)>>20-s>>>0,r<0&&(f=-f),e-=i),r=ee(r=le(c=1-((c=(o=.6931471824645996*(i=re(i=t+e,0)))+(a=.6931471805599453*(t-(i-e))+-1.904654299957768e-9*i))*(n=c-(i=c*c)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(n-2)-((u=a-(c-o))+c*u)-c))),(r+=f<<20>>>0)>>20<=0?Oe(c,f):Ie(c,r)}(m,b,v),y*w}return function(e,t){return r(e)||e<1||r(t)||t<1||1===e&&1===t?NaN:Le((e-1)/(e*t-1),1/e)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).mode=e();
//# sourceMappingURL=index.js.map
