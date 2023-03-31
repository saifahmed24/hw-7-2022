//var video;
// this was causing an error because of double definition 

let video = document.querySelector('video');

// load the video (don't play yet)
window.addEventListener("load", function() {
	console.log("Good job opening the window");

	// set autoplay to false
	video.autoplay = false;
	
	// set loop to false 
	video.loop = false;

});

// script for the "play button"
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");

	// play the video 
	video.play();

	// set volume and display it to the user 
	document.querySelector("#volume").innerHTML = String(video.volume *100) 
		
});

// script for the "pause button"
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");

	// allow the user to pause the video 
	video.pause();
	
});

// script for the "mute/unmute button" (below the video)
document.querySelector("#mute").addEventListener("click", function() {
	
	// check if the video is muted 
	if (video.muted == true) {

		// if the video is muted, then unmute it 
		// can we reassign the value like this ? 
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute"
		console.log("Unmuting Video");
	} 
	else {

		// if the video is not muted, then mute it 
		// can we reassign the value like this ? 
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute"
		console.log("Muting Video");
	}
		
});


// script for "slow down" button
document.querySelector("#slower").addEventListener("click", function() {
	
	// set the play rate of the video = 90% of its current rate
	// slow it down by 10% basically 
	// Make sure to avoid rounding errors
	video.playbackRate = Math.round(video.playbackRate * 90) / 100; 
	//video.playbackRate = Math.round(video.playbackRate * 0.90)

	// log the new speed to the console
	console.log("Slowing down Video to " + String(video.playbackRate));
	
});

// script for the "speed up" button
document.querySelector("#faster").addEventListener("click", function() {

	// set the play rate of the video = 110% of the current rate
	// this will fix any slow downs made so the video can return to original speed if the user wants
	// Make sure to avoid rounding errors 
	//video.playbackRate = Math.round(video.playbackRate * 1.10)
	video.playbackRate = Math.round(video.playbackRate * 110) / 100;

	// log the new speed to the console
	console.log("Speeding up Video to " + String(video.playbackRate));
	
});

// add the slider script 
document.querySelector("#slider").addEventListener("input", function() {

	console.log("Adjusting Volume");

	// if slider is moved then the volume level and the displayed volume level are updated 
	video.volume = document.querySelector("#slider").value / 100;
	document.querySelector("#volume").innerHTML = String(video.volume * 100);
	
});

// script for the "skip ahead" button
document.querySelector("#skip").addEventListener("click", function() {

	// if the currentTime plus "a skip" is less than the total length of the video 
	// skip forward 10 seconds 
	if ((video.currentTime + 10) < video.duration) {
		video.currentTime = video.currentTime + 10;
		console.log("Skipping ahead to " + String(video.currentTime));
	} 
	else {
		// else the currentTime is greater than the length of the video, go to the beginning 
		video.currentTime = 0;
		console.log("Skipping ahead to " + String(video.currentTime));
	}
	
});

// script for the "old school" button
document.querySelector("#vintage").addEventListener("click", function() {

	console.log("Using OldSchool Style");

	// add oldschool 
	video.classList.add("oldSchool")

});

// script for the "original" button 
document.querySelector("#orig").addEventListener("click", function() {

	console.log("Using Original Style");

	// remove oldschool, or set to original 
	video.classList.remove("oldSchool")

});


// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

