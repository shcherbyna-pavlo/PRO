const images = document.querySelectorAll('.slider-line img');
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const sliderLine = document.querySelector('.slider-line')
const slid = document.querySelector('.slider')

function slider() {
    prev.setAttribute('disabled', "")

    let count = 0;
    let width

    function width1 () {
        width = slid.offsetWidth
        console.log(width)
        images.forEach((el) => {
            el.style.width = width +"px"
        })
        sliderLine.style.width = width*images.length + 'px'
    }

    width1 ()

    function right () {
        count ++
    
        if(count === images.length-1) {
            next.setAttribute('disabled', "")
        }
        prev.removeAttribute('disabled')
        translate()
    }
    
    function left () {
        count--
    
        if(count === 0) {
            prev.setAttribute('disabled', "")
        }
        next.removeAttribute('disabled');
        translate()
    }
    
    function translate () {
        sliderLine.style.transform = 'translate(-' + count * width + 'px)'
    }

    prev.addEventListener('click', left)
    next.addEventListener('click', right)
}

slider()