document.addEventListener('DOMContentLoaded', function () {
    let openModalButton = document.getElementById('openModalButton');
    let modal = document.querySelector('.modal');
    let closeBtn = document.getElementsByClassName('close-footer')[0];

    function openModal() {

        modal.style.display = 'block';
    };

    function closeModal() {
        modal.style.display = 'none';
    }
    if (openModalButton && modal && closeBtn) {
        openModalButton.addEventListener('click', openModal);
        closeBtn.addEventListener('click', closeModal);

    }
});