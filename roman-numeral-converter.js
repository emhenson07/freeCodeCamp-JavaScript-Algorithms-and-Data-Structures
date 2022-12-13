function convertToRoman(num) {
    let romans = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    let romanNumeral = "";

    for (let key in romans) {
        let a = Math.floor(num / romans[key]);
        romanNumeral += key.repeat(a);
        num -= romans[key] * a;
    }

    return romanNumeral;
}

console.log(convertToRoman(36));