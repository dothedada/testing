import { cesarCypher } from "./cesarCipher";

test('Cambia las letras en cualquier factor', () => {
    expect(cesarCypher('abc',3)).toBe('def')
})

test('Retorna null cuando la cadena está vacía', () => {
    expect(cesarCypher('', 3)).toBe('')
})

test('retorna la misma cadena si no se le introduce el segundo parámetro', () => {
    expect(cesarCypher('abc')).toBe('abc')
})

test('Mantiene las mayúsculas', () => {
    expect(cesarCypher('HeLLo',3)).toBe('KhOOr')
})

test('Cuando llega al final del abecedario continua el conteo desde el principio', () => {
    expect(cesarCypher('xYz',3)).toBe('aBc')
})

test('Sólo cambia las letras', () => {
    expect(cesarCypher('Hola! Tonto.',1)).toBe('Ipmb! Upoup.')
})
