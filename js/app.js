const loginForm=document.querySelector("#login-form")
const loginInput=document.querySelector("#login-form input");
const greeting=document.querySelector("#greeting");

const HIDDEN_CLASSNAME="hidden";

function OnLoginclick(){
    //유저가 이름을 입력했을때만 button을 클릭하도록 설정하고 싶음

    const name=loginInput.value;
    console.log(name);
}

function Onsubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const user=loginInput.value;
    localStorage.setItem("username",user)
    greeting.innerText=`Hello ${user}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


loginForm.addEventListener("submit",Onsubmit);
