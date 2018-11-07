/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
// console.log(data);

var seat = Object.keys(data);
console.log(Object.keys(data));//sedes

window.addEventListener ('load', function(){
var selectSeat = document.getElementById('seat');

selectSeat.addEventListener ('click', function() {
    var menu = document.createElement('div');

    for (var i = 0; i < seat.length; i++) {
        var select = document.createElement('ul');
        var selectName = document.createElement('li');
        selectName.innerHTML = seat[i];
        selectName.id = seat[i];
        select.appendChild(selectName);

        var cohort = Object.keys(data[seat[i]]);
        console.log(Object.keys(data[seat[i]]));

        
        
    }
})

});

// console.table(data);


