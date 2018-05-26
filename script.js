window.onload = init;

function init() {

		var rock = document.getElementById('rock');
		rock.addEventListener('click', callbackRock);

		function callbackRock() {
			var x = 1;
			var y = Math.random();
			alert('Você escolheu PEDRA.');
			verificar(x,y);
		}
	

	
		var paper = document.getElementById('paper');
		paper.addEventListener('click', callbackPaper);

		function callbackPaper() {
			var x = 2;
			var y = Math.random();
			alert('Você escolheu PAPEL.');
			verificar(x,y);
		}
	

	
		var scissors = document.getElementById('scissors');
		scissors.addEventListener('click', callbackScissors);

		function callbackScissors() {
			var x = 3;
			var y = Math.random();
			alert('Você escolheu TESOURA.');
			verificar(x,y);
		}
	

	
		var lizard = document.getElementById('lizard');
		lizard.addEventListener('click', callbackLizard);

		function callbackLizard() {
			var x = 4;
			var y = Math.random();
			alert('Você escolheu LAGARTO.');
			verificar(x,y);
		}
	

	
		var spock = document.getElementById('spock');
		spock.addEventListener('click', callbackSpock);

		function callbackSpock() {
			var x = 5;
			var y = Math.random();
			alert('Você escolheu SPOCK.');
			verificar(x,y);
		}
	
}
 
function verificar(x,y) {
	var vit = document.getElementById('numvit');
	var vitoria = parseInt(vit.innerHTML);
	var der = document.getElementById('numder');
	var derrota = parseInt(der.innerHTML);

	if(x=="1") {
		if(y<0.2) {
			alert("O computador escolheu PEDRA.");
			alert("Você escolheu PEDRA e empatou com PEDRA.");
			wl.src="neutro.png";}
		else if(y<0.4) {
			alert("O computador escolheu PAPEL.");
			alert("Você escolheu PEDRA e perdeu para PAPEL.");
			perdeu (derrota);
			wl.src="lose.png";}
		else if(y<0.6) {
			alert("O computador escolheu TESOURA.");
			alert("Você escolheu PEDRA e ganhou de TESOURA.");
			ganhou (vitoria);
			wl.src="win.png";}
		else if(y<0.8) {
			alert("O computador escolheu LAGARTO.");
			alert("Você escolheu PEDRA e ganhou de LAGARTO.");
			ganhou (vitoria);
			wl.src="win.png";}
		else {
			alert("O computador escolheu SPOCK.");
			alert("Você escolheu PEDRA e perdeu para SPOCK.");
			perdeu (derrota);
			wl.src="lose.png";}
	} else

	if(x=="2") {
		if(y<0.2) {
			alert("O computador escolheu PEDRA.");
			alert("Você escolheu PAPEL e ganhou de PEDRA.");
			ganhou (vitoria);
			wl.src="win.png";}
		else if(y<0.4) {
			alert("O computador escolheu PAPEL.");
			alert("Você escolheu PAPEL e empatou com PAPEL.");
			wl.src="neutro.png";}
		else if(y<0.6) {
			alert("O computador escolheu TESOURA.");
			alert("Você escolheu PAPEL e perdeu para TESOURA.");
			perdeu (derrota);
			wl.src="lose.png";}
		else if(y<0.8) {
			alert("O computador escolheu LAGARTO.");
			alert("Você escolheu PAPEL e perdeu para LAGARTO.");
			perdeu (derrota);
			wl.src="lose.png";}
		else {
			alert("O computador escolheu SPOCK.");
			alert("Você escolheu PAPEL e ganhou de SPOCK.");
			ganhou (vitoria);
			wl.src="win.png";}
	} else

	if(x=="3") {
		if(y<0.2) {
			alert("O computador escolheu PEDRA.");
			alert("Você escolheu TESOURA e perdeu para PEDRA.");
			perdeu (derrota);
			wl.src="lose.png";}
		else if(y<0.4) {
			alert("O computador escolheu PAPEL.");
			alert("Você escolheu TESOURA e ganhou de PAPEL.");
			ganhou (vitoria);
			wl.src="win.png";}
		else if(y<0.6) {
			alert("O computador escolheu TESOURA.");
			alert("Você escolheu TESOURA e empatou com TESOURA.");
			wl.src="neutro.png";}
		else if(y<0.8) {
			alert("O computador escolheu LAGARTO.");
			alert("Você escolheu TESOURA e ganhou de LAGARTO.");
			ganhou (vitoria);
			wl.src="win.png";}
		else {
			alert("O computador escolheu SPOCK.");
			alert("Você escolheu TESOURA e perdeu para SPOCK.");
			perdeu (derrota);
			wl.src="lose.png";}
	} else 

	if(x=="4") {
		if(y<0.2) {
			alert("O computador escolheu PEDRA.");
			alert("Você escolheu LAGARTO e perdeu para PEDRA.");
			perdeu (derrota);
			wl.src="lose.png";}
		else if(y<0.4) {
			alert("O computador escolheu PAPEL.");
			alert("Você escolheu LAGARTO e ganhou de PAPEL.");
			ganhou (vitoria);
			wl.src="win.png";}
		else if(y<0.6) {
			alert("O computador escolheu TESOURA.");
			alert("Você escolheu LAGARTO e perdeu para TESOURA.");
			perdeu (derrota);
			wl.src="lose.png";}
		else if(y<0.8) {
			alert("O computador escolheu LAGARTO.");
			alert("Você escolheu LAGARTO e empatou com LAGARTO.");
			wl.src="neutro.png";}
		else {
			alert("O computador escolheu SPOCK.");
			alert("Você escolheu LAGARTO e ganhou de SPOCK.");
			ganhou (vitoria);
			wl.src="win.png";}
	} else 

	if(x=="5") {
		if(y<0.2) {
			alert("O computador escolheu PEDRA.");
			alert("Você escolheu SPOCK e ganhou de PEDRA.");
			ganhou (vitoria);
			wl.src="win.png";}
		else if(y<0.4) {
			alert("O computador escolheu PAPEL.");
			alert("Você escolheu SPOCK e perdeu para PAPEL.");
			perdeu (derrota);
			wl.src="lose.png";}
		else if(y<0.6) {
			alert("O computador escolheu TESOURA.");
			alert("Você escolheu SPOCK e ganhou de TESOURA.");
			ganhou (vitoria);
			wl.src="win.png";}
		else if(y<0.8) {
			alert("O computador escolheu LAGARTO.");
			alert("Você escolheu SPOCK e perdeu para LAGARTO.");
			perdeu (derrota);
			wl.src="lose.png";}
		else {
			alert("O computador escolheu SPOCK.");
			alert("Você escolheu SPOCK e empatou com SPOCK.");
			wl.src="neutro.png";}
	}
}
function perdeu(derrota){
	derrota = derrota + 1;
	document.getElementById('numder').innerHTML = derrota;
}
function ganhou(vitoria){
	vitoria = vitoria + 1;
	document.getElementById('numvit').innerHTML = vitoria;
}

