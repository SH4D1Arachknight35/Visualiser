//-----------------------------------------------------------------------------------
// WE AudioListener ( visualizers )
//-----------------------------------------------------------------------------------
function wallpaperAudioListener(audioArray) {
    
    let audioCanvas         = document.getElementById('AudioCanvas1');
    audioCanvas.height      = "250";
    audioCanvas.width       = "1440";
    let audioCanvasCtx      = audioCanvas.getContext('2d'); 

    audioCanvasCtx.fillStyle = 'rgb(0,0,0)';
    audioCanvasCtx.fillRect(0, 0, audioCanvas.width, audioCanvas.height);
    var barWidth = Math.round(1.0 / 128.0 * audioCanvas.width);
    audioCanvasCtx.fillStyle = 'rgb(255,69,0)';
    
    for (var i = 0; i < audioArray.length / 2; ++i) {
        var height = audioCanvas.height * Math.min(audioArray[i], 1);
        audioCanvasCtx.fillRect(barWidth * i * 2, audioCanvas.height - height, barWidth, height);
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    let audioCanvas2         = document.getElementById('AudioCanvas2');
    audioCanvas2.height      = "250";
    audioCanvas2.width       = "250";
    let audioCanvasCtx2      = audioCanvas2.getContext('2d'); 

    //audioCanvasCtx2.fillStyle = 'rgb(0,0,0)';
    audioCanvasCtx2.fillRect(0, 0, audioCanvas2.width, audioCanvas2.height);
    var barWidth2 = Math.round(1.0 / 128.0 * audioCanvas2.width);
    audioCanvasCtx2.fillStyle = 'rgb(255,69,0)';
    
    for (var i = 0; i < audioArray.length / 2; ++i) {
        var barHeight2 = audioCanvas2.height * Math.min(audioArray[i], 1);
        audioCanvasCtx2.fillRect(barWidth2 * i * 2 , audioCanvas2.height - barHeight2, barWidth2, barHeight2);
    }

    audioCanvas2.style.transform = "rotate(90deg)";
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    let audioCanvas3         = document.getElementById('AudioCanvas3');
    audioCanvas3.height      = "250";
    audioCanvas3.width       = "250";
    let audioCanvasCtx3      = audioCanvas3.getContext('2d'); 

    audioCanvasCtx3.fillStyle = 'rgb(0,0,0)';
    audioCanvasCtx3.fillRect(0, 0, audioCanvas3.width, audioCanvas3.height);
    var barWidth3 = Math.round(1.0 / 128.0 * audioCanvas3.width);
    audioCanvasCtx3.fillStyle = 'rgb(255,69,0)';
    
    for (var i = 0; i < audioArray.length / 2; ++i) {
        var barHeight3 = audioCanvas3.height * Math.min(audioArray[i], 1);
        audioCanvasCtx3.fillRect(barWidth3 * i * 2 , audioCanvas3.height - barHeight3, barWidth3, barHeight3);
    }

    audioCanvas3.style.transform = "rotate(180deg)";
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    let audioCanvas4         = document.getElementById('AudioCanvas4');
    audioCanvas4.height      = "250";
    audioCanvas4.width       = "250";
    let audioCanvasCtx4      = audioCanvas4.getContext('2d'); 

    audioCanvasCtx4.fillStyle = 'rgb(0,0,0)';
    audioCanvasCtx4.fillRect(0, 0, audioCanvas4.width, audioCanvas4.height);
    var barWidth4 = Math.round(1.0 / 128.0 * audioCanvas4.width);
    audioCanvasCtx4.fillStyle = 'rgb(255,69,0)';
    
    for (var i = 0; i < audioArray.length / 2; ++i) {
        var barHeight4 = audioCanvas4.height * Math.min(audioArray[i], 1);
        audioCanvasCtx4.fillRect(barWidth4 * i * 2 , audioCanvas4.height - barHeight4, barWidth4, barHeight4);
    }

    audioCanvas4.style.transform = "rotate(270deg)";

}

window.wallpaperRegisterAudioListener(wallpaperAudioListener);


//-----------------------------------------------------------------------------------









//-----------------------------------------------------------------------------------
// WE MediaPropertiesListener ( track info )
//-----------------------------------------------------------------------------------
//  Properties of Event
//  * title: String Title of the currently playing media.
//  * artist: String Artist of the currently playing media.
//  * subTitle: String Optional sub title of the currently playing media.
//  * albumTitle: String Optional album title of the currently playing media.
//  * albumArtist: String Optional album artist of the currently playing media.
//  * genres: String Optional comma separated list of genres describing the currently playing media.
//  * contentType: String The type of media, can either be music, video or image.


let trackTitle  = null;
let trackArtist = null;
function wallpaperMediaPropertiesListener(event) {
    trackTitle.textContent = event.title;
    trackArtist.textContent = event.artist;
}
trackTitle  = document.getElementById('trackTitle');
trackArtist = document.getElementById('trackArtist');

window.wallpaperRegisterMediaPropertiesListener(wallpaperMediaPropertiesListener);
//-----------------------------------------------------------------------------------










//-----------------------------------------------------------------------------------
// WE MediaThumbnailListener ( album cover and its colors )
//-----------------------------------------------------------------------------------
//  Properties of Event
//  * thumbnail: String Base64 encoded PNG string of the current album cover.
//  * primaryColor: String Primary color of the thumbnail image.
//  * secondaryColor: String Secondary color of the thumbnail image.
//  * tertiaryColor: String Tertiary color of the thumbnail image.
//  * textColor: String Text color guaranteed to have sufficient contrast with primary color.
//               May be secondary or tertiary color when possible.
//  * highContrastColor: String Black or white, depending on what has higher contrast with the primary color.

let trackAlbumCoverArt = null;

function wallpaperMediaThumbnailListener(event) {
    trackAlbumCoverArt.src = event.thumbnail;
    trackAlbumCoverArt.width = "250";
    trackAlbumCoverArt.height = "250";

    //document.body.style['background-color'] = event.primaryColor;
    trackTitle.style.color = 'white'//event.textColor;
    trackArtist.style.color = 'white'//event.textColor;
}

trackAlbumCoverArt = document.getElementById('trackAlbumCoverArt');

window.wallpaperRegisterMediaThumbnailListener(wallpaperMediaThumbnailListener);
//-----------------------------------------------------------------------------------









//-----------------------------------------------------------------------------------
// WE MediaPlaybackListener ( is the track pLaying right now )
//-----------------------------------------------------------------------------------
//  Properties
//  * state: Number The current state of the media session. This can be one of three values:
//    - window.wallpaperMediaIntegration.PLAYBACK_PLAYING - Media is actively playing on the system.
//    - window.wallpaperMediaIntegration.PLAYBACK_PAUSED - Media was previously playing, but playback was (temporarily) paused by the user.
//    - window.wallpaperMediaIntegration.PLAYBACK_STOPPED - Media playback is completely stopped.

// function wallpaperMediaPlaybackListener(event) {

// }

// window.wallpaperRegisterMediaPlaybackListener(wallpaperMediaPlaybackListener);
//-----------------------------------------------------------------------------------










//-----------------------------------------------------------------------------------
// WE MediaTimelineListener
//-----------------------------------------------------------------------------------
//  Properties
//  * position: Number The current position of the track in seconds.
//  * duration: Number The total duration of the track in seconds.
function wallpaperMediaTimelineListener(event) {

}

window.wallpaperRegisterMediaTimelineListener(wallpaperMediaTimelineListener);