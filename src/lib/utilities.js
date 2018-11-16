const pointMap = {
    a: 1, e: 1, i: 1, o: 1, u: 1, l: 1, n: 1, s: 1, t: 1, r: 1, d: 2, g: 2, b: 3, c: 3, m: 3, p: 3, f: 3, h: 3, v: 3, w: 3, y: 3, k: 5, j: 8, x: 8, q: 10, z: 10
};

export const scoreWord = word => {
    return word.split('').reduce((score, letter) => {
        score += pointMap[letter.toLowerCase()];
        return score;
            }, 0);
}

export const onlyTheseLetters = (query, word) => {
    const queryLetters = query.split('');
    const wordLetters = word.split('');
    let validWord = true;
    wordLetters.forEach(letter => {
        const indexOf = queryLetters.indexOf(letter);
        if (indexOf === -1) {
            validWord = false;
        } else {
            queryLetters.splice(indexOf, -1)
        }
    });
    return validWord;
}
