const getBurgers = () => {
  axios.get('/api/burgers')
    .then(({data}) => {
      document.getElementById('devour').innerHTML = ''
      document.getElementById('devoured').innerHTML = ''
      data.forEach (item => {
        if (item.devoured) {
          let devourElem = document.createElement('li')
          devourElem.textContent = `${item.burger_name}`
          document.getElementById('devoured').append(devourElem)
        } else {
          let devourElem = document.createElement('li')
          devourElem.textContent = `${item.burger_name}`
          document.getElementById('burgers').append(devourElem)
        }
      })
    })
    .catch(err => console.log(err))
}

document.addEventListener('click', event => {
  if (event.target.className === 'devour') {
    event.preventDefault()
    axios.put(`/api/burgers/${event.target.dataset.id}`, {devoured: '1'})
    let devourElem = document.createElement('li')
    devourElem.textContent = `${event.target.value}`
    document.getElementById('devoured').append(devourElem)
    event.target.parentNode.remove()
  }
})

document.getElementById('addBurger').addEventListener('click', event => {
  event.preventDefault()
  axios.post('/api/burgers', {
    burger_name: document.getElementById('name').value, devoured: 0
  })
  getBurgers()
})