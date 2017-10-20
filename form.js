"use strict";

function isNotEmpty(controlName) {
    var inputControl = document.getElementById(controlName);
    if (inputControl.value === '' || inputControl.value === null) {
        document.getElementById(controlName + '_error').innerHTML = '* Empty field';
        inputControl.focus();
        return false;
    } else {
        document.getElementById(controlName+'_error').innerHTML = '';
        return true;
    }
}

function checkEmail() {
    var emailRegExp = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    var email       = document.getElementById('email');

    if (!emailRegExp.test(email.value)) {
        document.getElementById('email_error').innerHTML = '* Wrong email';
        email.focus();
        return false;
    } else {
        document.getElementById('email_error').innerHTML = '';
        return true;
    }
}

function checkUrl() {
    var urlRegExp   = new RegExp(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/);
    var website     = document.getElementById('website');
    if (!urlRegExp.test(website.value)) {
        document.getElementById('website_error').innerHTML = '* Wrong URL';
        website.focus();
        return false;
    } else {
        document.getElementById('website_error').innerHTML = '';
        return true;
    }
}

function isPassMatch() {
    var pass    = document.getElementById('password').value;
    var re_pass = document.getElementById('re_password');
    if (re_pass.value !== pass) {
        document.getElementById('re_password_error').innerHTML = '* Not match';
        re_pass.focus();
        return false;
    } else {
        document.getElementById('re_password_error').innerHTML = '';
        return true;
    }
}

function isChecked() {
    var checkBox = document.getElementById('accpetTrems');
    if (checkBox.checked) {
        document.getElementById('accpetTrems_error').innerHTML = '';
        return true;
    } else {
        document.getElementById('accpetTrems_error').innerHTML = '* Accept terms';
        checkBox.focus();
        return false;
    }
}

function validateForm() {

    if (isNotEmpty('username') && isNotEmpty('firstName') && isNotEmpty('lastName') && checkEmail()
        && checkUrl() && isNotEmpty('password') && isPassMatch() && isChecked()) {
        alert ('Data is vaild');
        return true;
    } else {
        alert('Please fill the form');
        return false;
    }


}