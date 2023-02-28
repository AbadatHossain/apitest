function loaduser() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUser(data))
}
const displayUser = users => {
    // console.log(users)

    users.forEach(user => {
        console.log(user.username)

        const ul = document.getElementById('user-list')
        const li = document.createElement('li')
        li.innerText = user.username
        li.innerHTML = `
        <h4> Name:${user.username}</h4>
`
        ul.appendChild(li)

    });
}


loaduser()