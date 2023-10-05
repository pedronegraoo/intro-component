const btn = document.querySelector(".box-right-bottom-btn");
const input = document.querySelectorAll(".box-right-bottom-input");

let store = [];
let valida = true;

btn.addEventListener("click", lerInput);
document.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    lerInput();
  }
});

function lerInput() {
  input.forEach((item) => {
    store.push(item.value);
  });

  valida = true;
  input[0].focus();
  verificacaoInput();
  tamanhoSenha();
  verificacaoEmail();
  // console.log(valida);
  // console.log(store);
  if (valida === true) {
    input[0].focus();
    sucesso();
  }
  limparInput();
  store = [];
}

function limparInput() {
  for (let i = 0; i < input.length; i++) {
    input[i].value = "";
  }
}

function verificacaoInput() {
  for (let i = 0; i < input.length; i++) {
    if (input[i].value === "") {
      Swal.fire({
        icon: "error",
        title: "Erro",
        text: "Todos os campos devem ser preenchidos.",
      });
      i = 5;
      valida = false;
    }
  }
}

function tamanhoSenha() {
  if (store[3].length < 8) {
    Swal.fire({
      icon: "error",
      title: "Erro",
      text: "Senha com no mínimo 8 dígitos, insira novamente",
    });
    valida = false;
  }
}

function sucesso() {
  Swal.fire("Cadastrado com sucesso", "", "success");
  // Swal.fire({
  //   position: "center",
  //   icon: "success",
  //   title: "Cadastrado com sucesso",
  //   showConfirmButton: false,
  //   timer: 2000,
  // });
}

function verificacaoEmail() {
  let verifica = [];
  input.forEach((item) => {
    verifica.push(item.value);
  });
  if (verifica[2].length < 11) {
    Swal.fire({
      icon: "error",
      title: "Erro",
      text: "E-mail inválido",
    });
    valida = false;
  }
}
