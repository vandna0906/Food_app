async function showData(url) {
    let res = await fetch(url);
    let data = await res.json();
    return data;
}

function appendIt(d, parent) {
    parent.innerHTML = null;
    d.forEach(el => {
        let divv = document.createElement("div");
        let dish = document.createElement("h3");
        dish.innerHTML = `${el.strMeal}`;

        let img = document.createElement("img");
        img.src = el.strMealThumb;
        
        let cat = document.createElement("p");
        cat.innerHTML = `Category: ${el.strCategory}`;
    
        let location = document.createElement("p");
        location.innerHTML = `Country of origin: ${el.strArea}`
       
        divv.append(dish, img, cat, location);
        parent.append(divv);
    })
}
    export { showData, appendIt}
