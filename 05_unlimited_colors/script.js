// generate random hex number

const randomColor=function(){

    const hex='0123456789ABCDE';
    let color='#';

    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
}
// console.log(randomColor());

let intervalId;

const startChangingColor=function(){
    const changeBg=function(){
        document.body.style.backgroundColor=randomColor();
    }
    if(!intervalId){
   intervalId= setInterval(changeBg,1000)
    }
}

const stopChangingColor=function(){
    clearInterval(intervalId);
    intervalId= null;
}

document.querySelector('#start').addEventListener('click',startChangingColor,false);
document.querySelector('#stop').addEventListener('click',stopChangingColor,false);

