document.addEventListener("DOMContentLoaded", () => {

    let cards = document.querySelectorAll('.card__item')

    cards.forEach((card) => {
        let btn = card.querySelector('.card__btn');
        let cardInfo = card.querySelector('.card__info');

        btn.addEventListener('click', function (event) {
            event.stopPropagation();
            if (!card.classList.contains('booked')) {
                card.classList.add('booked');
                this.textContent = 'Забронировано';
            } else {
                card.classList.remove('booked');
                this.textContent = 'Забронировать';
            }
        });

        card.addEventListener('click', function (e) {
            if (e.target.closest('.card__title') || e.target.closest('.card__info')) return false;

            if (this.classList.contains('booked')) {
                this.classList.remove('booked');
                btn.textContent = 'Забронировать';
            }
        });

        cardInfo.addEventListener('mouseenter', function (e) {
            if (card.classList.contains('booked')) {
                card.classList.add('hovered');
            }
        });

        cardInfo.addEventListener('mouseleave', function (e) {
            if (card.classList.contains('booked')) {
                card.classList.remove('hovered');
            }
        });
    });
});