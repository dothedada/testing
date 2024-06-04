import { calculator } from './calculator';

test('Realiza la suma de dos numeros', () => {
    expect(calculator.add(2, 5)).toBe(7);
});

test('Realiza la resta de dos numeros', () => {
    expect(calculator.substract(2, 5)).toBe(-3);
});

test('Realiza la multiplicación de dos numeros', () => {
    expect(calculator.multiply(2, 5)).toBe(10);
});

test('Realiza la división de dos numeros', () => {
    expect(calculator.divide(2, 5)).toBeCloseTo(0.4);
});

test('Convierte las cadenas de números en números', () => {
    for (const operation in calculator) {
        expect(typeof calculator[operation]('3', '4')).toBe('number');
    }
});
