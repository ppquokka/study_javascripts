// if () {

// } else if () {

// } else (

// )
let first = 1;
let second = 4;

if (first < 10) {
    console.log("Mano");
} else if (first > second) {
    console.log(`${first} > ${second}`);
} else {
    console.log(`second : ${second}`);
}

// == vs ===
let third = `4`;
first = 4;

// third == first
// true
// third === first
// false

// 삼항 연산자 (삼항 if문)
// if () {

// } else {

// }
// 변수 = (if문) ? 참일때 : 거짓일 때 ;

let result = (third === first) ? `true` : `false`;