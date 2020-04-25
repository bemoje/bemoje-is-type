(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@bemoje/is-undefined'), require('@bemoje/type-of'), require('chalk')) :
	typeof define === 'function' && define.amd ? define(['@bemoje/is-undefined', '@bemoje/type-of', 'chalk'], factory) :
	(global = global || self, global['is-type'] = factory(global.isUndefined, global.typeOf, global.chalk));
}(this, (function (isUndefined, typeOf, chalk) { 'use strict';

	isUndefined = isUndefined && Object.prototype.hasOwnProperty.call(isUndefined, 'default') ? isUndefined['default'] : isUndefined;
	typeOf = typeOf && Object.prototype.hasOwnProperty.call(typeOf, 'default') ? typeOf['default'] : typeOf;
	chalk = chalk && Object.prototype.hasOwnProperty.call(chalk, 'default') ? chalk['default'] : chalk;

	/**
	 * Check if a value is of the given type.
	 * @param {function} constructor - the constructor that creates instances of the type in question, which should be used to check whether or not the value, 'v' is an instance of that same constructor.
	 * @param {*} value - The value to evaluate
	 * @returns {boolean}
	 */
	function isType(constructor, value) {
		// assert required args are defined
		if (isUndefined(constructor)) {
			throw new Error(chalk.bold.red('constructor cannot be undefined'))
		}

		if (isUndefined(value)) {
			throw new Error(chalk.bold.red('value cannot be undefined'))
		}

		// type-check args
		if (typeof constructor !== 'function') {
			throw new TypeError(
				chalk.bold.red('Expected constructor to be a function'),
			)
		}

		if (typeof constructor.name === 'undefined') {
			throw new TypeError(
				chalk.bold.red('The constructor argument is not a constructor'),
			)
		}

		// evaluate
		return typeOf(value) === constructor.name
	}

	return isType;

})));
