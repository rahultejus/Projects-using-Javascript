
const form=document.querySelector('form');

//this usecase it not valid
// const height=document.querySelector('#height');

form.addEventListener('submit', function(e){
    e.preventDefault();
   const height=parseInt(document.querySelector('#height').value);
   const weight=parseInt(document.querySelector('#weight').value);
    //    console.log(height);
    //    console.log(weight);

const results=document.querySelector('#results');
if( height <= 0 || isNaN(height)){
    results.innerHTML=`Please enter a valid height ${height}`;
}
else if(weight<=0 || isNaN(weight)){
    results.innerHTML=`Please enter a valid weight ${weight}`;
}
else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    // results.innerHTML = `<span>${bmi}</span>`
    // let msg;

//    if(bmi<18.6){
//     msg=`You are Under Weight with BMI=${bmi}`
//    }
//    else if(bmi>=18.6 && bmi<=24.9){
//     msg=`You are in Normal Range with BMI=${bmi}`
//     }
//     else{
//         msg=`You are Over Weight with BMI=${bmi}`
//     }
//      results.innerHTML=`<span>${msg}</span>`;
   if(bmi<18.6){
    results.innerHTML=`You are Under Weight with BMI=${bmi}`
   }
   else if(bmi>=18.6 && bmi<=24.9){
    results.innerHTML=`You are in Normal Range with BMI=${bmi}`
    }
    else{
        results.innerHTML=`You are Over Weight with BMI=${bmi}`
    }
    //  results.innerHTML=`<span>${msg}</span>`;
}
});