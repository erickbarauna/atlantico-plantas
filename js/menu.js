function clickMenu() {
    if (menu.style.display == "block") {
        burguer.innerHTML = "menu";
        menu.style.display = "none";
        menucadastro.style.display = "none";
    }
    else {
        burguer.innerHTML = "close";
        menu.style.display = "block";
        menucadastro.style.display = "flex";
    }
}