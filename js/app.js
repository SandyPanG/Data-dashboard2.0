/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
// console.log(data);

let enter = document.getElementById('enter-button');
console.log(enter);

let seat = document.getElementById('seat');

let seatChange = seat.addEventListener('change', function(){
	let seatChange= seat.options[seat.selectedIndex].value;

	console.log(seatChange);
	let getGen = (seatChange);


	// datos por generacion
	getGen =  (seat) => {
		console.log(data[seat]);
	};
});