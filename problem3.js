var largestPrimeFactor = function() {
	var input = document.getElementById("problem_3_input").value;
	var primeFactors = [];

	if (input % 2 === 0) {
		document.getElementById("answer3").innerHTML = input / 2;
	}

	//find all factors of input
	for(var i = 1; i<=input; i++) {
		if ((input % i === 0) && (isPrime(i))) {
			primeFactors.push(i);
		}
	}
	var result = max(primeFactors);
	document.getElementById("answer3").innerHTML = result;
};

//helper function that finds max number in array
var max = function (array) {
	var largest = array[0];
	for (var i = 1; i < array.length; i++) {
		if (array[i] > max) {
			largest = array[i];
		}
	}
	return largest;
};

//helper function that checks if number is prime
var isPrime = function(number) {
	var arr = [];
	for (var i=2; i<number; i++) {
		if (number % i === 0) {
			arr.push(i);
		}

		if (arr.length > 0) {
			return false;
		} else {
			return true;
		}
	}
};