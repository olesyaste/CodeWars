function min(xx) {
	let arr = Array.from(xx);
	if (arr.length === 1) return arr[0];
	if (typeof arr[0] === 'string') {
		return arr.sort()[0];
	}
	if (typeof arr[0] === 'number') {
		let min = null;
		for (let i = 0; i < arr.length; i++) {
			let item = arr[i];
			if (min === null || min > item) min = item;
		}
		return min;
	}
	return arr.sort(function(a, b) {
		return a.getFullYear() > b.getFullYear();
	})[0];
}

function max(xx) {
	// or let arr = [...xx]
	let arr = Array.from(xx);
	if (arr.length === 1) return arr[0];
	if (typeof arr[0] === 'string') {
		return arr.sort()[arr.length - 1];
	}
	if (typeof arr[0] === 'number') {
		if (arr.length < 500)
			return arr.sort(function(a, b) {
				return a - b;
			})[arr.length - 1];
		let max = null;
		for (let i = 0; i < arr.length; i++) {
			let item = arr[i];
			if (max === null || max < item) max = item;
		}
		return max;
	}
	return arr.sort(function(a, b) {
		return a.getFullYear() < b.getFullYear();
	})[0];
}



max([ 5, 3, 1, 2, 4 ])
min([ 5, 3, 1, 2, 4 ])
max("kjiml")
min(['e', 'b', 'c', 'a', 'd'])