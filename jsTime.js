//const clockContainer = document.querySelector(".js-clock");
//const clockTitle = clockContainer.querySelector("h1")
const clockContainer = document.querySelector(".js-clock"),
      clockTitle = clockContainer.querySelector("h1");
      
      
function getTime(){
 const date = new Date();
 const minutes = date.getMinutes();
 const hours = date.getHours();
 const seconds = date.getSeconds();

//clockTitle.innerText = `${hours < 10 ? `0${hours}`: hours}:${minutes < 10 ? `0${minutes}`: minutes}:${seconds < 10 ? `0${seconds}`: seconds}`;
// 죽약 if 문이지만 사용법을 정확히 몰라 주석처리.

 clockTitle.innerText = zero(hours) +":"+ zero(minutes) +":"+ zero(seconds) ;

 function zero(num) {
    if(num < 10) {
        num = "0"+num;
    }
    return num;
  }
}

function init() {
    getTime();
    setInterval(getTime,1000);
    
}

init();




//const date = new Date();
   //console.log(date);
   //date.getDay();
   //console.log(date.getDay());
   //date.getDate();
   //console.log(date.getDate());
   //date.getHours();
   //console.log(date.getHours());
   //date.getMinutes();
   //console.log(date.getMinutes());

 
   //let seconds = date.getSeconds();
 // if(seconds < 10){
 //    seconds = "0"+seconds
 //    console.log(seconds)
 //}
 //clockTitle.innerText = hours +":"+ minutes +":"+ seconds ;
 //const 를 let 로 바꾸면 이 if식도 사용할수 있지만 바뀌면 안되는 변수값(const)의 경우 변수를 직접적으로 바꾸기 보다는 매개변수나 다른방법을 이용하는 것이 좋다.