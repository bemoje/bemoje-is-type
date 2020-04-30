import isType from '../src/is-type'

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
