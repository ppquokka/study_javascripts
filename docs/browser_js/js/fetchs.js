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
function fetchCarInforDetail(){
    let url = 'http://127.0.0.1:8080/selectDetail/CI002';
    // url = 'http://localhost:8080/selectAll/CI002';
    let request = fetch(url)
    // 패치를 통해 값의 뭉치가 날아온다. 
    // 이걸 나는 '변수이름result 마음대로 설정 가능' 으로 사용할거야!
    // 
    .then((result) => {
        return result.json();
    })
    // 위가 펑션
    // json으로 리턴 된 값을 data로 사용
    .then((data) => {
        console.log(data);
    })
    .catch((errorMeg) => {
        console.log(errorMeg);
    });
}


// 자동차 정보 수정
function fetchCarInforUpdate(){
    // postman의 put에서 url, body, header
    // 192.168.0.41:8080/update
    // body -
    // {
    //     "CAR_NAME": "코나",
    //     "CAR_INFOR_ID": "CAR-02"
    // }
    // headers - key : value
    // Content-Type : application/json
    let url = 'http://127.0.0.1:8080/update';
    let option = {
        method : "PUT",
        headers : {"Content-Type" : "application/json"}, // 키:밸류
        body : JSON.stringify ({
            "CAR_NAME": "코코랩",
            "CAR_INFOR_ID": "CI002"
        })
    }
    let request = fetch(url, option)
    .then((result) => {
        return result.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((errorMeg) => {
        console.log(errorMeg);
    });
}