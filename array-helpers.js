Array.prototype.square = function () {
    return this.map((num) => {
        return num ** 2;
    });
}
Array.prototype.cube = function () {
    return this.map((num) => {
        return num ** 3;
    });
}
Array.prototype.sum = function () {
    return this.reduce((a, b) => {
        return a + b;
    }, 0);
}

Array.prototype.average = function () {
    return this.sum() / this.length;
}

Array.prototype.even = function () {
    return this.filter((num) => {
        return num % 2 === 0;
    });
}
Array.prototype.odd = function () {
    return this.filter((num) => {
        return num % 2 !== 0;
    });
}

// numbers.square();  // must return [1, 4, 9, 16, 25]
// numbers.cube();    // must return [1, 8, 27, 64, 125]
// numbers.average(); // must return 3
// numbers.sum();     // must return 15
// numbers.even();    // must return [2, 4]
// numbers.odd();     // must return [1, 3, 5]