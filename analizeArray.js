export const analizeArray = (array) => {
    if (!array) return undefined
    const average = array.reduce((sum, current) => sum + current, 0) / array.length
    const max = array.reduce((mem, current) => mem > current ? mem : current, -Infinity)
    const min = array.reduce((mem, current) => mem < current ? mem : current, Infinity)
    const analizedArray = {
        average: !array.length ? null : average, 
        min: !array.length ? null : min, 
        max: !array.length ? null : max, 
        length: array.length
    }
    return analizedArray
}
