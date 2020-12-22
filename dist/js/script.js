function ibg(){
	let ibg=document.querySelectorAll(".ibg");
		for (var i = 0; i < ibg.length; i++) {
			if(ibg[i].querySelector('img'))	{
				ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
			}
		}
	}

ibg();


let burger 	= document.querySelector('.burger');
let menu	= document.querySelector('.menu__body');

burger.addEventListener('click', active);


function active(event) {
	burger.classList.toggle('burger_active');
	menu.classList.toggle('menu__body_active');
}


let input = document.querySelector('.input');
let subscribe = document.querySelector('.subscribe__btn');

input.onfocus = function() {
	input.classList.add('focus');
	input.removeAttribute('placeholder');
}
input.onblur = function() {
	if(!input.value) {
		input.setAttribute('placeholder', 'enter your email...')
		input.classList.remove('focus');
	}
}

subscribe.onclick = function() {
	if(!input.value) {
		input.classList.add('err');
	}
}