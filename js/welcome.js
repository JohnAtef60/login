var welcome = document.getElementById('welcome')

function welcomefun() {
    var username = localStorage.getItem('username')
    if (username != null) {
        welcome.innerHTML = `<h1>Welcome ${username}</h1>`
    }
}

welcomefun()