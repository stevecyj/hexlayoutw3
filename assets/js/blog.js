;(function(){
    let breadcrumbMobile = document.querySelector('.breadcrumbMobile')
    let arrMenuOpen = document.querySelector('.arrMenuOpen')
    console.log('a')
    arrMenuOpen.addEventListener('click',function(){
        breadcrumbMobile.classList.toggle('active')
    })
})();