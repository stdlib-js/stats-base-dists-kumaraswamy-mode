"use strict";var s=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(n){throw (r=0, n)}};};var u=s(function(v,t){
var i=require('@stdlib/math-base-assert-is-nan/dist'),o=require('@stdlib/math-base-special-pow/dist');function c(e,r){return i(e)||e<1||i(r)||r<1||e===1&&r===1?NaN:o((e-1)/(e*r-1),1/e)}t.exports=c
});var p=u();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
