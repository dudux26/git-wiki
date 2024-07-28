const bars = document.querySelector('.bars');
const hamburguer = document.getElementById('hamburguer');
const lists = document.querySelectorAll('.nav-hamburguer li')

lists.forEach((list) => {
  list.addEventListener('click', () => {
    list.classList.toggle('ativo')
    if (list.classList.contains('ativo')) {
      hamburguer.classList.remove('ativo')
    }
    if (list.classList.contains('ativo')) {
      list.classList.remove('ativo')
    }
  })
})

bars.addEventListener('click', () => {
  hamburguer.classList.toggle('ativo');
});

