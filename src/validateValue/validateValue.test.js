const validateValue = require('./validateValue')


describe('validateValue', () => {
	test('валидация значения min', () => {
		expect(validateValue(0)).toBe(true)

	})
	test('валидация значения mid', () => {
		expect(validateValue(50)).toBe(true)

	})
	test('валидация значения max', () => {
		expect(validateValue(100)).toBe(true)

	})
	test('валидация значения меньше min', () => {
		expect(validateValue(-1)).toBe(false)

	})
	test('валидация значения больше max', () => {
		expect(validateValue(101)).toBe(false)

	})

});