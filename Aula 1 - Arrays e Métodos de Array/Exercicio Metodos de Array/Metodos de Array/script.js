// Adiciona ao fim da array
function executarPush() {
  const array = ['🍎', '🍌'];
  array.push("🍇");
  const resultado = array;
  document.getElementById('resultado-push').textContent = resultado;
}

// Remove o ultimo elemento do array
function executarPop() {
  const array = ['🍎', '🍌', '🍇'];
  array.pop();
  const resultado = array;
  document.getElementById('resultado-pop').textContent = resultado;
}

// Remove o primeiro elemento
function executarShift() {
  const array = ['🍎', '🍌', '🍇'];
  array.shift();
  const resultado = array;
  document.getElementById('resultado-shift').textContent = resultado;
}

// Adiciona o elemento no começo
function executarUnshift() {
  const array = ['🍌', '🍇'];
  array.unshift("🍓");
  const resultado = array;
  document.getElementById('resultado-unshift').textContent = resultado;
}

// Verifica o que tem na array
function executarIncludes() {
  const array =  ['🍎', '🍌', '🍇'];
  const resultado = array.includes("🥝");
  document.getElementById('resultado-includes').textContent = resultado;
}

// Inverte o array
function executarReverse() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array.reverse();
  document.getElementById('resultado-reverse').textContent = resultado;
}

// Array 1: ordena em ordem crescente
// Array 2: ordena em ordem alfabetica
function executarSort() {
  const array = [3, 1, 4, 2, 11];
  const array2 = ["Brasil", "Argentina", "Noruega", "Italia"];

  const resultado = array.sort(( a, b ) => a -b);
  document.getElementById('resultado-sort').textContent = resultado;
  const resultado2 = array2.sort().reverse();
  document.getElementById('resultado-sort2').textContent = resultado2;
}


function executarSlice() {
  const array = ['🍎', '🍌', '🍇', '🍓'];
  const resultado = array;
  document.getElementById('resultado-slice').textContent = resultado;
}

function executarSplice() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array;
  document.getElementById('resultado-splice').textContent = resultado;
}


function executarIndexOf() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array;
  document.getElementById('resultado-indexof').textContent = resultado;
}

function executarJoin() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array;
  document.getElementById('resultado-join').textContent = resultado;
}

/* Loops de array */

// Vai passar por cada item do array e se transformar nele, fazendo o que você pede naquele item
function executarForEach() {
  const array = ['🍎', '🍌', '🍇'];
  array.forEach(pegaItem => console.log(pegaItem));
  const resultado = 'Resultado da operação forEach';
  document.getElementById('resultado-foreach').textContent = resultado;
}

// Gera uma copia da lista atual mas modificada
function executarMap() {
  const array = ['🍎', '🍌', '🍇'];
  array.map(pegaItem => `✅ ${pegaItem}`)
  const resultado = 'Resultado da operação map';
  document.getElementById('resultado-map').textContent = resultado;
}

// Mesma coisa do que em cima mas com usabilidade a mais
 function executarMapHTML() {
    const dispositivos = ['🎮', '🕹️', '💻'];
    const resultado = dispositivos.map(pegaItem => {
      return `<h1> Item ${index + 1} em promoção! </h1>
      <p> ${pegaItem} </p>`
    });
    document.getElementById('resultado-map-html').innerHTML = resultado.join('<br>');
  }

// Faz um filtro no array e retorna ela filtrada
function executarFilter() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array.filter(pegaItem => pegaItem === "🍎");
  document.getElementById('resultado-filter').textContent = resultado;
}

// Retorna o item que está sendo procurado, mas se não existir retorna -1
function executarFind() {
  const array =  ['🍎', '🍌', '🍇'];
  const resultado = array.find(pegaItem => pegaItem === "🍇");
  document.getElementById('resultado-find').textContent = resultado;
}

// Retorna a posição do elemento no array
function executarFindIndex() {
  const array =  ['🍎', '🍌', '🍇'];
  const resultado = array.findIndex(pegaItem => pegaItem === "🍇");
  document.getElementById('resultado-findIndex').textContent = resultado;
}

// Soma todos os numeros dentro do array
function executarReduce() {
  const array = [1, 2, 3, 4];
  const resultado = array.reduce((totalAcumulado, valorAtual) => {
    return totalAcumulado + valorAtual
  }, 0);
  document.getElementById('resultado-reduce').textContent = resultado;
}

// Valida se os numeros dentro do array são maiores do que o numero que defini
function executarEvery() {
  const array = [10, 20, 30, 40];
  const resultado = 'Resultado da operação every';
  document.getElementById('resultado-every').textContent = resultado;
}

//
function executarSome() {
  const array = ['🍎', '🍌', '🥝'];
  const resultado = 'Resultado da operação some';
  document.getElementById('resultado-some').textContent = resultado;
}

/* Encadeamento */

function executarEncadeamento() {
  const jogos = ['Zelda', 'Mario', 'Elden Ring', 'Fortnite', 'Minecraft'];
  const resultado = 'Resultado da operação encadeada';
  document.getElementById("resultado-encadeamento").textContent = resultado.join(', ') || 'Nenhum jogo encontrado';
}



// Declara array
let nome = ["Caio", 1, "Fulano"];
console.log(nome[2])

// Atualiza array
nome[2] = "Matheus Bidu"

// Tamanho do array
nome.length

// Arrow function
// const ordernar = (a, b) => a - b
