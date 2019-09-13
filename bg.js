const body = document.querySelector("body");

const IMG_NUMBER = 24;

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
    //인자값을 받아 실행합니다. 
    //얻은 인자값에 +1을 적용한 파일의 소스를 가져옵니다.
    //변수 image에 클래스값을 줍니다.
    //body의 뒷부분에 image를 삽입합니다. 
}

function genRendom(){
    const number = Math.floor(Math.random() * IMG_NUMBER)
    return number;
    //number는 0부터3중에 랜덤한 숫자를 만들어 소숫점을 버린수를 갖습니다.(012가 출력)
    //이후 리턴합니다.
}

function init(){
const randomNumber = genRendom();
//이 변수는 함수를 실행시키고 거기서 얻은 값을 returen해 받습니다.
paintImage(randomNumber);
}

init()

//Math.random * 5 = 0부터 5까지 숫자중 랜덤한 숫자를 생성합니다.
//Math.floor(3.9)=3 소수점을 모두 버립니다.
//Math.ceil(3.9)=4 소수점뒤 숫자가 있으면 숫자를 올림합니다.