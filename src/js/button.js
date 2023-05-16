export function button() {
  const btn = document.querySelector('.btn');
  btn.addEventListener('click', () => {
    btn.classList.add('scale')
  })
}

export function sayHi(user) {  alert(`Hello, ${user}!`);
}