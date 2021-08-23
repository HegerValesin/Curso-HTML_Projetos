/**
 * 
 * 
*/

//Declaração de uma função
function calculaTabuada() {

    //obtendo do DOM o tbody da tabela
    let tabuada = document.querySelector("#tabuada tbody");
    
    //obtendo o valor A do campo input number e convertendo para inteiro
    let valorA = parseInt(document.querySelector("#valorA").value);
    //limpando a tabela
    tabuada.innerHTML = '';
    //Criando um laço de repetição de 0 a 10
    for (let valorB = 0; valorB <= 10; valorB++) {
      //Calculando o valor da linha atual
      let resultado = valorA * valorB;

      //Criando o template das colunas das linha atual
      let template = `
          <td>${valorA}</td>
          <td>*</td>
          <td>${valorB}</td>
          <td>=</td>
          <td>${resultado}</td>
      `;

      //Criando o elemento tr
      let tr = document.createElement("tr");

      //Inserindo as colunas na linhas
      tr.innerHTML = template;

      //Inserindo a linha na tabela
      tabuada.append(tr);
    }

}

//chamando a nossa função pela primeira vez
calculaTabuada();

//Adicionando o evento de alteração ao campo número
document.querySelector("#valorA").addEventListener('change', calculaTabuada)