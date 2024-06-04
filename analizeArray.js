export const analizeArray = (array) => {
    if (!array) return undefined;

    return array.reduce(
        (mem, curr, index) => {
            mem.average = !mem.average ? curr : mem.average + curr;
            mem.min = !mem.min ? curr : mem.min < curr ? mem.min : curr;
            mem.max = !mem.max ? curr : mem.max > curr ? mem.max : curr;

            if (index === mem.length - 1)
                mem.average = mem.average / mem.length;

            return mem;
        },
        {
            average: null,
            min: null,
            max: null,
            length: array.length,
        },
    );
};
