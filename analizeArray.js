export const analizeArray = (array) => {
    if (!array) return undefined;

    return array.reduce(
        (mem, curr, index) => {
            mem.average = index !== mem.length - 1 
                ? (mem.average || 0 ) + curr 
                : (mem.average + curr) / mem.length;
            mem.min = Math.min( mem.min || curr, curr );
            mem.max = Math.max( mem.max || curr, curr );

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
