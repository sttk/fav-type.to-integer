# [@fav/type.to-integer][repo-url] [![NPM version][npm-img]][npm-url] [![MIT License][mit-img]][mit-url] [![Build Status][travis-img]][travis-url] [![Build Status][appveyor-img]][appveyor-url] [![Coverage status][coverage-img]][coverage-url]

Converts a number or a string to an integer.

> "fav" is an abbreviation of "favorite" and also the acronym of "for all versions".
> This package is intended to support all Node.js versions and many browsers as possible.
> At least, this package supports Node.js >= v0.10 and major Web browsers: Chrome, Firefox, IE11, Edge, Vivaldi and Safari.

## Install

To install from npm:

```sh
$ npm install --save @fav/type.to-integer
```

***NOTE:*** *npm < 2.7.0 does not support scoped package, but even old version Node.js supports it. So when you use such older npm, you should download this package from [github.com][repo-url], and move it in `node_modules/@fav/type.to-integer/` directory manually.*


## Usage

For Node.js:

```js
var toInteger = require('@fav/type.to-integer');
toInteger(123); // => 123
toInteger('456'); // => 456
toInteger(7.89); // => 7
toInteger(null, 999); // => 999
```

For Web browsers:

```html
<script src="fav.type.to-integer.min.js"></script>
<script>
var toInteger = fav.type.toInteger;
toInteger('456'); // => 456
</script>
```


## API

### <u>toInteger(value [, defaultValue]): number</u>

Converts a number or a string to an integer.
If *value* is a floating point number, this function discard decimals.
If *value* is neither a finite number, a numeric string nor other data type, this function returns NaN or *defaultValue* if it is specified.

#### Parameter:

| Parameter    |  Type  | Description                           |
|--------------|:------:|---------------------------------------|
| value        | *any*  | The number or string to be converted. |
| defaultValue | *any*  | The default value if *value* is invalid. (Optional) |

#### Returns:

The converted integer value. If failing to convert, NaN or *defaultValue* (if specified) is returned. 

**Type:** number


## Checked                                                                      

### Node.js (4〜8)

| Platform  |   4    |   5    |   6    |   7    |   8    |
|:---------:|:------:|:------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|

### io.js (1〜3)

| Platform  |   1    |   2    |   3    |
|:---------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|

### Node.js (〜0.12)

| Platform  |  0.7   |  0.8   |  0.9   |  0.10  |  0.11  |  0.12  |
|:---------:|:------:|:------:|:------:|:------:|:------:|:------:|
| macOS     |        |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |        |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|

### Web browsers

| Platform  | Chrome | Firefox | Vivaldi | Safari |  Edge  | IE11   |
|:---------:|:------:|:-------:|:-------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef; |&#x25ef; |&#x25ef;|   --   |   --   |
| Windows10 |&#x25ef;|&#x25ef; |&#x25ef; |   --   |&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef; |&#x25ef; |   --   |   --   |   --   |


## License

Copyright (C) 2017 Takayuki Sato

This program is free software under [MIT][mit-url] License.
See the file LICENSE in this distribution for more details.


[repo-url]: https://github.com/sttk/fav-type.to-integer/
[npm-img]: https://img.shields.io/badge/npm-v0.7.1-blue.svg
[npm-url]: https://www.npmjs.com/package/@fav/type.to-integer
[mit-img]: https://img.shields.io/badge/license-MIT-green.svg
[mit-url]: https://opensource.org/licenses/MIT
[travis-img]: https://travis-ci.org/sttk/fav-type.to-integer.svg?branch=master
[travis-url]: https://travis-ci.org/sttk/fav-type.to-integer
[appveyor-img]: https://ci.appveyor.com/api/projects/status/github/sttk/fav-type.to-integer?branch=master&svg=true
[appveyor-url]: https://ci.appveyor.com/project/sttk/fav-type-to-integer
[coverage-img]: https://coveralls.io/repos/github/sttk/fav-type.to-integer/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/sttk/fav-type.to-integer?branch=master
