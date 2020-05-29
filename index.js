const $userSignUpForm = document.querySelector("#user-signup")
const $userLoginForm = document.querySelector("#user-login")
const $dropdownMenu = document.querySelector("#dropdown-menu")

$userSignUpForm.addEventListener("submit", e => {
    e.preventDefault()

    const formData = new FormData(event.target)

    const username = formData.get("username")
    const password = formData.get("password")
    const location = formData.get("location")

    fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({username, password, location})
    }).catch(error => console.log(error.message))
    $userSignUpForm.reset()
})

$userLoginForm.addEventListener("submit", e => {
    e.preventDefault()

    const formData = new FormData(event.target)

    const username = formData.get("username")
    const password = formData.get("password")

    fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({username, password})
    })
    .then(response => response.json())
    .then(response => {console.log(response)
        const {token} = response
        localStorage.setItem("token", token)
    }).catch(error => console.log(error.message))

    isLoggedIn()
})

function isLoggedIn() {
    if (localStorage.getItem("token")){
        window.location.href = "/user.html"
    }
    else {
        reject()
    }
}

function reject(){
    window.location.href = "/index.html"
}

$(document).ready(function(){
    $('.modal').modal();
});

$(document).ready(function(){
    $('select').formSelect();
});
