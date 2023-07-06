// 정부 데이터 포털 : 대구 의료기 판매소
function fetchDatagokr(){
    let url = 'https://apis.data.go.kr/3450000/medicalDevSalesPlasService/getMedicalDevSalesPlas?serviceKey=BoygPZjC27pxm92hSposjnSob2u36vziS1rzIzxkrL9QxmlhB0SMARwLfNlBE3wrE7nnw34zLmmv0a6amvW4xg%3D%3D&currentPage=1&perPage=10&SN=1';
    let request = fetch(url)
    .then((result) => {
        result.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((errorMeg) => {
        console.log(errorMeg);
    });
}

// 자동차 정보 상세 
// function fetchCarInforDetail(){
    let url = 'http://localhost:8080/selectDetail/CI002';
    url = 'http://localhost:8080/selectAll/CI002';
    let request = fetch(url)
    .then((response) => {
        response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((errorMeg) => {
        console.log(errorMeg);
    });
// }