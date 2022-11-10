const images = document.querySelectorAll('.slider-line img');
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const sliderLine = document.querySelector('.slider-line')
const slid = document.querySelector('.slider')

function slider() {
    prev.setAttribute('disabled', "");
    
    let count = 0;
    let width;
    let n
    let c
    function a (ev) {
        c = ev.offsetX;
        console.log(c)
    }
    function b (ev) {
        n = ev.offsetX
        console.log(n)
    }
    
    images.forEach((el) => {
        el.addEventListener('mousedown', a)
        // el.addEventListener('mouseup', b)
        el.addEventListener('dragend', scroll)
    });

    function scroll () {
        if(n-c >= width/10){
            right ()
        };
        if(n-c <= -(width/10)){
            left ()
        };
    }

    console.log('вправо', n-c)
    console.log('вліво', n-c)

    function width1 () {
        width = slid.offsetWidth;
        images.forEach((el) => {
            el.style.width = width +"px";
        })
        sliderLine.style.width = width*images.length + 'px';
        translate ();
    }
    width1 ();

    function right () {
        count ++;
        
        if(count === images.length-1) {
            next.setAttribute('disabled', "");
        }
        prev.removeAttribute('disabled');
        
        translate();
    }
    
    function left () {
        count--;
        
        if(count === 0) {
            prev.setAttribute('disabled', "");
        }
        next.removeAttribute('disabled');
        
        translate();
    }
    
    function translate () {
        sliderLine.style.transform = 'translate(-' + count * width + 'px)';
    }
    
    window.addEventListener('resize', width1);
    prev.addEventListener('click', left);
    next.addEventListener('click', right);
}

slider();


