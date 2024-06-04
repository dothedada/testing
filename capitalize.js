export const capitalize = (arg) => {
    if (!arg) return null;
    return arg
        .split(' ')
        .map((str) => {
            return `${str[0].toUpperCase()}${str.slice(1)}`;
        })
        .join(' ');
};
