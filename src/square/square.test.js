const square = require("./square");
describe('square', function () {
	let mockvalue
	// перед каждым запуском каждого теста
	beforeEach(() => {
		mockvalue = Math.random()
	})
	// beforeAll(() => {
	// 	// перед запуском всех тестов
	// })
	// // после каждого запуска каждого теста

	// aftereAll(() => {
	// 	// после запуска всех тестов
	// })
	test('квадрат числа', () => {
		expect(square(mockvalue)).toBe(mockvalue * mockvalue)
		expect(square(-5)).toBeLessThan(26)
		expect(square(mockvalue)).toBeGreaterThanOrEqual(mockvalue * mockvalue)
		expect(square(0.000002)).toBe(0.000000000004)
		expect(square(0)).not.toBeUndefined()
	})
	test('количество вызовов внутренней функции - 1', () => {
		const spyMathPow = jest.spyOn(Math, 'pow')
		square(2)
		expect(spyMathPow).toBeCalledTimes(1)
	})
	test('количество вызовов внутренней функции -0', () => {
		const spyMathPow = jest.spyOn(Math, 'pow')
		square(1)
		expect(spyMathPow).toBeCalledTimes(0)
	})

	afterEach(() => {
		jest.clearAllMocks()
	})

});