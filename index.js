
const player = document.querySelector("#player");
const btnPlay = document.querySelector("#btnPlay");
const btnPause = document.querySelector("#btnPause");
const btnStop = document.querySelector("#btnStop");
const volumen = document.querySelector("#volume");
const canciones = document.querySelectorAll("#song");
const aleatorio = document.querySelectorAll("#random");


player.volume = volumen.value

btnPlay.addEventListener("click", playMusic);
btnPause.addEventListener("click", pauseMusic);
btnStop.addEventListener("click", stopMusic);
volumen.addEventListener("change", changeVolumen);
random.addEventListener("click", RandomMusic);
player.addEventListener("ended", playNextSong);

let currentSongIndex = 0;
function playNextSong() {
    currentSongIndex++;
    if (currentSongIndex >= canciones.length) {
        currentSongIndex = 0; // Si alcanza el final de la lista, volver al inicio
    }
    player.setAttribute("src", `media/${canciones[currentSongIndex].textContent}.mp3`);
    playMusic();
}

function RandomMusic(){
    let item = parseInt(Math.random()* canciones.length)
    player.setAttribute("src", `media/${song[item].textContent}.mp3`)
    playMusic();
}

for (let song of canciones){
    song.addEventListener("click", changeSong)
}

function changeSong(evt){
    player.setAttribute("src", `media/${evt.target.textContent}.mp3`);
    playMusic();
}

function playMusic(){
    player.play();
}

function pauseMusic(){
    player.pause();
}

function stopMusic(){
    player.currentTime = 0;
}

function changeVolumen(evt){
    player.volume = evt.target.value;
}





