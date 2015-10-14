var isEven = function(num) {
	if (num % 2 === 0) {
		return num;
	} else {
		return 0;
	}
}
var evenFibonacciSum = function() {
	sum = 0;
	input2 = document.getElementById("problem_2_range");
	for (i = 1; i<input2.value; i++) {
		sum += isEven(i);
	}
	document.getElementById("answer2").innerHTML = sum;
}