const boton1 = document.getElementById('boton1');
const menu1 = document.getElementById('menu1');

boton1.addEventListener('click', () => {
    menu1.style.display = 'block';
});

const boton2 = document.getElementById('boton2');
const menu2 = document.getElementById('menu2');

boton2.addEventListener('click', () => {
    menu2.style.display = 'block';
});

const boton3 = document.getElementById('boton3');
const menu3 = document.getElementById('menu3');

boton3.addEventListener('click', () => {
    menu3.style.display = 'block';
});

// Cerrar menus al hacer clic fuera de ellos
document.addEventListener('click', (e) => {
    if (!e.target.matches('button')) {
        menu1.style.display = 'none';
        menu2.style.display = 'none';
        menu3.style.display = 'none';
    }
});
