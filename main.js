const navE = document.querySelector('.nav')

let isScroll = false

window.onscroll = function(e) {
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
        navE.classList.add('active')
    }else{
        navE.classList.remove('active')
    }
}