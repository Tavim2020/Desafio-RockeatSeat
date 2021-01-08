// armazenando as variáveis para acinar o evento e armazenar os conteudos da função
var imagens = document.querySelectorAll('.imagem-push');
var nameRecipes = document.querySelectorAll('.nome-receita');
var autores = document.querySelectorAll('.autor');


// código da função
function pushId(){
    // pegando o id dos elementos e adicionando a rota da aplicação
    var id = this.parentNode.id;
    window.location.assign(`/recipes/${id}`);  
    
    // variável para puxar os elementos da id selecionada
    var number = id;

    
    var imgSrc = imagens[number].src;
    var nameRecipeText = nameRecipes[number].textContent;
    var autorText = autores[number].textContent;

    console.log(imgSrc, nameRecipeText, autorText)
    
}


// loop para criar de maneira generica o evento de todas as imagens
for(var image of imagens){
    image.addEventListener('click', pushId);
}