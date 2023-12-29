var music_player = new Audio(),
    currentTime = document.getElementById('currentTime'),
    durationTime = document.getElementById('durationTime'),
    seek_bar = document.querySelector('.seek_bar_inner'),
    play_btn = document.querySelector('.play_btn');

music_player.src = "seven.ogg";

function getTimeFormat(time_var) {

    var sec_num = parseInt(time_var, 10);
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var sec = sec_num - (hours * 3600) - (minutes * 60);

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }

    if (hours == 0) {
        return minutes + ":" + sec;
    } else {
        return hours + ":" + minutes + ":" + sec;
    }
}

music_player.addEventListener('timeupdate', function() {
    var player_currentTime = getTimeFormat(music_player.currentTime);
    var player_duration = getTimeFormat(music_player.duration);
    var seek_width = music_player.currentTime * 100 / music_player.duration;

    currentTime.innerHTML = player_currentTime;
    durationTime.innerHTML = player_duration;
    seek_bar.style.width = seek_width + "%";
});

var cnv = document.getElementById('cnv');

function play_song() {
    if (music_player.paused) {
        cnv.style.display = "flex";
        play_btn.style.background = "url('./assets/pause.jpg')center no-repeat";
        play_btn.style.backgroundSize = "50%";
        music_player.play();

    } else {
        play_btn.style.background = "url('./assets/play.png')center no-repeat";
        play_btn.style.backgroundSize = "50%";
        music_player.pause();

        function fondo() {
            cnv.style.display = "none";
        }
        fondo();
    }
}