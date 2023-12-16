'use strict'
// burger bar

let navigationElement = document.getElementById ("navBar");
let burgerElement = document.getElementById ("burgerBar");
let ulElement = document.getElementById('ulBar')

burgerElement.addEventListener('click', function() {
    // navigationElement.classList.add('navActive');-damateba
    burgerElement.classList.toggle('activeBurger');
    // navigationElement.classList.toggle('navActive');
    ulElement.classList.toggle('activeNew');
})
// Slider
let slideIndex = 1;
/* Вызываем функцию, которая реализована ниже: */
showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextSlide() {
    showSlides(slideIndex += 1);
}

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function previousSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливаем текущий слайд: */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Функция перелистывания: */
function showSlides(n) {
    /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
    let slides = document.getElementsByClassName("item");
    
    /* Проверяем количество слайдов: */
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
  
    /* Проходим по каждому слайду в цикле for: */
    for (let slide of slides) {
        slide.style.display = "none";
    }
    /* Делаем элемент блочным: */
    slides[slideIndex - 1].style.display = "block";    
}







//Accordion
// let accordionContainers = document.querySelectorAll( ".accordion");
//  for (let i = 0; i < accordionContainers.length; i++) {
//     const element = accordionContainers[i];

//     element.addEventListener('click', function(){
//     this.classList.toggle('activeNew');
//     })
    
//  }


// for (let item of accordionContainers) {
//     item.addEventListener('click', function(){
//     classList.toggle('activeNew');
//     })
    
// }



// accordionContainer.forEach(function (x)) {
//     x.addEventListener('click', function(){
//         classList.toggle('activeNew');
//     })
// }
    
document.addEventListener("DOMContentLoaded", function() {
    var headers = document.querySelectorAll(".header");
    
    headers.forEach(function(header) {
        header.addEventListener("click", function() {
            var content = this.nextElementSibling;
            content.style.display = (content.style.display === "none") ? "block" : "none";
        });
    });
});