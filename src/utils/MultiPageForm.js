// const steps = Array.from(document.querySelectorAll('form .step'));
// const nextBtn = document.querySelectorAll('form .next-btn');
// const prevBtn = document.querySelectorAll('form .prev-btn');
// const form = document.querySelector('form');
// const progressSteps = document.querySelectorAll(".progress-step");


// nextBtn.forEach(button =>{
//     button.addEventListener('click' , ()=>{
//         changeStep('next');
//         updateProgressBar();
//     })
// })
// prevBtn.forEach(button =>{
//     button.addEventListener('click' , ()=>{
//         changeStep('prev');
//         updateProgressBar();
//     })
// })

//     let index = 0 ;
// function changeStep (btn){
//     const active = document.querySelector('form .step.active');
//     index = steps.indexOf(active);
//     steps[index].classList.remove('active');
//     if(btn === 'next'){
//         index ++ ;
//     }else if(btn === 'prev') {
//         index -- ;
//     }
//     steps[index].classList.add('active')
// }

// function updateProgressBar (){
//     progressSteps.forEach((progressStep, idx)=>{
//         if(idx < index + 1){
//             progressStep.classList.add("progress-step-active");
//         }else{
//             progressStep.classList.remove("progress-step-active");
//         }
//     })
// }

