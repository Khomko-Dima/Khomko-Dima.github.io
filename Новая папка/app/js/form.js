import axios from 'axios'
import { Target } from './servises/targets';
export default function Form(form, modal) {

	function submitForm(e, form) {
		e.preventDefault();
		const formData = new FormData(form);

		const target = form.querySelector('input[name=target]').value;
        console.log('target: ', target);

		Target(target)

		axios({
			method: 'post',
			url: '/submit.php',
			data: formData,
			headers: {"content-type": "multipart/form-data"}
		}).then(res => {
			if (res.data == 1) {
				// показать сообщение об успешной отправке
				modal.senksModal()
				form.reset();
			} else {
				alert('Извините что-то пошло не так(')
			}
			console.log('res', res);
		}).catch(e => console.log(e));
		
		
	}
	form.forEach(el => el.addEventListener('submit', (e) => {
		if (!e.isTrusted) return false;
		submitForm(e, el);
	}));
}