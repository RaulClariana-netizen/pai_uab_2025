//19.1.- Crea una funció que rebi un nombre i retorni aquest nombre elevat al quadrat.
//function cuadrado(num) {
//    return num=num**2;
//}

//let nombre = parseInt(prompt("Ingrese un número para calcular su cuadrado:"));
//let resultat = cuadrado(nombre);
//console.log("El cuadrado de " + nombre + " es: " + resultat);

//19.2.- Crea una funció que rebi un nombre i retorni aquest nombre elevat al cub.
//function cuadrado(num) {
//    return num=num**3;
//}

//let nombre = parseInt(prompt("Ingrese un número para calcular su cuadrado:"));
//let resultat = cuadrado(nombre);
//console.log("El cuadrado de " + nombre + " es: " + resultat);

//19.3.- Crea una funció que rebi dos nombres i retorni el primer nombre elevat al segon. 
//function elevat (num1,num2) {
//    return num1**num2;
//}

//let numero1 = parseInt(prompt("Ingrese un numero"));
//let numero2 = parseInt(prompt("Ingrese un segundo numero"));
//let resultat = elevat(numero1,numero2);
//console.log("El resultat d'elevar " + numero1 + " a " + numero2 " és " + resultat);

//19.4.- Crea una funció que donat un valor en milles retorni la seva equivalència en metros. 
//function millas(milla){
//    return milla*1852;
//}
//let num = parseInt(prompt("Introdueix el nombre de milles"));
//let resultat = millas(num);
//console.log("L'equivalència de " + num + " milles son: " + resultat + " metres.");

//19.5.- Crea una funció que, donat un nombre del 0 al 10 retorni una cadena de caràcters amb el nom del nombre donat
//function nomNumero(num){
    switch(num){
        case 0:
            return "Zero";
        case 1:
            return "Un";
        case 2:
            return "Dos";
        case 3:
            return "Tres"; 
        case 4:
            return "Quatre";
        case 5:
            return "Cinc";
        case 6:
            return "Sis";
        case 7:
            return "Set";
        case 8:
            return "Vuit";
        case 9:
            return "Nou";
        case 10:
            return "Deu";
        default:
            return "Número fora de rang";
    } 
//} 

//let numero = parseInt(prompt("Introdueix un numero entre 0 i 10: "));
//let resultat = nomNumero(numero);
//console.log(resultat);

//19.6.- Crea una funció que, rebut un nombre de segons retorni una cadena de caràcters on es digui quantes hores minuts i segons són. 
//let minuts;
//let hores;
//let resta;
//function segons(segons){
//    if (segons<60) {
//        return "Son " + segons + " segons.";
//    }else if (segons>60 && segons<3600){
//        minuts = Math.trunc(segons/60);
//        return "Son " + minuts + " minuts i " + segons%60 + " segons.";
//    }else if (segons>3600){
//        hores = Math.trunc(segons/3600);
//        resta = segons%3600;
//        minuts = Math.trunc(resta/60);
//        return "Son " + hores + " hores, " + minuts + " minuts i " + resta%60 + "segons.";
//    }
//}
//let temps = parseInt(prompt("Introdueix el temps en segons"));
//let resultat = segons(temps);
//console.log(resultat);

//19.7.- Crea una funció que, donades les hores treballades en una setmana i el salari brut per hora, calculi el seu salari. Si les hores treballades són més de 40, aquestes hores sobreres, es pagaran un 50% més cares que una hora normal.

//function nominaSetmanal(horesSetmana, salariBrut){
//    let horesExtra;
//    let preuHoraExtra;
//    let salariTotal;
//    if (horesSetmana>40) {
//        horesExtra = horesSetmana - 40;
//        preuHoraExtra = salariBrut*1.5;
  //      salariTotal = horesExtra*preuHoraExtra + 40*salariBrut;
//        return "Aquesta setmana has guanyat: " + salariTotal + "€."; 
//    } else if (horesSetmana<=40) {
//        salariTotal = horesSetmana*salariBrut;
//        return "Aquesta setmana has guanyat: " + salariTotal + "€.";
//    } else {
//        return "Algun dels valors introduïts es incorrecte.";
//    }
//}

//let horesTreballades = parseInt(prompt("Introdueix el nombre d'hores que has traballat aquesta setmana"));
//let preuPerHora = parseInt(prompt("Introdueix quant et paguen per cada hora (bruts)"));
//let resultat = nominaSetmanal(horesTreballades, preuPerHora);
//console.log(resultat);

//19.9.- La funció Math.random() de JavaScript retorna un valor dins del rang [0,1) (0 inclòs, 1no inclòs). La funció Math.floor(valor) ens retorna valor eliminant els decimals. Fent serviraquestes funcions, crear una funció que donats dos valors min i max ens calculi un nombrealeatori entre min i max, ambdòs inclosos
//function numAleatori(n1, n2){
//    let aleatori;
//    let valorTruncat;
 //   aleatori = Math.random() * (n2 - n1 + 1);
//    valorTruncat = Math.floor(aleatori);
//    return valorTruncat;
//}

//let min = parseInt(prompt("introdueix un valor minim. "));
//let max = parseInt(prompt("introdueix un valor maxim. "));
//let resultat = numAleatori(min, max);
//console.log(resultat);

//19.10.- Crea una funció en la que donat un text, indiqui si és o no un palíndrom.
// function palindrom(text){
//     for (let i=0; i<text.length/2; i++){
//         if (text[i]!==text[text.length-1-i]){
//         return "No és un palindrom";
//         }
//     }return "És un palindrom";
// }

// let text = prompt("Introdueix un text");
// let resultat = palindrom(text);
// console.log(resultat);

//19.11.- Crea una funció que rebi una cadena de caràcters i retorni aquesta cadena codificada segons les següents regles:
// function delReves(text){
//     let resultado = "";
//     for (let i=text.length-1; i>=0; i--){
//         let letra = text[i];
//         if (letra=="a"){
//             letra= "1";
//         } else if (letra=="e"){
//             letra="2";
//         }else if (letra =="i"){
//             letra="3";
//         }else if (letra =="o"){
//             letra="4";
//         }else if (letra =="u"){
//             letra="5";
//         }
//         resultado = resultado + letra;
//     }return resultado;
// }

// let frase = prompt("Introduce una frase: ");
// let resposta = delReves(frase);
// console.log(resposta);

//19.12.- Crea una funció que rep els tres paràmetres següents: 2 nombres i un dels següents valors "+", "-", "*", "/", "%", "pot" i retorni el resultat de l'operació realitzada. Fes servir la instrucció switch.
// function calculadora(n1, n2, operation){
//     switch (operation){
//         case "+":
//             return "El resultat de sumar " + n1 + " i " + n2 + " és " + (n1+n2);
//         case "-":
//             if (n1>n2){
//                 return "El resultat de restar " + n1 + " i " + n2 + " és " + (n1-n2);
//             } else {
//                return "El resultat de restar " + n2 + " i " + n1 + " és " + (n2-n1);
//             }
//         case "*":
//             return "El resultat de multiplicar " + n1 + " i " + n2 + " és " + (n1*n2);
//         case "/":
//             if (n1>n2 && n2!==0){
//                 return "El resultat de dividir " + n1 + " entre " + n2 + " és " + (n1/n2);
//             } else {
//                 return "El resultat de dividir " + n2 + " entre " + n1 + " és " + (n2/n1);
//             }   
//         case "%":
//             if (n1<n2 && n2!==0){
//                 return n1 + " representa él " + (n1/n2*100) + "% de " + n2;
//             } else {
//                 return n2 + " representa él " + (n2/n1*100) + "% de " + n1;
//             }   
//         case "pot":
//             return "El resultat d'elevar " + n1 + " a " + n2 + " és " + (n1**n2);
//     }
// }
// let num1 = parseInt(prompt("Introduceix un numero major o igual a zero:"));
// let num2 = parseInt(prompt("Introduceix un numero major o igual a zero:"));
// let calcul = prompt("Introdueix l'operació que vols fer amb aquests 2 numeros (+, -, *, /, %, pot):");
// let resultat = calculadora(num1, num2, calcul);
// console.log(resultat);

// 19.13.- Crea una funció que rebi un nombre i retorni cert si aquest nombre és primer o fals
// en cas contrari. Per saber si un nombre és primer cal mirar si és divisible per algun dels
// nombres més petits que ell (menys l’u). Per exemple. Per saber si 11 és primer, miro si el
// residu de dividir 11 entre 2, 3, 4, 5, 6, 7, 8, 9 o 10 és 0. Si és 0 en algun cas, no és primer.
// (Nota: En realitat només cal provar si és divisible els n/2 nombres més petits que ell).
function primer(num){
    if (num===0 || num===1){
            return "Fals";
    }
    for (let i = 2; i<num/2; i++){
        if(num%i==0){
            return "Fals";
        } 
    }return "Cert";
}

let numero = parseInt(Prompt("Introduce un numero y comprobaremos si es primo: "));
let resultado = primer(numero);
console.log(resultado);