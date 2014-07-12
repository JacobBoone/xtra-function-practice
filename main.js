$(document).on('ready', function() {
  
// var tripleFive = function(){
 
// 	for (var i = 0; i < 2; i++) {
// 		console.log('Five!')
// 	};

// }


var tripleFive = function() {
	for(var i=0; i<3; i++) {
		console.log('Five!');
	}
};


tripleFive()






// 2


var lastLetter = function(str) {
	return str[str.length-1];
};


// var lastLetter = function(word){
// 	return word[word.length-1];
// }


console.log(lastLetter('hello')) 	
console.log(lastLetter('you suck')) 






// 3.


var square =function(number){
	return	number* number


}

console.log(square(3))
console.log(square(500))




// 4.


var negate = function(number){
	return -1 * number


}


console.log(negate(5))
console.log(negate(-59))


// 5.

var toArray = function(one, two, three){
	return [one, two, three]

}



console.log(toArray(1, 4, 5))

console.log(toArray(8, 9, 10))





// 6.


var startsWithA = function(entry){

	if (entry[0] === "a"){
		return true
	}

	else{
		return false
	}
}

console.log(startsWithA('aardvark'))

console.log(startsWithA('beaver'))

console.log(startsWithA('xeaver'))




// 7.

var excite = function(x){

	return x +"!!!"

}


console.log(excite('yes'))

console.log(excite('no'))



// 8.


var sun = function(sunword){

	return sunword.indexOf('sun') >= 0;
			
}



console.log(sun('sundries'))


console.log(sun('bundries'))



//  9.

var tiny = function(y){
	if (y < 1 && y > 0){
		return true
	}
	else{
		return false
	}
}

console.log(tiny(0.3))
console.log(tiny(3))
console.log(tiny(0.9))
console.log(tiny(-9))


// 10.


// var getSeconds = function(s){


// }

//  the below should work but is not (from solutions)
// var getSeconds = function(timespan) {
// 	var minutesString = timespan.substring(0,2);
// 	var secondsString = timespan.substring(3, 2);
// 	var minutes = parseInt(minutesString);
// 	var seconds = parseInt(secondsString);
// 	return minutes * 60 + seconds;
// }


// console.log(getSeconds('01:30'))



//  from Problem set 1
// 1.

var letterCapitalize = function(cap){
	return cap.toUppercase(cap[0]);

}


console.log(letterCapitalize('junk'))















});