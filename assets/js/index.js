var recipes = document.querySelectorAll('.best-recipe');

for (var recipe of recipes){
    recipe.style.cursor = 'pointer';
    recipe.addEventListener('click', function executa(){

        // armazenando as variaveis para mandar em outra página
        var imgSrcExport = this.src;
        var recipeNameExport = this.parentNode.children[1].textContent;
        var autorRecipeNameExport = this.parentNode.children[2].textContent;

        // armazenando em localStorage
        localStorage.setItem('srcImgExport', `${imgSrcExport}`);
        localStorage.setItem('recipeNameExport', `${recipeNameExport}`);
        localStorage.setItem('autorRecipeNameExport', `${autorRecipeNameExport}`);

        window.location.href = '/principaisInstrucoes';  
    })
}
