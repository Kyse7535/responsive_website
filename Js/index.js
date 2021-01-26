let btn = document.getElementsByTagName('button')[0];
let menu = document.getElementsByTagName('ul')[0];
btn.addEventListener('click', () => {
    if (menu.style.display == "none") {
        btn.innerHTML = '<i class="fas fa-times"></i> Menu';
        menu.style.display = "grid";
    } else {
        btn.innerHTML = '<i class="fas fa-bars"></i> Menu';
        menu.style.display = "none";
    }
});

let change = false;
window.addEventListener('resize', () => {
    if (this.innerWidth < 1001 && !change) {
        change = true
        btn.innerHTML = '<i class="fas fa-bars"></i> Menu';
        menu.style.display = "none";
    }
    if (this.innerWidth > 1000) {
        menu.style.display = "grid";
        change = false
    }
})