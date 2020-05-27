const $userSignUpForm = document.querySelector("#user-signup")

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
    })
    $userSignUpForm.reset()
})