class AudioController
{
    constructor()     
    {
        this.bgMusic = new Audio('Resources/Audio/Rollinat5.mp3');
        this.bgMusic.volume = 0.5;
        this.bgMusic.loop = true;
    }
    startMusic()
    {
        this.bgMusic.play();
    }
    stopMusic()
    {
        this.bgMusic.pause();
        this.bgMusic.currentTime = 0;
    }
}

class Memorist
{
    constructor(_audition)
    {
        this.audioController = new AudioController();
    }

    startGame()
    {
        setTimeout(() =>
        {
            this.audioController.startMusic();
        }, 500)
    }
}

if (document.readyState == 'loading')
{
    document.addEventListener('DOMContentLoaded', ready);
} 
else 
{
    ready();
}

function ready()
{
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let cards = Array.from(document.getElementsByClassName('card'));
    let game = new Memorist (100, cards);

    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            game.startGame();
        });
    });

}