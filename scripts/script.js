

/* Classe para exibir e esconder a o menu lateral */
// Pega o elemento DOM pela classe Css Instânciada


document.querySelector(".hamburguer").addEventListener("click", () =>                 // Listenner pra ouvir a função CLick e ativar a classe "show menu"
    document.querySelector(".container").classList.toggle("show-menu")    // Setta uma nova classe com propriedades que exibem o menu lateral
)

