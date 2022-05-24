//open an close side menu

let togg = document.querySelector('.toggle-toggle')

let openm = document.querySelector('.open-menu')

togg.onclick = function() {
    openm.classList.toggle('active')
}
