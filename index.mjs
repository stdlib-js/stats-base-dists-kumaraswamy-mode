// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@esm/index.mjs";var e=s,a=t;var r=function(s,t){return e(s)||s<1||e(t)||t<1||1===s&&1===t?NaN:a((s-1)/(s*t-1),1/s)};export{r as default};
//# sourceMappingURL=index.mjs.map
