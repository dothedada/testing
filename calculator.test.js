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

test('Retorna siempre un número que corresponde a la función, así el argumento ingresado sea una cadena', () => {
    for (const operation in calculator) {
        expect(typeof calculator[operation]('3', '4')).toBe('number');
    }
    expect(calculator.add('23', '7')).toBe(30);
    expect(calculator.substract('5', '2')).toBe(3);
    expect(calculator.multiply('4', '3')).toBe(12);
    expect(calculator.divide('10', '2')).toBeCloseTo(5);
});
