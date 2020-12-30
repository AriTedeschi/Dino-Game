const player = document.querySelector('.player');

const jump = () =>{
    let position = 0;
    let upInterval = setInterval(() => {
        if(position >=150){
            clearInterval(upInterval);

            let fallInterval = setInterval(() => {
                if(position <= 0){
                    clearInterval(fallInterval);
                } else{
                    position -= 20;
                    player.style.bottom = `${position}px`;
                }
            }, 20);

        } else{
            position += 20;
            player.style.bottom = `${position}px`;
        }

    }, 20)
}

let handleKeyUp = (e) => {
    if(e.keyCode === 32){
        jump();
    }
} 

document.addEventListener('keyup', handleKeyUp);
