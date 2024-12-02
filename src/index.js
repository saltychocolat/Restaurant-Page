import "./styles.css"   
import "./homepage.js"
import createHome from "./homepage.js";
import createMenu from "./menu.js";

const options ={home:createHome,menu:createMenu}
const header = document.querySelector("header");

document.onload = createHome();
header.addEventListener("click",function(event){
    let target = event.target.id;
    if(target in options)
        options[target]();

})
