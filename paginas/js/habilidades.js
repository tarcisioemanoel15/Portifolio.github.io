function sumir() {
  const paragrafo1 = document.querySelector('.paragrafo1');
  const paragrafo2 = document.querySelector('.paragrafo2');
  const paragrafo3 = document.querySelector('.paragrafo3');
  const paragrafo4 = document.querySelector('.paragrafo4');
  const paragrafo5 = document.querySelector('.paragrafo5');
  const paragrafo6 = document.querySelector('.paragrafo6');
  const paragrafo7 = document.querySelector('.paragrafo7');

  const paragrafo = document.querySelectorAll('.box p');
  paragrafo.forEach(element => {
    element.classList.add('para');
    element.style.display = 'none';
  });

  function funkRemove1() {
    if (paragrafo1.style.display === 'block') {
      paragrafo1.style.display = 'none';
    } else {
      paragrafo1.style.display = 'block';
    }
  }
  function funkRemove2() {
    if (paragrafo2.style.display === 'block') {
      paragrafo2.style.display = 'none';
    } else {
      paragrafo2.style.display = 'block';
    }
  }
  function funkRemove3() {
    if (paragrafo3.style.display === 'block') {
      paragrafo3.style.display = 'none';
    } else {
      paragrafo3.style.display = 'block';
    }
  }
  function funkRemove4() {
    if (paragrafo4.style.display === 'block') {
      paragrafo4.style.display = 'none';
    } else {
      paragrafo4.style.display = 'block';
    }
  }
  function funkRemove5() {
    if (paragrafo5.style.display === 'block') {
      paragrafo5.style.display = 'none';
    } else {
      paragrafo5.style.display = 'block';
    }
  }
  function funkRemove6() {
    if (paragrafo6.style.display === 'block') {
      paragrafo6.style.display = 'none';
    } else {
      paragrafo6.style.display = 'block';
    }
  }

  document.addEventListener('click', e => {
    const el = e.target;

    for (let campo of document.querySelectorAll('.para')) {
      campo.style.display = 'none';
    }

    if (el.classList.contains('imghtml')) { funkRemove1(); }
    if (el.classList.contains('imgcss')) { funkRemove2(); }
    if (el.classList.contains('javascript')) { funkRemove3(); }
    if (el.classList.contains('bootstrap')) { funkRemove4(); }
    if (el.classList.contains('git')) { funkRemove5(); }
    if (el.classList.contains('node')) { funkRemove6(); }

  })
}
sumir();