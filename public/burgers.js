// create a function to get burgers
const getBurgers = () => {
  // GET all burgers from devour and devoured
  axios.get('/api/burgers')
    .then(({data}) => {
      document.getElementById('devour').innerHTML = ''
      document.getElementById('devoured').innerHTML = ''
      // create list for burgers and devoured burgers
      data.forEach (burger => {
        if (burger.devoured) {
          let devourElem = document.createElement('li')
          devourElem.textContent = `${burger.burger_name}`
          document.getElementById('devoured').append(devourElem)
        } else {
          let devourElem = document.createElement('li')
          devourElem.textContent = `${burger.burger_name}`
          document.getElementById('burgers').append(devourElem)
        }
      })
    })
    .catch(err => console.log(err))
}

// make an event listener for the click button to devour the burger
document.addEventListener('click', event => {
  if (event.target.className === 'devour') {
    event.preventDefault()
    // use PUT to update burger to the devoured list
    axios.put(`/api/burgers/${event.target.dataset.id}`, {devoured: 1})
    let devourElem = document.createElement('li')
    devourElem.textContent = `${event.target.value}`
    document.getElementById('devoured').append(devourElem)
    event.target.parentNode.remove()
  }
})

// make an event listener for the click button to add the burger to the list
document.getElementById('addBurger').addEventListener('click', event => {
  event.preventDefault()
  // POST burger to devour list
  axios.post('/api/burgers', {
    burger_name: document.getElementById('name').value, devoured: 0
  })
  getBurgers()
})