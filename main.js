function add_item(){
    newpizza=document.getElementById("add_item").nodeValue;
    localStorage.setItem("newpizzakey",newpizza);
}