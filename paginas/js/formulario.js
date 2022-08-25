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

    if (camposValidos && senhasValidos && campoUser) {
      alert('formulario enviado')
      this.formulario.submit();
    }

  }












  camposSaoValidos() {
    /*
    return true
    */
    let valid = true;

    for (let errortext of this.formulario.querySelectorAll(".errorText")) { errortext.remove(); }

    for (let campo of this.formulario.querySelectorAll('.validar')) {
      const label = campo.previousElementSibling.innerHTML;
      if (!campo.value) {
        valid = false;
        this.errorText(campo, `campo ${label} não pode estar vazio`);
      }

      // if(campo.classList.contains('cpf')){
      //   this.validacpf(campo);
      // }

      // if (campo.classList.contains('usuario')) {
      //   this.campousuario(campo);
      // }


      // if (campo.classList.contains('idade')) {
      //   this.campoIdade(campo);
      // }
    }
    console.log(valid, 'campo')
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
    console.log("usuariooooooooo", valid)
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
    console.log(valid)
    return valid;
  }







  // Validando CPF

  // validacpf(campo){
  //   const valida = new Validacpf(campo.value)
  //   if(!valida.valida()){
  //     this.errorText(campo, 'CPF Invalido');
  //     return false;
  //   }
  //   return true;
  // }











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
    console.log(valid)
    return valid;
  }













































  errorText(campo, msg) {
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('errorText');
    campo.insertAdjacentElement('afterend', div);
  }
}

const valido = new ValidaFormulario();