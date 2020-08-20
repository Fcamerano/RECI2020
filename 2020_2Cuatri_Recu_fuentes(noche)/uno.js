/*
1)De 5  personas que ingresan al hospital se deben tomar y
validar los siguientes datos.
nombre , temperatura, sexo y edad.
a)informar la cantidad de personas de cada sexo.
b)la edad promedio en total
c)la mujer con más temperatura(si la hay)
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	let i;
	let nombre;
	let temperatura;
	let edad;
	let sexo;
	let contadorMujeres = 0;
	let contadorHombres = 0;
	let acumuladorEdad = 0;
	let promedioEdad = 0;
	let mayorTemperatura = 0;
	let mujerConMasTemperatura = 0;


	for(i=0 ; i<5 ; i++)
	{
		do
    	{
    		nombre = prompt("Ingrese nombre: ");
    	}while(!isNaN(nombre));
		
		do{
			temperatura = parseInt(prompt("Ingrese su temperatura: "));
		}while(temperatura <30 && temperatura > 50);

		do {
			edad = parseInt(prompt("Ingrese la edad: "));
		} while (isNaN(edad) && edad>0 && edad<120);

		do {
			sexo = prompt("Ingrese su sexo: f/m");
		} while (sexo != "f" && sexo != "m");

		if (sexo == "f")
		{
			contadorMujeres++;
		}
		else
		{
			contadorHombres++;
		}

		if(mayorTemperatura < temperatura && sexo == "f"){
			mayorTemperatura = temperatura;
			mujerConMasTemperatura = nombre;
	    }
		acumuladorEdad = acumuladorEdad + edad;
	}

	promedioEdad = acumuladorEdad / 5;

	console.log("La cantidad de mujeres son: " + contadorMujeres + " y la cantidad de hombres son: " + contadorHombres);
	console.log("El promedio de edad es: " + promedioEdad);
	console.log("La mujer con mas temperatura es: " + mujerConMasTemperatura);
}