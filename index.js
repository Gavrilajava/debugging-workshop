document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('joke-form')
  const jokeList = document.getElementById('joke-list')
  
  
  
  function fetchJoke(username){
    fetch('https://icanhazdadjoke.com/', {
      headers: {
        "Accept": "application/json"
      }
    })
    .then(res => res.json())
    .then(jokeData => postJoke(jokeData.joke, username))
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const username = document.getElementById('name-input').value
    if(username === "") return;
    fetchJoke(username)

  })
  function postJoke(joke, username){
    const newJokeLi = document.createElement('li')
    newJokeLi.innerHTML = `<span class="username">${username} says:</span> ${joke}`
    jokeList.appendChild(newJokeLi)
  }
})
