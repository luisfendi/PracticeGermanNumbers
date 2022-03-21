
import gsap from 'gsap'
function move(el){
    el.forEach(element => 
        gsap.from(element, {x: (Math.random() * (-30, 30) - 10) + 'vw',
        y: (Math.random() * (-30, 30) - 10) + 'vh',
        duration: 2,
        ease: "elastic.out(1, 0.3)",
    }));
}

function buttonEffect(el){
    console.log(el)
    gsap.from(el, {scale: .9})
}



export {move, buttonEffect};