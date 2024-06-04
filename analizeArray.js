export const analizeArray = (array) => {
    if (!array) return undefined;
    // const average =
    //     array.reduce((sum, current) => sum + current, 0) / array.length;
    // const max = array.reduce(
    //     (mem, current) => (mem > current ? mem : current),
    //     -Infinity,
    // );
    // const min = array.reduce(
    //     (mem, current) => (mem < current ? mem : current),
    //     Infinity,
    // );
    // const analizedArray = {
    //     average: !array.length ? null : average,
    //     min: !array.length ? null : min,
    //     max: !array.length ? null : max,
    //     length: array.length,
    // };

    const analized = array.reduce(
        (mem, curr, index) => {
            mem.average = !mem.average ? curr : mem.average + curr;
            mem.min = !mem.min ? curr : mem.min < curr ? mem.min : curr;
            mem.max = !mem.max ? curr : mem.max > curr ? mem.max : curr;

            if (index === mem.length - 1 ) mem.average = mem.average / mem.length

            return mem;
        },
        {
            average: null,
            min: null,
            max: null,
            length: array.length,
        },
    );

    return analized;
};
