const form = document.querySelector('.quiz-form');
const correctAnswers = ['B', 'B', 'B', 'B'];
const result = document.querySelector('.quiz');

form.addEventListener('submit', e =>{
    e.preventDefault();

    let score = 0;

    const userAnswer = [
        form.q1.value,
        form.q2.value,
        form.q3.value,
        form.q4.value
    ];

    userAnswer.forEach((answer, index)=>{
        if(answer === correctAnswers[index]){
            score += 25;
        }
    })
    // console.log(score);

    /* show result */
    // result.querySelector('span').textContent = `${score}%`;
    scrollTo(0,0);

    result.classList.remove('d-none');

    /* Animate Result */

    let output = 0;

 const timer =  setInterval(()=>{
        result.querySelector('span').textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        } else{
            output++;
        }
    }, 10);

});

// setTimeout(()=>{
//     alert('hi');
// }, 2000);

// let i = 0;
// const timer = setInterval(()=>{
//     console.log('Hello, Everyone');
// i++;
//     if( i === 5){
//         clearInterval(timer);
//     }
// }, 1000);