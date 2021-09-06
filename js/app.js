// const much=document.getElementsByClassName("hello");

const h1=document.querySelector(".hello h1"); //hello가 클래스명이라는 것과 그 안의 h1을 명시해 주어야 함.
//querySelector는 반드시 첫번째 요소만 가져옴
//다 가져오고 싶다면 querySelectorAll을 쓰면 됨

// console.log(much); //array로 출력

// console.log(title);

function Onclick(){
    if(h1.className==="active"){
        h1.className="";
    }else{
        h1.className="active"
    }
    //클래스 네임을 확인하여 active라는 클래스가 있으면 제거
    //없으면 다시 추가
}
h1.addEventListener("click",Onclick);

