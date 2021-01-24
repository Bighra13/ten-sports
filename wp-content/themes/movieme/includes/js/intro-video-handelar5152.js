
/* 07 - Video container (You Tube)
-----------------------------------------------------------*/

var tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
function onYouTubePlayerAPIReady() {
  player = new YT.Player('player', {
	height: '100%',
	width: '100%',			
	playerVars: { 'rel':0 , 'autoplay': 1, 'loop':1, 'controls':0, 'start':34, 'autohide':1,'wmode':'opaque', 'hd':1 },
	videoId: jQuery('#player').data('video-id'),
	events: {
	  'onReady': onPlayerReady,
	  'onStateChange': onPlayerStateChange}
  });
}
// bind events
function onPlayerReady(event) {
event.target.setVolume(60);
player.pauseVideo();
jQuery('.video-container #player').css('display', 'none');



var playButton = document.getElementById("play-button");
playButton.addEventListener("click", function() {
  player.playVideo();
});

var pauseButton = document.getElementById("pause-button");
pauseButton.addEventListener("click", function() {
  player.pauseVideo();
});
}


function onPlayerStateChange(event) {        
	if(event.data === 0) {          
		event.target.playVideo();
	}
}