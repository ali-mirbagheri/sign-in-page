'use strict'
let form = document.getElementById('sign-in-form');
let passwordin = document.getElementById('password');
let button = document.getElementById('button1');
let password2in = document.getElementById('password2');
let makanin = document.getElementById('makan');
let makanlist = document.getElementById('datalistOptions');
passwordin.addEventListener('blur', (e) => passcheck(e));
password2in.addEventListener('focusout', (e) => passcheck2(e));
makan.addEventListener('focusout', (e) => makcheck(e))
let passwordcheck = "na";


function makcheck() {
    let makan = makanin.value;
    let makanli = makanlist.querySelectorAll('option');
    let ostan = []
    for (let m = 0; m < makanli.length; m++) {
        ostan.push(makanli[m].value);

    };
    if (!ostan.includes(makan)) {
        makanin.value = "";
    }
}

function passcheck(event) {
    let password = passwordin.value;
    if (password === '' || password.length < 8) {

        document.getElementById('p-password').classList.remove('d-none')
        document.getElementById('p-password').classList.add('d-inline');
    } else {
        document.getElementById('p-password').classList.remove('d-inline')
        document.getElementById('p-password').classList.add('d-none');
        passwordcheck = "yes";
    }
}

function passcheck2() {
    let password = passwordin.value;
    let password2 = password2in.value;
    if (password2 === password) {
        document.getElementById('p-password2').classList.remove('d-inline')
        document.getElementById('p-password2').classList.add('d-none');
    } else {
        document.getElementById('p-password2').classList.remove('d-none')
        document.getElementById('p-password2').classList.add('d-inline');
    }
}
button.addEventListener('focus', (params) => passcheck(params));
button.addEventListener('focus', (params) => passcheck2(params));
form.addEventListener("submit", function(params) {
    // passcheck();
    if (passwordcheck === "na") {
        params.preventDefault();
    }
});

let inputs = document.querySelectorAll('input');
for (let index = 0; index < inputs.length; index++) {
    inputs[index].addEventListener('keydown', ee => {
        if (ee.key === 'Enter') {
            inputs[index + 1].focus();
        }
    });
};