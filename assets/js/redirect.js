// armazenando as variaveis que irao importar os componentes 
var img = document.querySelector('#load-img');
var recipeName = document.querySelector('.titulo-modal');
var autorRecipeName = document.querySelector('.autor-modal');

// importando os componentes do localstorage
var imgImport = localStorage.srcImgExport;
var recipeNameImport = localStorage.recipeNameExport;
var autorRecipeNameImport = localStorage.autorRecipeNameExport;

// armazenando os conteudos já importados
img.src = imgImport;
recipeName.innerHTML = recipeNameImport;
autorRecipeName.innerHTML = autorRecipeNameImport;

// retirando os conteudos já carregados
if((img.src != null) && (recipeName.innerHTML != null) && (autorRecipeName.innerHTML != null)){
    localStorage.removeItem('srcImgExport');
    localStorage.removeItem('recipeNameExport');
    localStorage.removeItem('autorRecipeNameExport');
}

function undefinedContent(){
    if((imgImport === undefined) && (recipeNameImport === undefined) && (autorRecipeNameImport === undefined)){
        window.location.href='/';
    }
}

window.addEventListener('load', undefinedContent);