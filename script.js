
//Questão 1. Fazendo assim precisa criar um id= "item4" no último article

/* function adicionaItem(event){  
   const newArticle = document.createElement('article');

   const newItem = document.createTextNode('Lá vem a força, lá vem a magia. Que me incendeia o corpo de alegria.');

   newArticle.appendChild(newItem);

   const articleRef = document.getElementById('item4');

   articleRef.insertAdjacentElement('afterend', newArticle)
} */


//Questão 2
function adicionaItem(event){
    const newArticle = document.createElement('article');

    const newItem = document.createTextNode('FUI ADICIONADO!!');

    newArticle.appendChild(newItem);

    container.insertAdjacentElement('beforeend', newArticle);

    //isso aqui está criando uma classe no article e definido que ela se chama item
    newArticle.setAttribute('class', 'item')

    newArticle.setAttribute('onclick', 'removeItem(event)')
    console.log(newArticle)
}

//Questão 3
function removeItem(event){
    event.target.remove(adicionaItem)
}
 





