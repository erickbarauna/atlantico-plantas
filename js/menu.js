function clickMenu() {
    if (menu.style.display == "none") {
        burguer.innerHTML = "menu";
        menu.style.display = "block";
        menucadastro.style.display = "block";
    }
    else {
        burguer.innerHTML = "close";
        menu.style.display = "none";
        menucadastro.style.display = "none";
    }
}