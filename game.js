var number = 7
// var x = prompt("Try to guess the number: ");

while(number != x){

	var x = prompt("Try to guess the number: ");

	if (x < number) {
		alert("try with bigger one! ");
		continue;
	}
	else if (x > number) {
		alert("Try with smaller one! ");
		continue;
	}
	else alert("Good Job!");

}



// for (var i = -10; i <=19; i++) {
// 	console.log(i)
// }

// var broj = -10
// while (broj < 20) {
// 	console.log(broj)
// 	broj++
// }