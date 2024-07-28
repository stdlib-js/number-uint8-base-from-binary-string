<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# From Binary String

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create an unsigned 8-bit integer from a [literal bit representation][@stdlib/number/uint8/base/to-binary-string].



<section class="usage">

## Usage

```javascript
import fromBinaryStringUint8 from 'https://cdn.jsdelivr.net/gh/stdlib-js/number-uint8-base-from-binary-string@deno/mod.js';
```

#### fromBinaryStringUint8( bstr )

Creates an unsigned 8-bit integer from a [literal bit representation][@stdlib/number/uint8/base/to-binary-string].

```javascript
var bstr = '01010101';
var val = fromBinaryStringUint8( bstr );
// returns 85

bstr = '00000000';
val = fromBinaryStringUint8( bstr );
// returns 0

bstr = '00000010';
val = fromBinaryStringUint8( bstr );
// returns 2

bstr = '11111111';
val = fromBinaryStringUint8( bstr );
// returns 255
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import toBinaryStringUint8 from 'https://cdn.jsdelivr.net/gh/stdlib-js/number-uint8-base-to-binary-string@deno/mod.js';
import fromBinaryStringUint8 from 'https://cdn.jsdelivr.net/gh/stdlib-js/number-uint8-base-from-binary-string@deno/mod.js';

var b;
var y;
var i;

// Convert integers to literal bit representations and then convert them back...
for ( i = 0; i < 256; i++ ) {
    b = toBinaryStringUint8( i );
    y = fromBinaryStringUint8( b );
    console.log( '%d => %s => %d', i, b, y );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/number-uint16/base/from-binary-string`][@stdlib/number/uint16/base/from-binary-string]</span><span class="delimiter">: </span><span class="description">create an unsigned 16-bit integer from a literal bit representation.</span>
-   <span class="package-name">[`@stdlib/number-uint32/base/from-binary-string`][@stdlib/number/uint32/base/from-binary-string]</span><span class="delimiter">: </span><span class="description">create an unsigned 32-bit integer from a literal bit representation.</span>
-   <span class="package-name">[`@stdlib/number-uint8/base/to-binary-string`][@stdlib/number/uint8/base/to-binary-string]</span><span class="delimiter">: </span><span class="description">return a string giving the literal bit representation of an unsigned 8-bit integer.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/number-uint8-base-from-binary-string.svg
[npm-url]: https://npmjs.org/package/@stdlib/number-uint8-base-from-binary-string

[test-image]: https://github.com/stdlib-js/number-uint8-base-from-binary-string/actions/workflows/test.yml/badge.svg?branch=v0.2.2
[test-url]: https://github.com/stdlib-js/number-uint8-base-from-binary-string/actions/workflows/test.yml?query=branch:v0.2.2

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/number-uint8-base-from-binary-string/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/number-uint8-base-from-binary-string?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/number-uint8-base-from-binary-string.svg
[dependencies-url]: https://david-dm.org/stdlib-js/number-uint8-base-from-binary-string/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/number-uint8-base-from-binary-string/tree/deno
[deno-readme]: https://github.com/stdlib-js/number-uint8-base-from-binary-string/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/number-uint8-base-from-binary-string/tree/umd
[umd-readme]: https://github.com/stdlib-js/number-uint8-base-from-binary-string/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/number-uint8-base-from-binary-string/tree/esm
[esm-readme]: https://github.com/stdlib-js/number-uint8-base-from-binary-string/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/number-uint8-base-from-binary-string/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/number-uint8-base-from-binary-string/main/LICENSE

[@stdlib/number/uint8/base/to-binary-string]: https://github.com/stdlib-js/number-uint8-base-to-binary-string/tree/deno

<!-- <related-links> -->

[@stdlib/number/uint16/base/from-binary-string]: https://github.com/stdlib-js/number-uint16-base-from-binary-string/tree/deno

[@stdlib/number/uint32/base/from-binary-string]: https://github.com/stdlib-js/number-uint32-base-from-binary-string/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
