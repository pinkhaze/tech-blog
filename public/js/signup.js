// const signupHandler = async (event) => {
//     event.preventDefault()

//     const email = document.querySelector('#email-signup').value.trim()
//     const name = document.querySelector('#name-signup').value.trim()
//     const password = document.querySelector('#password-signup').value.trim()

//     if (email && name && password) {
//         const response = await fetch('/api/users/', {
//             method: 'POST',
//             body: JSON.stringify({ email, name, password }),
//             headers: { 'Content-Type': 'application/json' }
//         })

//         if  (response.ok) {
//             document.location.replace('/dashboard')
//         } else {
//             alert(response.statusText)
//         }
//     }
// }

// document.querySelector('.signup-form').addEventListener('submit', signupHandler)

const signupHandler = async (event) => {
    event.preventDefault()
    console.log('submitted')

    const username = document.querySelector('#username-login').value.trim()
    const password = document.querySelector('#password-login').value.trim()

    if (username && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' }
        })

        if  (response.ok) {
            document.location.replace('/dashboard')
        } else {
            alert(response.statusText)
        }
    }
}

document.querySelector('.signup-form').addEventListener('submit', signupHandler)