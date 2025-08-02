const menu = document.getElementById('menu-lateral');
const btnMenu = document.getElementById('btn-menu');
const btnIcon = btnMenu.querySelector('i');

btnMenu.onclick = () => {
    menu.classList.toggle('aberto');
    btnMenu.classList.toggle('menu-aberto');
    if (menu.classList.contains('aberto')) {
        btnIcon.classList.remove('fa-bars');
        btnIcon.classList.add('fa-times');
        btnMenu.setAttribute('aria-label', 'Fechar menu');
    } else {
        btnIcon.classList.remove('fa-times');
        btnIcon.classList.add('fa-bars');
        btnMenu.setAttribute('aria-label', 'Abrir menu');
    }
};