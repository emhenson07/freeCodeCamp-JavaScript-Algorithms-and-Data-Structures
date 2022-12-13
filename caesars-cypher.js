function rot13(str) {
    let decodedStr = '';
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
    for (let i = 0; i < str.length; i++) {
      let letter = str[i];
      let index = alphabet.indexOf(letter);
      if (index < 0) {
        decodedStr += letter;
      } else {
        let newIndex = (index + 13) % 26;
        decodedStr += alphabet[newIndex];
      }
    }
    return decodedStr;
  }