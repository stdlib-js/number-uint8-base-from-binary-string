// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@esm/index.mjs";var r=t,n=e;var s=function(t){var e,s;if(8!==t.length)throw new Error(r("invalid argument. Input string must have a length equal to `%u`. Value: `%u`.",8,t));for(e=0,s=0;s<t.length;s++)"1"===t[s]&&(e+=n(2,8-s-1));return e};export{s as default};
//# sourceMappingURL=index.mjs.map
