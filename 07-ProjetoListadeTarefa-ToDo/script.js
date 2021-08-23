let data = [];
/**
 * ForEach vai rodar to array e vi fazer o comando dentro dele.
 * 
 * vai cria a variável li e depois ele ver que a variável esta vazia no innerHTML
 * 
 * e em seguida vai dando append no todo e criando o li conforme esta no array
 * 
 * foi criado um if antes de dar o append para incluir um classe para definir se a tarefa * foi feita ou não, com esse evento você pode marcar a tarefa e ela vai marcar como feita * e desmarcar.
 * 
 * colocamos o forEach dentro de uma função para quando adicionarmos mais um item ele vai atualizar a função.
 * foi colocado também o innerHtml(document.querySelector('.todo').innerHTML = '';) vazio para quando adicionarmos mais uma tarefa, ele zera o html e busca novamente o array com o item incluso sem repetir
 * Foi criado um button e para poder usar ele para excluir somente a linha desejada precisámos descobrir em qual posição ele se encontra no array, e dir(diretório) na posição parentNode.
*/
function renderTodo() {

  document.querySelector('.todo').innerHTML = '';

  data.forEach(task => {
    let li = document.createElement('li');

    li.innerHTML = `<input type="checkbox" id="task-${task.id}">
                    <label for="task-${task.id}">${task.title}</label>
                    <button type="button">x</button>`;

    li.querySelector('input').addEventListener("change", e => {

      if (e.target.checked) {
        li.classList.add('complete');
      } else {
        li.classList.remove('complete');
      }
    });

    li.querySelector('button').addEventListener('click', e => {
      let todoId = e.target.parentNode.querySelector('input').id.split('-')[1];
      let title = li.querySelector('label').innerText;

      if (confirm(`Deseja realmente excluir ${title}?`)) {
        //como minha aerofunctio só tem uma linha posso usar conform expecifidado
        data = data.filter(task => task.id !== parseInt(todoId));

        renderTodo();
      }
    });

    document.querySelector('.todo').append(li);

  });
};

/**
 * Criamos um input no HTML e o que for escrito neste input vamos lançar no array e atualizar a pagina.
 * 
 * Já colocamos o evento keyup para funcionar no input e já estamos escutando tudo que é digitado nele.
 * 
 * no if colocamos para ele observar que vamos executar o evento quando pressionarmos o Enter que fica no KEY do objeto da função, e no e.target.value ele vai trazer o que foi escrito no input.
 * 
 * 
*/
document.querySelector('#new-task').addEventListener('keyup', e => {

  if (e.key === 'Enter') {
    data.push({
      id: data.length + 1,
      title: e.target.value,
    });

    e.target.value = '';

    renderTodo();

  }
});

renderTodo();