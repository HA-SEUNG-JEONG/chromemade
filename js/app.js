// const much=document.getElementsByClassName("hello");

const h1=document.querySelector(".hello h1"); //hello가 클래스명이라는 것과 그 안의 h1을 명시해 주어야 함.
//querySelector는 반드시 첫번째 요소만 가져옴
//다 가져오고 싶다면 querySelectorAll을 쓰면 됨

// console.log(much); //array로 출력

// console.log(title);

function Onclick(){
    const clickedClass="clicked"
    if(h1.className===clickedClass){
        h1.className="";
    }else{
        h1.className=clickedClass;
        }
    //클래스 네임을 확인하여 active라는 클래스가 있으면 제거
    //없으면 다시 추가

    //raw-string은 작성 시 오류의 가능성이 있으므로
    //따로 변수로 만드는게 낫다.

    //위와 같이 작성하게 되면 이벤트 발생할때마다 클래스네임이 바뀌어버림
}
h1.addEventListener("click",Onclick);

