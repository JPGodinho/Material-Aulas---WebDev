// Dados de exemplo dos posts
let posts = [
    {
        text: "Este é o primeiro post",
        category: "Notícias",
        image: "https://placedog.net/150?random=1",
        date: "12/10/2021 12:00:00"
    },
    {
        text: "Este é o segundo post",
        category: "Dicas",
        image: "https://placedog.net/150?random=2",
        date: "12/10/2022 12:00:00"
    },
    {
        text: "Este é o terceiro post teste",
        category: "Eventos",
        date: "12/10/2023 12:00:00"
    }
];

window.onload = function(){
    mostrarPosts();

    document.querySelector("#postForm").addEventListener("submit", addPost)
}


// Create
function addPost(e){
    e.preventDefault();

    const textoPost = document.querySelector("#postText").value;
    const categoriaPost = document.querySelector("#postCategory").value;
    const imagemPost = document.querySelector("#postImage").value;

    const postNovo = {
        text: textoPost,
        category: categoriaPost,
        image: imagemPost,
        date: new Date().toLocaleString()
    }

    posts.unshift(postNovo)

    document.querySelector('#postForm')

    mostrarPosts()
}

// Read
function mostrarPosts(){
    // pegando o elemento onde os tweets estão sendo inseridos
    const listaPosts = document.querySelector("#postList")
    listaPosts.innerHTML = ""

    // passando pelo array e criando um tweet para cada um
    posts.forEach(pegaItem => {
        const cardPost = document.createElement("div")
        cardPost.classList.add("card")

        cardPost.innerHTML = `
            <h2>${pegaItem.text}</h2>
            <img src="${pegaItem.image}"/>
            <p>Categoria: ${pegaItem.category}</p>
            <p>Data: ${pegaItem.date}</p>
            <button>Editar</button> <button>Apagar</button>
        `

        listaPosts.append(cardPost)
    })
}

// Update
function editarPosts(){

}

// Delete
function excluirPosts(){

}