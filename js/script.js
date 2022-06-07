const elPokemonList = document.querySelector(".pokemons-list");
for (let pokemo of pokemons){
    ////CREATE ELEMENT

    const newLi = document.createElement("li");
    const newImg = document.createElement("img");
    const newTitle = document.createElement("h5");
    const newText = document.createElement("p");
    const newAgeDiv = document.createElement("div");
    const newHeigt = document.createElement("span");
    const newWeigth = document.createElement("span");
    const newCandy = document.createElement("p");
    const newWeaknesses = document.createElement("p");

    /////SET ATTRIBUTE


    newLi.setAttribute("class", "card mb-3 p-3");
    newLi.style.width= "15rem";
    newImg.classList.add("card-img-top");
    newImg.setAttribute("src", pokemo.img);
    newTitle.classList.add("card-title", "fw-bolder");
    newText.classList.add("card-text");
    newAgeDiv.setAttribute("class", "age-body fw-bold");
    newHeigt.classList.add("card-age");
    newWeigth.classList.add("card-weigth", "mx-2")
    newAgeDiv.classList.add("card-div");
    newCandy.classList.add("card-candy", "mt-2", "fst-italic");
    newWeaknesses.classList.add("card-weaknesses","fst-italic", "fw-bold");



    newTitle.textContent=pokemo.name;
    newText.textContent=pokemo.type;
    newHeigt.textContent=pokemo.height;
    newWeigth.textContent=pokemo.weight;
    newCandy.textContent=pokemo.candy;
    newWeaknesses.textContent=pokemo.weaknesses;

    ///APPEND

    elPokemonList.appendChild(newLi);
    newLi.appendChild(newImg);
    newLi.appendChild(newTitle);
    newLi.appendChild(newText);
    newLi.appendChild(newAgeDiv);
    newAgeDiv.appendChild(newHeigt);
    newAgeDiv.appendChild(newWeigth);
    newLi.appendChild(newCandy);
    newLi.appendChild(newWeaknesses);
}