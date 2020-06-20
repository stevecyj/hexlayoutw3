; (function () {
    let openMenu = document.getElementById('openMenu')
    let closeMenu = document.getElementById('closeMenu')
    let hamburgerMenu = document.querySelector('.hamburgerMenu')
    openMenu.addEventListener('click', function () {
        hamburgerMenu.style.left = "0%";
    })
    closeMenu.addEventListener('click', function () {
        hamburgerMenu.style.left = "-100%";
    })
    hamburgerMenu.addEventListener("mouseleave", function () {
        hamburgerMenu.style.left = "-100%";
    })
})();
; (function () {
    let imgs = document.querySelectorAll("img[src*='@2x']")
    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) | /(Android)/i.test(navigator.userAgent)) {
        imgs.forEach((img) => {
            img.src = img.src.replace('@2x', "")
        })
    }
})();