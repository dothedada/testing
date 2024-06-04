const shiftCharacter = (char, shift = 0) => {
    if (!/[a-zA-Z]/.test(char)) return char;

    const totalLetters = 26;
    const baseASCII = /[a-z]/.test(char) ? 97 : 65;
    const newChar = (char.charCodeAt(0) - baseASCII + shift) % totalLetters + baseASCII;

    return String.fromCharCode(newChar);
};

export const cesarCypher = (str, shift) => {
    return str
        .split('')
        .map((char) => shiftCharacter(char, shift))
        .join('');
};
