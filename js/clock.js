const clock=document.querySelector("#clock");

function GetDate(){
    const date=new Date();
    const hours=String(date.getHours()).padStart(2,"0");
    const minutes=String(date.getMinutes()).padStart(2,"0");
    const seconds=String(date.getSeconds()).padStart(2,"0");
    // clock.innerText=`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}` 
    clock.innerText=`${hours}:${minutes}:${seconds}`;


}

//setInterval

// setInterval(Hello,5000); //5초가 지난 후부터 콘솔에 나타나기 시작하여 5초마다 반복

// setTimeout(Hello,5000); //5초 후에 한번 출력하고 끝

GetDate();
setInterval(GetDate,1000);