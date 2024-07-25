

const carouselSlide = document.getElementById('carousel-slide');
        const carouselItems = document.querySelectorAll('.carousel-item');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        let counter = 0;
        const size = 859; // Width of each slide

        function updateCarousel() {
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }

        nextBtn.addEventListener('click', () => {
            counter = (counter + 1) % carouselItems.length;
            updateCarousel();
        });

        prevBtn.addEventListener('click', () => {
            counter = (counter - 1 + carouselItems.length) % carouselItems.length;
            updateCarousel();
        });

        function autoSlide() {
            counter = (counter + 1) % carouselItems.length;
            updateCarousel();
        }

        setInterval(autoSlide, 5000); // Slide automatically every 5 seconds

        window.onload = updateCarousel;












/************************* */

var msgCookies = document.getElementById("cookies-msg")

function aceito(){

    localStorage.lgpd = "sim"
    msgCookies.classList.remove('mostrar')

}

if (localStorage.lgpd == "sim"){
    msgCookies.classList.remove('mostrar')
}else{
    msgCookies.classList.add('mostrar')
}