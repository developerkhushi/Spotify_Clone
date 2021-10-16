console.log("Welcome to Spotify..")

//initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName: 'Shiddat Title Track', filePath: 'songs/1.mp3', coverPath: 'covers/cover1.jpg'},
    {songName: 'Phir Bhi Tumko chaahunga', filePath: 'songs/2.mp3', coverPath: 'covers/cover2.jpg'},
    {songName: 'Tum Hi Aana', filePath: 'songs/1.mp3', coverPath: 'covers/cover3.jpg'},
    {songName: 'Dil Ko Karaar Aaya', filePath: 'songs/1.mp3', coverPath: 'covers/cover4.jpg'},
    {songName: 'Thoda Thoda Pyar', filePath: 'songs/1.mp3', coverPath: 'covers/cover5.jpg'},
    {songName: 'Dil Mein Ho Tum', filePath: 'songs/1.mp3', coverPath: 'covers/cover6.jpg'},
    {songName: 'Phir Mulaqaat', filePath: 'songs/1.mp3', coverPath: 'covers/cover7.jpg'},
    {songName: 'Dhadak Title Track', filePath: 'songs/1.mp3', coverPath: 'covers/cover8.jpg'},
    {songName: 'Phir Chala', filePath: 'songs/1.mp3', coverPath: 'covers/cover9.jpg'}
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});
// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }   
})
//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
        // Update Seeker
        progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
        myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=> {
       audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})


const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
    makeAllPlays();
    songIndex = parseInt(e.target.id)
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})