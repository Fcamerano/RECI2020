/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados. 
nombre del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el nombre de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar() {
	let nombre;
	let lugar;
	let temporada;
	let personas;
	let respuesta;
	let contadorBariloche = 0;
	let contadorCataratas = 0;
	let contadorSalta = 0;
	let nombreConMasPasajeros;
	let mayorCantidadDePasajeros = 0;
	let acumuladorPersonas = 0;
	let viajesInvierno = 0;
	let promedioInvierno = 0;

	do {
		do {
    		nombre = prompt("Ingrese su nombre: ");
    	}while(!isNaN(nombre));

		do {
			lugar = prompt("Ingrese el destino: bariloche/cataratas/salta");
		} while (lugar != "bariloche" && lugar != "cataratas" && lugar != "salta");

		do {
			temporada = prompt("Ingrese la temporada: otoño/invierno/verano/primavera");
		} while (temporada != "otoño" && temporada != "invierno" && temporada != "verano" && temporada != "primavera");

		do {
		personas = parseInt(prompt("Ingrese la cantidad de personas: "));
		}while(isNaN(personas));

		switch (lugar) {
			case "bariloche":
				contadorBariloche++;
				break;

			case "cataratas":
				contadorCataratas++;
				break;

			case "salta":
				contadorSalta++;
				break;
		}

		if (mayorCantidadDePasajeros < personas) {
			mayorCantidadDePasajeros = personas;
			nombreConMasPasajeros = nombre;
		}

		if (temporada == "invierno") {
			acumuladorPersonas = acumuladorPersonas + personas;
			viajesInvierno++;
		}

		respuesta = prompt("Quiere ingresar otra? si/no");

	} while (respuesta == "si");


	promedioInvierno = acumuladorPersonas / viajesInvierno;


	// A)
	if (contadorBariloche > contadorCataratas && contadorBariloche > contadorSalta) {
		console.log("El lugar mas visitado es Bariloche");
	}
	else if (contadorCataratas > contadorBariloche && contadorCataratas > contadorSalta) {
		console.log("El lugar mas visitado es Cataratas");
	}
	else {
		console.log("El destino mas visitado es Salta");
	}

	// B)
	
	console.log("El nombre del titular con mas pasajeros es: " + nombreConMasPasajeros);

	// C)
	console.log("El promedio de personas que viajan en invierno es de: " + promedioInvierno);
}
