//  (과제)/carInfor/list.html   
const carInfor_obj = [
    { YEAR: "2020", CAR_NAME: "소나타", CAR_INFOR_ID: "CI001", COMPANY_ID: "C001" },
    { YEAR: "2021", CAR_NAME: "코나", CAR_INFOR_ID: "CI002", COMPANY_ID: "C002" },
    { YEAR: "2019", CAR_NAME: "SM6", CAR_INFOR_ID: "CI003", COMPANY_ID: "C003" },
    { YEAR: "2022", CAR_NAME: "3 시리즈", CAR_INFOR_ID: "CI004", COMPANY_ID: "C004" },
    { YEAR: "2020", CAR_NAME: "캠리", CAR_INFOR_ID: "CI005", COMPANY_ID: "C005" },
];

let outHtml = ``;
for (let carInfor_hashmap of carInfor_obj) {
    console.log(`YEAR : ${carInfor_hashmap['YEAR']}, 
                CAR_NAME : ${carInfor_hashmap['CAR_NAME']},
                CAR_INFOR_ID : ${carInfor_hashmap['CAR_INFOR_ID']},
                COMPANY_ID : ${carInfor_hashmap['COMPANY_ID']}`);


    outHtml = `${outHtml}<tr><td>${carInfor_hashmap['YEAR']}</td><td>${carInfor_hashmap['CAR_NAME']}</td>
                <td>${carInfor_hashmap['CAR_INFOR_ID']}</td><td>${carInfor_hashmap['COMPANY_ID']}</tr>`;
}
console.log(outHtml);

// browser의 자원 중 docs(document)자원
let CarInfor_loops = document.querySelector('#CarInfor_loops');
CarInfor_loops.innerHTML = outHtml;