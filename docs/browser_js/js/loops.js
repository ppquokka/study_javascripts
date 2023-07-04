// // string = String
// // 숫자 = Number
// // ArrayList = Array []
// // HashMap = Object  {}

// // array 선언. 얘를 부여하는 순간 animals는 array 성격을 갖는 class가 됨
// let animals = ["dog", "cat", "bird", "fish", "lizard"];

// // 콘솔에서 보여지는 것
// console.log(`Done`);   

// for (let i=0; i<animals.length;i=i+1)
//     console.log(`${i+1} : ${animals[i]}`);

// // for (String  animal : animals)
// for(let animal of animals){
//     console.log(`${animal}`);
// }



// learning after object 
const animals_obj = [
    { name: "dog", species: "canine" },
    { name: "cat", species: "feline" },
    { name: "bird", species: "avian" },
    { name: "fish", species: "aquatic" },
    { name: "lizard", species: "reptile" },
];

let outHtml = ``;
for (let animal_hashmap of animals_obj) {
    // for문이 도는 상태에서 찍기
    console.log(`name : ${animal_hashmap.name}, species : ${animal_hashmap['species']}`);
    // 증가하면서 찍기???
    outHtml = `${outHtml}<div> <tr><td>name : ${animal_hashmap.name}, 
                                   species : ${animal_hashmap['species']}</tr></td> </div>`;
}
console.log(outHtml);

// browser의 자원 중 docs(document)자원
let loops_source = document.querySelector('#loops');

// 콘솔 입력값 및 결과값
// (입력)loops_source
//    <div id=​"loops">​</div>​
// (입력)loops_source.innerHTML = outHtml
//   '<div>name : dog, species : canine</div>
//    <div>name : cat, species : feline</div>
//    <div>name : bird, species : avian</div>
//    <div>name : fish, species : aquatic</div>
//    <div>name : lizard, species : reptile</div>'


// loops_source
// <div id=​"loops">​inner text​</div>​
loops_source.innerHTML = outHtml