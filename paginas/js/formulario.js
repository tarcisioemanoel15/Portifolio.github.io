function inicia() {
  selctElemunto();
}




function selctElemunto() {
  const formulario = document.querySelector("form");

  formulario.addEventListener('submit', e => {
    e.preventDefault();

    for (const erro of document.querySelectorAll(".erro")) {
      erro.remove();
    }

    for (const campo of formulario.querySelectorAll('input')) {
      const label = campo.previousElementSibling.innerHTML;

      if (campo.value === '') {
        mensageError(campo, `Campo ${label} não pode ficar vazio`);
      }


      if (campo.classList.contains('idade')) {
        campoIdade(campo);
      }








    }

  })

}


function campoIdade(campo) {
  const idade = document.querySelector(".idade");

  if (idade.value) {

    if (idade.value >= 0) {
      if (idade.value <= 17) {
        return mensageError(campo, "idade tem que ser maior que 18");
      } else if (idade.value >= 80) {
        return mensageError(campo, "idade tem que ser menor que 80");
      } else {
        return idade.value;
      }
    }
    return;
  }

}







function mensageError(campo, msg) {
  const div = document.createElement("div");
  div.innerHTML = msg;
  div.classList.add('erro');
  campo.insertAdjacentElement('afterend', div)
}

alert('ainda não terminado iniciando validação de campo')






inicia();