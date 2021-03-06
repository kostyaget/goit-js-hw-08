import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);
replay();

player.on('timeupdate', throttle(function(data) {    

    const dataSeconds = data.seconds;
    localStorage.setItem('videoplayer-current-time', dataSeconds);
},1000));

function replay() {

    const currentDataSeconds = localStorage.getItem('videoplayer-current-time');
    player.setCurrentTime(currentDataSeconds).then(function(seconds) {
        }).catch(function(error) {
            switch (error.name) {
                case 'RangeError':            
                    break;
                default:            
                    break;
            }
        });
        };