// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.1.0-esm/index.mjs";function r(r){var s,n;if(8!==r.length)throw new Error(t("invalid argument. Input string must have a length equal to %u. Value: `%s`.",8,r));for(s=0,n=0;n<r.length;n++)"1"===r[n]&&(s+=e(2,8-n-1));return s}export{r as default};
//# sourceMappingURL=index.mjs.map
