let colores = [
    "Rojo", 
    "Azul", 
    "Verde", 
    "Amarillo", 
    "Naranja", 
    "Violeta", 
    "Rosa", 
    "Negro", 
    "Blanco", 
    "Gris"
  ];
  
  console.log("Tercer elemento: " + colores[2]); 
  console.log("Cuarto elemento: " + colores[3]); 
  console.log("Séptimo elemento: " + colores[6]); 
  
  colores[1] = "Cian"; 
  colores[2] = "Lima";
  
  console.log("Array modificado:", colores);
  
  colores.push("Marrón"); 
  
  console.log("Array después de añadir un nuevo elemento:", colores);
  
  console.log("La longitud del array es:", colores.length);
  
  colores.sort(); 
  
  console.log("Array ordenado alfabéticamente:", colores);
  
  console.log("Recorriendo el array con un bucle FOR:");
  for (let i = 0; i < colores.length; i++) {
    console.log(colores[i]);
  }