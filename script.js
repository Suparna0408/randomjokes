let url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"

let btn = document.getElementById("btn");
console.log(btn);
let jokes = document.getElementById("joke");
console.log(jokes);


let makeJoke = () =>{
    fetch(url)
    .then(d => d.json())
    .then(response => {
        jokes.textContent = `${response.joke}`;
    });
};
btn.addEventListener("click", makeJoke);
makeJoke();