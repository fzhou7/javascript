var evenFibonacciSum = function() {
	var sum = 0;
	var first = 1;
	var second = 1;
	var temp = 0;
	var input = document.getElementById("problem_2_range").value;
	
	while (first <= input) {
		if (first % 2 === 0) {
			sum += first;
		}

		temp = first;
		first = second;
		second += temp;
	}

	document.getElementById("answer2").innerHTML = sum;
};