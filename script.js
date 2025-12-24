// Скрытие прелоадера при загрузке страницы
document.addEventListener('DOMContentLoaded', function () {
    const pageloader = document.querySelector('.pageloader');
    if (pageloader) {
        pageloader.style.display = 'none';
        pageloader.style.visibility = 'hidden';
        pageloader.style.opacity = '0';
    }
});

// Скрытие прелоадера сразу при загрузке скрипта
(function () {
    const pageloader = document.querySelector('.pageloader');
    if (pageloader) {
        pageloader.style.display = 'none';
        pageloader.style.visibility = 'hidden';
        pageloader.style.opacity = '0';
    }
})();

