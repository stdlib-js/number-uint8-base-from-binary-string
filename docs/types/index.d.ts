/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/**
* Creates an unsigned 8-bit integer from a literal bit representation.
*
* @param bstr - string which is a literal bit representation
* @throws must provide a string with a length equal to `8`
* @returns unsigned 8-bit integer
*
* @example
* var bstr = '01010101';
* var val = fromBinaryStringUint8( bstr );
* // returns 85
*
* @example
* var bstr = '00000000';
* var val = fromBinaryStringUint8( bstr );
* // returns 0
*
* @example
* var bstr = '00000010';
* var val = fromBinaryStringUint8( bstr );
* // returns 2
*
* @example
* var bstr = '11111111';
* var val = fromBinaryStringUint8( bstr );
* // returns 255
*/
declare function fromBinaryStringUint8( bstr: string ): number;


// EXPORTS //

export = fromBinaryStringUint8;
