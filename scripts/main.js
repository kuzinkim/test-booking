document.addEventListener("DOMContentLoaded", () => {

    let cards = document.querySelectorAll('.card')

    cards.forEach((card) => {
        const bookedClassName = "booked";
        const unhoveredClassName = "unhovered";

        const btn = card.querySelector('.card__btn');

        btn.addEventListener('click', function (event) {
            event.stopPropagation();
            if (!card.classList.contains(bookedClassName)) {
                card.classList.add(bookedClassName);
            } else {
                card.classList.remove(bookedClassName);
            }
        });


        card.addEventListener('click', function (e) {
            if (e.target.closest('.card__title') || e.target.closest('.card__info a')) return false;

            if (this.classList.contains(bookedClassName)) {
                this.classList.remove(bookedClassName);
                this.classList.remove(unhoveredClassName);
            }
        });

        if (window.matchMedia("(min-width: 1280px)").matches) {
            card.addEventListener('mouseleave', function (e) {
                if (card.classList.contains(bookedClassName)) {
                    card.classList.add(unhoveredClassName);
                }
            });
        }
    });
});