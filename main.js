/*
let array = ["a", "b", "c", "d", "e", "f"];
console.log(array.length);
for (var i = 0; i < array.length; i++) {
    kerja terus
}
*/

// console.log(typeof "Halo namaku Neil");
// console.log(typeof "1");
// console.log(typeof ("1" + "1"));
// console.log(typeof null);
// console.log(true/false);

/*
undefined: variabel sudah ada, tapi tidak ada valuenya.
not defined: tidak ada variabel, tidak ada value.
tidak punya tapi dipanggil.
*/

/*
var: bisa dideclare berulang-ulang
let: declare hanya sekali, tapi manipulasi value bisa berulang-ulang
const: declare sekali, tidak bisa dimanipulasi
*/

// var a = "halo";
// var a = "tes";

// let a = 1;
// a = 2;

// const a = '1';

// let a;

/*
array: sekumpulan data menjadi 1
object: deskripsi sebuah data
*/

// array
// let arr1 = ["merah", "jingga", "kuning", "hijau", "biru"];
// [0, 1, 2, 3, dst]
// console.log(arr1[2]);

// object
// const person = {
//     name: "Neil",
//     umur: 23,
//     gender: "laki laki",
//     placeOfBirth: "Tangerang",
//     parent: [
//         "Jimmy",
//         "Indrawaty",
//     ],
// };
// console.log(person.parent[0]); ==> comment
// console.log(person.parent[1]);

// array of array
// const coordinate = [
//     [123, 456],
//     [789, 101112],
// ];

// array of objects
// const data = [
//     {
//         name: "Neil",
//         age: 23,
//     },
//     {
//         name: "Jimmy",
//         age: 50,
//     },
//     {
//         name: "john",
//         age: 80,
//     },
// ];
// console.log(data[2]);

// object of objects
// const books = {
//     collection1: {
//         author1: "john",
//         author2: "jane"
//     },
//     collection2: {
//         author1: "Bob",
//         author2: "Cindy",
//         author3: "Joe"
//     },
// };
// console.log(books.collection1.author2);

// object of array
// const cars = {
//     toyota: [
//         { name: "innova" },
//         { name: "kijang" },
//     ],
//     ford: [
//         { name: "mustang" },
//     ],
// };
// console.log(cars.toyota[1].name);

// https://jsonplaceholder.typicode.com/posts
// for (var inisial & index yg akan dimulai; kondisi: penambahan/pengurangan) {
//   code to be executed
// }
// for (var i = 0; i <= json.length; i++) {
//     console.log(json[i].title);
// }

// var a = 1;
// while (a < 10) {
//     console.log("hi");
//     a += 1;
// }

// var i = 0;
// do {
//     console.log(`say hi ${i}`);
//     i++;
// }
// while (i < 5);

// forEach loop for array || map loop
// const fruits = ["apple", "banana", "carrot", "tomato", "pineapple"];
// const bio = [
//     {
//         "name":"John",
//         "age":30,
//         "cars":["Ford", "BMW", "Fiat"],
//     },
//     {
//         "name":"Jane",
//         "age":31,
//         "cars":["Ford", "BMW", "Fiat"],
//     },
//     {
//         "name":"Bob",
//         "age":32,
//         "cars":["Ford", "BMW", "Fiat"],
//     },
// ];
// bio.forEach(i => {
//     console.log(i.name);
// });
// bio.map(i => {
//     console.log(i.name);
// });

// forIn khusus loop object
// const bio = {
//     name: "John",
//     age: 30,
//     cars: "Toyota",
// };
// for (var x in bio) {
//     console.log(x);
// }

// var num = 5;
// for (var i = 0; i < num; i++) {
//     if (i % 2 === 0) {
//         console.log(`${i} genap`);
//     } else if (i % 2 !== 0) {
//         console.log(`${i} ganjil`);
//     }
// }

// var variabel = 'halo';
// console.log(variabel + " ini variabel") // halo ini variabel
// console.log(variabel + "ini variabel") // haloini variabel

// console.log(2 != "2"); // false
// console.log(2 !== "3"); // true

// < kurang dari
// <= kurang dari sama dengan
// > lebih dari
// >= lebih dari sama dengan

// console.log(true || false); // false OR true
// console.log(true && false); // true AND false

function hoursToSeconds(hour) {
    return hour * 3600;
}
console.log(hoursToSeconds(2));
console.log(hoursToSeconds(10));
console.log(hoursToSeconds(24));
