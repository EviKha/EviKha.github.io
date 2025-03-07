/**
 * Скрипт для работы с изображениями для CPA страницы
 * Использует сгенерированные изображения из директории images
 */

document.addEventListener('DOMContentLoaded', function() {
    // Функция для обновления путей к изображениям
    function updateImagePaths() {
        // Обновляем пути к логотипу
        const logoImages = document.querySelectorAll('img[src*="Logo.png"]');
        logoImages.forEach(img => {
            img.src = 'images/Logo.png';
        });
        
        // Обновляем пути к большим изображениям
        const whyUsImage = document.querySelector('img[src*="agency4-home-whyus-people.jpg"]');
        if (whyUsImage) {
            whyUsImage.src = 'images/agency4-home-whyus-people.jpg';
        }
        
        const numbersImage = document.querySelector('img[src*="agency4-home-numbers-image.jpg"]');
        if (numbersImage) {
            numbersImage.src = 'images/agency4-home-numbers-image.jpg';
        }
        
        // Обновляем фоновое изображение слайдера
        const slideBg = document.querySelector('.rev-slidebg');
        if (slideBg) {
            slideBg.src = 'images/agency4-home-splash.jpg';
        }
    }
    
    // Запускаем обновление путей к изображениям
    updateImagePaths();
    
    // Добавляем анимацию для элементов при прокрутке
    function animateOnScroll() {
        const elements = document.querySelectorAll('.offer-box, .testimonial, .stats-counter');
        
        elements.forEach(element => {
            const position = element.getBoundingClientRect();
            
            // Если элемент виден в окне просмотра
            if (position.top < window.innerHeight && position.bottom >= 0) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Инициализация анимации
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Запускаем один раз при загрузке
    
    // Добавляем счетчик для статистики
    const counters = document.querySelectorAll('.stats-counter');
    
    counters.forEach(counter => {
        const target = counter.innerText.replace(/[^\d]/g, '');
        const duration = 2000; // 2 секунды
        const step = 50; // Шаг обновления в мс
        let current = 0;
        const increment = target / (duration / step);
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.innerText = Math.ceil(current) + (counter.innerText.includes('%') ? '%' : '+');
                setTimeout(updateCounter, step);
            } else {
                counter.innerText = counter.innerText;
            }
        };
        
        // Запускаем счетчик, когда элемент становится видимым
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(counter);
    });
});