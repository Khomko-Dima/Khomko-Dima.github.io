window.addEventListener('DOMContentLoaded', function() {

	//tabs
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }

    });

    // Slider

    let slideIndex = 1,
    	sliderGallery = document.querySelector('.gallery'),
        slides = sliderGallery.querySelectorAll('.slider-item'),
        prev = sliderGallery.querySelector('.prev'),
        next = sliderGallery.querySelector('.next'),
        dotsWrap = sliderGallery.querySelector('.slider-dots'),
        dots = sliderGallery.querySelectorAll('.dot');

    let slideIndexPrice = 1,
    	sliderPrice = document.querySelector('.gallery-price'),
        slidesPrice = sliderPrice.querySelectorAll('.slider-item'),
        dotsWrapPrice = sliderPrice.querySelector('.slider-dots'),
        dotsPrice = sliderPrice.querySelectorAll('.dot');

    slider(slideIndex, slides, prev, next, dotsWrap, dots),
    slider(slideIndexPrice, slidesPrice, null, null, dotsWrapPrice, dotsPrice);

    function slider(slideIndex, slides, prev, next, dotsWrap, dots) {
    	showSlides(slideIndex);

	    function showSlides(n) {

	        if (n > slides.length) {
	            slideIndex = 1;
	        }
	        if (n < 1) {
	            slideIndex = slides.length;
	        }

	        slides.forEach((item) => item.style.display = 'none');
	        dots.forEach((item) => item.classList.remove('dot-active'));

	        slides[slideIndex - 1].style.display = 'block';
	        dots[slideIndex - 1].classList.add('dot-active');
	    };

	    function plusSlides(n) {
	        showSlides(slideIndex += n); 
	    };
	    function currentSlide(n) {
	        showSlides(slideIndex = n);
	    };

	    try {
			prev.addEventListener('click', function() {
		        plusSlides(-1);
		    });
		    next.addEventListener('click', function() {
		        plusSlides(1);
		    });
		} catch (err) {
			console.log("У слайдера отстутсвую элементы prev и next");
		}

	    

	    dotsWrap.addEventListener('click', function(event) {
	        for (let i = 0; i < dots.length + 1; i++) {
	            if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
	                currentSlide(i);
	            }
	        }
	    });
    }

    // Calc

    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

    totalValue.innerHTML = 0;

    persons.addEventListener('change', function() {
        personsSum = +this.value;
        total = (daysSum + personsSum)*4000;

        if(restDays.value == '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });

    restDays.addEventListener('change', function() {
        daysSum = +this.value;
        total = (daysSum + personsSum)*4000;

        if(persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });

    place.addEventListener('change', function() {
        if (restDays.value == '' || persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            let a = total;
            totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }
    });

    // Form

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };

    let getInTouchForm = document.getElementById('form'),
    	ChinaForm = document.querySelector('.China-form'),
    	MalaysiaForm = document.querySelector('.Malaysia-form'),
    	JapanForm = document.querySelector('.Japan-form'),
    	SingaporeForm = document.querySelector('.Singapore-form'),
        input = document.getElementsByTagName('input'),
        statusMessage = document.createElement('div');
        statusMessage.classList.add('status');

    function sendForm(elem) {
        elem.addEventListener('submit', function(event) {
            event.preventDefault();
            elem.appendChild(statusMessage);

            let formData = new FormData(elem);
            let obj = {};

            formData.forEach(function(value, key) {
                obj[key] = value;
            });

            let json = JSON.stringify(obj);
            
            function postData(data) {
                return new Promise(function(resolve, reject) {
                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php');
                    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

                    request.onreadystatechange = function() {
                        if (request.readyState < 4) {
                            resolve()
                        } else if (request.readyState === 4 && request.status === 200) {
                            resolve()
                        } else {
                            reject()
                        }
                    };
                    request.send(data);
                })

            }; //postData end

            function clearInput() {
               for(let i = 0; i < input.length;i++) {
                input[i].value = '';
                } 
            };

            postData(json)
                .then(()=> statusMessage.innerHTML = message.loading)
                .then(()=> statusMessage.innerHTML = message.success)
                .catch(()=> statusMessage.innerHTML = message.failer)
                .then(clearInput) 
        });
    }; //sendForm end

    sendForm(getInTouchForm);
    sendForm(ChinaForm);
    sendForm(MalaysiaForm);
    sendForm(JapanForm);
    sendForm(SingaporeForm);

    // Modal

    let more = document.querySelectorAll('.more'),
        overlay = document.querySelectorAll('.overlay'),
        popup = document.querySelector('.popups'),
        prices = document.querySelector('.prices'),
        close = document.querySelectorAll('.popup-close');

    function openPopup(i) {
    	overlay[i].style.display = 'block';
        document.body.style.overflow = 'hidden';
    };
    function closePopup(i) {
    	overlay[i].style.display = 'none';
        document.body.style.overflow = '';
    };

    prices.addEventListener('click', function(event) {
    	let target = event.target;
    	if (target.classList.contains('more')) {
    		for(let i = 0; i < more.length; i++) {
                if (target == more[i]) {
                    openPopup(i);
                    break;
                }
            }
    	}
    });
    popup.addEventListener('click', function(event) {
    	let target = event.target;
    	if (target.classList.contains('popup-close')) {
    		for(let i = 0; i < close.length; i++) {
                if (target == close[i]) {
                    closePopup(i);
                    break;
                }
            }
    	}
    });


	// $(function() {
 //        $(window).scroll(function() { 
 //            if($(this).scrollTop() != 0) {
 //                $('#toTop').fadeIn();
 //            }  
 //            else {
 //                $('#toTop').fadeOut();
 //            }
 //            });
 //        $('#toTop').click(function() {
 //            $('body,html').animate({scrollTop:0},800);
 //        });
 //    });
 });   