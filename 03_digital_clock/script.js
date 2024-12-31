const clock=document.getElementById('clock');
// const clock1=document.querySelector('#clock');



setInterval(function(){
    let date=new Date();
    // console.log(date.toLocaleTimeString())
    clock.innerHTML=date.toLocaleTimeString();
},1000)

// console.log(clock);
// console.log(clock1);