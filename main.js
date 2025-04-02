let notaUser = window.prompt ("Ingresa tu nota del ultimo periodo");


if (notaUser >= 90){
    console.log("¡EXCELENTE!");
    alert("¡EXCELENTE!");

}else if(notaUser >=76){
    console.log("¡BIEN!");
    alert("¡BIEN!");

}else if(notaUser >= 61){
    console.log("SUFICIENTE");
    alert("SUFICIENTE");

}else if(notaUser <= 60){
    console.log("NO APROBATORIO")
    alert("NO APROBATORIO")
}