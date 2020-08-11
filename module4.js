(function{
 	var names=["Anaha","Basa,"Citos","Delasis","Elephan","Jamaka"]
 	for (i=0;i<names.length();i++){
 	if(names[i].charAt(0)=="j" || "J"){
 		byeSpeaker.speak(names[i]);
 	else
 		helloSpeaker.speak(names[i]);


 	}
 	})()