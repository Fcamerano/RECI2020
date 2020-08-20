/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más liviano de los sólidos
*/
function mostrar()
{
  let marca;
  let precio;
  let peso;
  let tipo;
  let respuesta;
  let acumuladorPeso = 0;
  let liquidoMasCaro = 0;
  let marcaLiquidoMasCaro;
  let flagSolido = 0;
  let solidoMasLiviano;
  let marcaSolidoMasLiviano;

  do
  {
    do
    {
    marca = prompt("Ingrese la marca:");
    }while(!isNaN(marca));
    
    do{
    precio = parseInt(prompt("Ingrese el precio:"));
    }while(isNaN(precio) || precio < 0);

    do{
			peso = parseInt(prompt("Ingrese su peso: "));
		}while(isNaN(peso) || (peso < 0 || peso > 500));

    do
		{
			tipo = prompt("Ingrese el tipo : solido/liquido");
		}while(tipo != "solido" && tipo != "liquido");

    acumuladorPeso = acumuladorPeso + peso; 

    switch(tipo)
		{
			case "liquido":
        if(precio > liquidoMasCaro)
				{
          liquidoMasCaro = precio;
          marcaLiquidoMasCaro = marca;
        }
        break;
			case "solido":
        if(flagSolido == 0 || solidoMasLiviano > peso)
				{
					solidoMasLiviano = peso;
					marcaSolidoMasLiviano = marca;
					flagSolido = 1;
				}
        break;
    }

    respuesta = prompt("Quiere seguir ingresando? si/no");
  }while(respuesta == "si");


  console.log("El peso total es: " + acumuladorPeso); // A)
  console.log("La marca mas cara de los liquidos es: " + marcaLiquidoMasCaro); // B)
  console.log("La marca mas liviana de los solidos es: " + marcaSolidoMasLiviano); // C)
}