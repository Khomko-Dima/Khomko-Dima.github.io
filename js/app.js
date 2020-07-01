document.addEventListener("DOMContentLoaded", function() {

	// Custom JS
	"use strict";

	//menu
	const navBurger = document.querySelector('.navBurger');
	const menu = document.querySelector('.menu');

	navBurger.addEventListener('click', (e) => {
		const target = e.target;
		target.classList.toggle('active');
		menu.classList.toggle('active');
		html.classList.toggle('modal-is-locked');		
	});
	function remuvStyle()  {
		if(navBurger.classList.contains('active') && menu.classList.contains('active')) {
			menu.classList.remove('active');
			navBurger.classList.remove('active');
			html.classList.remove('modal-is-locked');
		}
	};


	//map hover
	const shoyMap = document.querySelector('.shou-map'),
		map = document.querySelector('.plase-map');
		
	let mapInit = false;

	const shoyMapF = (e) => {
		const el = e.target.closest('.shou-map');
		if (!mapInit) {
			map.innerHTML = '<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A2e5f91028b0287f93663732767bd4d6855eafd73243b809a359323efd52a6eaa&amp;source=constructor" width="300" height="200" frameborder="0"></iframe>';
		}
		if (el) {
			map.style.display = 'block';
			mapInit = true;
		}
	}
	window.addEventListener('load', (event) => {
		map.innerHTML = '<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A2e5f91028b0287f93663732767bd4d6855eafd73243b809a359323efd52a6eaa&amp;source=constructor" width="300" height="200" frameborder="0"></iframe>';
		mapInit = true;
	});

	shoyMap.addEventListener('mouseover', shoyMapF)
	
	map.addEventListener('mouseout', (e) => {
		const el = e.target.closest('.plase-map');
		if (el) {
			map.style.display = 'none';
		}
	});
	const widthMonitor = document.body.clientWidth;
	if (widthMonitor < 990) {
		shoyMap.removeEventListener('mouseover', shoyMapF);
	}

	//time work
	const timeInfo = document.querySelector('.time-info');
	const time = new Date().getHours();
	if(time >= 9 && time <= 21) {
		timeInfo.innerHTML = '<span>Звоните, мы сейчас работаем</span>';
		timeInfo.classList.remove('not-work');
	} else {
		timeInfo.innerHTML = '<span>В данный момент мы не работаем</span>';
		timeInfo.classList.add('not-work');
		
	}

	//paralax
	const paralax = (e) => {
		this.querySelectorAll('.paralax-item').forEach(layer => {
			let speed = layer.getAttribute('data-speed');
			layer.style.transform = `translate(${event.clientX*speed/1000}px, ${event.clientY*speed/1000}px)`;
		});
	}
	document.addEventListener('mousemove', paralax);
	document.addEventListener('touchmove', paralax);


	//flag
	const maskPhoneBy = () => {
        $("input[name=phone]").mask("+375(99)999-99-99");
    };
    const maskPhoneRu = () => {
        $("input[name=phone]").mask("+7(999)999-9999");
    };
    const maskPhoneUa = () => {
        $("input[name=phone]").mask("+380(999)999-9999");
    };
    maskPhoneBy();

	const flag = document.querySelectorAll('.chose-mask');
	const flagCountry = document.querySelectorAll('.flag');
	const dropdown = document.querySelectorAll('.dropdown');

	const swapFlag = (reg) => {
		flagCountry.forEach(el => {
			el.classList.add(`${reg}`)
		})
	};

	flag.forEach((el, i) => {
		el.addEventListener('click', (e) => {
			dropdown[i].classList.toggle('active');
		})
	})
	
	dropdown.forEach((el, i) => {
		el.addEventListener('click', (e) => {
			const target = e.target.dataset.country;
			flagCountry[i].className = 'flag';
			if (target == 'by') {
				swapFlag('by');
				el.classList.remove('active');
				maskPhoneBy();
			}
			if (target == 'ru') {
				swapFlag('ru');
				el.classList.remove('active');
				maskPhoneRu();
			}
			if (target == 'ua') {
				swapFlag('ua');
				el.classList.remove('active');
				maskPhoneUa();
			}
		})
	});


	const choseSelect = document.querySelector('.chose-select');
	const dropdownSelect = document.querySelector('.dropdown-select');
	const modalFormKvol = document.querySelector('#modal-form__kvol');

	choseSelect.addEventListener('click', (e) => {
		dropdownSelect.classList.toggle('active');
	})
	dropdownSelect.addEventListener('click', (e) => {
		const target = e.target.dataset.country;
		dropdownSelect.classList.remove('active');
		modalFormKvol.value = e.target.textContent;
	})

	//tooltip
	let tooltipElem;
	document.onmouseover = function(event) {
		let target = event.target;
		// если у нас есть подсказка...
		let tooltipHtml = target.dataset.tooltip;
		if (!tooltipHtml) return;

		target.classList.add('active');
		// ...создадим элемент для подсказки
		tooltipElem = document.createElement('div');
		tooltipElem.className = 'tooltip';
		tooltipElem.innerHTML = tooltipHtml;
		document.body.append(tooltipElem);

		// спозиционируем его сверху от аннотируемого элемента (top-center)
		let coords = target.getBoundingClientRect();
		let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
		if (left < 0) left = 0; // не заезжать за левый край окна
		let top = coords.top - tooltipElem.offsetHeight - 5;
		if (top < 0) { // если подсказка не помещается сверху, то отображать её снизу
			top = coords.top + target.offsetHeight + 5;
		}
		tooltipElem.style.left = left + 'px';
		tooltipElem.style.top = top + 'px';
	};

	document.onmouseout = function(event) {
		if (tooltipElem) {
		tooltipElem.remove();
		tooltipElem = null;
		const target = event.target;
		target.classList.remove('active');
		}
	};

	//modal
	const 
            html = document.querySelector('html'),
            overlay = document.querySelector('.modal-overlay'), //оверлей фона
            modalMass = [...(document.querySelectorAll('.modal'))], //все модальные окна
            open_modal = document.querySelectorAll('.open_modal'); //все кнопки вызова модального окна
    let modal = null;
    let modalStatus = false;
    

    const modalStatusFunc = (opt = false) => {
        modalStatus = opt;
        if (!modal) return;
        if (!modalStatus) {
            modal.classList.remove('active');
            overlay.classList.remove('active');
            html.classList.remove('modal-is-locked');
			overlay.removeEventListener('click', closeModal);
			if(modal.classList.contains('modal-cart')) {
				modal.classList.remove('modal-cart');
			}
        } else {
            modal.classList.add('active');
            overlay.classList.add('active');
            html.classList.add('modal-is-locked');
        }
    }

    const closeModal = (e) => { //Закрытие модального окна
        const target = e.target;
        if (target.classList.contains('modal-overlay') || target.closest('.close-modal')) {
            modalStatusFunc();
        }
    };

    const shoyPopup = (modal) => {
        modalStatusFunc(true);
    };

    const creatorPopup = (val) => {
        const opt = val.dataset; //все значения data атрибутов
        const modalContent = modal.querySelector('.modal-content');
        modalContent.querySelector('.modal-title h3').innerHTML = `${opt.header}`;
        modalContent.querySelector('.modal-title h4').innerHTML = `${opt.desc}`;
        modalContent.querySelector('.input-info').innerHTML += `
                                                        <input class="input" 
                                                            name="valToSend" 
                                                            value="${opt.valToSend}" 
															type="hidden">`;
		modalContent.querySelector('.input').innerHTML = opt.input;													
    };

    const openModal = (e) => {
		const target = e.target;
		if(target.classList.contains('open_modal')) { 
			const dataAction = target.dataset.action; // дата атрибут элемента по каторому нажали
			modal = modalMass.filter(el => el.dataset.target == dataAction)[0];// получение модального окна со значением равному data-target
			shoyPopup(modal); // ф. открывает попап.
			if (dataAction === 'first' && !target.dataset.modal) {
				creatorPopup(target);
				modal.classList.add('modal-cart');
			}
			if (dataAction === 'first') {
				creatorPopup(target);
			}
			overlay.addEventListener('click', closeModal);
		}
        
    };

	open_modal.forEach((el) => el.addEventListener('click', openModal));


	//обработка форм
	const form = document.querySelectorAll('form');

	function submitForm (e, form) {
		e.preventDefault();
		const formData = new FormData(form);
		axios({
			method: 'post',
			url: '/submit.php',
			data: formData,
			headers: {"content-type": "multipart/form-data"}
		})
		.then(data => console.log(data.data))
		form.reset();
		modalStatusFunc();
		$('#button_senks').click();
	}

	form.forEach(el => el.addEventListener('submit', (e) => {
		submitForm(e, el);
	}));
	




	
			

});
