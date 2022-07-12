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

# From Binary String

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create an unsigned 8-bit integer from a [literal bit representation][@stdlib/number/uint8/base/to-binary-string].



<section class="usage">

## Usage

To use in Observable,

```javascript
fromBinaryStringUint8 = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/number-uint8-base-from-binary-string@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var fromBinaryStringUint8 = require( 'path/to/vendor/umd/number-uint8-base-from-binary-string/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/number-uint8-base-from-binary-string@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.fromBinaryStringUint8;
})();
</script>
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

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/number-uint8-base-to-binary-string@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/number-uint8-base-from-binary-string@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var b;
var y;
var i;

// Convert integers to literal bit representations and then convert them back...
for ( i = 0; i < 256; i++ ) {
    b = toBinaryStringUint8( i );
    y = fromBinaryStringUint8( b );
    console.log( '%d => %s => %d', i, b, y );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/number-uint8-base-from-binary-string.svg
[npm-url]: https://npmjs.org/package/@stdlib/number-uint8-base-from-binary-string

[test-image]: https://github.com/stdlib-js/number-uint8-base-from-binary-string/actions/workflows/test.yml/badge.svg?branch=v0.0.7
[test-url]: https://github.com/stdlib-js/number-uint8-base-from-binary-string/actions/workflows/test.yml?query=branch:v0.0.7

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/number-uint8-base-from-binary-string/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/number-uint8-base-from-binary-string?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/number-uint8-base-from-binary-string.svg
[dependencies-url]: https://david-dm.org/stdlib-js/number-uint8-base-from-binary-string/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/number-uint8-base-from-binary-string/tree/deno
[umd-url]: https://github.com/stdlib-js/number-uint8-base-from-binary-string/tree/umd
[esm-url]: https://github.com/stdlib-js/number-uint8-base-from-binary-string/tree/esm
[branches-url]: https://github.com/stdlib-js/number-uint8-base-from-binary-string/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/number-uint8-base-from-binary-string/main/LICENSE

[@stdlib/number/uint8/base/to-binary-string]: https://github.com/stdlib-js/number-uint8-base-to-binary-string/tree/umd

</section>

<!-- /.links -->
