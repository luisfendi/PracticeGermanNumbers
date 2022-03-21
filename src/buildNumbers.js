
function build(){
    let textes = [];
    let alpha = {
        0: 'null',
        1: 'eins',
        2: 'zwei',
        3: 'drei',
        4: 'vier',
        5: 'funf',
        6: 'sechs',
        7: 'sieben',
        8: 'acht',
        9: 'neun',
        10: 'zehn',
        11: 'elf',
        12: 'zwolf',
    }
    function concat(i, rest, word,){
            if(rest == 1){
                alpha[i] = 'ein' + word;
            }
            else {
                alpha[i] = alpha[rest] + word;
            }
            textes.push(alpha[i])
    }

    for(let i = 0; i <= 1000; i++){
        if(i >= 0 && i <= 12){
            textes.push(alpha[i])
        }
        else if(i > 12 && i < 20){
            concat(i, i - 10, 'zehn')
        }
        else if(i > 20 && i < 30){
            concat(i, i - 20, 'undzwanzig')
        }
        else if(i > 30 && i < 40){
            concat(i, i - 30, 'unddreissig')
        }
        else if(i > 40 && i < 50){
            concat(i, i - 40, 'unddvierzig')
        }
        else if(i > 50 && i < 60){
            concat(i, i -50, 'undfunfzig')
        }
        else if(i > 60 && i < 70){
            concat(i, i - 60, 'undsechzig')
        }
        else if(i > 70 && i < 80){
            concat(i, i -70, 'undsiebzig')
        }
        else if(i > 80 && i < 90){
            concat(i, i -80, 'undachtzig')
        }
        else if(i > 90 && i < 100){
            concat(i, i - 90, 'undneunzig')
        }
        else if(i % 10 == 0 && i > 10 && i <= 100){
            switch(i){
                case 20: alpha[i] = 'zwanzig';
                         textes.push(alpha[i]);
                         break
                case 30: alpha[i] = 'dreissig';
                         textes.push(alpha[i]);
                         break
                case 70: alpha[i] = 'siebzig';
                         textes.push(alpha[i]);
                         break
                case 100: alpha[i] = 'ein hundert';
                         textes.push(alpha[i]);
                         break
                default: concat(i, i / 10, 'zig')
            }   
        }
    }
    return textes
}

export { build }

