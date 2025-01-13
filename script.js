const openModalButton = document.querySelector('.open-modal');
const modalWrapper = document.querySelector('.modal-wrapper');

openModalButton.addEventListener('click', () => {
    modalWrapper.classList.add('modal-wrapper--show');
})

const statusIndicator = document.querySelector('.status-indicator');

const disagreeButton = document.querySelector('.disagree-button');
disagreeButton.addEventListener('click', () => {
    statusIndicator.innerHTML = 'Disagreed ❌';
    statusIndicator.style.color = 'rgb(243, 18, 96)';
    modalWrapper.classList.remove('modal-wrapper--show');
})

const agreeButton = document.querySelector('.agree-button');
agreeButton.addEventListener('click', () => {
    statusIndicator.innerHTML = 'Agreed ✅';
    statusIndicator.style.color = 'rgb(0,138,48)';
    modalWrapper.classList.remove('modal-wrapper--show');
})
