const shiftCharacter = (char, shift = 0) => {
    if (!/[a-zA-Z]/.test(char)) return char;

    const lettersInAlphabet = 26;
    const baseLetter = /[a-z]/.test(char) ? 97 : 65;
    const newCharValue =
        (char.charCodeAt(0) - baseLetter + shift) % lettersInAlphabet + baseLetter;

    return String.fromCharCode(newCharValue);
};

export const cesarCypher = (str, shift) => {
    return str
        .split('')
        .map((char) => shiftCharacter(char, shift))
        .join('');
};
