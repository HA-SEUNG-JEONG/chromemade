const loginForm=document.querySelector("#login-form");
const loginInput=document.querySelector("#login-form input");

//submit 감지해야지
//submit은 엔터나 버튼을 클릭할 때 발생
function onSubmit(item){
    item.preventDefault(); //브라우저의 기본 동작인 새로고침을 막아주는 역할
    // const user=loginInput.value;
    console.log(item); //콘솔에 값이 나타났다가 바로 사라짐, 새로고침은 기본 브라우저가 그렇게 작동하도록 프로그래밍 되어 있음
}
loginForm.addEventListener("submit",onSubmit); //이 부분에서 바로 함수를 실행하는 것을 원하지 않음
//submit 이벤트가 일어나면 브라우저가 알아서 함수를 실행하도록 세팅
//브라우저는 우선 함수를 호출하고, 그 다음에 실행하고 있기는 하지만 ()안에 정보를 주고 있음
//그 정보를 이용해서 실행 버튼을 누르고 있음, 첫 번째 인자로 추가적인 정보를 가지고 호출

//submit 이벤트가 실행됐을 때 target은 form 태그의 id가 login-form인 아이가 해당됨