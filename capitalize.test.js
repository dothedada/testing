import { capitalize } from "./capitalize"

test('La primera letra de una palabra se convierte en mayúscula', () => {
	expect(capitalize('hola')).toBe('Hola')
})
