const login = document.querySelector(".login")
const loginForm = login.querySelector(".login_form")
const loginInput = login.querySelector(".login_input")

const chat = document.querySelector(".chat")
const chatForm = login.querySelector(".chat_form")
const chatInput = login.querySelector(".chat_input")

const colors = [
    "cadetblue",
    "darkgoldenrod",
    "cornflowerblue",
    "darkkhaki",
    "hotpink",
    "gold"
]

let wS

const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length)
    return colors[randomIndex]
}

const user = { id: "", name: "", color: "" }

const processMessage = ({ data }) =>{
}

const handleLogin = (event) => {
    event.preventDefault()

    user.id = crypto.randomUUID()
    user.name = loginInput.value
    user.color = getRandomColor()

    login.style.display = "none"
    chat.style.display = "flex"

    wS = new WebSocket("ws://localhost:8080")
    wS.onmessage = processMessage

}

loginForm.addEventListener("submit", handleLogin)