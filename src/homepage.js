function createHome(){
    let content = document.querySelector("#content");
    content.innerHTML = "";
    
    let first = document.createElement("div");
    first.id = "first";

    let text = document.createElement("div");
    text.id="text";

    let title = document.createElement("div");
    title.id = "title";
    title.classList.add("title");
    title.textContent = "Welcome to saltychocolat";

    let div = document.createElement("div");
    div.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quisquam. Quos dignissimos suscipit natus quam obcaecati odio voluptatem eaque, libero neque enim, id aspernatur ipsam, laudantium dolor ut quia beatae! ";


    text.appendChild(title);
    text.appendChild(div);

    let color = document.createElement("div");
    color.id = "color";

    first.appendChild(text);
    first.appendChild(color);

    content.appendChild(first);


    let second = document.createElement("div");
    second.id = "second";


    title = document.createElement("div");
    title.classList.add("title");
    title.textContent = "Why choose us?";

    second.appendChild(title);
    content.appendChild(second);

    let third = document.createElement("div");
    third.id = 'third';

    let box1 = document.createElement("div");
    box1.classList.add("box");
    box1.textContent = "I";

    let box2 = document.createElement("div");
    box2.classList.add("box");
    box2.textContent = "Dont";

    let box3 = document.createElement("div");
    box3.classList.add("box");
    box3.textContent = "Really";

    let box4 = document.createElement("div");
    box4.classList.add("box");
    box4.textContent = "Know";

    third.appendChild(box1);
    third.appendChild(box2);
    third.appendChild(box3);
    third.appendChild(box4);

    content.appendChild(third);


}

export default createHome;