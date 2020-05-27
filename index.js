const $userSignUpForm = document.querySelector("#user-signup")
const $userLoginForm = document.querySelector("#user-login")

$userSignUpForm.addEventListener("submit", e => {
    e.preventDefault()

    const formData = new FormData(event.target)

    const username = formData.get("username")
    const password = formData.get("password")

    fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({username, password})
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
    .then(response => {
        const {token} = response
        localStorage.setItem("token", token)
    }).catch(error => console.log(error.message))
    $userLoginForm.reset()
})