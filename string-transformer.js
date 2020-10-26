function stringTransformer(str) {
    return str.split('').map(char => char === char.toLowerCase()?
    char.toUpperCase() : char.toLowerCase()).join('').split(' ').reverse().join(' ')
  }