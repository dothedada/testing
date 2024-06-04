export const capitalize = (arg) => {
    if (!arg) return null;
    return arg
        .split(' ')
        .map((str) => `${str[0].toUpperCase()}${str.slice(1)}`);
        .join(' ');
};
