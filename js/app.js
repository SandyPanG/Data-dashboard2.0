/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
// console.log(data);

var seat = Object.keys(data);
console.log(Object.keys(data));//sedes

// console.table(data);

for (var i = 0; i < seat.length; i++) {
    // data[i].students[2];
    console.log(Object.keys(data[seat[i]]));
    
}

