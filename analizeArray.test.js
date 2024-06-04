import { analizeArray } from "./analizeArray";

test('Devuelve un objeto con las llaves Average, Min, Max, Length', () => {
    const keys = new Set(Object.keys(analizeArray([])))

    expect(keys.size).toBe(4)
    expect(keys.has('average')).toBe(true)
    expect(keys.has('min')).toBe(true)
    expect(keys.has('max')).toBe(true)
    expect(keys.has('length')).toBe(true)
})

test('Si el array está vacío, retorna todos los valores como NULL', () => {
    const object = analizeArray([])

    expect(object['average']).toBeNull()
    expect(object['min']).toBeNull()
    expect(object['max']).toBeNull()
    expect(object['length']).toBeNull()
})

test('Si no se inrgesa ningún parámetro, retorna undefined', () => {
    expect(analizeArray()).toBeUndefined()
})

test('El calculo del promedio es un número, es correcto, incluyéndo números negativos', () => {
    expect(typeof analizeArray([1,2,3,4,5]).average === 'number').toBe(true)
    expect(analizeArray([1,2,3,4,5]).average).toBe(3)
    expect(analizeArray([1,-2,3,-4,5]).average).toBe(0.6)
    expect(analizeArray([-1,-2,-3,-4,-5]).average).toBe(-3)
})

test('El máximo es un número, es correcto, incluyéndo números negativos', () => {
    expect(typeof analizeArray([1,2,3,4,5]).max === 'number').toBe(true)
    expect(analizeArray([1,2,3,4,5]).max).toBe(5)
    expect(analizeArray([1,-2,3,-4,5]).max).toBe(5)
    expect(analizeArray([-1,-2,-3,-4,-5]).max).toBe(-1)
})

test('El minimo es un número, es correcto, incluyéndo números negativos', () => {
    expect(typeof analizeArray([1,2,3,4,5]).min === 'number').toBe(true)
    expect(analizeArray([1,2,3,4,5]).min).toBe(1)
    expect(analizeArray([1,-2,3,-4,5]).min).toBe(-4)
    expect(analizeArray([-1,-2,-3,-4,-5]).min).toBe(-5)
})

test('La longitud es un número y es correcta', () => {
    expect(typeof analizeArray([1,2,3,4,5]).length === 'number').toBe(true)
    expect(analizeArray([1,2,3,4,5]).length).toBe(1)
    expect(analizeArray([1,-2,3,-4,5]).length).toBe(-4)
    expect(analizeArray([-1,-2,-3,-4,-5]).length).toBe(-5)
})
