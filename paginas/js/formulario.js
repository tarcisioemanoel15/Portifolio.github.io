class ValidaFormulario {
  constructor() {
    this.formulario = document.querySelector("#formulario");
    this.envio();
  }

  envio() {
    this.formulario.addEventListener('submit', e => {
      this.previnir(e);
    })
  }

  previnir(e) {
    e.preventDefault()
    const camposValidos = this.camposSaoValidos();
    const senhasValidos = this.senhasSaoValidos();
    const campoUser = this.campousuario();
    const idade = this.campoIdade();


    if (camposValidos && senhasValidos && campoUser && idade) {
      alert('formulario enviado')
      this.formulario.submit();
    }

  }

  camposSaoValidos() {

    let valid = true;
    for (let errortext of this.formulario.querySelectorAll(".errorText")) { errortext.remove(); }

    for (let campo of this.formulario.querySelectorAll('.validar')) {
      const label = campo.previousElementSibling.innerHTML;
      if (!campo.value) {
        valid = false;
        this.errorText(campo, `campo ${label} não pode estar vazio`);
      }

    }

    return valid;
  }


  // Campo usuario
  campousuario() {
    const campo = document.querySelector('.usuario');

    let valid = true
    let usuario = campo.value;

    if (usuario === '') {
      valid = false;
    } else {
      if (usuario.length <= 3 || usuario.length > 12) {
        this.errorText(campo, 'Campo usuario tem que estar entre 3 e 12 caractere ');
        valid = false;
      }
      if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
        this.errorText(campo, 'usuario só pode conter numeros ou letras');
        valid = false;
      }
    }
    return valid;
  }

  senhasSaoValidos() {
    let valid = true;
    const senha = this.formulario.querySelector('.senha');
    const repetirSenha = this.formulario.querySelector('.repetir-senha');

    if (senha.value === '' && repetirSenha.value === '') {
      valid = false;
    }
    if (senha.value.length < 3 && repetirSenha.value.length > 10) {
      validao = false;
      this.errorText(senha, 'campo senha tem que tar entre 3 e 10 ');
    }
    if (senha.value !== repetirSenha.value) {
      valid = false;
      this.errorText(senha, 'campo senha INVALIDO')
      this.errorText(repetirSenha, 'campo repetir senha tem que ser igual a senha')
    }
    return valid;
  }

  campoIdade(campo) {
    let valid = true
    const idade = document.querySelector('.idade');

    if (idade.value === '') {
      valid = false;

    } else {

      if (idade.value <= 17) {
        valid = false;
        this.errorText(campo, "voçe precisa ser maior de idade")
      }

      if (idade.value > 90) {
        valid = false;
        this.errorText(campo, "tá de brincadeira")
      }
    }
    return valid;
  }

  // mensagens e error
  errorText(campo, msg) {
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('errorText');
    campo.insertAdjacentElement('afterend', div);
  }
}

const valido = new ValidaFormulario();