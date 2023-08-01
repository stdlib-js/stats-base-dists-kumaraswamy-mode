// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.0.7-esm/index.mjs";function e(e,i){return s(e)||e<1||s(i)||i<1||1===e&&1===i?NaN:t((e-1)/(e*i-1),1/e)}export{e as default};
//# sourceMappingURL=index.mjs.map
