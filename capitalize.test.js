import { capitalize } from "./capitalize"

test('La primera letra de una palabra se convierte en mayúscula', () => {
	expect(capitalize('hola')).toBe('Hola')
})

test('Retorna NULL cuando una cadena está vacía', () => {
	expect(capitalize('')).toBeNull()
})

test('No cambia los caracteres numéricos', () => {
	expect(capitalize('123')).toBe('123')
})

test('Al convertir en mayúscula mantiene los acentos y caracteres latinos', () => {
	expect(capitalize('árbol')).toBe('Árbol')
	expect(capitalize('ñapa')).toBe('Ñapa')
	expect(capitalize('çaca')).toBe('Çaca')
})

test('Capitaliza más de una palabra, JadenCase', () => {
	expect(capitalize('lucy está en el cielo con diamantes')).toBe('Lucy Está En El Cielo Con Diamantes')
	expect(capitalize('los 3 tristes tigres en el árbol')).toBe('Los 3 Tristes Tigres En El Árbol')
})
