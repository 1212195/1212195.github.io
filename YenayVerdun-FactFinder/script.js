document.querySelector('#a').addEventListener("click",showA);

function showA() {
	document.getElementById('section').innerHTML = "<h1>Koala fingerprints are so close to humans' that they could taint crime scenes.</h1><br><img src='images/koala.jpg' alt='picture of a koala in a tree' id='koala'>Koalas might not seem to have a lot in common with us, but if you were to take a closer look at their hands, you'd see that they have fingerprints that are just like humans'. In fact, they're so similar when it comes to the distinctive loops and arches, that in Australia, 'police feared that criminal investigations may have been hampered by koala prints,' according to Ripley's Believe It or Not. Any koalas who want to commit crimes would be wise to do so wearing gloves.";
}//showA

document.querySelector('#b').addEventListener("click",showB);

function showB() {
	document.getElementById('section').innerHTML = "<h1>Parrots will selflessly help each other out.</h1><img src='images/parrot.jpg' alt='picture of a maccaw' id='parrot'><br>Parrots may be associated with pirates, but it turns out African grey parrots are nothing like the infamously greedy, treasure-seeking criminals. Instead, researchers have discovered that the colorful birds will 'voluntarily help each other obtain food rewards' and perform 'selfless' acts, according to a 2020 study published in Current Biology. Study co-author Auguste von Bayern noted, African grey parrots were intrinsically motivated to help others, even if the other individual was not their friend, so they behaved very 'prosocially.'";
	
}//showB

document.querySelector('#c').addEventListener("click",showC);

function showC() {
	document.getElementById('section').innerHTML = "<h1>Sperm whales in the Caribbean have an accent.</h1><br><img src='images/whale.jpg' alt='picture of a whale's tail as it dives underwater' id='whale'>People who come from different areas around the world tend to speak with inflections, fluctuations, and patterns that are specific to their home regions. Apparently, the same can be said for whales. Researchers from Dalhousie University in Canada and the University of St. Andrews in the UK have found evidence that seems to show whales in the Caribbean have a different 'accent' than whales in other oceans.";
}//showC

document.querySelector('#d').addEventListener("click",showD);

function showD() {
	document.getElementById('section').innerHTML = "<h1>Ducks can surf.</h1><br><img src='images/duck.jpg' alt='picture of a duck on the ocean' id='duck'>Over in New Zealand, surfers have noticed the same thing that those who ride the waves in California have witnessed: ducks can surf. The birds do so in order to catch food or simply to move through the water quickly. Sports reporter Francis Malley spotted a female duck and her babies catching a wave and told the New Zealand Herald, 'The mother was surfing on her belly on the whitewash. I've never surfed with ducks before so this was a first.'";
}//showD

document.querySelector('#e').addEventListener("click",showE);

function showE() {
	document.getElementById('section').innerHTML = "<h1>Dolphins have names for one another.</h1><br><img src='images/dolphin.jpg' alt='picture of a dolphin' id='dolphin'>You already know that dolphins are smart. But did you know that they even have their own names? One 2013 study published in <em>PNAS</em> found that bottlenose dolphins develop specific whistles for one another.";
}//showE

document.querySelector('#sp').addEventListener("click",spring);

function spring(){
	document.querySelector('body').style.backgroundColor = "#C19AA2";
	
	document.querySelector('section').style.backgroundColor = "#E3C9D9";
	document.querySelector('section').style.borderColor = "#413A3B";
	document.querySelector('section').style.color = "#3b0d11";
	
	//menu button
	var mbutton = document.getElementById('menu');
	for(var i = 0; i < 5; i++){
		mbutton[i].style.backgroundColor = "#DAEDBD";
		mbutton[i].style.borderColor = "#697A21";
	}//for

	//theme button
	var tbutton = document.getElementById('theme');
	for(var i = 0; i < 4; i++){
		tbutton[i].style.backgroundColor = "#DAEDBD";
		tbutton[i].style.borderColor = "#697A21";
	}//for

}//spring

document.querySelector('#su').addEventListener("click",summer);

function summer(){
	document.querySelector('body').style.backgroundColor = "#00AFB9";
	
	document.querySelector('section').style.backgroundColor = "#FDFCDC";
	document.querySelector('section').style.borderColor = "#0081A7";
	document.querySelector('section').style.color = "#3b0d11";
	
	var mbutton = document.getElementById('menu');
	for(var i = 0; i < 5; i++){
		mbutton[i].style.backgroundColor = "#FED9B7";
		mbutton[i].style.borderColor = "#F07167";
	}//for
	
	//theme button
	var tbutton = document.getElementById('theme');
	for(var i = 0; i < 4; i++){
		tbutton[i].style.backgroundColor = "#FED9B7";
		tbutton[i].style.borderColor = "#F07167";
	}//for
}//summer

document.querySelector('#f').addEventListener("click",fall);

function fall(){
	document.querySelector('body').style.backgroundColor = "#585123";
	
	document.querySelector('section').style.backgroundColor = "#F1A355";
	document.querySelector('section').style.borderColor = "#3B0D11";
	document.querySelector('section').style.color = "#3b0d11";
	
	var mbutton = document.getElementById('menu');
	for(var i = 0; i < 5; i++){
		mbutton[i].style.backgroundColor = "#eec170";
		mbutton[i].style.borderColor = "#F68A51";
	}//for
	
	//theme button
	var tbutton = document.getElementById('theme');
	for(var i = 0; i < 4; i++){
		tbutton[i].style.backgroundColor = "#eec170";
		tbutton[i].style.borderColor = "#F68A51";
	}//for
}//fall

document.querySelector('#w').addEventListener("click",winter);

function winter(){
	document.querySelector('body').style.backgroundColor = "#96BBBB";
	
	document.querySelector('section').style.backgroundColor = "#618985";
	document.querySelector('section').style.borderColor = "#F2E3BC";
	document.querySelector('section').style.color = "#F2E3BC";
	
	var mbutton = document.getElementById('menu');
	for(var i = 0; i < 5; i++){
		mbutton[i].style.backgroundColor = "#C19875";
		mbutton[i].style.borderColor = "#413A3B";
	}//for
	
	//theme button
	var tbutton = document.getElementById('theme');
	for(var i = 0; i < 4; i++){
		tbutton[i].style.backgroundColor = "#C19875";
		tbutton[i].style.borderColor = "#413A3B";
	}//for
}//winter