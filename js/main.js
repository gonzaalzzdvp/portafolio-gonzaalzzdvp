(function () {
    const hamburguer = document.getElementById('hamburguer');
    const navbar = document.getElementById('navbar');
    hamburguer.addEventListener('click', () =>{
        navbar.classList.toggle('open')
    });
})()
