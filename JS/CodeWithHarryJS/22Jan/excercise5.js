// Hackerman

let a = [
    "Initializing hack tool",
    "Connecting to fb",
    "Connecting to server 1",
    "connection failed.. Retrying",
    "Connecting to server 2",
    "Connection succesfully",
    "Username pratik",
    "Trying Brute Force",
    "200k passwork tried",
    "Match not found",
    "Another 200k passwork tried",
    "Match not found",
    "Another 200k passwork tried",
    "Match found",
    "Accessing Account",
    "HAck Successful"
]


const sleep = async (seconds) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true);
        }, seconds * 1000)
    })
}

const showHack = async (message) => {
    await sleep(2);
    console.log(message);
    text.innerHTML =text.innerHTML + message +"<br>"
}

(async () => {
    for (let i = 0; i < a.length; i++) {
        await showHack(a[i]);
    }
})()

