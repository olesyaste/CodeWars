const moreZeros = (s) => {
    return [...new Set(s.split('').filter(char => {
        const bin = char.charCodeAt(0).toString(2);
        return bin.split('0').length - 1 > bin.split('1').length - 1
    }))]
}