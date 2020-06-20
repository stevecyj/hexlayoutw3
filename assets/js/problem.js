; (function () {
    let qaOpen = document.querySelectorAll('.qaList li')
    qaOpen.forEach((el) => {
        el.addEventListener('click', function (e) {
            this.classList.toggle('active')
        })
    })
})();