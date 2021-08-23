console.log("Olá mundo!!!");

document.getElementById("btn-submit").addEventListener("click", (e) => {
  console.log("O Botão foi executado");
});

document.getElementById("form-login").addEventListener("mouseenter", (e) => {
  console.log("O mouse esta sobre do formulário");
});

document.querySelector("#form-login").addEventListener("mouseleave", (e) => {
  console.log("O mouse esta fora do formulário");
});

document.querySelector("#form-login").addEventListener("submit", (e) => {
  e.preventDefault();

  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;

  // console.log(email, password);

  let json = {
    email,
    password,
  };
  /** 
  * Transformando json objeto em string e de string para objeto.
  * 
  * console.log(json);

  let stringJSON = JSON.stringify(json);

  console.log(stringJSON);

  let jsonParse = JSON.parse(stringJSON);
  console.log(jsonParse);
  
  **/

  if (!json.email) {
    console.error("O campo email deve ser preenchido");
  } else if (!json.password) {
    console.error("O campo password deve ser preenchido");
  } else {
    console.info("Dados validado com sucesso!!");
  }
});
