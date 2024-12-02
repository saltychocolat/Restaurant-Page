function createMenu(){
    let content = document.querySelector("#content");
    content.innerHTML = "";

    let gridLayout = document.createElement("div");
    gridLayout.classList.add("gridLayout");

    for(let i =0;i<8;i++){
    
        let food = document.createElement("div");
        food.classList.add("food");
    
        let img = document.createElement("img");
        img.src = "http://itap-world.com/uploads/countries/1/1214/1041.jpg";
    
        let foodTitle = document.createElement("div");
        foodTitle.classList.add("foodTitle");
        foodTitle.textContent = "Kung Fu Dish";
    
        let subtitle = document.createElement("div");
        subtitle.classList.add("subtitle");
    
        let price = document.createElement("div");
        price.textContent = "$9.99";
    
        let orderButton = document.createElement("button");
        orderButton.classList.add("orderButton");
        orderButton.textContent = "Order Now!";
    
        subtitle.appendChild(price);
        subtitle.appendChild(orderButton);
    
        food.appendChild(img);
        food.appendChild(foodTitle);
        food.appendChild(subtitle);
    
    
        gridLayout.appendChild(food);

    }

    content.appendChild(gridLayout);

}

export default createMenu;