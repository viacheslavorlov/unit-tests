const mapArrToStrings = require('./mapArrToStrings')


describe('mapArrToStrings', () => {
	test('array to string-array', () => {
		expect(mapArrToStrings([1, 2, 3, '4', 5])).toEqual(['1', '2', '3', '5'])

	})
	test('array to string-array different values', () => {
		expect(mapArrToStrings([1, null, false, undefined, true, 'adf', '4', NaN])).toEqual(['1'])

	})
	test('array to string-array empty array', () => {
		expect(mapArrToStrings([])).toEqual([])

	})
	test('array to string-array not equal number array', () => {
		expect(mapArrToStrings([1, 2, 3 ,4])).not.toEqual([1, 2, 3 ,4])

	})

});