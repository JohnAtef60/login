var signinEmail = document.getElementById('signinEmail')
var signinPassword = document.getElementById('signinPassword')
var signupName = document.getElementById('signupName')
var signupEmail = document.getElementById('signupEmail')
var signupPassword = document.getElementById('signupPassword')
var incorrect = document.getElementById('incorrect')
var exist = document.getElementById('exist')
var success = document.getElementById('success')
var incomplete = document.getElementById('incomplete')
var users

if (localStorage.getItem('usres') == null) {
    users = []
}
else {
    users = JSON.parse(localStorage.getItem('usres'))
}

function signUp() {
    if (signupName.value == '' || signupEmail.value == '' || signupPassword.value == '') {
        incorrect.classList.remove('d-none')
    }
    else if (isExist()) {
        exist.classList.remove('d-none')
    }
    else {
        var user = {
            email: signupEmail.value,
            username: signupName.value,
            password: signupPassword.value
        }
        success.classList.remove('d-none')
        users.push(user)
        localStorage.setItem('usres', JSON.stringify(users))
    }
}

function isExist() {
    for (var i = 0; i < users.length; i++) {
        if (users[i].email === signupEmail.value) {
            return true
        }
    }
}

function login() {
    if (signinEmail.value == '' || signinPassword.value == '') {
        incomplete.classList.remove('d-none')
    }
    else if (isValid()) {
        window.location.href = 'welcome.html'
    }
    else {
        incorrect.classList.remove('d-none')
    }
}

function isValid() {
    for (var i = 0; i < users.length; i++)
        if (users[i].email === signinEmail.value && users[i].password === signinPassword.value) {
            localStorage.setItem('username', users[i].username)
            return true
        }
}

function logout() {
    window.location.href = "index.html"
}