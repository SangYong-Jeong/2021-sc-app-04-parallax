window.addEventListener('scroll', function(e) {
	var sct = this.scrollY;
	if(sct > 100) {
		document.querySelector('.header-wrapper').style.transform = 'translateY(-100%)';
		this.setTimeout(function() {
			document.querySelector('.header-wrapper').style.transform = 'translateY(0)';
			document.querySelector('.header-wrapper').classList.add('active');
		}, 50)
	}
	else {
		document.querySelector('.header-wrapper').classList.remove('active');
	}
})