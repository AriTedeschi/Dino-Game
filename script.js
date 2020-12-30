const player = document.querySelector('.player');
const fundo  = document.querySelector('.fundo');

let isJumping  = false;
let isGameOver = false;
let position   = 0;

const jump = () =>{
    isJumping = true;

    let upInterval = setInterval(() => {
        if(position >=150){
            clearInterval(upInterval);

            let fallInterval = setInterval(() => {
                if(position <= 0){
                    clearInterval(fallInterval);
                    isJumping = false;
                } else{
                    position -= 22;
                    player.style.bottom = `${position}px`;
                }
            }, 22);

        } else{
            position += 22;
            player.style.bottom = `${position}px`;
        }
    }, 22)
}

function createCactus() {
    const cactus = document.createElement('div');
    //Posição inicial responsiva de acordo com o tamanho da tela
    let cactusPosition = screen.width;
    let randomTime     = Math.random() * 6000;
  
    if (isGameOver) return;
  
    cactus.classList.add('cactus');
    fundo.appendChild(cactus);
    cactus.style.left = cactusPosition + 'px';
  
    let leftTimer = setInterval(() => {
      if (cactusPosition < -60){
        clearInterval(leftTimer);
        fundo.removeChild(cactus);
      } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60){
        clearInterval(leftTimer);
        isGameOver = true;
        document.body.innerHTML = `
            <h1 class="game-over">Fim de jogo</h1></br></br>
            <button class="centro" onclick="document.location.reload(true)">Tentar novamente</button>
        `;
      } else{
        cactusPosition -= 10;
        cactus.style.left = cactusPosition + 'px';
      }
    }, 20);
  
    setTimeout(createCactus, randomTime);
}

let handleKeyUp = (e) => {
    if(e.keyCode === 32 || e.keyCode === 38)
        if(!isJumping)
            jump();
} 

document.addEventListener('keyup', handleKeyUp);
createCactus();
