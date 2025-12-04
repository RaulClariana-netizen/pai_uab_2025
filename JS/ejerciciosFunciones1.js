//Exercici 3.1

// function parellImparell(num) {
 //    if (num % 2 === 0) {
   //      return num + " és un número parell.";
 //    } else {
 //        return num + " és un número imparell.";
 //    }   
// }
// let numero = parseInt(prompt("Introdueix un nombre enter:"));
// let resultat = parellImparell(numero);
// console.log(resultat);

//Exercici 3.2

// function anyTraspas(any){
//     if (any%400===0){
 //        return any + "És un any de traspàs";
 //    } else if (any%100===0 && any%400!==0) {
//         return any + "No és un any de traspàs";
 //   } else if (any%4===0) {
  //      return any + "És un any de traspàs";
//    } else {
//        return any + "No és un any de traspàs";
  //  }
// }
// let consulta = parseInt(prompt("Introdueix un any: "));
// resultat = anyTraspas(consulta);
// console.log(resultat);

//Exercici 3.3

//function calculo(num) {
//  let suma = 0;
//    for (let i = 1; i <= num; i++) {
//      suma = suma + 1/i**2;
//  }  return suma;
//}
//let N = parseInt(prompt("Introduce un numero mayo que cero"));
//let resultat = calculo(N);
//console.log(resultat);

//Exercici 3.4

//function notaFinal (n1, n2, n3) {
//  let sumaNota;
//  if (n1>=5){
//    sumaNota = n1*0.2 + n2*0.4 + n3*0.4;
//    if (sumaNota < 5) {
//      return sumaNota + " La teva nota és una D";
//    } else if (sumaNota>=5 && sumaNota<6.5){
//      return sumaNota + " La teva nota és una C";
//    } else if (sumaNota>=6.5 && sumaNota<8){
//      return sumaNota + " La teva nota és una B";
//    }else if (sumaNota>=8 && sumaNota<10){
//      return sumaNota + " La teva nota és una A";
//    } else if (sumaNota==10){
//      return sumaNota + " La teva nota és una H";
//    }
//
//  } else if (n1<5){
//    sumaNota = n2*0.4 + n3*0.6;
//    if (sumaNota < 5) {
//      return sumaNota + " La teva nota és una D";
//    } else if (sumaNota>=5 && sumaNota<6.5){
//      return sumaNota + " La teva nota és una C";
//    } else if (sumaNota>=6.5 && sumaNota<8){
//      return sumaNota + " La teva nota és una B";
//    }else if (sumaNota>=8 && sumaNota<10){
//      return sumaNota + " La teva nota és una A";
//    } else if (sumaNota==10){
//      return sumaNota + " La teva nota és una H";
//    }
//  }
// }
// let NOTA_AC = parseInt(prompt("Introdueix la nota d'avaluació continua"));
// let NOTA_PRACT = parseInt(prompt("INtrodueix la nota de practiques"));
// let NOTA_EXAMEN = parseInt(prompt("Introdueix la nota d'examen"));

// let resultat = notaFinal (NOTA_AC, NOTA_PRACT, NOTA_EXAMEN);
// console.log(resultat);

// Exercici 3.5

//function palabraLength(arr) {
//  let suma = 0;
//arr = arr.split(/[, ]+/);
//    for (let i = 0; i<arr.length; i++) {
//      if (arr[i].length == 5){
//      suma = suma+1;
//     }
//    } return suma;
//  }
//let fraseTwitter = prompt("Introdueix la teva frase de Tiwtter");
//let resultat = palabraLength(fraseTwitter);
//console.log(resultat);

// Exercici 3.6

//function palabraLength(arr, length) {
//  let suma = 0;
//  arr = arr.split(/[, ]+/);
//    for (let i = 0; i<arr.length; i++) {
//      if (arr[i].length == length){
//      suma = suma+1;
//    }
//   } return suma;
//  }
//let fraseTwitter = prompt("Introdueix la teva frase de Tiwtter");
//let longitudPalabra = parseInt(prompt("Cuantes lletres han de tenir les paraules?"));
//let resultat = palabraLength(fraseTwitter, longitudPalabra);
//console.log(resultat);
