// function init() {
//   // let nama = "Fardan Nozami";
//   return function (nama) {
//     console.log(nama);
//   };
// }
// let panggilNama = init();
// panggilNama("Ajitama");

// function ucapkanSalam(waktu) {
//   return function (name) {
//     console.log(`Halo ${name}, Selamat ${waktu}, semoga harimu menyenangkan`);
//   };
// }

// let selamatPagi = ucapkanSalam("pagi");
// let selamatSiang = ucapkanSalam("siang");
// let selamatMalam = ucapkanSalam("malam");

// selamatPagi("Fardan");

let add = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
})();
console.log(add());
console.log(add());
console.log(add());
