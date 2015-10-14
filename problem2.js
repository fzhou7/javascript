var evenFibonacciSum = function() {
	var sum = 0;
	var arr = [1, 2];
	for (i = 2; i<=document.getElementById("problem_2_range").value; i++) {
		var fib = arr[i-2] + arr[i-1];
		arr.push(fib);
	}
	for (i=0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sum += arr[i];
		} else {
			continue;
		}
	}
	document.getElementById("answer2").innerHTML = sum;
}