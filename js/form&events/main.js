const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');

// const name = document.querySelector('#name');


form.addEventListener('submit', e => {

    e.preventDefault();

    // console.log('you click me');

    // console.log(name.value);
    // console.log(form.name.value);

    const name = form.name.value;
    const password = form.password.value;
    const cpassword = form.cpassword.value;
    const email = form.email.value;


    /* reg expressions */
    const namecheck = /^[a-zA-Z]{6,12}$/;
    const passwordcheck = /^[A-Za-z_]{6,}$/;
    const emailcheck = /^[A-Za-z_]{6,}@{3,}[.]{1}[A-Za-z]{2,6}$/;

    if(namecheck.test(name) == true){
        // alert('Name must not be empty');
        feedback.innerHTML = '';
    }
    else{
        feedback.innerHTML = '** Name is Invalid';
        return false;
    }

    if(passwordcheck.test(password)){
        feedback.innerHTML = '';
    }
    else{
        feedback.innerHTML = '** Password is Invalid';
        return false;
    }

    if(password.match(cpassword)){
        feedback.innerHTML = '';
    }

    else{
        feedback.innerHTML = 'Password does not match';
        return false;
    }

    form.submit();

})