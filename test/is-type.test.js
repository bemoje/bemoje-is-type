import isType from '../src/is-type'

describe('isType', () => {
	test('works', () => {
		expect(isType(String, 'asd')).toBe(true)
		expect(isType(String, String('asd'))).toBe(true)
		expect(isType(String, new String('asd'))).toBe(true)
		expect(isType(String, '')).toBe(true)
		expect(isType(Number, NaN)).toBe(false)
		expect(isType(Number, Infinity)).toBe(false)
		expect(isType(Number, 2)).toBe(true)
		expect(isType(Number, new Number(2))).toBe(true)
		expect(isType(Number, 1.1)).toBe(true)
		expect(isType(Array, [])).toBe(true)
		expect(isType(Array, new Uint16Array(1))).toBe(false)
		expect(isType(Uint16Array, new Uint16Array(1))).toBe(true)
		expect(isType(Object, {})).toBe(true)
		class Custom {}
		expect(isType(Custom, new Custom())).toBe(true)
		expect(isType(null, null)).toBe(true)
		expect(isType(undefined, undefined)).toBe(true)
		expect(isType(void 0, void 0)).toBe(true)
		expect(() => isType('not a function', 5)).toThrow(TypeError)
	})
})
