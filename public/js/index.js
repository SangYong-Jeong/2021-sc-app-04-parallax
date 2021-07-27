window.addEventListener('scroll', function(e) {
	var sct = this.scrollY;
	if(sct > 100) {
		document.querySelector('.header-wrapper').classList.add('active');
	}
	else {
		document.querySelector('.header-wrapper').classList.remove('active');
	}
})