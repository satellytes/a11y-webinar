const openModalButton = document.querySelector('#open-modal');
const modalWrapper = document.querySelector('#modal-wrapper');

openModalButton.addEventListener('click', () => {
    modalWrapper.style.visibility = 'visible';
})

const statusIndicator = document.querySelector('#status-indicator');

const disagreeButton = document.querySelector('#disagree-button');
disagreeButton.addEventListener('click', () => {
    statusIndicator.innerHTML = 'Disagreed ❌';
    statusIndicator.style.color = 'rgb(243, 18, 96)';
    modalWrapper.style.visibility = 'hidden';
})

const agreeButton = document.querySelector('#agree-button');
agreeButton.addEventListener('click', () => {
    statusIndicator.innerHTML = 'Agreed ✅';
    statusIndicator.style.color = 'rgb(0,138,48)';
    modalWrapper.style.visibility = 'hidden';
})
