(function(window)
	var hellospeaker=new object();
	var word="Hello";
	hellospeaker.speak=function speak(name){
		console.log(word +" "+ name);
	};
	window.hellospeaker=hellospeaker;
	)(window);