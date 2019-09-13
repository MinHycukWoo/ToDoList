const form = document.querySelector(".js-form"),
      input = form.querySelector("input"),
      greeting = document.querySelector(".js-greetings");
//요소잡기

const USER_LS = "CurrentUser",
     SHOWING_CN = "showing";
//변수지정

//▼  해당함수는 text인자값을 로컬에 저장합니다 (키,값)
function saveName(text){
      localStorage.setItem(USER_LS,text)
}
//▼ form의 기본이벤트를 정지시키고 입력받은 input값을 출력 하고 저장하게 합니다.
function handleSubmit(event){
      //버블이벤트
      event.preventDefault();//이벤트 정지
      const currentValue = input.value;
      console.log(currentValue);
      paintGreeting(currentValue);
      saveName(currentValue);;

}
//▼ 해당 함수는 로컬에 값이 없을때 작동시킬것이며 form을 보이게 하며 값을 전송하면 함수를 작동시킵니다
function askForname(){
      form.classList.add(SHOWING_CN);
      form.addEventListener("submit",handleSubmit)
}
//▼ 해당 함수는 값을 받고 input박스의 display를 결정하고 출력합니다.
function paintGreeting(text){//함수paintGreeting는 인자(text)를 받습니다.
    form.classList.remove(SHOWING_CN);//요소 form은 class값을 삭제합니다.
    greeting.classList.add(SHOWING_CN);//요소 greeting는 class값으 얻습니다.
    greeting.innerText = "Hello"+text;//요소 greeting의 innerText를 삽입합니다.
}
//▼ 해당 함수는 로컬에서 값을 받아옵니다.
function loadName(){
   const currentUser = localStorage.getItem(USER_LS);
   //변수 currentUser는 로컬에서 아이템"USER_LS"를 얻어옵니다.
   if(currentUser === null){ //로컬에 현재 값이 없을(null)일때
      //she is not; 유저가 없을경우
      askForname()
   }else{
      //she is 유저가 있을경우
      //로컬속에 값"USER_LS의 키값"이 있을 경우
      paintGreeting(currentUser);
      // 함수 paintGreeting을 "currentUser"를 인자로 실행합니다.
   }
}      









function init(){
 loadName();
}

init();


      //localStorage.setItem("nico",true)
      //const local = localStorage.getItem("nico",true);
      //console.log(local);