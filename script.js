// array that's used to store songs
let playlist = [];

function addSong() {
    // gets the title from 1st input box
    let theTitle = document.getElementById("songTitle").value;
    // gets the artist from the 2nd input box 
    let theArtist = document.getElementById("artist").value;
    // gets the duration from the 3rd input box
    let theDuration = document.getElementById("duration").value;

    // object that stores title, artist, and duration
    let Song = {
        songTitle: theTitle,
        songArtist: theArtist,
        songDuration: theDuration
    };

    // checks if at least one of the inputs is empty
    if (theTitle === '' || theArtist === '' || theDuration === '') {
        // display error message
        alert("Fill in all the boxes!");
        // stop script.js
        return;
    }

    // add song to the playlist
    playlist.push(Song);

    // premade function that displays songs from the playlist on the web page
    displayPlaylist();

    // clear input values after adding a song
    document.getElementById("songTitle").value = '';
    document.getElementById("artist").value = '';
    document.getElementById("duration").value = '';
}








//DO NOT EDIT BELOW THIS LINE

//This function updates the HTML with whatever's in the playlist array
function displayPlaylist() {
    let playlistDiv = document.getElementById('playlist');
    
    playlistDiv.innerHTML = '';
    
    playlist.forEach((song, index) => {
        let songCard = document.createElement('div');
        songCard.className = 'song-card';
    
        songCard.innerHTML = `
            <div class="song-number">${index + 1}</div>
            <div class="song-info">
                <div class="song-title">${song.songTitle}</div>
                <div class="song-artist">${song.songArtist}</div>
            </div>
            <div class="duration">${song.songDuration}</div>
        `;
        
        playlistDiv.appendChild(songCard);
    });
}