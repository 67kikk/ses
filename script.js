// Функция для кнопки "Начать полет"
function showAlert() {
   alert("Поехали! Подготовка к запуску завершена.");
}

// Находим кнопку смены темы
const btn = document.getElementById("themeBtn");

btn.onclick = function () {
    document.body.classList.toggle("dark-theme");
}

// Плавная прокрутка по разделам сайта
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
   anchor.addEventListener('click', function(e) {
       e.preventDefault();

       document.querySelector(this.getAttribute('href')).scrollIntoView({
           behavior: 'smooth'
       });
   });
});
