
function scrollListen(){
    addEventListener('scroll', () => {
        let scrollButton = document.querySelector('.scrollButton');

        if(scrollY > window.innerHeight / 3){
            scrollButton.style.display = 'block';
        }
        else {
             scrollButton.style.display = 'none';
        }
    }) 
}

function upToScroll(){
    //scrollButton.style.opacity = 0;
    window.scrollTo({top: 0, behavior: 'smooth'})
}

export {scrollListen, upToScroll}


