function createContacts(){
    let content = document.querySelector("#content");
    content.innerHTML = "";

    let contacts = document.createElement("div");
    contacts.classList.add("contacts");

    let contactTitle = document.createElement("div");
    contactTitle.classList.add("contactTitle");
    contactTitle.textContent = "Contact US!";

    let emaildiv = document.createElement("div");
    emaildiv.classList.add("contactText");
    emaildiv.textContent = "Email : spongebob@gmail.com";

    let numberdiv = document.createElement("div");
    numberdiv.classList.add("contactText");
    numberdiv.textContent = "Number : spongebob number";

    let locationdiv = document.createElement("div");
    locationdiv.classList.add("contactText");
    locationdiv.textContent = "Location : Bikini Bottom china";

    contacts.appendChild(contactTitle);
    contacts.appendChild(emaildiv);
    contacts.appendChild(numberdiv);
    contacts.appendChild(locationdiv);

    content.appendChild(contacts);
    
}

export default createContacts;