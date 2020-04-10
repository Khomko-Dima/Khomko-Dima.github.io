document.addEventListener("DOMContentLoaded", function() {

	"use strict";

	const header_container = document.querySelector('#header-container');
	const header_form = document.querySelector('#header-form');
	const marginRight = header_container.offsetLeft;
	header_form.style = `left: ${marginRight+10}px`;

	// Modal
		const 
				html = document.querySelector('html'),
				overlay = document.querySelector('.modal-overlay'), //оврелей фона
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
			const modal_title = modal.querySelector('.modal-title');
			modal_title.textContent = '';
			if (opt.header) {
				modal_title.textContent = opt.header;
			}

			const inputInfo = modal.querySelector('.input-info');
            inputInfo.textContent = '';
            inputInfo.innerHTML = `<input class="input" name="valToSend" value="${opt.valToSend}" type="hidden">
                                    <input name="target" value="${opt.target}" type="hidden">`;
		};

		const openModal = (e) => {
			const target = e.target;
			const dataAction = target.dataset.action; // дата атрибут элемента по каторому нажали
			modal = modalMass.filter(el => el.dataset.target == dataAction)[0];// получение модального окна со значением равному data-target
			shoyPopup(modal); // ф. открывает попап.
			if (dataAction === 'first') {
				creatorPopup(target);
			}
			overlay.addEventListener('click', closeModal);
		};

		open_modal.forEach((el) => el.addEventListener('click', openModal));

	//Карточки описания
		const typesCard = document.querySelectorAll('.types__card');
		const shouCardContent = (e, el) => {
			const target = e.target;
			typesCard.forEach(elem => elem.querySelector('.types__card-option').classList.remove('active'));
			if (target.classList.contains('button-togle') ||  target.classList.contains('span-togle')) {
				const typesCardOption = el.querySelector('.types__card-option');
				typesCardOption.classList.add('active')
			}
		}
		typesCard.forEach(el => el.addEventListener('click', (e) => {
			shouCardContent(e, el);
		}));

	//accardion
		const accardion = document.querySelectorAll('.accardion');
		const openAccardion = (e, el) => {
			const target = e.target;
			accardion.forEach(elem => elem.classList.remove('active'))
			el.classList.add('active');
		};
		accardion.forEach(el => el.addEventListener('click', (e) => {
			openAccardion(e, el);
		}))

		const date = ['10.03', '14.03', '18.03', '22.03', '26.03', '30.03', '07.04', '03.04', '09.04'];
		const config = {
		  type: 'line',
		  data: {
			labels: date,
			datasets: [{
			  label: 'Россия',
			  backgroundColor: 'rgba(0,255,0,0.5)',
			  borderColor: 'rgba(0,255,0,0.5)',
			  data: [
				17, 51, 139, 350, 799, 1761, 3834, 6945, 8029
			  ],
			  fill: false,
			}, {
			  label: 'Испания',
			  fill: false,
			  backgroundColor: '#1a9ebe',
			  borderColor: '#1a9ebe',
			  data: [
				1520, 5605, 13050, 24722, 45178, 63460, 77488, 84689, 85407
			  ],
			}]
		  },
		  options: {
			responsive: true,
			tooltips: {
			  mode: 'index',
			  intersect: false,
			},
			hover: {
			  mode: 'nearest',
			  intersect: true
			},
			scales: {
			  xAxes: [{
				display: true,
				scaleLabel: {
				  display: true,
				  labelString: 'Дни'
				}
			  }],
			  yAxes: [{
				display: true,
				scaleLabel: {
				  display: true,
				  labelString: 'Количество зараженных'
				}
			  }]
			}
		  }
		};
		const ctx = document.getElementById('canvas').getContext('2d');
		window.myLine = new Chart(ctx, config);


});
