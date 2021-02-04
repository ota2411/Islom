window.addEventListener('DOMContentLoaded', () => {
	"use strict";

	$(document).ready(function () {
		let tabsItem = $('.tabs-item');
		tabsItem.on('click', function(event){
		  event.preventDefault();
		  let activeContent = $(this).attr('href');
		  $('.visible').toggleClass('visible');
		  $(activeContent).toggleClass('visible');
		  $('.tabs-item-active').toggleClass('tabs-item-active');
		  $(this).toggleClass('tabs-item-active')
		});
	  });

	// let open = document.querySelector('.hamopen'),
	// close = document.querySelector('.hamclose'),
	// menu = document.querySelector('.menu-mobile'),
	// main = document.querySelector('.main'),
	// logo = document.querySelector('.header-img'),
	// header = document.querySelector('.header-logo'),
	// lng = document.querySelector('.header-lng'),
	// link = document.querySelector('.menu');	

	// close.style.display = 'none';
	// lng.style.display = 'none';

	// menu.onclick = function() {
	// 	if (open.style.display == '') {
	// 		open.style.display = 'none';
	// 		close.style.display = '';
	// 		main.style.display = 'none';
	// 		header.classList.add('justify-content-center');
	// 		logo.style.marginTop = '94px';
	// 		logo.style.display = 'flex';
	// 		logo.style.justifyContent = 'center';
	// 		lng.style.display = 'flex';
	// 		link.style.display = 'flex';
	// 	} else {
	// 		open.style.display = '';
	// 		close.style.display = 'none';
	// 		main.style.display = '';
	// 		logo.style.marginTop = '';
	// 		logo.style.display = '';
	// 		logo.style.justifyContent = '';
	// 		logo.style.marginLeft = '';
	// 		lng.style.display = 'none';
	// 		link.style.display = 'none';
	// 	}
	// }

	
});