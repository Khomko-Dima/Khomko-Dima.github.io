export default class Modal {
    constructor() {
        this.html = document.querySelector('html');
        this.overlay = document.querySelector('.modal-overlay');
        this.modalMass = [...(document.querySelectorAll('.modal'))];
        this.modal = null;
        this.modalSpinnerIsShow = false;
    }
    
    handlerClose = (e) => {
        if (e.isTrusted == false) return 
        const target = e.target;
        if (target.classList.contains('modal-overlay') || target.closest('.modal__close')) {
            this.closeModal()
        }
    }

    openModal = () => {
        this.modal.classList.add('active');
        this.overlay.classList.add('active');
        this.html.classList.add('modal-is-locked');
    };

    closeModal = () => {
        if (!this.modal) return;
        this.modal.classList.remove('active');
        this.overlay.classList.remove('active');
        this.html.classList.remove('modal-is-locked');
        this.overlay.removeEventListener('click', this.handlerClose);
        this.modal.classList.remove('success');
    }
    
    senksModal = () => {
        this.closeModal();
        this.modal = this.modalMass.filter(el => el.dataset.modal == 'senks')[0];
        this.openModal();
        try {
            setTimeout(() => {
                this.closeModal();
            }, 2000)
        } catch(e) {console.log(e)}
        
    }

    
    shoyModal = (e) => {
        e.preventDefault();
        const target = e.target;
        if(target.classList.contains('open_modal')) { 
            const dataTarget = target.dataset.target; // дата атрибут элемента по каторому нажали
            this.modal = this.modalMass.filter(el => el.dataset.modal == dataTarget)[0];// получение модального окна со значением равному data-target
            this.openModal();
        // if (dataTarget === 'first') {
            
        // }
            this.overlay.addEventListener('click', this.handlerClose);
        }
    };

}