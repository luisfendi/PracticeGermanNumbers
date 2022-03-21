export default function (){
        let minInput = document.querySelector('.range-min');
        let maxInput = document.querySelector('.range-max');
        let sliderTrack = document.querySelector('.track-slider');

        function addPostionLeft(){
            if(+minInput.value > +maxInput.value){
                sliderTrack.style.left = +maxInput.value + '%';
            }else {
                sliderTrack.style.left = +minInput.value + '%';
            }

        }
        function addPostionRight(){
            if(+maxInput.value < +minInput.value){
                sliderTrack.style.right = 101 - +minInput.value +  '%';
            }
            else{
                sliderTrack.style.right = 101 - +maxInput.value + '%';
            } 
           
        }
        addPostionLeft()
        addPostionRight()
    }
