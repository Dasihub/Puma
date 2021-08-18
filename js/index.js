const head = document.querySelector('#scroll')
const logo_1 = document.querySelector('#logo_1')
const logo_2 = document.querySelector('#logo_2')
const logo_3 = document.querySelector('#logo_3')
const p_anime = document.querySelector('#p_anime')
const img_anime = document.querySelector('#img_anime')
const img = document.querySelector('#img_scroll')

window.addEventListener('scroll', () => {
    let a = scrollY
    if (a >= 100) {
        head.style.top = '0px'
        img.style.opacity = '1'
        img.style.visibility = 'visible'
        img.onclick = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }
    }else{
        head.style.top = '-200px'
        img.style.opacity = '0'
        img.style.visibility = 'hidden'
    }
    if (a >= 993) {
        logo_1.style.animation = '2s anime_logo_1'
        logo_2.style.animation = '2s anime_logo_2'
        logo_3.style.animation = '2s anime_logo_3'
    }
    if (a > 265) {
        p_anime.style.animation = '2s p_ani'
        img_anime.style.animation = '2s img_ani'
    }
    console.log(a);
})