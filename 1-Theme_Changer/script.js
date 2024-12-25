

const buttons=document.querySelectorAll('.button')
const body=document.querySelector('body')
const heading3=document.querySelector('h3')
const heading1=document.querySelector('h1')
console.log(heading3)
buttons.forEach(function(button) {
    console.log(button);
    button.addEventListener('click',function(e){
       console.log(e)
       console.log(e.target);
       console.log(e.target.id);
       body.style.backgroundColor =e.target.id;

       if(e.target.id =='black'){
        heading3.style.color='white';
        heading1.style.color='white';
       }
    })
});

