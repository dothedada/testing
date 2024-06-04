import { calculator } from "./calculator";

test('Realiza la suma de dos numeros', () => {
    expect(calculator.add(2,5)).toBe(7)
})
test('Realiza la resta de dos numeros', () => {
    expect(calculator.add(2,5)).toBe(-3)
})
test('Realiza la multiplicación de dos numeros', () => {
    expect(calculator.add(2,5)).toBe(10)
})
test('Realiza la división de dos numeros', () => {
    expect(calculator.add(2,5)).toBeCloseTo(0.4)
})
