import "./styles.css"   
import "./homepage.js"
import createHome from "./homepage.js";

const options ={home:createHome}
const header = document.querySelector("header");
header.addEventListener("click",function(event){
    let target = event.target.id;
    if(target in options)
        options[target]();

})
