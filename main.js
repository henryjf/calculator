// * When I click the "calculate" button, the values in the
 // first box should be added, subtracted, multiplied or divided by the value 
 // in the second box.  You'll need to convert the values to a number 
 // (think `Number(value)`) in order to process them.
// * Your output should be injected into the answer element



//declare var;
var num1, num2, button, answer;

// elements;
num1 = document.querySelector('#num_one');
num2 = document.querySelector('#num_two');
button = document.querySelector('#calculateBtn');
answer = document.querySelector('#answer');
 
 // functions 1 for math ; 
function add() {
 	// console.log(Number(num1.value) + Number(num2.value));
 	return (Number(num1.value) + Number(num2.value));
 }

 // funtion 2 show calculation;
function print() {
	answer.textContent = add();
}

 // click on a button . use listener;
button.addEventListener('click', print);