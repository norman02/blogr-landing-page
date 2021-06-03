const burger = document.getElementById('burger')
const navMenue = document.getElementById('nav')


burger.addEventListener('click', ()=> {
    burger.classList.toggle('change')
    navMenue.classList.toggle('active');
})

document.querySelectorAll('.collapse').forEach(item => {
    item.addEventListener('click', event => {
      item.classList.toggle('open')
    })
  })