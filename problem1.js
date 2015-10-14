var isDivisible = function(num) {
	if ((num % 3 === 0) || (num % 5 === 0)) {
		return num;
	} else return 0;
};

var sum = function() {
	var sum = 0;
	var input = document.getElementById("problem_1_range");
	var answer1 = document.getElementById("answer1");
	for (i = 1; i < input.value; i++) {
		sum += isDivisible(i);
	}

	document.getElementById("answer1").innerHTML = sum;
};