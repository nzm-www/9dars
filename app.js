// 110
// function kattaHarfSoniToplash(string) {
//   let kattaHarfSoni = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] >= "A" && string[i] <= "Z") {
//       kattaHarfSoni++;
//     }
//   }
//   return kattaHarfSoni;
// }
// console.log(kattaHarfSoniToplash("2dsgrdrgrtgr2"));
// console.log(kattaHarfSoniToplash("22dfrfrgrgrd"));

// 109
// function narissistikSon(son) {
//   let sonString = son.toString();
//   let uzunlik = sonString.length;
//   let natija = 0;
//   for (let i = 0; i < uzunlik; i++) {
//     natija += Math.pow(parseInt(sonString[i]), uzunlik);
//   }
//   return natija === son;
// }
// console.log(narissistikSon(153));
// console.log(narissistikSon(370));
// console.log(narissistikSon(1652));

//108
// function randomSon(son1, son2) {
//   return (
//     Math.floor(
//       Math.random() * (Math.max(son1, son2) - Math.min(son1, son2) + 1)
//     ) + Math.min(son1, son2)
//   );
// }

// console.log(randomSon(5, 9));
// console.log(randomSon(5, 9));
// console.log(randomSon(5, 9));

// 107
// function maksimumSon(son) {

//   let sonString = son.toString();

//   let kattaRaqam = sonString
//     .split("")
//     .sort((a, b) => b - a)
//     .join("");

//   if (sonString[0] === "0") {
//     kattaRaqam = "0" + kattaRaqam.replace(/^0+/, "");
//   }

//   return parseInt(kattaRaqam);
// }

// console.log(maksimumSon(123));
// console.log(maksimumSon("105"));
// console.log(maksimumSon(999));

// 106
// function raqamSoni(son) {
//   let sonString = son.toString();
//   return sonString.length;
// }
// console.log(raqamSoni(123));

// 104
// function yangiMassiv(massiv) {
//   let yangiMassiv = [];
//  th; i++) {
//     yangiMassiv.push(massiv[i] + i);
//   }
//   return yangiMassiv;
// }
// console.log(yangiMassiv([0, 0, 0, 0, 0]));

// 103
// function kvadratOxirgi(son) {
//   let kvadrat = son * son;
//   let sonString = son.toString();
//   let kvadratString = kvadrat.toString();
//   return kvadratString.endsWith(sonString);
// }
// console.log(kvadratOxirgi(1));
