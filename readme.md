# @bemoje/is-type

Check if a value is of the given type.

#### Version

<span><a href="https://npmjs.org/@bemoje/is-type" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@bemoje/is-type" alt="NPM version" /></a></span>

#### Travis CI

<span><a href="https://npmjs.org/@bemoje/is-type" title="View this project on NPM"><img src="https://travis-ci.org/bemoje/bemoje-is-type.svg?branch=master" alt="dependencies" /></a></span>

#### Dependencies

<span><a href="https://npmjs.org/@bemoje/is-type" title="View this project on NPM"><img src="https://david-dm.org/bemoje/bemoje-is-type.svg" alt="dependencies" /></a></span>

#### Stats

<span><a href="https://npmjs.org/@bemoje/is-type" title="View this project on NPM"><img src="https://img.shields.io/npm/dt/@bemoje/is-type" alt="NPM downloads" /></a></span>
<span><a href="https://github.com/bemoje/bemoje-is-type/fork" title="Fork this project"><img src="https://img.shields.io/github/forks/bemoje/bemoje-is-type" alt="Forks" /></a></span>

#### Donate

<span><a href="https://www.buymeacoffee.com/bemoje" title="Donate to this project using Buy Me A Beer"><img src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg?label=Buy me a beer!" alt="Buy Me A Beer donate button" /></a></span>
<span><a href="https://paypal.me/forstaaloen" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg?label=PayPal" alt="PayPal donate button" /></a></span>

## Installation

```sh
npm install @bemoje/is-type
npm install --save @bemoje/is-type
npm install --save-dev @bemoje/is-type
```

## Usage

```javascript
import isType from '@bemoje/is-type'

isType()
//=> undefined

isType(String, 'asd')
//=> true

isType(String, String('asd'))
//=> true

isType(String, new String('asd'))
//=> true

isType(String, '')
//=> true

isType(Number, NaN)
//=> false

isType(Number, Infinity)
//=> false

isType(Number, 2)
//=> true

isType(Number, new Number(2))
//=> true

isType(Number, 1.1)
//=> true

isType(Array, [])
//=> true

isType(Array, new Uint16Array(1))
//=> false

isType(Uint16Array, new Uint16Array(1))
//=> true

isType(Object, {})
//=> true

class Custom {}

isType(Custom, new Custom())
//=> true

isType(null, null)
//=> true

isType(undefined, undefined)
//=> true

isType(void 0, void 0)
//=> true

```


## Tests
Uses *Jest* to test module functionality. Run tests to get coverage details.

```bash
npm run test
```

## API
### isType

Check if a value is of the given type.

##### Parameters

-   `constructor` **([function][3] \| [undefined][4] | null)** the constructor that creates instances of the type in question, which should be used to check whether or not the value, 'v' is an instance of that same constructor.

-   `value` **any** The value to evaluate

##### Returns
**[boolean][5]** 

[1]: #istype

[2]: #parameters

[3]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function

[4]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined

[5]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean