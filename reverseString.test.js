import { reverseString } from "./reverseString";

test('Invierte una cadena', () => {
    expect(reverseString('abc')).toBe('cba')
})

test('Invierte la cadena sin ignorar los espacios en blanco', () => {
    expect(reverseString('Hola buenos días')).toBe('saíd soneub aloH')
})
