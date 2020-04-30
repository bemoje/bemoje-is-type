import isNull from '@bemoje/is-null'
import isUndefined from '@bemoje/is-undefined'
import typeOf from '@bemoje/type-of'
import chalk from 'chalk'

/**
 * Check if a value is of the given type.
 * @param {function|undefined|null} constructor - the constructor that creates instances of the type in question, which should be used to check whether or not the value, 'v' is an instance of that same constructor.
 * @param {*} value - The value to evaluate
 * @returns {boolean}
 */
export default function isType(constructor, value) {
	// assert required args are defined
	if (isUndefined(constructor) && isUndefined(value)) {
		return true
	}

	if (isNull(constructor) && isNull(value)) {
		return true
	}

	// type-check
	if (typeof constructor !== 'function') {
		throw new TypeError(
			chalk.bold.red('Expected constructor to be a function'),
		)
	}

	// evaluate
	return typeOf(value) === constructor.name
}
