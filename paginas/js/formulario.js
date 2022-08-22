
const formulario = document.querySelector("form");


formulario.addEventListener('submit', e => {


  for (const campo of formulario.querySelectorAll('input')) {
    const label = campo.previousElementSibling.innerHTML;

    if (campo.value === '') {
      mensageError(campo, `Campo ${label} não dode ficar vazio`);
    }

  }


})



function mensageError(campo, msg) {
  const div = document.createElement("div");
  div.innerHTML = msg;
  div.classList.add('erro');
  campo.insertAdjacentElement('afterend', div)
}

alert('ainda não terminado iniciando validação de campo')